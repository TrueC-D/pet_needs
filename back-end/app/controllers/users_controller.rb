class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show 
        user = User.find_by(id: params[:id])
        options = {include: [:pets]}
        render json: UserSerializer.new(user, options)
        # should show all pets and needs under each pet
        # needs should be ordered by soonest (stretch goal)
    end

    def create
        if User.find_by(name: params[:name])
            'username is already taken'
        elsif params[:name].strip == ''
           'must input username before submitting'
        else
            user = User.create(name: params[:name])
            render json: UserSerializer.new(user)
        end
    end

    def destroy
         # stretch goal: edit this so that it will remove all the pets and needs as well when the user is deleted (don't want to clutter database)
        render json: User.find(params[:id]).destroy
    end
end