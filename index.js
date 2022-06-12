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