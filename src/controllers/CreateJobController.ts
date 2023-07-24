import { Request, Response  } from "express";
import { prismaClient } from "../database/prismaClient";


export class CreateJobController {
    async handle(request: Request, response: Response) {

        const { title, description, salary, company, email, new_job } = request.body;

            const job = await prismaClient.job.create({
                data: {
                    title,
                    description,
                    salary,
                    company,
                    email,
                    new_job
                }
            })        
        return response.json(job);
    }
}