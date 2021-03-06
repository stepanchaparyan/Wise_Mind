const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

require('dotenv').config();

app.use(cors());

// connet to mongoDB
const connectDB = require('./mongoConfig/mongoDB');
connectDB();

app.use(express.json({ extended: true }));

// API routes
app.use('/api', require('./routes/allData'));

// use static files
app.use('/', express.static(path.join('..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
