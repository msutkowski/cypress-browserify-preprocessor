exports['browserify preprocessor - e2e correctly preprocesses the file 1'] = `
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

it('is a test', function () {
  var a = 1,
      b = 2;
  expect(a).to.equal(1);
  expect(b).to.equal(2);
  expect(Math.min.apply(Math, [3, 4])).to.equal(3);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZXN0L2ZpeHR1cmVzL2V4YW1wbGVfc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxDQUFDLFdBQUQsRUFBYyxZQUFNO0FBQUEsTUFDYixDQURhLEdBQ0osQ0FESTtBQUFBLE1BQ1YsQ0FEVSxHQUNELENBREM7QUFFcEIsRUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsRUFBVixDQUFhLEtBQWIsQ0FBbUIsQ0FBbkI7QUFDQSxFQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxFQUFWLENBQWEsS0FBYixDQUFtQixDQUFuQjtBQUNBLEVBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFMLE9BQUEsSUFBSSxFQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUixDQUFMLENBQU4sQ0FBNEIsRUFBNUIsQ0FBK0IsS0FBL0IsQ0FBcUMsQ0FBckM7QUFDRCxDQUxDLENBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpdCgnaXMgYSB0ZXN0JywgKCkgPT4ge1xuICBjb25zdCBbYSwgYl0gPSBbMSwgMl1cbiAgZXhwZWN0KGEpLnRvLmVxdWFsKDEpXG4gIGV4cGVjdChiKS50by5lcXVhbCgyKVxuICBleHBlY3QoTWF0aC5taW4oLi4uWzMsIDRdKSkudG8uZXF1YWwoMylcbn0pXG4iXX0=

`

exports['math default exports'] = `
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  add: function add(a, b) {
    return a + b;
  }
};
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _math = require("./math");

context('math.js', function () {
  it('imports function', function () {
    expect(_math.add, 'add').to.be.a('function');
  });
  it('can add numbers', function () {
    expect((0, _math.add)(1, 2)).to.eq(3);
  });
});

},{"./math":1}]},{},[2]);

`
