class Api::V1::TrainingsController < Api::V1::BaseController
  def index
    @trainings = Training.all
    render json: @trainings
  end

  def show
  end

  def create
    @training = Training.create(post_params)
    render json:@training
  end

  private

  def training_params
    params.require(:training).permit(:date, :time, :puzzles, :points, :comments)
  end
end
