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
                pet = create_pet("Dog")
                init_need_sels(Pet.dog)
            when "Cat"
                pet = create_pet("Cat")
                init_need_sels(Pet.cat) 
                # method for needselects cat
            when "Aquatic Species"
                pet = create_pet(species) 
                init_need_sels(Pet.aquatic_species)
                # method for needselects aqua speicies
            when "Requires a Terrarium"
                pet = create_pet(species)
                init_need_sels(Pet.needs_terrarium)
            when "Land Animal"
                pet = create_pet(species)
                init_need_sels(Pet.land_animal)
                # method for needselects land animal
            when "Pet With A Coat"
                pet = create_pet(species)
                init_need_sels(Pet.pet_with_coat)
            when "Other"
                pet = create_pet(species)
                init_need_sels(Pet.a_pet)
            else 
                # should be else when nil
                # return error
            end

            render json: PetSerializer.new(pet)
        end
    end

    def destroy
        render json: Pet.find_by(id: params[:id]).destroy
    end

    private 

    def create_pet(species, need_sel_method)
        pet = Pet.new(name: params[:name], species: species, birthday: params[:birthday], user_id: params[:user_id])
        if pet.valid?
            pet.save
        end
        return pet

        # separate create & save methods, make sure it saved after validations
        # 
        # render json: PetSerializer.new(pet)

               # pattern used in my other app:
            # if user
            #     pet = Pet.new(pet_params)
            #     #would have to be more specific than this because not all params are used.
            #     if pet.valid?
            #         pet.save
            #         render json: PetSerializer.new(pet)
            #     end
            # end

    end
    def init_need_sels(need_sels)
        # loop through array of hashes, creating validating and saving each new need select

    end

    # def pet_params
    #     params.require(:pet).permit()
    # end
end
