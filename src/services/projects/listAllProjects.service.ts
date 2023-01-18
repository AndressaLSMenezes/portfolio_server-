import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";

const listAllProjectsService = async (): Promise<Project[]> => {
  const projectsRepository = AppDataSource.getRepository(Project);
  const projects = projectsRepository.find();

  return projects;
};

export default listAllProjectsService;
