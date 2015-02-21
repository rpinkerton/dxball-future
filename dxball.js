!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.DXBall=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Game = require("./game");

},{"./game":3}],2:[function(require,module,exports){
exports.CANVAS_ID = "dxball-canvas";
exports.INITIAL_PADDLE_WIDTH = 100;
exports.INITIAL_INTERVAL_MS = 10;

},{}],3:[function(require,module,exports){
var constants = require("./constants");
var Game = (function () {
    function Game() {
        this.canvas = document.getElementById(constants.CANVAS_ID);
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
    }
    Game.init = function () {
        var game = new Game();
        game.canvas.addEventListener("mousemove", game.storeMousePosition.bind(game), false);
        setInterval(game.draw.bind(game), constants.INITIAL_INTERVAL_MS);
        return game;
    };
    Game.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        this.ctx.fillStyle = "skyblue";
        this.ctx.strokeStyle = "gray";
        this.ctx.rect(this.mouse_x, 200, 60, 20);
        this.ctx.fill();
        this.ctx.stroke();
    };
    Game.prototype.storeMousePosition = function (event) {
        this.mouse_x = Math.min(event.clientX, this.width);
        this.mouse_y = Math.min(event.clientY, this.height);
    };
    return Game;
})();
module.exports = Game;

},{"./constants":2}]},{},[1])(1)
});