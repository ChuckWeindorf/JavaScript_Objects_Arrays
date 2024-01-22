console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
console.log(arraySum(numbers));
function arraySum(numbers) {
    let sum = 0;
    numbers.forEach(element => sum += element);
    return sum}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}
book.title = "Comets of Omen";
book.pages = 1520;
book.timesRead = 2;
book.info = function() {return `${this.title}, ${this.pages} pages, read ${this.timesRead} times.`}
console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";
let arr3 = sentence.split(" ");
console.log(arr3);
let arr3b = arr3.map(word => {return word.split("").reverse().join("")});
console.log(arr3b.join(" "));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
const csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
const arr4 = csvData.split("\n");
const arrTitles4 = arr4[0].split(",");
let charArray4 = [];
let tempArr = [];
let tempObj = {};
for (vint = 1; vint < arr4.length; vint++) 
  {  tempArr = arr4[vint].split(",");
     tempObj = {[arrTitles4[0]]: tempArr[0],
                [arrTitles4[1]]: tempArr[1]};
     charArray4.push(tempObj);
  }
console.log(charArray4);