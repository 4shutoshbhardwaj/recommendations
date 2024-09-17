const express = require('express');
const app = express();
const collectionRoutes = require('./routes/collectionRoutes');
const errorHandler = require('./utils/errorHandler');

app.use(express.json());
app.use('/api', collectionRoutes);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
