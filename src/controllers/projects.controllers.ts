import { number } from "yup";
import { Request, Response } from "express";
import registerProjectService from "../services/projects/registerProject.service";

const registerProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await registerProjectService();

  return res.status(201).send(data);
};

const listAllProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await registerProjectService();

  return res.status(200).send(data);
};

const getAProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await registerProjectService();

  return res.status(200).send(data);
};

const updateProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await registerProjectService();

  return res.status(201).send(data);
};

const deleteProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await registerProjectService();

  return res.status(201);
};

export {
  registerProjectController,
  listAllProjectController,
  getAProjectController,
  updateProjectController,
  deleteProjectController,
};
