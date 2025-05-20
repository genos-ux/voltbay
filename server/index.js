import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan"

const app = express();

// register middlewares.
app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps you protect your app by setting various HTTP headers.
app.use(morgan("dev")) // log the requests.

app.get('/',(req,res) => {
    res.send("Hello from the backend");
})

app.listen(4000, () => console.log("Server is running on port 4000"));