button = document.getElementById('b');
list = document.getElementById('thelist');
li = document.getElementsByTagName('li');
divs = document.getElementsByTagName('div');
header = document.getElementById('h');
item = 8;

var addItem = function(e){
    var nextElement = document.createElement('li');
    newElement.innerHTML = "item " + item;
    list.appendChild(nextElement);
    item += 1;
}

button.addEventListener('click', addItem);

var elementMouseOver = function(e){
    header.innerHTML = divs.innerHTML;
    header.innerHTML = list.innerHTML;
}

var elementMouseEnter = function(e){
    header.innerHTML = "Hello World!";
}

list.addEventListener('mouseenter', elementMouseOver);
list.addEventListener('mouseleave', elementMouseLeave);
divs.addEventListener('mouseenter', elementMouseOver);
divs.addEventListener('mouseleave', elementMouseLeave);

var elementClick = function(e){
    this.remove();
}