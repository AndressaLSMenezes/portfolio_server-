import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";

const deleteProjectService = async (projectId: string) => {
  const projectsRepository = AppDataSource.getRepository(Project);
  const project = await projectsRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project not exists", 404);
  } else if (!project.isActive) {
    throw new AppError("Project not exists", 404);
  }

  await projectsRepository.softDelete(projectId)
  await projectsRepository.save({...project, isActive: false})
};

export default deleteProjectService;
