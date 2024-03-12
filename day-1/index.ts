function spinWords(str: string) {
  return str
    .split(" ")
    .map((str) => (str.length >= 5 ? str.split("").reverse().join("") : str))
    .join(" ");
}


console.log(spinWords("the hello world fellow warriors bro"));
