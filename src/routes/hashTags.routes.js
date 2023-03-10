import { hash } from "bcrypt";
import { Router } from "express";
import { showHashTags } from "../controllers/hashTags.controller.js";


const hashTagsRouter = Router()

hashTagsRouter.get("/hashtags",showHashTags)


export default hashTagsRouter