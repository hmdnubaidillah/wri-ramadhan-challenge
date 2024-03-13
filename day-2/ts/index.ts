function convertBinary(num: number) {
  let bits = "";

  while (num > 0) {
    bits = (num % 2) + bits;
    num = Math.floor(num / 2);
  }

  return bits;
}

function countBits(num: number) {
  const binary = convertBinary(num);
  let bitOne = 0;

  binary.split("").map((bit) => (parseInt(bit) === 1 ? bitOne++ : 0));

  return bitOne;
}

// one liner
const countBitsOneLiner = (num: number) => num.toString(2).split("0").join("").length;
