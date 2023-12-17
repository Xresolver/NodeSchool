function getDependencies(tree) 
{
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    const dependenciesArray = []

    if(typeof tree === "object" && tree.hasOwnProperty('dependencies'))
    {
        Object.keys(tree.dependencies).forEach((dependency) =>
        {
            const dependencyString = dependency + '@' +tree.dependencies[dependency].version;
            if(!dependenciesArray.includes(dependencyString))
                dependenciesArray.push(dependencyString)
        }) 

        Object.keys(tree.dependencies).forEach((key) => 
        {
            let buffer = getDependencies(tree.dependencies[key])
            buffer.forEach((str) =>
            {
                if(!dependenciesArray.includes(str))
                    dependenciesArray.push(str)
            })
        })
            
    }

    return dependenciesArray.sort()

}

module.exports = getDependencies

/* OFFICIEL SOLUTION */
/* ----------------- */
// function getDependencies(mod, result) 
// {
//     result = result || []
//     var dependencies = mod && mod.dependencies || []
    
//     Object.keys(dependencies).forEach(function(dep) 
//     {
//       var key = dep + '@' + mod.dependencies[dep].version
//       if (result.indexOf(key) === -1) 
//         result.push(key)
//       getDependencies(mod.dependencies[dep], result)
//     })
//     return result.sort()
//   }

//   module.exports = getDependencies