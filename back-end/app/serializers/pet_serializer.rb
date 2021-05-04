class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :birthday, :species, :user_id
  has_many :need_selections
end
