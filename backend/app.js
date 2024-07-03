const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const tasksRoute = require('./routes/tasks');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/api', tasksRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});