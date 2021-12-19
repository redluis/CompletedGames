'use strict'

let games = document.getElementsByClassName('game');
let total = document.getElementById('total');
total.innerText = games.length;

new WOW().init();
