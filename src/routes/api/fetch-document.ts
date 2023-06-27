import { FastifyPluginAsync } from "fastify";

interface ProductCategory {
  category: string;
  subCategory: string;
  name: string;
}
const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/fetch-document", async function (request, reply) {
    const query = <ProductCategory>request.query;

    const filter = {
      categoryOption: query.category,
      subCategory: query.subCategory,
      name: query.name,
    };
    const doc = await this.mongo.db?.collection("products").findOne(filter);
    console.log(doc);
    return doc;
  });
};

export default example;
