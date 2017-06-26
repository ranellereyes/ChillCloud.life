class Api::SongsController < ApplicationController
  def index
    if params[:search]
      query = "%#{params[:search]}%".downcase
      @users = User.where("lower(username) LIKE ?", query).limit(4)
      remaining_slots = 10 - @users.length
      @songs = Song.where("lower(title) LIKE ?", query).limit(remaining_slots)
      render 'api/songs/search'
    else
      @songs = Song.all.includes(:comments, :user).order("RANDOM()")
      render 'api/songs/index'
    end
  end

  def show
    @song = Song.find_by(id: params[:id])
    render 'api/songs/show'
  end

  def update
    @song = Song.find_by(id: params[:id])

    if @song.update_attributes(song_params)
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def create
    @song = Song.new(song_params)

    if @song.save
			render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

	def destroy
		@song = Song.find(params[:id])
    @song.destroy
	end

  private

  def song_params
    params.require(:song).permit(
      :id, :title, :user_id, :image_url, :genre, :source
    )
  end
end
