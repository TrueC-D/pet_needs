class NeedSelectionsController < ApplicationController
    def index
        need_selects = NeedSelection.all
        render json: NeedSelectionSerializer.new(need_selects)
    end

    def show 
        need_select = Needselection.find_by(id: params[:id])
        render json: NeedSelectionSerializer.new(need_select)
    end

    def create
        pet = Pet.find_by(id: params[:pet_id])
        if !!pet
            need_select = NeedSelection.create(title: params[:title], description: params[:description], pet_id: params[:pet_id])
            render json: NeedSelectionSerializer.new(need_select)
        end
    end

    def destroy
        render json: NeedSelection.find_by(id: params[:id]).destroy
    end

end
