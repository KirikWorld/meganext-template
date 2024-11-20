import { IncomingMessage, ServerResponse } from "http";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = require("express")();
  server.all("*", (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    return handle(req, res);
  });
  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
