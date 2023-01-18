import { Router } from "express";

import {
  registerProjectController,
  listAllProjectsController,
  filterProjectsByStacksController,
  getAProjectController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/projects.controllers";
import validatedProjectIdMiddleware from "../middlewares/validatedProjectId.middlewares";

const projectsRouters = Router();

projectsRouters.post("", registerProjectController);
projectsRouters.get("", listAllProjectsController);
projectsRouters.get(":stack", filterProjectsByStacksController);
projectsRouters.get(
  ":projectId",
  validatedProjectIdMiddleware,
  getAProjectController
);
projectsRouters.patch(
  ":projectId",
  validatedProjectIdMiddleware,
  updateProjectController
);
projectsRouters.delete(
  ":projectId",
  validatedProjectIdMiddleware,
  deleteProjectController
);

export default projectsRouters;
