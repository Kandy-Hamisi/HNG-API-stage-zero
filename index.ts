import express from "express";
import cors from 'cors';
import stageZeroRoutes from "./routes/stage-zero.routes";

const app = express();
const PORT = process.env.PORT || 5000;

// setup application middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/", stageZeroRoutes);

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));