class NeedSelection < ApplicationRecord
  belongs_to :pet

  # # Below are all the types of need selects thant need to be initiated for different type of pet types.  I am unsure at the moment if they should be stored in this section.  the "this" needs to be removed as that is from javascript.
  # def feed
  #   this.name = 'Feed'
  #   this.description = 'Every pet needs to be fed.'
  # end

  # def vet_visit
  #   this.name = 'Vet Visit'
  #   this.description = 'Every pet needs to be fed.'
  # end

  # def give_water
  #   this.name = 'Give Water'
  #   this.description = "Pets that don't live in water need to drink water to stay hydrated."  
  # end

  # def groom
  #   this.name = 'Groom'
  #   this.description = "Grooming prevents matts from developing, prevents rashes and infection."
  # end

  # def clean_litter_box
  #   this.name = 'Clean Litter Box'
  #   this.description = "A clean litter box helps prevent a messy house and sanitary living environment."
  # end

  # def walk
  #   this.name = 'Go on Walk.'
  #   this.description = "Excercise is a must half for a healthy animal."
  # end

  # def clean_tank
  #   this.name = 'Clean Tank'
  #   this.description = "Changing the water in the tank and removing excess waste and algae will help marine life thrive."    
  # end

  # def check_chemical_levels
  #   this.name = 'Check chemical levels in tank.'
  #   this.description = "Tank water with the wrong pH levels, or water that is too high in high in nitrates, nitrites and ammonium can harm aquatic animals"    
  # end

  # def light_on
  #   this.name = 'Turn On Light'
  #   this.description = "Animals in terrariums and aquariums also need a day and night cycle. Turn the light on to start their morning."
  # end

  # def light_off
  #   this.name = 'Turn Off Light'
  #   this.description = "Animals in terrariums and aquariums also need a day and night cycle. Turn the light off to start their evening."
  # end

end
