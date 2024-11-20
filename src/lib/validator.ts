import { NextFunction, Request, Response } from 'express';
import z from 'zod';

export function schemaValidation(schema: z.AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next()
        } catch (err) {
            next(err);
        }
    };
}