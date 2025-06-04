import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import router from "./routes/product.js";
import { sql } from "./config/db.js";
import { arcjetMiddleware } from "./middleware/arcjet.js";

const app = express();
const PORT = process.env.PORT || 4000;

// register middlewares.
app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps you protect your app by setting various HTTP headers.
app.use(morgan("dev")); // log the requests.

// apply arcjet rate-limit to all routes
app.use(arcjetMiddleware);

app.use("/api/products/", router);

async function initDB() {
  try {
    await sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10,2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
    console.log("Database initialized successfully.");
  } catch (error) {
    console.log("Error initDB", error);
  }
}

initDB().then(() => {
  app.listen(4000, () => console.log(`Server is running on port ${PORT}`));
});