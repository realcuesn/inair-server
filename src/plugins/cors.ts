import fp from "fastify-plugin";
import { FastifyCorsOptions } from "@fastify/cors";
import cors from "@fastify/cors";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<FastifyCorsOptions>(async (fastify) => {
  fastify.register(cors, {
    origin: ["*"],
  });
});
