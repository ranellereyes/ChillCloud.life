class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      @song = @comment.song
      render "api/songs/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @song = @comment.song
    render "api/songs/show"
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :song_id, :user_id, :body)
  end
end
