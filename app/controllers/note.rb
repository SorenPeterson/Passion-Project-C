get '/notebook/:id' do
  # if current_user
  @user = User.find_by(id: params[:id])
  @notes = Note.all
  erb :newsfeed
end

# post '/note/:id' do
#   @user_id = session[:user_id]
#   @content = params[:content]
#   @note = Notes.create(user_id: @user_id, content: @content)

#   redirect "/users/#{@user_id}"
# end

# bring the id
# parse data into json
# title, description, content
# 
# post '/note/:id' do
#   @id = params[:id]
#   @content = params[:content]
#   @title = params[:title]
#   @description = params[:description]
#   content_type: :json
#   { :id => "#{@id}",
#     :content => "#{@content}",
#     :title => "#{@title}",
#     :description => "#{@description}" }.to_json
#   erb :note
# end

delete 'note/:note_id' do
  @note_id = params[:note_id]
  @note = Notes.find(@note_id)
  @note.destroy

  @user_id  = session[:user_id]
  redirect "/users/#{@user_id}"
end