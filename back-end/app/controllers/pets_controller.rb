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
        render json: PetSerializer.new(pet)
        options = {include: [:needs]}
        render json: PetSerializer.new(pet, options)
    end

    def create
        user = User.find_by(id: params[:user])
        if user && !(Pet.find_by(name: params[:pet_name]))
            pet = Pet.create(name: pet_name, species: species, birthday: birthday, user_id: user.id)
            options = {include: [:user]}
            is this the correct way to write it?
            render json: PetSerializer.new(pet, options)
        end
    end

    def destroy
        render json: Pet.find_by(id: params[:id]).destroy
    end
end
