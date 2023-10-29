const spaceWorks = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: spaceWorks,
    accessToken: accessToken,
})
export async function fetchAsset() {
    const entries = await client.getEntries()
    if (entries.includes) return entries.includes
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchAsset }