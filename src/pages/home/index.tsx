// import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import SocialMedias from '../../components/SocialMedias';

import TextCarousel from '../../components/Carousel';

import styles from './styles.module.css';
import Projects from '../../components/Projects';

function Home() {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/portfolio');
  };

  return (
    <>
      <div className={ styles.homeWrapper }>
        <section className={ styles.homeInfo }>
          <div className={ styles.homeSubtitleWrapper }>
            <h2 className={ styles.homeSubtitle }>{'.euSou '}</h2>
            <h2>{'{'}</h2>
          </div>
          <div className={ styles.homeTitleWrapper }>
            <h1 className={ styles.homeTitle }>Eberton Arouxa</h1>
            <span className={ styles.homeTitleSpecialCharacter }>:</span>
          </div>
          <p className={ styles.homeDescription }>
            Desenvolvedor full stack com sólida expertise em design gráfico
            e programação. Possuo profundo entendimento dos princípios de design,
            usabilidade e estética, capacitando-me a abordar projetos de desenvolvimento
            web com uma perspectiva crítica e artística.
          </p>
          <h2>{'};'}</h2>
          <SocialMedias />
        </section>
        <section className={ styles.homeImageWrapper }>
          <img src="public/eberton-arouxa-tinta.png" alt="foto de eberton arouxa" />
        </section>
      </div>
      <div className={ styles.contentWrapper }>
        <TextCarousel />
        <div className={ styles.aboutMeContent }>
          <article className={ styles.articleContentWrapper }>
            <h2 id="sobreMim" className={ styles.aboutMeParagraphTitle }>
              Sobre mim:
            </h2>
            <br />
            <p className={ styles.aboutMeParagraph }>
              Tenho 28 anos, sou natural de Alagoas, mas fui criado no Rio de Janeiro.
              Gosto muito de ilustração e animação, sou apaixonado por tecnologia
              e sou formado em Design Gráfico pela Universidade Unigranrio. Foi aí que
              descobri a programação.
            </p>
            <br />
            <p className={ styles.aboutMeParagraph }>
              Atualmente, sou desenvolvedor full stack e estou sempre em busca de novos
              desafios e conhecimentos.
            </p>
            <br />
            <p className={ styles.aboutMeParagraph }>
              Sou uma pessoa muito comunicativa, gosto de trabalhar em equipe e de
              compartilhar conhecimento.
            </p>
          </article>
          <aside>
            <h2 className={ styles.projectTitle }>
              Projetos:
            </h2>
            <Projects
              href="https://github.com/ebertonArouxa/Menu-digital"
              imageAlt="Foto do projeto meu menu digital"
              imageSrc="public/meu-menu-digital.png"
              projectText="Crie e gerencie seu restaurante com facilidade. Impulsione seu
              negócio na plataforma de delivery ideal."
              projectTitle="Meu-menu-digital"
            />
            <Projects
              href="https://github.com/ebertonArouxa/online-store"
              imageAlt="Foto do projeto online store"
              imageSrc="public/online-store.png"
              projectText="Integra-se à API do Mercado Livre,
              permitindo aos usuários pesquisar produtos por categoria e palavra-chave"
              projectTitle="Online-store"
            />
            <Projects
              href="https://github.com/ebertonArouxa/receita-facil"
              imageAlt="Foto do projeto receita facil"
              imageSrc="public/receita-facil.jpg"
              projectText="o Receita Fácil é uma ferramenta abrangente e prática para
              entusiastas da culinária."
              projectTitle="Receita-facil"
            />
            <button type="button" onClick={ handleSeeMore }>Ver mais...</button>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
