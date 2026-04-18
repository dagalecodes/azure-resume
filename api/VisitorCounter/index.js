const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
    const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
    const container = client.database("ResumeDB").container("Counters");

    const { resource: item } = await container.item("1", "1").read();
    item.count++;
    await container.item("1", "1").replace(item);

    context.res = {
        headers: { "Access-Control-Allow-Origin": "*" },
        body: { count: item.count }
    };
};