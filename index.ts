import * as express from 'express';
import * as path from 'path'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as compress from 'compression';
import * as fs from 'fs'
import 'source-map-support/register';
import 'reflect-metadata';

const port = 8080;

let app = express();
app.use(cors());

app.use(compress({}))
app.use(express.static(path.join(__dirname, './dist')));

console.log('App started on port => ', port);

app.listen(port);

