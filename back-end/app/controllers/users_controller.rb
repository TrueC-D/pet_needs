class UsersController < ApplicationController
    def index
        users = User.all
    end

    def show 
        user = User.find_by(id: params[:id])
    end

    def create
        if !User.find_by(name: params[:username])
            user = User.create(name: params[:username])
        end       
    end

    def destroy
        render json: User.find_by(id: params[:id]).destroy
    end
    # user is initialized with a name
    # index page to select a user
    # on the index page you should be able to create a new user
    # show page to see user's pets & needs
    # should be able to delete the user via the show page which will redirect to the index ()
    # on the show you should be able to add a pet and remove a pet, creating the name and species
end

