import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL_LOCALHOST = 'mongodb://localhost:27017/Ebyrt-to-do';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
  || MONGO_DB_URL_LOCALHOST,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;