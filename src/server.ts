import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send(`Let's begin the project!`)
})

app.listen(5000, () => {
    console.log(`The server running at port 3000`)
})