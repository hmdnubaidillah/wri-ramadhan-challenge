"use strict";
const countBits = (num) => num.toString(2).split("0").join("").length;
console.log(countBits(1234));
