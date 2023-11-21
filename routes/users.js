import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router("/:id", verifyToken, getUser);

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friend", verifyToken, getUser);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;


