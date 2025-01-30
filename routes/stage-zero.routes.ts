import {Router} from "express";
import {getUserInformation} from "../controllers/stage-zero.controller";

const router = Router();

router.route("/").get(getUserInformation);

export default router;