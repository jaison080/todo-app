const dotenv=require('dotenv')
dotenv.config();
module.exports = {
    "mongourl" : process.env.MONGO_URI
}