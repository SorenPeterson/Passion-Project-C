post '/links/create' do
  content_type :json

  new_link = Link.create(link: params[:link])

  if new_link.persisted?
    current_user.links << new_link
    Category.find(params[:category]).links << new_link
  else
    status 400
  end
end

post '/links/associate' do
end
