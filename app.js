console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
console.log(arraySum(numbers));
function arraySum(numbers) {
    let sum = 0;
    numbers.forEach(element => sum += element);
    return sum}

console.log("Extra: I can use reduce also... " + numbers.reduce((total,number) => total += number));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};
book.title = "Comets of Omen";
book.pages = 1520;
book.timesRead = 2;
book.info = function() {return `${this.title}, ${this.pages} pages, read ${this.timesRead} times.`}
console.log(book.info());

//Second way...
let book2 = {
  title: "Comets of Omen",
  pages: 1520,
  timesRead: 2,
  function () {return `${this.title}, ${this.pages} pages, read ${this.timesRead} times.`}
};

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const sentence = "The quick brown fox jumps over the lazy dog";
let newSentence = sentence.split(" ").map(word => {return word.split("").reverse().join("")}).join(" ");  
//chain like in codewars
console.log(newSentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
const csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
const arr4 = csvData.split("\n");
const arrTitles4 = arr4[0].split(",");
let charArray4 = [];
for (vint = 1; vint < arr4.length; vint++) 
  { let tempArr = arr4[vint].split(",");
    let tempObj = {[arrTitles4[0]]: tempArr[0],
                 [arrTitles4[1]]: tempArr[1]};
    charArray4.push(tempObj);
  }
console.log(charArray4);