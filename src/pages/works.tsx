// WorksPage コンポーネント
import Footer from "../components/footer";
import Navbar from "../components/navigation";
import { fetchAsset } from "../libs/client_asset";
import { fetchEntries } from "../libs/client_entries";
import DisplayContents from "../components/works/contents/index";
import WorksHeader from "../components/works/worksHeader/index";
import { WorksPosts } from "@/types/works";

type WorksComponentProps = {
  posts: WorksPosts[];
};

const WorksPage: React.FC<WorksComponentProps> = ({ posts }) => {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <WorksHeader></WorksHeader>
        <DisplayContents posts={posts} />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default WorksPage;

export async function getStaticProps() {
  const resEntries = await fetchEntries(); // 投稿されているデータをすべて取得

  const posts = resEntries.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
