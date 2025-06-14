import  express from 'express';

//Importing Routes
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';

const app = express();
//database connection
connectDB();

app.use(express.json());

// http://localhost:8000/


app.use("/users", userRoutes);

app.listen( 8000, function(){
    console.log(`Server is Running at PORT 8000`)
})