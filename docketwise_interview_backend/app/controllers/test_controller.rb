class TestController < ApplicationController

  def index
    render json: { message: 'Hello from rails' }
  end

end
