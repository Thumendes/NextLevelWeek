import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import morgan from "morgan";
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(errors);

app.listen(3333, () => console.log("http://localhost:3333/"));
