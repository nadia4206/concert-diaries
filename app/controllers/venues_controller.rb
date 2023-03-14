class VenuesController < ApplicationController

    def index
        venues = Venue.all
        render json: venues, status: :ok
    end

    def show
        venue = find_venue
        render json: venue, status: :ok
    end

    def create
        venue = Venue.create!(venue_params)
        render json: venue, status: :created
    end

    private

    def find_venue
        Venue.find(params[:id])
    end

    def venue_params
        params.permit(:venue_name, :venue_city, :venue_state, :venue_image)
    end

end
