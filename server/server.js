import express from 'express';
import './config/dotenv.js'
import giftsRouter from './routes/gifts.js';
import cors from 'cors'

const app = express();
app.use(cors())
const PORT = 3001;

app.use('/gifts', giftsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

