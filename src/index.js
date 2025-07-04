import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';
import methodOverride from 'method-override';

const app = express();
const port = 3000;

// Connect to DB
db();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'));
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
