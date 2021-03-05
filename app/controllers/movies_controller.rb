class MoviesController < ApplicationController

  def app
    render component: 'App'
end


def index
  @movies= Movies.order

  render json: @movies
end
end