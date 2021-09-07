class User < ApplicationRecord
    has_secure_password
    # validates_presence_of: email, 
    # validates uniquenss of email
    has_many :pets, dependent: :destroy
    has_many :needs, through: :pets

    # creating admin email: test@test.com, password: "test" , confirmation: "password"
    # in consoled User.create!(email: "test@test.com", password: "test", password_confirmation: "test")
end
