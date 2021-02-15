const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cors());

//connet to mongoDB
const connectDB = require('./mongoConfig/mongoDB');
connectDB();

app.use(fileUpload());
app.use(express.json({ extended: true }));

// API routes
app.use('/api/books', require('./routes/books'));
app.use('/api/texts', require('./routes/texts'));

// use static files
app.use('/', express.static(path.join('..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
