const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const capsuleCollection = db.collection('capsule');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(userName) {
  return userCollection.findOne({ username: userName });
}

async function createCapsule(capsule) {
    await capsuleCollection.insertOne(capsule);
}

async function getCapsules(userName) {
  const capsules = await capsuleCollection.find({ user: userName }).toArray();
  console.log("In database ", capsules);
  return capsules;
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  createCapsule,
  getCapsules
};
