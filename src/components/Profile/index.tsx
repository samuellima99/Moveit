import { useContext } from 'react';
import { ChallengeContext } from '../../hooks/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/samuellima99.png" alt="Samuel Lima" />
      <div>
        <strong>Samuel Lima</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
