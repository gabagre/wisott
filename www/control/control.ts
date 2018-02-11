import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as fs from "fs";

class Control {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false })); 
    this.express.use(cookieParser());
  }

  private routes(): void {
    let router = express.Router();

    router.use(express.static(path.join(__dirname, "../app")));

    router.get("/watchdog", (req, res) => {
      res.json({ message: "Hello World"});
    });

    // 500-series error handler
    router.use((err, req, res, next) => {
      const msg = `500 ${err}`;
      console.error(msg);
      res.status(500).send(msg);
    });

    // 404 handler must always be last
    router.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../app/index.html"));
    });

    this.express.use("/", router);
  }
}

export default new Control().express;