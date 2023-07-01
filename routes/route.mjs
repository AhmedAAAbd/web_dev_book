import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	console.log("GET / ");
	res.render("home", { title: "Home" });
});

export default router;
