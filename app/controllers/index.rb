get '/' do
  if auth_user_info
    erb :index
  else
    erb :welcome
  end
end

get '/items' do
  content_type :json
  categories = current_user.categories.to_a
  items = categories.map do |category|
    links = category.links.to_a
    links = links.map do |link|
      {
        link: link.link,
        id: link.id
      }
    end
    {
      name: category.name,
      id: category.id,
      items: links
    }
  end
  items.to_json
end

get '/oauth2callback' do
  auth_process_code params[:code]
  redirect "/"
end