import { Request, Response  } from "express";
import { SearchJob } from "../model/SearchJob";

const jobModel = new SearchJob();

export class SearchJobController{
async findVacancies(request: Request, response: Response) {
    const { title } = request.query;

    if(!title || typeof title !== "string") {
        return response.status(400).json({ error: 'Nome inválido.' });
    }

    try {
        const vacanciesFound = await jobModel.searchJob(title);
        return response.json(vacanciesFound);
    } catch (error) {
        return response.status(500).json({ error: 'Erro ao buscar vaga.' });
    }
}
}
