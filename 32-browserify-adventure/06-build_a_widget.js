const fs = require('fs')
const domify = require('domify');
const domHtml = fs.readFileSync('./dom.html', 'utf-8');
const domElement = domify(domHtml);

module.exports = function () { return domElement }

domElement.setName = function (str) { domElement.querySelector('.name').textContent = str; }
domElement.appendTo = function (target) {target.appendChild(domElement)}


/* OFFICIEL SOLUTION */
/* ----------------- */
// var domify = require('domify');
// var html = '<div>Hello <span class="name"></span>!</div>';

// module.exports = Widget;

// function Widget () {
//   if (!(this instanceof Widget)) return new Widget;
//   this.element = domify(html);
// }

// Widget.prototype.setName = function (name) {
//   this.element.querySelector('.name').textContent = name;
// };

// Widget.prototype.appendTo = function (target) {
//   target.appendChild(this.element);
// };