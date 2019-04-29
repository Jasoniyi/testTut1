import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();

// configure app to user bodyparser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//register our routes in app
app.use('/', routes);

// set port
const port = process.env.PORT || 3000

// start our server
app.listen(port, () => {
    console.log(`server running on port${port}`)
});

export default app;