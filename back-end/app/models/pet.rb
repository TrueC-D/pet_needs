class Pet < ApplicationRecord
  belongs_to :user
  has_many :needs
  has_many :need_selections
  # need selections are a separate class which allows you to have a saved type of need so to auto recreate a regular need instance while typing less info
  
end
