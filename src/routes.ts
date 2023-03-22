import { Router } from "express";

const router = Router();

// index
router.get("/example");
// show
router.get("/example/:id");
// store
router.post("/example");
// update
router.put("/example/:id");
// delete
router.delete("/example/:id");

