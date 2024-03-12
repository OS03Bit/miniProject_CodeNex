const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../backend/config/db.js');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/index.js')
const errorMiddleware  = require('../backend/middleware/errorMiddleware.js')


const port = process.env.PORT || 5000;



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', require("./routes"));

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// app.use(errorMiddleware.notFound());
// app.use(errorMiddleware.errorHandler());

app.listen(port, () => console.log(`Server started on port ${port}`));
