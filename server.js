const express = require("express");
const path = require("path");
//make these routes api front end crub on notes
const indexRoutes = require("./routes/indexRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", indexRoutes);

app.use(express.static("public"));

// GET Route for homepage
app.get("/api", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

// GET Route for feedback page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
