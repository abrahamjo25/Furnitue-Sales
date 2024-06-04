'use strict';

/**
 * bank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bank.bank');
