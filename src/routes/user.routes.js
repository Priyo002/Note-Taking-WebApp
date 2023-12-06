import express from "express";
import bodyParser from "body-parser";
import { Note } from "../models/notes.models.js";
import { createNote,getNote } from "../controllers/user.controllers.js";

const app = express();
app.use(bodyParser.json());


app.get('/note', getNote)
app.post('/note',createNote)

export default app