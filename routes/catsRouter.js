import { getAllBreeds, getImageById } from "../controllers/catsControllers.js";
import express from "express";

const router = express.Router();
router.get("/", getAllBreeds);
router.get("/:id", getImageById);

export { router };
