function add(a,b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}
function multiply(a,b)
{
    return a * b;
}
function divide(a,b)
{
    return a / b;
}

function operate(a,b,op) {
    if(op == '+')
    {
        return add(a, b);
    }
    if(op == '-')
    {
        return subtract(a, b);
    }
    if(op == '*')
    {
        return multiply(a, b);
    }
    if(op == '/')
    {
        return divide(a, b);
    }

    
}

console.log(operate(5,5,'-'))