Primary purpose:

The primary purpose of this app is to track pet needs and have the ability to record when the need has been met. It does not have this ability yet, but I hope to build this feature after graduation.  

Demo:



How to load:

Load the pet_file cd into the back-end file.  After makins sure that rails is fully functioning and bundle install has been run you can run 'rails s' which will start the rails server.

Open index.html in your browser, located in the front-end folder.  On left hand side of the loaded page you can type in a username to create a user. Once created you can select the user (don't click the 'x' as that will delete the user) and a create pet form will populate. You can create a pet here.  Different types of pets (dog, cat, aquatic species, etc) have default needs that will be created.  At this point you need to reload the page in order to view your created pets but you may view the information that was saved if you open the following windows:

http://localhost:3000/users
http://localhost:3000/pets
http://localhost:3000/need_selections



Future goals: 

Also in the future, pets should have many users and users should have many pets. In this way multiple people in a household will be able to record when their pets' needs have been met.  An even further stretch goal would be to have permissions set so a guest user can be created (who will not be able to modify saved needs, just able to mark as completed).



