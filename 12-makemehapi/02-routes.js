const hapi = require('@hapi/hapi');

(async () => {
    try 
    {
        const server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });

        server.route({
            path: '/{name}',
            method: 'GET',
            handler: (request, h) => `Hello ${request.params.name}`
        });

        await server.start();

        console.log(`Server running at: ${server.info.uri}`);
    } 
    catch (error) 
    {
        console.log(error);
    }
})();


/* --------OFFICIEL SOLUTION--------- */
/* This code is not work on my system */
/* ---------------------------------- */

// const Hapi = require('@hapi/hapi');

// (async () => {
//   try {
//     const server = Hapi.Server({
//       host: 'localhost',
//       port: Number(process.argv[2] || 8080)
//     });

//     server.route({
//       path: '/makemehapi',
//       method: 'GET',
//       handler (request, h) {
//         return `Hello ${request.params.name}`;

//         // a more secure alternative is this:
//         //
//         // return `Hello ${encodeURIComponent(request.params.name)}`;
//         //
//         // encodeURIComponent escapes all characters except the following: alphabetic, decimal digits, - _ . ! ~ * ' ( )
//         // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
//         // for more details why you should call encodeURIComponent on any user-entered parameter
//       }
//     });

//     await server.start();

//     console.log(`Server running at: ${server.info.uri}`);
//   } catch (error) {
//     console.log(error);
//   }
// })();