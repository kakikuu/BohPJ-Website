import Link from "next/link";

import Navigation from "../../components/navigation/";
import Header from "../../components/member/header/";
import TeacherDetails from "../../components/member/teacherDetails/";
import Footer from "../../components/footer";

import styles from "../../styles/member.module.css";

export default function Members() {
  const memberYears = [1, 2, 3, 4];

  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Section title="Teacher">
          <div className={styles.teacherInfo}>
            <TeacherDetails />
          </div>
        </Section>
        <Section title="Member">
          <ul className={styles.memberList}>
            {memberYears.map((year) => (
              <li key={year}>
                <Link
                  href={`/member/${year}?scrollTo=member-section`}
                  className={styles.memberLink}
                >{`${year}年次`}</Link>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}
