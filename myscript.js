var nameInput = document.getElementById('name-input');
var EmailInput= document.getElementById('email-input');
var LaterInput = document.getElementById('later-input');
var CleanForm = document.getElementById('clean-form');
var WriteLater = document.getElementById('write-later');
var returnText = document.getElementById('return-text');
var MyClose = document.getElementById('my-Close');

WriteLater.addEventListener('submit', (event) => {
   WriteLater.reset();
    returnText.showModal();
})

MyClose.addEventListener("click", (event) => {
    returnText.close();
})