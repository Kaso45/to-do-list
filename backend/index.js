const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const tasksRouter = require('./routes/tasks');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
