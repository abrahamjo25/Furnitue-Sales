'use strict';

/**
 * bank controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bank.bank');
