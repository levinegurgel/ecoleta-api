import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    
    response.json([
        'João',
        'José',
        'Maria',
        'Isabel'
    ]);

})

app.listen(3333)