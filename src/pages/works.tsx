// WorksPage コンポーネント
import Footer from "../components/footer";
import Navbar from "../components/navigation";
import fetchEntries from "../libs/client_entries";
import DisplayContents from "../components/works/contents/index";
import WorksHeader from "../components/works/worksHeader/index";
import { WorksPosts } from "@/types/works";
import { WorkContentfulEntry } from "@/types/works";
import { WorkFields } from "@/types/works";

type WorksComponentProps = {
  posts: WorksPosts[];
};

const WorksPage: React.FC<WorksComponentProps> = ({ posts }) => {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <WorksHeader></WorksHeader>
        <DisplayContents title="Approximate Inverse Model Explanations(AIME)を用いた不完全データによる機械学習モデル挙動評価手法の実現" content="https://confit.atlas.jp/guide/event-img/deim2024/T1-A-4-01/public/pdf?type=in" 
          posts={posts} />
        <DisplayContents title="scikit-learnを0から作ろうProject" content="https://citrine-nemophila-f1d.notion.site/scikit-learn-0-Project-e250fa4e2206458682ce9015e9a29e79" 
          posts={posts} />
        <DisplayContents title="Webコンテンツ群を対象とした難易度による対話型検索インタフェイスの実現方式" content="https://proceedings-of-deim.github.io/DEIM2023/4b-5-4.pdf" 
          posts={posts} />
        <DisplayContents title="学習者のレポートテキストデータを対象としたベイズ推定による理解度推定方式" content="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=230997&item_no=1&page_id=13&block_id=8" 
          posts={posts} />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default WorksPage;

export async function getStaticProps() {
  const resEntries = await fetchEntries(); // 投稿されているデータをすべて取得

  const posts = resEntries.map((p: WorkContentfulEntry): WorkFields => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
