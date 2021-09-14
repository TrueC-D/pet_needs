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
        # need to change controller to receive params differently.  if species is within labeled type of species, appropriate need selections need to be created w/validations.
        user = User.find_by(id: params[:user_id])
        if user && !(Pet.find_by(name: params[:name]))
            # need to create params[:type]
            # if params[:type] == 
            species = params[:species].capitalize
            # may need to validate species
            case params[:type]
            when "Dog"
                create_pet("Dog")
                # method for needselects dog
                # rather than have the need select method in the pets model, i think it would be good to have it in the need selects model and call it from here
            when "Cat"
                create_pet("Cat")
                # method for needselects cat
            when "AquaticSpecies"
                create_pet(species)
                # method for needselects aqua speicies
            when "LandAnimal"
                create_pet(species)
                # method for needselects land animal
            when "PetWithCoat"
                create_pet(species)
            when "Other"
                create_pet(species)
            else 
                # should be else when nil
                # return error
            end



            # pet = Pet.create(name: params[:name], species: params[:species], birthday: params[:birthday], user_id: params[:user_id])
            # render json: PetSerializer.new(pet)
        end
    end

    def destroy
        render json: Pet.find_by(id: params[:id]).destroy
    end

    private 

    def create_pet(species, need_sel_method)
        pet = Pet.create(name: params[:name], species: species, birthday: params[:birthday], user_id: params[:user_id])
        # separate create & save methods, make sure it saved after validations
        # 
        # render json: PetSerializer.new(pet)

    end
end
