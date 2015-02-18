get '/' do
  if auth_user_info
    erb :index
  else
    erb :welcome
  end
end

get '/oauth2callback' do
  auth_process_code params[:code]
  redirect "/"
end