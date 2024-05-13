module.exports = function delayInvoke(arg1)
{ 
    return function (arg2){ return (arg1 + arg2) } 
}