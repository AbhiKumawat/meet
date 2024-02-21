// import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import { config } from '~/config';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      {/* <Link secondary className={styles.link} href="/" target="_self">
        :D
      </Link> */}
    </Text>
  </footer>
);
