import express from "express";
import { addjobs, getAlljobs } from "../controller/job.controller.js";

const job = express.Router();

job.get('/', getAlljobs);
job.post("/", addjobs);

export default job;