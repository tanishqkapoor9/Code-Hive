import styles from '@styles/Header.module.css';
import Wave from '../Wave';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../Navbar';
import { IconContainer, IconsDiv, StyledHeader } from './HeaderStyles';
import { getRandomBackground, icons } from './config';

const Header = (props) => {
  const { image, text } = props;
  return (
    <>
      <Navbar />
      <div
        className={styles.headerWrapper}
        style={{
          height: '500px',
          position: 'relative'
        }}
        id='header'
      >
        {/* <!-- background on top --> */}
        <StyledHeader backgroundConfig={getRandomBackground()}>
          <IconsDiv>
            {icons.map((iconItem, idx) => {
              return (
                <IconContainer key={idx} iconConfig={iconItem}></IconContainer>
              );
            })}
          </IconsDiv>
        </StyledHeader>

        <motion.div
          className={styles.center_text}
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1
            }
          }}
        >
          <p>{text}</p>
          {text === 'Code Hive' && (
            <p className={styles.subline}>Achieving excellence together</p>
          )}
        </motion.div>
        <Wave />
      </div>
    </>
  );
};

export default Header;
