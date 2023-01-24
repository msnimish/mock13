import mongoose from "mongoose";

let JobSchema = mongoose.Schema({
    title:{ type:String, required:true },
    company: { type:String },
    location: { type:String },
    contract: {type: String, enum: ["Part-time", "Full-time"], default: "Full-time"},
    description: { type:String },
    companyLogo: { type:String },

}, { timestamps: true });

let Job = mongoose.model("Job", JobSchema);

export default Job;