/* eslint-disable prettier/prettier */
import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
 
  return (
    
    <div >
    <Wrapper>
      <div className={styles.my}>
        <h1 className={styles.title}>
          <span className={styles.spark}>Spark</span>
          <span className="dark:bg-white">Ideas</span>

        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
        </Container>
        <p className={styles.subtitle}>
          Spark Ideas is a tool for modern worlds to discover, create and share ideas to the world
        </p>
      </div>
    </Wrapper>
    </div>
  );
};

export default Hero;
