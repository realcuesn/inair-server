import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/post-document", async function (request, reply) {
    const body = <any>request.body;
    const result = await this.mongo.db?.collection("products").insertOne(body);
    console.log(result);
    return result;
  });
};

export default example;
