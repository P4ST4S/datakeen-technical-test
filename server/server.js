const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');
const processText = require('./routes/process-text');
const validateText = require('./routes/validate-text');

const app = express();
const port = 5000;

app.use(cors());
app.use(logger);

app.use(express.json());
app.use('/process-text', processText);
app.use('/validate-text', validateText);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
