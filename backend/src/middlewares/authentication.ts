import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export async function authenticateUser(req: Request, res: Response, next: NextFunction) {
const accessToken = req.cookies["access-token"];
if (!accessToken) {
return res.sendStatus(401);
}

// req.user = user;
next();}