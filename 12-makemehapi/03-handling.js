const hapi = require('@hapi/hapi');
const inert = require('@hapi/inert');
const path = require('path');

(async () => {
    try 
    {
        const server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080),
            routes: {
                files: {
                    relativeTo: path.join(__dirname, 'public')
                }
            }
        });
    
        await server.register(inert);
    
        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, h) 
            {
                return h.file('index.html');
            }
        });
    
        await server.start();
    
        console.log('Server running at:', server.info.uri);
    } 
    catch (error) 
    {
        console.log(error);
    }
})();


/* OFFICIEL SOLUTION */
/* ----------------- */
// const Hapi = require('@hapi/hapi');
// const Inert = require('@hapi/inert');

// (async () => {
//   try {
//     const server = Hapi.Server({
//       host: 'localhost',
//       port: process.argv[2] || 8080,
//       routes: {
//         files: {
//           relativeTo: __dirname
//         }
//       }
//     });

//     await server.register(Inert);

//     server.route({
//       path: '/',
//       method: 'GET',
//       handler: {
//         file: 'index.html'
//       }
//     });

//     await server.start();
//   } catch (error) {
//     console.log(error);
//   }
// })();