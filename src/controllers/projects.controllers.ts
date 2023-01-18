import { Request, Response } from "express";
import registerProjectService from "../services/projects/registerProject.service";
import listAllProjectsService from "../services/projects/listAllProjects.service";
import getAProjectService from "../services/projects/getAProject.service";
import updateProjectService from "../services/projects/updateProject.service";
import deleteProjectService from "../services/projects/deleteProject.service";
import filterProjectsByStacksService from "../services/projects/filterProjectsByStacks.service";

const registerProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await registerProjectService(req.body);

  return res.status(201).send(data);
};

const listAllProjectsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await listAllProjectsService();

  return res.status(200).send(data);
};

const filterProjectsByStacksController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await filterProjectsByStacksService(req.params.stack);

  return res.status(200).send(data);
};

const getAProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getAProjectService(req.params.projectId);

  return res.status(200).send(data);
};

const updateProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {body, params} = req
  const data = await updateProjectService(params.projectId, body);

  return res.status(200).send(data);
};

const deleteProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await deleteProjectService(req.params.projectId);

  return res.status(200);
};

export {
  registerProjectController,
  listAllProjectsController,
  filterProjectsByStacksController,
  getAProjectController,
  updateProjectController,
  deleteProjectController,
};
