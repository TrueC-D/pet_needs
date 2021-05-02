class NeedSelectionsController < ApplicationController
    def index
        need_selects = NeeedSelection.all
        render json: NeedSelectionSerializer.new(need_selects)
    end

    def show 
        need_select = Needselection.find_by(id: params[:id])
        render json: NeedSelectionSerializer.new(need_select)
    end

    def create
        pet = Pet.find_by(name: params[:pet_name])
        if !!pet
            need_select = NeedSelection.new(title: title, description: description, pet_id: pet.id)
        end
    end

    def destroy
        render json: NeedSelection.find_by(id: params[:id]).destroy
    end

end
