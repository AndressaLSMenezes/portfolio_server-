import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";

const getAProjectService = async (projectId: string) => {
  const projectsRepository = AppDataSource.getRepository(Project);
  const project = projectsRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project not exists", 404);
  }

  return project;
};

export default getAProjectService;
