post '/categories' do
  content_type :json

  new_category = Category.create(name: params[:name])

  if new_category.persisted?
    current_user.categories << new_category
    return {
      id: new_category.id
    }.to_json
  else
    status 400
  end
end

post '/categories/delete' do
  category =  Category.find(params[:id])
  category.links.delete_all
  category.delete
end