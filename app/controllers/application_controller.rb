class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_message

    before_action :authorized_user

    def current_user
        user = User.find_by(id: session[:user_id])
        user
    end

    def authorized_user
        render json: {errors: "Not Authorized"}, status: :unauthorized unless current_user
    end

    private

    def render_not_found_response(error)
        render json: {error: error.message}, status: :not_found
    end

    def record_invalid_message(error)
        render json: {error: error.message}, status: 422
    end

end
