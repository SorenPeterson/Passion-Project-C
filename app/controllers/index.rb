get '/' do
  erb :index
end

get '/oauth2callback' do
  auth_process_code params[:code]
  redirect "/users/#{current_user.id}"
end