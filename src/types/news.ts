type News = {
  newsday: string;
  newstitle: string;
  newsoverview: string;
};

type Posts = News[];

type NewsFields = {
  newsday: string;
  newstitle: string;
  newsoverview: string;
};

type NewsContentfulEntry = {
  fields: NewsFields;
};
