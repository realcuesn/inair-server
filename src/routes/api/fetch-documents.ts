import { FastifyPluginAsync } from "fastify";

interface ProductCategory {
  category: string;
  subCategory: string;
}
const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/fetch-documents", async function (request, reply) {
    const query = <ProductCategory>request.query;
    const filter = {
      categoryOption: query.category,
      subCategory: query.subCategory,
    };
    const docs = await this.mongo.db
      ?.collection("products")
      .find(filter)
      .toArray();
    console.log(docs);
    return docs;
  });
};

export default example;
