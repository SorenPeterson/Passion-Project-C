post '/links/create' do
  content_type :json

  doc = Pismo::Document.new(params[:link])

  new_link = Link.create(link: params[:link], title: doc.title)

  if new_link.persisted?
    current_user.links << new_link
    Category.find(params[:category]).links << new_link
    return {
      id: new_link.id
    }.to_json
  else
    status 400
  end
end

post '/links/delete' do
  Link.find(params[:id]).delete
end

post '/links/associate' do
end
