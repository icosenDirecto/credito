const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

exports.handler = async function (event, context) {
    const response = await notion.databases.query({
        database_id: databaseId,
    return {
        statusCode: 200,
        body: JSON.stringify(response
        ),
    };
};