import { Router } from "express";

import {
  registerProjectController,
  listAllProjectController,
  getAProjectController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/projects.controllers";

const projectsRouters = Router();

projectsRouters.post("", registerProjectController);
projectsRouters.get("", listAllProjectController);
projectsRouters.get("", getAProjectController);
projectsRouters.patch("", updateProjectController);
projectsRouters.delete("", deleteProjectController);

export default projectsRouters;
