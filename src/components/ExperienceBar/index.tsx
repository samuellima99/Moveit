import { useContext } from 'react';
import { ChallengeContext } from '../../hooks/ChallengesContext';
import styles from '../../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );
  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currenExperience}
          style={{ position: 'absolute', left: `${percentToNextLevel}%` }}
        >
          {currentExperience} XP
        </span>
      </div>
      <span>{experienceToNextLevel} XP</span>
    </header>
  );
}
