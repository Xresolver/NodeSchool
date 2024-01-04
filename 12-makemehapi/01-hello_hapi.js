const hapi = require('@hapi/hapi');

const init = async() =>
{
    const server = hapi.Server({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });

    function handlerFunc(request, h)
    {
        return 'Hello hapi';
    }

    server.route({path: '/', method:'GET', handler: handlerFunc});
    await server.start()
}

init()



/* OFFICIEL SOLUTION */
/* ----------------- */
// const Hapi = require('@hapi/hapi');

// (async () => {
//   try {
//     const server = Hapi.Server({
//       host: 'localhost',
//       port: Number(process.argv[2] || 8080)
//     });

//     server.route({
//       path: '/',
//       method: 'GET',
//       handler: (request, h) => 'Hello hapi'
//     });

//     await server.start();

//     console.log(`Server running at: ${server.info.uri}`);
//   } catch (error) {
//     console.log(error);
//   }
// })();