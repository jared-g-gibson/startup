const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
app.use(express.json());
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');


let users = [];
let capsules = [];

let total_capsules = 0;

const authCookieName = 'token';

let apiRouter = express.Router();
app.use(`/api`, apiRouter);
app.use(express.static('public'));


app.get('/', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

// Create a capsule
apiRouter.post('/create_capsule', async (req, res) => {
  const capsule = {
    user: req.body.user,
    title: req.body.title,
    date: req.body.date, 
    journal: req.body.journal
  }

  DB.createCapsule(capsule);
  capsules.push(capsule);
  res.send({capsule: capsule});
});

// Get Capsules for a user
apiRouter.post('/get_capsules', async (req, res) => {
  const user_capsules = await getCapsules(req.body.user);
  res.send({ user_capsules: user_capsules });
});

async function getCapsules(user) {
  const my_user_capsules = await DB.getCapsules(user);
  // const user_capsules = my_user_capsules;
  // const user_capsules_fixed = [];
  // for(let i = 0; i < user_capsules.length; i++) {
  //   let capsule = {
  //     title: user_capsules[i][title],
  //     date: user_capsules[i][date],
  //     journal: user_capsules[i][journal]
  //   };
  //   user_capsules_fixed.push(capsule);
  // }
  return my_user_capsules;
}

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('user', req.body.username)) {
    res.status(409).send({ msg: 'Existing username' });
  } else {
    const user = await createUser(req.body.username, req.body.password);
    
    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('user', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);
  DB.addUser(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);