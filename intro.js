var button = document.getElementById('b');
var list = document.getElementById('thelist');
var li = document.getElementsByTagName('li');
var header = document.getElementById('h');
var item = 8;
var fiblist = document.getElementById('fiblist');
var fibbutton = document.getElementById('fib');
var fib = 1; 

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
    //console.log(li[i]);
    li[i].addEventListener("mouseenter" , changeHeader);
    li[i].addEventListener("mouseleave" , restoreHeader);
    li[i].addEventListener("click" , remove);
}

var fibonacci = function(n){
    if (n <= 2) {
	return 1; }
    else {
	return fibonacci(n - 2) + fibonacci(n - 1); }
}

console.log(fibonacci(1));
console.log(fibonacci(2)); 
console.log(fibonacci(3));
console.log(fibonacci(4));


var addFibonacci = function(e){
    var nextElement = document.createElement('LI');
    var newFib = fibonacci(fib);
    nextElement.innerHTML = newFib; 
    fiblist.appendChild(nextElement);
    fib++; 
}

fibbutton.addEventListener('click', addFibonacci); 
