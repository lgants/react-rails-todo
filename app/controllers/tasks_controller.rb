class TasksController < ApplicationController
  before_action :set_task, only: [:destroy]
  before_action :set_list, only: [:create]

  # POST /tasks
  def create
    @task = Task.new(task_params)
    @task.list_id = @list.id

    if @task.save
      render json: {task: @task, status: 201}, location: @task
    else
      render json: {errors: @task.errors, status: 400}
    end
  end

  # DELETE /tasks/1
  def destroy
    task_id = @task.id
    if @task.destroy
      render json: {task: {id: task_id}, status: 200}
    else
      render json: {errors: @task.errors, status: 400}
    end
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def set_list
      @list = params[:list_id] ? List.find(params[:list_id]) : List.create!
    end

    def task_params
      params.require(:task).permit(:list_id, :title, :description, :deadline, :complete)
    end
end
