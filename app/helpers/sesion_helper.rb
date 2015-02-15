helpers do
  def user_login(user)
    session[:id] = user.id
    session[:start] = 0
    redirect "/home/users/#{user.id}" if current_user
  end

  def redirect_user
    redirect "/home/users/#{@current_user.id}" if current_user
  end

  def authenticate?(user)
    candidate = User.find_by(:email => email)

    unless candidate.blank?

      if candidate.password_hash.blank?
        # Use Unsafe Old Password
        current_user candidate if candidate.read_attribute(:password) == password
      else
        # Use BCrypt Override
        set_current_user candidate if candidate.password == password
      end
    else
      false
    end
  end

  def logged_in?(user)
    @current_user.nil?
  end

  def logout
    session.clear
    redirect '/'
  end

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end
end