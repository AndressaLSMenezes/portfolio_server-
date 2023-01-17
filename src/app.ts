import "reflect-metadata";
import "express-async-errors";
import express from "express";
import projectsRouters from "./routers/projects.routers";

const app = express();

app.use("projects", projectsRouters)

export default app;
