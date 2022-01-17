class EntitiesController < ApplicationController
  
  def index
    render json: Entity.all
  end

end