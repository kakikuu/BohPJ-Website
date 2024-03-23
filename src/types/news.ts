type News = {
  newsday: string;
  newstitle: string;
  newsoverview: string;
};

// Postsの型を定義（Newsの配列）
type Posts = News[];

type NewsFields = {
  newsday: string;
  newstitle: string;
  newsoverview: string;
};

type NewsContentfulEntry = {
  fields: NewsFields;
};
