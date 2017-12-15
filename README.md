# zooTangle

#### _Angular Database System: Solo One Day Project  December 8, 2017_


#### By _**Susannah Lowe**_

## Description
_An app to help a local zoo replace their expensive software animal tracking database._


## Setup/Installation Requirements
   * Node and Bower are installed on your machine globally
   * Knowledge of TypeScript and ES6 vocabulary and syntax


  ### Installation Instructions:
    1. Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac.  
        - $git clone https://github.com/lowesusannah/zooTangle.git

    2. In the command line run the following commands at the root level of your cloned repository folder:
        - $npm install
        - $bower install
        - $gulp build
        - $gulp serve (to preview live server updates)

    3. If needed, ready for production by running command $gulp build --production


## Specifications

| Spec        | Example Input           | Example Output  |
| ------------- |:-------------:| -----:|
| Users should be able to add newly-admitted animals to the app via a form that includes fields for species, name, age, diet, location, caretakers needed, sex, one like and one dislike.  |   Species: "Arctic Fox", Name: "Moon", Age: 2, Diet: "Carnivore", Location: "Northern Trail", Caretakers: 5, Sex: "Female", Likes: "Cool shade", Dislikes: "Loud noises"  | Store all information in database |
| Users should be able to view a list of animals logged.     |   Moon, Caramel and Lily information      | Display info. about each animal back to user     |   Users should be able to view all animals, only young animals under 2, and only mature animals that are 2 or older. |
| User should be able to click on an animal to edit its name, age or caretakers.|

## Future development
_In future iterations, I would like to integrate the jQuery UI API to enable drag and drop functionality for the caretakers to easily move animals from location to location on a map to reflect any animal moves._

## Known Bugs

_Errors with edit record and new record submissions. _


## Support and contact details

_Please feel free to reach out with any questions, etc. to lowesusannah@gmail.com._


## Technologies Used

* Angular JS (MVC model)
* TypeScript
* ES6 (JavaScript)
* Node.js


### License

*Developed under the MIT license.*

Copyright (c) 2017 **_Susannah Lowe_**
