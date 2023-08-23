import styles from "./membercard.module.css";

function MemberCard({ member }) {
  return (
    <div className={styles.memberCard}>
      <img
        src={member.image}
        alt={`${member.name} image`}
        className={styles.memberImage}
      />
      <h3 className={styles.memberName}>{member.name}</h3>
    </div>
  );
}

export default MemberCard;
