import { Entry } from 'contentful';
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});



// ここでEntry<any>の配列を戻り値の型として指定します
const fetchEntries = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  return []; // itemsがない場合は空の配列を返す
};


export default fetchEntries;