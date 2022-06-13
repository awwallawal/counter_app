/* 
let count = 0;

let peopleEntered = document.getElementById('numbers-of-people');

let Saving = document.getElementById('saving');

function increment () {
 count = count + 1;
 peopleEntered.innerText = count;
 // alert('New Count: ' + count);
};

function save () {
 Saving.textContent = Saving.textContent + count  +  ' --' + '   ';
 // alert ('Current Save: ' + count);
 count = 0;
 peopleEntered.innerText = count;
} 

*/

// The above code would work but we can modify the code by writting an IIFE (Immediately Invockable Function Expression) to circumvent the writing of the code at the global scope level and make it work under its local scope which is the best practice when writting codes. 

let counterApp = (function counter(){
 let count = 0;
 let peopleEntered = document.getElementById('numbers-of-people');
 let Saving = document.getElementById ('saving');
 return{
  increment: function () {
   count += 1;
   peopleEntered.textContent = count;
  },
  save: function () {
   Saving.textContent = Saving.textContent + count + '   '+ '--- ';
   count = 0;
   peopleEntered.textContent = 0;
  }
 }
}) ();