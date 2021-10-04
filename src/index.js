// entry file

const MovingObject = require("./moving_object.js");

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    const canvas = document.getElementById('game-canvas')

    const ctx = canvas.getContext('2d');

    window.MovingObject = MovingObject;
    window.ctx = ctx;
});