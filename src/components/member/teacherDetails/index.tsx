import styles from "./teacherDetails.module.css";
import Image from "next/image";
import nakanishiImage from "/public/images/nakanishi.jpg";

function TeacherDetails() {
  return (
    <div className={styles.teacherDetails}>
      <div className={styles.teacherImageContainer}>
        <Image
          src={nakanishiImage}
          className={styles.teacherImage}
          alt="Teacher"
          height={300}
        />
        <div className={styles.teacherNameContainer}>
          <p className={styles.teacherName}>中西 崇文</p>
          <p className={styles.teacherNameAlphabet}>Nakanishi Takafumi</p>
        </div>
      </div>
      <div className={styles.teacherDescription}>
        <p className={styles.descriptionItem}>
          専門分野 : データマイニング、感性情報処理、メディアコンテンツ分析
        </p>
        <p className={styles.descriptionItem}>
          著書 :
          <br />
          スマートデータ・イノベーション（翔泳社）
          <br />
          シンギュラリティは怖くない:ちょっと落ちついて人工知能について考えよう(草思社)
        </p>
        <p className={styles.descriptionItem}>趣味 : ピアノ演奏、DTM</p>
      </div>
    </div>
  );
}

export default TeacherDetails;
