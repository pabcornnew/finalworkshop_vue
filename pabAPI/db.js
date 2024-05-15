// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/finalwsvue');
    console.log('conneted db success \nip: \'' + process.env.DB_HOST + ":3000" + '\'')
  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}