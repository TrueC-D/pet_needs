class User < ApplicationRecord
    has_many :pets
    has_many :needs, through: :pets
end
