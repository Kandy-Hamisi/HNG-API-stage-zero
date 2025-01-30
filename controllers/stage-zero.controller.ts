import { Request, Response } from 'express';

export const getUserInformation = (req: Request, res: Response)=> {
    const response = {
        email: "hkandy2000@gmail.com",
        current__datetime: new Date().toISOString(),
        github_url: "https://github.com/Kandy-Hamisi",
    };

    res.status(200).json(response);
}