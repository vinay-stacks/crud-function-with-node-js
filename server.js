import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import route from './routes/userRoute.js';

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

if (!MONGOURL) {
  console.error("Missing MONGO_URL in environment variables.");
  process.exit(1);
}
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use('/api', route);


  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

