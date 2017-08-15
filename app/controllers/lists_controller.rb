class ListsController < ApplicationController
  # POST /lists
  def create
    @list = List.new()

    if @list.save
      render json: { list: @list, status: 201 }
    else
      render json: { errors: @list.errors, status: 400 }
    end
  end
end
