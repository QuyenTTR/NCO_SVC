import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from './routes/index.js';
import db from './config/db/index.js';

db.connect();

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', engine({
	extname: ".hbs",
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`) });
