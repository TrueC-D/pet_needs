class PetsController < ApplicationController
    # pet show page should allow a person to create a need and/or a need selection
    # should be able to create or delete a pet
    def index
        # might not need index
        pets = Pet.all
        render json: PetSerializer.new(pets)

    end
    def show
        pet = Pet.find_by(id: params[:id])
        options = {include: [:need_selections]}
        render json: PetSerializer.new(pet, options)
    end

    def create
        user = User.find_by(id: params[:user_id])
        if user && !(Pet.find_by(name: params[:name]))
            pet = Pet.create(name: params[:name], species: params[:species], birthday: params[:birthday], user_id: params[:user_id])
            render json: PetSerializer.new(pet)
        end
    end

    def destroy
        render json: Pet.find_by(id: params[:id]).destroy
    end
end
