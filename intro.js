var button = document.getElementById('b');
var list = document.getElementById('thelist');
var li = document.getElementsByTagName('li');
var header = document.getElementById('h');
var item = 8;

var addItem = function(e){
    var nextElement = document.createElement('LI');
    nextElement.innerHTML = "item " + item;
    list.appendChild(nextElement);
    item += 1;
    nextElement.addEventListener("mouseenter" , changeHeader);
    nextElement.addEventListener("mouseleave" , restoreHeader);
    nextElement.addEventListener("click" , remove);
}

button.addEventListener('click', addItem);

var changeHeader = function(e){
    header.innerHTML = this.innerHTML;
}

var restoreHeader = function(e){
    header.innerHTML = "Hello World!";
}

var remove = function(e){
    this.remove();
    item -= 1; 
}

for (i = 0; i < li.length; i++) {
    console.log(li[i]);
    li[i].addEventListener("mouseenter" , changeHeader);
    li[i].addEventListener("mouseleave" , restoreHeader);
    li[i].addEventListener("click" , remove);
}

