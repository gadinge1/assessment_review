// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Ella Gading" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by Ella Gading`


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    
}) 

document.getElementById('minus-gb').addEventListener('click', function(Ginger) {
    console.log('Gingerbread - button was clicked!')


})
document.getElementById('add-cc').addEventListener('click', function() { 
    console.log('Chocolate Chip + button was clicked!') 
    
});

document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip - buttton was clicked!')
    

});

document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!')
    
}) 
document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle - button was clicked!')

})

// TODO: Hook up event listeners for the rest of the buttons