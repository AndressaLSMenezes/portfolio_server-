import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";

const registerProjectService = async (data: any) => {
  const { urlGithub } = data;

  const projectsRepository = AppDataSource.getRepository(Project);
  const projectsExists = await projectsRepository.findOneBy({
    urlGithub: urlGithub,
  });

  if (projectsExists) {
    throw new AppError("Project alredy register", 401);
  }

  const create = projectsRepository.create(data);
  await projectsRepository.save(create);

  return create;
};

export default registerProjectService;
