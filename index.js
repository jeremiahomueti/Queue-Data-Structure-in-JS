var testArr = [1,2,3,4,5];

function nextInLine(arr, item)
{
    arr.push(6);
    arr.shift();

    return item;
}


console.log("Before: " + (testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + (testArr));