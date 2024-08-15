import styles from './styles.module.css';

function Header() {
  return (
    <div className={ styles.fixedHeader }>
      <nav className={ styles.headerWrapper }>
        <div>
          <span className={ styles.specialCharacter }>&lt;</span>
          <span className={ styles.headerTitle }>
            {'Eberton '}
          </span>
          <span className={ styles.specialCharacter }>/&gt;</span>
        </div>
        <ul className={ styles.headerNavWrapper }>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <a href="/" className={ styles.headerNav }>
              {'Página inicial '}
            </a>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <a href="#sobreMim" className={ styles.headerNav }>
              {'Sobre mim '}
            </a>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <a href="portfolio" className={ styles.headerNav }>
              {'Portfólio '}
            </a>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <a href="contato" className={ styles.headerNav }>
              {'Contato '}
            </a>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
