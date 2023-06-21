const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const user = process.env.dbUser;
const password = process.env.dbUserpassword;
const dbName = process.env.dbName;

const uri = `mongodb+srv://${user}:${password}@cluster0.yoy1tru.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/WebRoutes'));
app.use('/pets', require('./routes/Pets'));

app.use((req, res) => {
    res.status(404).render('404', { titulo: "Titulo pagina 404" });
});

app.listen(port, () => {
    console.log(`Server running at ${ port }`);
});
