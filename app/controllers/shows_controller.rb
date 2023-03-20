class ShowsController < ApplicationController

    def index
        shows = Show.all
        render json: shows, status: :ok
    end

    def show
        show = find_show
        render json: show, status: :ok
    end

    def create
        show = Show.create!(show_params)
        render json: show, status: :created
    end

    def update
        show = find_show
        show.update!(show_params)
        render json: show, status: :accepted
    end

    def destroy
        show = find_show
        show.destroy
        head :no_content
    end

    private

    def find_show
        Show.find(params[:id])
    end

    def show_params
        params.permit(:user_id, :artist_id, :venue_id, :show_date, :highlight, :image_url)
    end

end
