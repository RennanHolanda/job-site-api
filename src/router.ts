import { Router } from 'express';
import { CreateJobController } from './controllers/CreateJobController';
import { FindJobsController } from './controllers/FindJobsController';
import { FindJobByIdController } from './controllers/FindJobByIdController';
import { SearchJobController } from './controllers/SearchJobController';

const router = Router()

const CreateJob = new CreateJobController();

const FindJobs = new FindJobsController();
const FindJobById = new FindJobByIdController();

const SearchJob = new SearchJobController();

router.post("/job", CreateJob.handle)
router.get("/jobs", FindJobs.handle)
router.get("/job/:id", FindJobById.handle)
router.get("/searchjob", SearchJob.findVacancies)

export { router };

