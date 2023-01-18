import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";

const filterProjectsByStacksService = async (
  stack: string
): Promise<Project[]> => {
  const projectsRepository = AppDataSource.getRepository(Project);
  const projects = projectsRepository.find({
    where: {
      stack: stack,
    },
  });

  return projects;
};

export default filterProjectsByStacksService;
