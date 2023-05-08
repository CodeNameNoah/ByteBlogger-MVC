import path from 'path';
import express from 'express';
import routes from './controllers/index.js';
import sequelize from './config/connection.js';
import helpers from './utils/helpers.js';
import exphbs from 'express-handlebars';
import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(import.meta.url, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const SequelizeSessionStore = SequelizeStore(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 1800000
  },
  rolling: true,
  resave: true,
  saveUninitialized: true,
  store: new SequelizeSessionStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
