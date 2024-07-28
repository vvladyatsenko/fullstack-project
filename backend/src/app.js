const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json());
app.use(cors());

const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;
const port = process.env.PORT || 5000;

console.log('MONGODB_URI:', dbURI);
console.log('JWT_SECRET:', jwtSecret);

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
