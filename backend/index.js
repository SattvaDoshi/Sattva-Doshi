import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Form from './form.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  Form.create({ name, email, subject, message })
    .then(() => {
      res.status(201).json({ message: 'Form submitted successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to submit form' });
    });
});

app.get('/forms', async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forms' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
});