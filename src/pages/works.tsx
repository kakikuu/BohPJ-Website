// WorksPage コンポーネント
import Footer from "../components/footer";
import Navbar from "../components/navigation";
import DisplayContents from "../components/works/contents/index";
import WorksHeader from "../components/works/worksHeader/index";
import img from "../../public/images/background-member-header.png";

const WorksPage: React.FC= () => {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <WorksHeader></WorksHeader>
        <DisplayContents title="タイトルテスト" content="コンテンツテスト" file={img} />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default WorksPage;