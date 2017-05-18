class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render 'api/songs/index'
  end

  def show
    @song = Song.find_by(id: params[:id])
    render 'api/songs/show'
  end

  def edit
    @song = Song.find_by(id: params[:id])

    if @song.update_attributes
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
		@song = Song.find_by(id: params[:id])
		if @song
      @song.destroy
			render "api/users/show"
		else
			render(
        json: ["Song not found in database"],
        status: 404
      )
		end
	end

  private

  def song_params
    params.require(:song).permit(
      :id, :title, :user_id, :image_url, :genre, :source
    )
  end
end
