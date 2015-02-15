get '/' do
  redirect_user
  erb :login
end

# get '/debug' do
#     session.inspect
# end

# --- USER AUTH & SESSIONS --- #
get '/register' do
  redirect_user
  erb :register
end

post '/register' do
  @user = User.new(name: params[:name], username: params[:username], password: params[:encrypted_password])
  if @user.valid?
    @user.save
    id = @user.id
    redirect "/home/users/#{id}"
  else
    @invalid_error = @user.errors.full_messages.join(" ")
    erb :register
  end
end

# LOGIN
post '/sessions' do
  p params
  @user = User.find_by(username: params[:username])
  if @user && @user.password == params[:encrypted_password]
    #user_login(@user)
    @user.to_json
  else 
    @login_error = 'Username or Password is incorrect'
    erb :login
  end
end

get '/logout' do
  logout
end

# Homepage
get '/home/users/:id' do
  @user = User.find(params[:id])
  if @user.notes.blank?
    redirect "/notebook/users/#{@user.id}/new"
  else
    @main = @user.notes.first
    @main_id = @user.notes.first.id
  end
  erb :home
end


# SHOW NOTE
get '/users/:id/notebook' do
  @start = session[:start].to_i
  @user = User.find(params[:id])
  @notes = Note.find_by(user_id: @user.id)
  @notes1 = @user.notes.first
  @notes2 = @user.notes[1]
  @notes3 = @user.notes[2]

  erb :notebook
end



# CREATE NOTE
get '/users/:id/notebook/new' do
  @user = User.find(params[:id])
  erb :create
end

post '/users/:id/notebook/new' do
  @user = User.find(params[:id])
  @notes = Note.create(title: params["title"], description: params["description"], content: params["content"], user_id: @user.id)
  @notes.to_json
end


# PAGE LEFT
get '/users/:id/notebook/:note_id/left' do
  @user = User.find(params[:id])
  @start = session[:start] 
  @start += 1
  redirect "/users/#{@user.id}/notebook"
end

# PAGE RIGHT
get '/users/:id/notebook/:note_id/right' do
  @user = User.find(params[:id])
  @start = session[:start] 
  @start -= 1
  redirect "/users/#{@user.id}/notebook"
end

# EDIT NOTE
# get '/users/:id/notebook/:note_id/edit' do
#   @user = User.find(params[:id])
#   @notes = Note.find_by(id: params[:note_id])
#   erb :'note'
# end

put '/users/:id/notebook/:note_id/edit' do
  @user = User.find(params[:id])
  @notes = Note.find_by(id: params[:note_id]).update_attributes(title: params[:title], description: params[:description],content: params[:content])
  @notes.to_json
end


# DELETE NOTE
delete "/users/:id/notebook/:note_id/delete" do
  @user = User.find(params[:id])
  @note = Note.find(params[:note_id])
  @note.destroy
end

# delete "/users/:id/notebook/:note_id/delete" do
#   @user = User.find(params[:id])
#   @note = Note.find(params[:note_id])
#   redirect "notebook/#{@user.id}" 
# end

# # User
# get '/users/:id' do
#   @user = User.find(params[:id])
#   @notes = @user.notes
#   erb :'profile'
# end

# get '/users/:id/edit' do
#   erb :'user/edit'
# end

# post '/users/:id/edit' do
#   @edited_user = User.update(params[:user])
#   redirect "/users/#{@edited_user.id}"
# end


# get '/users/:id/timeline' do
#   erb :timeline
# end
