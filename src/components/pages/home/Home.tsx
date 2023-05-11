import Button from '@components/common/Button';
import { classes } from '@utils/classes';
import css from './home.module.scss';

function Home() {
  const { home } = css;
  return (
    <section className="section">
      <div className={classes(home)}>
        <h1 className={classes(css.font_extralight, css.color_white)}>
          Home Section
        </h1>
        <Button>Click</Button>
      </div>
    </section>
  );
}

export default Home;
