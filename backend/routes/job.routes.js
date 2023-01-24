import express from "express";
import { addjobs, deleteJobs, getAlljobs } from "../controller/job.controller.js";

const job = express.Router();

job.get('/', getAlljobs);
job.post("/", addjobs);
job.delete("/deletejobs", deleteJobs);


export default job;