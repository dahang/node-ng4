import * as express from 'express';
let app = express();

import * as Index from './routes/index';

import * as path from 'path';
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

import * as bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Index.router);

app.use('/node_modules',
    express.static(__dirname + '/node_modules'));

app.use('/dist',
    express.static(__dirname + '/dist'));

app.use('/fontawesome-webfont.woff2',
    express.static(__dirname + '/dist/fontawesome-webfont.woff2'));

app.listen(3000, () => {
    console.log(`listening on port 3000`);
});
