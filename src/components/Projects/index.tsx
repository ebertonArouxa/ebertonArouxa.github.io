import styles from './styles.module.css';

export interface ProjectsProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  projectTitle: string;
  projectText: string;
}

function Projects({
  href,
  imageAlt,
  imageSrc,
  projectText,
  projectTitle,
}: ProjectsProps) {
  return (
    <a href={ href } className={ styles.projectLink }>
      <div className={ styles.projectComponentWrapper }>
        <div>
          <img
            src={ imageSrc }
            alt={ imageAlt }
            className={ styles.projectImage }
          />
        </div>
        <div className={ styles.projectInfoWrapper }>
          <h3 className={ styles.projectTitle }>{ projectTitle }</h3>
          <p className={ styles.projectText }>{ projectText }</p>
        </div>
      </div>
    </a>
  );
}

export default Projects;
