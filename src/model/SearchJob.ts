import { prismaClient } from "../database/prismaClient";
import { Job } from "@prisma/client"

export class SearchJob {

    async searchJob(title: string): Promise<Job[]> {

        try {
            const searchJob = await prismaClient.job.findMany({
                where: {
                    title: {
                        contains: title,
                        mode: "insensitive"
                    }
                }
            })
            return searchJob;
        } catch (error) {
            throw new Error('Erro ao buscar vaga: ' + error);
        }
    }
}