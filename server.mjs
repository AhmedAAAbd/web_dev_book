import express from "express";
import route from "./routes/route.mjs";
import { engine } from "express-handlebars";
const app = express();

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/api/v1/", route);
app.use(express.static("public"));

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});

// Error handling
app.on("uncaughtException", (err) => {
	console.error(err);
});
