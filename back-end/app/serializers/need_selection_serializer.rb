class NeedSelectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :pet_id
end
