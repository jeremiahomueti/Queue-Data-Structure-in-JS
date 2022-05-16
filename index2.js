//Boolean comparison operator

//if val equals (==) 12, then, xyz. The double equal sign
//is testing to see if the number we pass in is equal to 12.
//the simple equal sign as we know it is used rather to assign
//12 to the variable, hence we use the double equal sign
//which is a boolean comparison operator

function testEqual(valueTested)

{
    if (valueTested == 12)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(6*2));