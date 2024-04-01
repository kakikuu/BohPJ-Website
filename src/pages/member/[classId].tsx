import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

import Navigation from "../../components/navigation/";
import Header from "../../components/member/header/";
import TeacherDetails from "../../components/member/teacherDetails/";
import MemberCard from "../../components/member/memberCard/";
import membersData from "../../data/members";
import Footer from "../../components/footer/";

import styles from "../../styles/MemberDetail.module.css";

const MemberDetail: () => JSX.Element = () => {
  const router = useRouter();
  const classId =
    typeof router.query.classId === "string" ? router.query.classId : undefined;
  const scrollTo =
    typeof router.query.scrollTo === "string"
      ? router.query.scrollTo
      : undefined;

  const filteredMembers = membersData.filter(
    (member) => member.classId === Number(classId)
  );

  useEffect(() => {
    const scrollToSection = () => {
      if (scrollTo) {
        const targetElement = document.getElementById(scrollTo);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToSection();

    const handleRouteChange = () => {
      scrollToSection();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [classId, scrollTo, router.events]);

  const renderMemberLinks = () => {
    return [1, 2, 3, 4].map((year) => (
      <li key={year}>
        <Link
          href={`/member/${year}?scrollTo=member-section`}
          className={styles.memberLink}
        >{`${year}年次`}</Link>
      </li>
    ));
  };

  return (
    <div>
      <Navigation />
      <Header />

      <div className={styles.container} id="teacher-section">
        <h2 className={styles.title}>Teacher</h2>
      </div>

      <div className={styles.teacherInfo}>
        <TeacherDetails />
      </div>

      <div className={styles.container} id="member-section">
        <h2 className={styles.title}>Member</h2>
      </div>

      <ul className={styles.memberClass}>{renderMemberLinks()}</ul>

      <h1 className={styles.classId}>{classId}年次</h1>

      <div className={styles.memberList}>
        {filteredMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MemberDetail;
