//create a get (shownotes)
const fb = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../Develop/helpers/fsUtils");

// GET Route for retrieving all the feedback
fb.get("/", (req, res) =>
  readFromFile("./develop/db/db.json").then((data) =>
    res.json(JSON.parse(data))
  )
);

// create a post note (post route)

fb.post("/", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      feedback_id: uuidv4(),
    };

    readAndAppend(newNote, "./Develop/db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
});

//extra credit delete (notes)

module.exports = fb;
