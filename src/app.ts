import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import publicRoutes from "./publicRoutes";

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.options("/", cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use(publicRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening at port ${port}.`);
});
