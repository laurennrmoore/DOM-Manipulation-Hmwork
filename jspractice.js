Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  
  
  return arr.sort(function(a,b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  
  
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



  Return a Sorted Array Without Changing the Original Array
  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a,b){
  return a-b;
});
  
}
nonMutatingSort(globalArray);



Split a String into an Array Using the split Method
function splitify(str) {
   
  return str.split(/\W/);
  
  
  }
  splitify("Hello World,I-am code");



  Combine an Array into a String Using the join Method
  function sentensify(str) {
    
  return str.split(/\W/).join(" ");
      
  }
  sentensify("May-the-force-be-with-you")



  Apply Functional Programming to Convert Strings to URL Slugs
  
function urlSlug(title) {
    return title 
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
    
    }
    


    Use the every Method to Check that Every Element in an Array Meets a Criteria
    function checkPositive(arr) {
       
        return arr.every(function(value){
        return value > 0;
      });
            
             }
      checkPositive([1, 2, 3, -4, 5]);



      Use the some Method to Check that Any Elements in an Array Meet a Criteria
      function checkPositive(arr) {
      
      return arr.some(elem => elem > 0);
    }
      checkPositive([1, 2, 3, -4, 5]);


      Introduction to Currying and Partial Application
      function add(x) {
        
      return function(y){
        return function(z){
          return x + y + z;
        };
      };
      
      }
      add(10)(20)(30);