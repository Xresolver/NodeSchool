let total = 0;

module.exports = function longDelayInvoke(arg1)
{ 
    if(arg1)
    {
        total += arg1;
        return longDelayInvoke
    }
    else
    {
        const result = total;
        total = 0;
        return result;
    }    
}

