//DOM Manipulation: Selecting & changing website elements

var div1 = document.getElementById('div1');

var unicycle = document.getElementsByClassName('unicycle');

var paragraphps = document.getElementsByTagName('p');

var queryUnicycle = document.querySelector('div2');

var queryAll = document.querySelectorAll('.unicycle, #div2');

var text = "<h1>Hello World<h1>";

queryUnicycle.textContent = text;

// for (i=0; i < queryAll.length; ++i) {
//     queryAll[i].innerHTML = text;
// }