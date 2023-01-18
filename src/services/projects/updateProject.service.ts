import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";

const updateProjectService = async (projectId: string, data: any) => {
  const projectsRepository = AppDataSource.getRepository(Project);
  const project = projectsRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project not exists", 404);
  }

  await projectsRepository.update(projectId, data);

  const updatedProject = projectsRepository.findOneBy({
    id: projectId,
  });

  return updatedProject;
};

export default updateProjectService;
