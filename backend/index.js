import express from 'express';
import cors from 'cors';
import performanceAnalyzer from './performanceAnalyzer.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.get('/api/analyze', async (req, res) => {
  const url = req.query.url;
  console.log("api/analyze")
  try {
    const performanceData = await performanceAnalyzer(url);
    res.json(performanceData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to analyze website' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
