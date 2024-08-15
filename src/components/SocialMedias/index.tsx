import styles from './styles.module.css';

function SocialMedias() {
  return (
    <div className={ styles.homeSocialMediaButtons }>
      <a href="https://github.com/ebertonArouxa">
        <span className={ styles.homeSocialMedia }>GitHub</span>
        <img
          className={ styles.homeSocialMediaImage }
          src="public/icons8-github-36.png"
          alt="logo do github"
        />
      </a>
      <a href="https://www.linkedin.com/in/ebertonsouza/">
        <span className={ styles.homeSocialMedia }>LinkedIn</span>
        <img
          className={ styles.homeSocialMediaImage }
          src="public/icons8-linkedin-36.png"
          alt="logo do linkedin"
        />
      </a>
    </div>
  );
}

export default SocialMedias;
