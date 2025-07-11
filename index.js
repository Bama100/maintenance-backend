const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Maintenance Backend API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});