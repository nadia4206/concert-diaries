class ArtistsController < ApplicationController

    def index
        artists = Artist.all
        render json: artists, status: :ok
    end

    def show
        artist = find_artist
        render json: artist, status: :ok
    end

    def create
        artist = Artist.create!(artist_params)
        render json: artist, status: :created
    end

    private

    def find_artist
        Artist.find(params[:id])
    end

    def artist_params
        params.permit(:artist_name, :genre, :artist_image)
    end

end
