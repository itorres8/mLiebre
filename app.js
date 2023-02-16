const express = require('express');
const path = require('path');


const app = express();


const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );


app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/views/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
