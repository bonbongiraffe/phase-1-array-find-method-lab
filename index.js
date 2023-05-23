// code your solution here
/*
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
```
*/
function superbowlWin(record){
    let yearWon = record.find(year => year.result === 'W')
    if (!!yearWon)
        return yearWon.year;
    else  
        return;
}

/*
Write a function called `superbowlWin()` in `index.js`:

* The function should receive 1 argument, an `Array` of JavaScript `Object`s
* Each object has two properties: `year` and `result`
* It should use `find()` to test each `Object` to see if the `result` is `"W"` —
  a win!
* It should return the `year` when the win occurred (if it occurred at all!)
* If no win is found, it should return, sadly, `undefined`
*/