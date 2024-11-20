import { Body, Controller, Get, Middlewares, Post, Route } from "tsoa";
import { RequestHandler } from "express";
import { PingSchema, pingSchema } from "@/schemas/ping"
import { schemaValidation } from "@/lib/validator";

@Route('api')
export class PingController extends Controller {
    @Get('ping')
    public async ping(): Promise<PingSchema> {
        return {
            message: 'pong'
        }
    }

    @Post('ping')
    @Middlewares<RequestHandler>(schemaValidation(pingSchema))
    public async pingPost(@Body() body: PingSchema): Promise<PingSchema> {
        return {
            message: 'pong'
        }
    }
}