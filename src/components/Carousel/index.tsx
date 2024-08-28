import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

function TextCarousel() {
  const textData = [
    'Next.js',
    'React',
    'TypeScript',
    'Jest',
    'RTL',
    'CSS',
    'HTML',
    'React Hooks',
    'Redux',
    'Context API',
    'JavaScript',
    'Tailwind',
    'Styled components',
    'SQL',
    'Prisma',
    'Node.js',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'Git',
    'GitHub',
    'vue.js',
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    swipeToSlide: true,
  };

  return (
    <div className={ styles.textCarouselContainer }>
      <Slider { ...settings } accessibility>
        {textData.map((text, index) => (
          <div key={ index } className={ styles.textSlide }>
            {text}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TextCarousel;
