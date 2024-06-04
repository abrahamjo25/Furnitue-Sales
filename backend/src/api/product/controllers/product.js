"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async search(ctx) {
    const { id } = ctx.query; // Assuming you have a `query` parameter in the URL

    const entity = await strapi.db.query("api::product.product").findMany({
      where: { ProductName: id },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
