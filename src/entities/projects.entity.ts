import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("projects")
class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  urlGithub: URL;

  @Column()
  description: string;
}

export default Project;