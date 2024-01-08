const hapi = require('@hapi/hapi');
const h2o2 = require('h2o2');
const path = require('path');


(async () => {
    try 
    {
        const server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080),
        
        });
        
        await server.register(h2o2);

        server.route({
            method: 'GET',
            path: '/proxy',
            handler: {
                proxy: {
                    host: 'localhost',
                    port: 65535
                }
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