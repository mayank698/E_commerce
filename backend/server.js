const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const app = express();
const connectToMongo = require("./db");
connectToMongo();
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const port = 5000;
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/api/v1", require("./routes/productRoutes"));
app.use("/api/v1", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/orderRoutes"));

//Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutdown server`);
  process.exit(1);
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Middleware for error
app.use(errorMiddleware);
const server = app.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`);
});

//unhadled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
