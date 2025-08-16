import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';

const port = 3000;

const app = express();

app.use(morgan('combined'));

app.engine('hbs', engine({
	extname: ".hbs",
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/hello-world', (req, res) => {
	res.send('Hello World');
})

app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`) });