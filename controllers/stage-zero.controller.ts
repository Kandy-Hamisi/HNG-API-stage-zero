import { Request, Response } from 'express';

export const getUserInformation = (req: Request, res: Response)=> {
    const response = {
        email: "hkandy2000@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Kandy-Hamisi/HNG-API-stage-zero.git",
    };

    res.status(200).json(response);
}