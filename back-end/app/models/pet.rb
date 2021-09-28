class Pet < ApplicationRecord
  belongs_to :user
  has_many :needs, dependent: :destroy
  has_many :need_selections, dependent: :destroy
  # need selections are a separate class which allows you to have a saved type of need so to auto recreate a regular need instance while typing less info
  # def dog do 
    # creates dog & need selections
  # end  

  def self.init_pet
    {'Feed' => 'Every pet needs to be fed.', 
    'Vet Visit' => 'Every pet needs to be fed.'}
  end

  def self.needs_terrarium
    self.init_pet.merge({"Clean Terrarium" => "It is hygienic and best for your pet's health if your Terrarium is clean",
    "Light On" => "Animals in terrariums and aquariums also need a day and night cycle. Turn the light on to start their morning."
    "Light Off" => "Animals in terrariums and aquariums also need a day and night cycle. Turn the light off to start their evening."}).merge(self.land_animal)
  end
  

  def self.init_aquatic_species
    self.needs_terrarium.merge({"Clean Tank" => "Changing the water in the tank and removing excess waste and algae will help marine life thrive.",
       "Check Chemical Levels" => "Tank water with the wrong pH levels, or water that is too high in high in nitrates, nitrites and ammonium can harm aquatic animals",
       ).delete("Clean Terrarium")
  end

  # to be continued...
  def self.land_animal
    self.init_pet.merge({'Give Water' => "Pets that don't live in water need to drink water to stay hydrated."})
  end

  def self.pet_with_coat
    self.land_animal.merge({"Groom" => "Grooming prevents matts in the coat, rashes and infection."})
  end

  def self.cat
    self.pet_with_coat.merge({"Clean Litter Box" => "A clean litter box helps prevent a messy house and sanitary living environment."})
  end

  def self.dog
    self.pet_with_coat.merge({"Go On Walk" => "Excercise is a must half for a healthy animal."})
  end

end
