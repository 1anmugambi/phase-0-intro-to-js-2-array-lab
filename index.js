// Define the cats array
let cats = ["Milo", "Otis", "Garfield"];

// Function to add an element to the beginning of the cats array (destructively)
function destructivelyAppendCat(name) {
  cats.push(name);
}


// Function to add an element to the beginning of the cats array (destructively)
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  // Function to add an element to the end of the cats array (destructively)
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  // Function to remove the last element from the cats array (destructively)
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  // Function to remove the first element from the cats array (destructively)
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  // Function to return a new array with all elements added to the cats array (non-destructively)
  function appendCat(name) {
    return [...cats, name];
  }
  
  // Function to return a new array with the cats array and a new name added to the beginning (non-destructively)
  function prependCat(name) {
    return [name, ...cats];
  }
  
  // Function to return a new array with all elements except the last one from the cats array (non-destructively)
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  // Function to return a new array with all elements except the first one from the cats array (non-destructively)
  function removeFirstCat() {
    return cats.slice(1);
  }
  // Write your solution here!
