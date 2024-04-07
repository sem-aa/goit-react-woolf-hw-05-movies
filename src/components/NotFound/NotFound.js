import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.text}>Page not found</p>
    </div>
  );
};

export default NotFound;
