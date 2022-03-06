const express = require("express");
const path = require("path");
//make these routes api front end crub on notes
const indexRoutes = require("./develop/routes/indexRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", indexRoutes);

app.use(express.static("./develop/public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./develop/public/index.html"))
);

// GET Route for feedback page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./develop/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
