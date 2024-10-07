var title = document.getElementById('myTitle');
var button = document.getElementById('myButton')
var modal = document.getElementById('mymodal')


button.onclick=function(){
    title.style.color="red";
    modal.style.display="block"
}

var myClose = document.getElementById('myClose')
myClose.onclick=function(){
    modal.style.display="none"
    let age = prompt('Сколько тебе лет?',100);
    let isBoss = confirm("Ты здесь главный?")
    if (isBoss) {
        alert(age);
    }
}