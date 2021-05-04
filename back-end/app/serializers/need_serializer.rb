class NeedSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :scheduled_date, :scheduled_time, :completed, :pet_id
end
