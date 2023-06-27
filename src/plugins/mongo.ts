import fp from "fastify-plugin";
import { FastifyMongodbOptions } from "@fastify/mongodb";
import fastifyMongodb from "@fastify/mongodb";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<FastifyMongodbOptions>(async (fastify) => {
  fastify.register(fastifyMongodb, {
    forceClose: true,
    url: process.env.DATABASEURL,
  });
});
