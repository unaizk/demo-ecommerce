import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import { notFound, errorHandler} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();

connectDB()
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users',userRouter)

app.get('/',(req,res) =>{
    res.send('server is ready')
})

app.use(notFound)
app.use(errorHandler);


app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
})