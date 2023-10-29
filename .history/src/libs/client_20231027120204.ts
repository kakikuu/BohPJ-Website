// import { createClient } from "microcms-js-sdk";

// export const client = createClient({
//     serviceDomain: process.env.SERVICE_DOMAIN || "",
//     apiKey: process.env.API_KEY || "",
// });

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export { fetchEntries }


export async function fetchAsset() {
    const entries = await client.getEntries()
    if (entries.includes) return entries.includes
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export { fetchAsset }