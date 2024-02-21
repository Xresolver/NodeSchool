function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(
            x => goodUsers.some(y => x.id === y.id)
        )
    };
  }

  module.exports = checkUsersValid

  
// function checkUsersValid(goodUsers) {
// return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(
//         x => goodUsers.includes(x)
//     )
// };
// }


/* official solution */
// module.exports = function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//       return submittedUsers.every(function(submittedUser) {
//         return goodUsers.some(function(goodUser) {
//           return goodUser.id === submittedUser.id
//         })
//       })
//     }
//   }