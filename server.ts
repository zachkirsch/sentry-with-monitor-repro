import * as Sentry from "@sentry/node";
import express from "express";
const app = express();

app.get("/crash", async (_req, res) => {
  try {
    await Sentry.withMonitor("my monitor", async () => {
      throw new Error("Oops!");
    });
    res.sendStatus(200);
  } catch (error) {
    console.log("Error caught");
    res.sendStatus(500);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
  console.log("To crash server: curl http://localhost:8000/crash");
});
