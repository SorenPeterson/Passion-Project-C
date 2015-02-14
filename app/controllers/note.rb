# SHOW NOTE
get '/users/:id/notebook' do
  @start = session[:start].to_i
  @user = User.find(params[:id])
  @notes = Note.where(user_id: @user.id)
  @notes1 = @notes.first
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