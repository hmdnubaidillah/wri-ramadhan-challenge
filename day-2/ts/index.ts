const countBits = (num: number) => num.toString(2).split("0").join("").length;

console.log(countBits(1234));
