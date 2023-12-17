function loadUsers(userIds, load, done) 
{
    const users = []
    userIds.forEach((id, index) => {
        users[index] = load(id) 
    });
        
    done(users);
}

module.exports = loadUsers

/* OFFICIEL SOLUTION */
// function loadUsers(userIds, load, done) 
// {
//     var completed = 0
//     var users = []
//     userIds.forEach(function(id, index) 
//     {
//         load(id, function(user) 
//         {
//             users[index] = user
//             if (++completed === userIds.length) 
//                 return done(users)
//         })
//     })
// }

// module.exports = loadUsers