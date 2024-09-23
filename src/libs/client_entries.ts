require("dotenv").config(); // .env ファイルの読み込み

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

const fetchEntries = async () => {
  // ここの型定義わからなかったから、any
  try {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
  } catch (error) {
    console.log("Error occurred while fetching Entries");
    console.log(error);
  }
};

export default fetchEntries;
