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
        if User.find_by(name: 'params[:name]')
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
        render json: User.find_by(id: params[:id]).destroy
    end
    # user is initialized with a name
    # index page to select a user
    # on the index page you should be able to create a new user
    # show page to see user's pets & needs
    # should be able to delete the user via the show page which will redirect to the index ()
    # on the show you should be able to add a pet and remove a pet, creating the name and species
end

