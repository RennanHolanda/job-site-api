import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class FindJobsController {
    async handle(request: Request, response: Response) {

        const job = await prismaClient.job.findMany()
        return response.json(job);
    }
}