const express = require("express")
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js')

const app = express();
const PORT = 500;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get("/", (req, res)=> {
    res.send('Hello from homepage');
});



app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))