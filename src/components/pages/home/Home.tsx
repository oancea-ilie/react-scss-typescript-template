/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Button from '@components/common/Button';
import { classes } from '@utils/classes';
import { ReactComponent as Check } from '@icons/check.svg';
import edit from '@icons/edit.svg';
import mountain from '@images/mountain.png';
import css from './home.module.scss';

function Home() {
  console.log(css);
  return (
    <section className={classes('section')}>
      <div className={classes(css.home)}>
        <Check color="white" width={24} height={24} />
        <img src={edit} alt="edit" width={24} height={24} />
        <div>
          <img
            className="h_responsive_image"
            src={mountain}
            alt="edit"
            width={200}
            height={200}
          />
        </div>
        <h1 className={classes('h1', 'h_font_extralight')}>Home Section</h1>
        <Button>Click</Button>
      </div>
    </section>
  );
}

export default Home;
