module.exports = function(namespace) 
{
    const bound = console.log.bind(console, namespace)
    return bound
}