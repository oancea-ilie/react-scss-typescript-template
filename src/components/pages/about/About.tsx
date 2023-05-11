import Button from '@components/common/Button';
import { classes } from '@utils/classes';
import css from './about.module.scss';

function About() {
  const { about } = css;
  return (
    <section className="section">
      <div className={classes(about)}>
        <h1 className={classes(css.font_extralight, css.color_white)}>
          About Section
        </h1>
        <Button>Click</Button>
      </div>
    </section>
  );
}

export default About;
