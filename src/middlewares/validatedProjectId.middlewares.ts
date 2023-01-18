import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Project from "../entities/projects.entity";
import AppError from "../errors/appError";

const validatedProjectIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const projectsRepository = AppDataSource.getRepository(Project);
  const project = await projectsRepository.findOneBy({
    id: req.params.projectId,
  });

  if (!project) {
    throw new AppError("Project not exists", 404);
  } else if (!project.isActive) {
    throw new AppError("Project not exists", 404);
  }
  return next();
};

export default validatedProjectIdMiddleware;
