# # USER PROFILE
# get '/profile/:username' do
#   # @user = User.find(params[:id])
#   # @user = session[:user_id]
#   @user = User.find_by(username: params[:username])
#   @user_tweets = @user.tweets.all
#   erb :profile
# end