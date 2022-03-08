import express from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const __dirname = path.resolve();
  server.use("/", express.static(path.join(__dirname, "public")));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get("*", (req, res) => handle(req, res));

  server.listen(prod ? process.env.PORT : 3000, () => {
    console.log(
      `next+express running on port ${prod ? process.env.PORT : 3000}`
    );
  });
});
