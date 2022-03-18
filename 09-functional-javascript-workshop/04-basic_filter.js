function getShortMessages(messages) {
    const messagesMap = messages.map(x => x.message)
    return messagesMap.filter(x => x.length < 50)
  }

  module.exports = getShortMessages

/* official solution */
//   module.exports = function getShortMessages(messages) {
//     return messages.filter(function(item) {
//       return item.message.length < 50
//     }).map(function(item) {
//       return item.message
//     })
//   }