const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the frontend/dist directory
app.use(express.static(path.join(__dirname, "frontend/dist")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
