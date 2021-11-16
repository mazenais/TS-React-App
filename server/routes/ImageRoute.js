import express from "express";
import ImageModel from "../models/ImageModel.js";
import multer from "multer";
import path from "path"; 

const router = express.Router();

// Step 5 - set up multer for storing uploaded files
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function(res, file, cb) {
        cb(
            null,
            file.filename + "-" + Date.now() + path.extname(file.originalname)
        );
    }
});

var upload = multer({ storage: storage, limits: { fileSize: 1000000 } });

router.get("/users/images");
router.post("/users/uploads")

export default router;