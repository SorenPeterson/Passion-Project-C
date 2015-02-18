# No use
get '/users' do
end

get '/users/logout' do
  auth_sign_out
  redirect '/'
end

# Display a users homepage
get '/users/:id' do
  @user = User.find_by(id: params[:id])
  if @user
    erb :'users/userpage'
  else
    erb :'users/nosuchuser'
  end
end

# Form to create a new user
get '/users/new' do
end

# Create a new user
post '/users' do
end

# Update User Info
get '/users/:id/edit' do
end
