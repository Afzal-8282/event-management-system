// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Initialize app
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Middleware
// app.use(cors());
// app.use(bodyParser.json());

// Routes
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// Start server

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));
