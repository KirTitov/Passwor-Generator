// REQUIREMENTS //
  // Generate two random passwords when user clicks button
  // Each password should be 15 characters long

// STRETCH GOALS //
  // Ability to set the password length
  // Add "copy-on-click"
  // Toggle "symbols" and "numbers" on/off
  
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// VARIABLE DECLARATION AND INITIALIZATION
let generateButton = document.getElementById("generate-Button")
let boxOne = document.getElementById("box-one")
let boxTwo = document.getElementById("box-two")



// PASSWORD BUTTON CLICK FUNCTION //
generateButton.addEventListener("click", function(){
  boxOne.textContent = createPassword()
  boxTwo.textContent = createPassword()
})//end password button function


// GET RANDOM CHARACTER FUNCTION //
  function getRandomChar(){
      let randomChar = Math.floor( Math.random() * characters.length );
      return randomChar
  }


// CREATE PASSWORD FUNCTION
  function createPassword(){
      let password = ""
      for(let i = 0; i < 15; i++) {
          password += characters[getRandomChar()]
      }
      return password
  }

