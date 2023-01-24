import Job from "../model/job.model.js"
import User from "../model/user.model.js";

export const getAlljobs = async (req, res) => {
    try{
        let jobs = await Job.find()
        res.status(200).send({jobs})
    }catch(err){
        console.log(err);
        res.status(500).send({message: err.message});
    }
}

// export const getJobById = async (req, res) => {
//     try{
//         let job = await Job.findById(req.params.id)
//     }catch(err){
//         console.log(err);
//         res.status(500).send({message: err.message});
//     }
// }

export const addJob = async (req, res) => {
    try{   
        let job = new Job(req.body)
        await job.save()
        res.status(201).send(job)
    }catch(err){
        console.log(err);
        res.status(500).send({message: err.message});
    }
}

export const getAllJobsOfUser = async (req, res) => {
    try{
        let token = req.headers.authorization;
        let decode = jwt.verify(token, process.env.JWT_SECRET);
        let user = await User.findById(decode._id);
        let jobs = [];
        for(let i=0;i<user.jobs.length;i++){
            jobs.push(await Job.findById(user.jobs[i]));
        }
        res.status(200).send({jobs});

    }catch(err){
        console.log(err);
        res.status(500).send({message: err.message});
    }
}

export const addjobs = async (req, res) => {
    try{
        await Job.insertMany(req.body);
        console.log("Added Jobs")
        res.send({message:"Jobs Added"});
    }catch(err){
        console.log(err);
        res.status(500).send({message: err.message})
    }
}