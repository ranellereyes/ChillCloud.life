class Api::UsersController < ApplicationController
  def index
    @users = User.order("RANDOM()").limit(3)
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(update_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  private

  def update_params
    params.require(:user).permit(:username, :image)
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
