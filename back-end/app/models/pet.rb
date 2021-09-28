class Pet < ApplicationRecord
  belongs_to :user
  has_many :needs, dependent: :destroy
  has_many :need_selections, dependent: :destroy
  # need selections are a separate class which allows you to have a saved type of need so to auto recreate a regular need instance while typing less info
  # def dog do 
    # creates dog & need selections
  # end  

  def self.init_pet
    # self.id
    # NeedSelects
    # # feed, vet_visit
  end

  def self.init_aquatic_species
    init_pet
    # NeedSelects
    # # clean_tank, check_chemical_levels, turn_on_light, turn_off_light
  end

  # to be continued...
end
