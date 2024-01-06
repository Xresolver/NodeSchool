const hapi = require('@hapi/hapi');
const vision = require('@hapi/vision');
const path = require('path');
const handlebars = require('handlebars');

(async () => {
    try 
    {
        const server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080),
        
        });
        
        await server.register(vision);
    
        server.views({
            engines: {
                html: handlebars
            },
            path: path.join(__dirname, 'templates')
        })

        server.route({
            method: 'GET',
            path: '/',
            handler: {
                view: 'index.html'
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