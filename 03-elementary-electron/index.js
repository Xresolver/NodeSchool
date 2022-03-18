window.addEventListener('DOMContentLoaded', () => 
{
    var {remote} = require('electron')
    var fs = require('fs')
    var picture = require('cat-picture')
    var image = require('lightning-image-poly')

    var src = picture.src
    picture.remove()
    var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

    function save () {
        remote.getCurrentWebContents().printToPDF({
          portrait: true
        }, function (err, data) {
          fs.writeFile('annotation.pdf', data, function (err) {
            if (err) alert('error generating pdf! ' + err.message)
            else alert('pdf saved!')
          })
        })
      }
    
    window.addEventListener('keydown', function (e) {
        if (KeyboardEvent.keyCode == 'p') save()
    })
})