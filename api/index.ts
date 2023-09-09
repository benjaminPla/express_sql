import express, { Response, Request } from "express";
import "dotenv/config";
import router from "./routes";

const api = express();
api.use(express.json());
api.use(router);

const port: string | number = process.env.API_PORT || 3000;
api.listen(port, () => console.log(`api running on port ${port}`));
