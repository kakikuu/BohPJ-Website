import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { buildClient, IPostFields } from "@/lib/contentful";
import Link from "next/link";
import { Entry, EntryCollection } from "contentful";

const client = buildClient();

export const getStaticProps: GetStaticProps = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt",
  });
  return {
    props: { posts: items },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BohPJ</title>
      </Head>
      <main className={styles.main}>
        <div>
          <ul className={styles.listitems}>
            {posts &&
              posts.map((post: Entry<IPostFields>) => (
                <li key={post.sys.id}>
                  <Link href={post.fields.slug} className={styles.link}>
                      <h2>{post.fields.title}</h2>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;