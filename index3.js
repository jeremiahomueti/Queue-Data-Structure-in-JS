/*There is the strict equality comparison operator
(===) that is stricter in comparison to the double equality 
operator. 

For example:  3 == 3 and 3 === 3 are both True
Although, when we stringify '3' only the double equality 
operator returns 3.*/



function testEqual(valueTested)

{
    if (valueTested === 12)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual('12'));