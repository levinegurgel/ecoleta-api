import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    
    response.json([
        'João',
        'José',
        'Maria',
        'Isabel'
    ]);

    app.post('/users', (request, response) =>{
        const user = {
            name: 'João',
            email: 'joao@gmail.com'
        };

        return response.json(user);
    });

})

app.listen(3333)