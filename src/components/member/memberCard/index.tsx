import styles from "./membercard.module.css";
import Image from "next/image";
import MemberCardProps from "@/types/member";

function MemberCard({ member }: MemberCardProps) {
  return (
    <div className={styles.memberCard}>
      <Image
        src={member.image}
        alt={`${member.name} image`}
        className={styles.memberImage}
        width={200}
        height={200}
      />
      <h3 className={styles.memberName}>{member.name}</h3>
    </div>
  );
}

export default MemberCard;
