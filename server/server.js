import express  from "express"
import colors from "colors"
import dotenv  from "dotenv"
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
// import path from "path";
// import { fileURLToPath } from 'url';

// configure dotenv
dotenv.config();

// database cionfig
connectDb();


// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);


// deployment code 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/client/build')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// } else {
//     app.get('/', (req, res) => {
//         res.send("API is running successfully");
//     });
// }

// deployment code till here




//rest api
app.get('/',(req,res) => {
    res.send("<h1>welcome to ecommerce</h1>")
})

// port
const PORT  = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white);
})
