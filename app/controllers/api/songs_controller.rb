class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:comments, :user).order("RANDOM()")
    render 'api/songs/index'
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
