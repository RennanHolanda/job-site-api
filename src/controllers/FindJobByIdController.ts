import { Request, Response  } from "express";
import { prismaClient } from "../database/prismaClient";


export class FindJobByIdController {
    async handle(request: Request, response: Response) {

        const { id } = request.params

            const jobById = await prismaClient.job.findUnique({
                where: {
                    id
                }
            })        
        return response.json(jobById);
    }
}