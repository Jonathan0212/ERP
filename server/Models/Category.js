const { Schema } = require('mongoose');


const categorySchema = new Schema(
  {
    categoryType: {
      type: String,
      required: true,
    },
    categoryQty: {
      type: Number,
      required: true,
    },
    unitQty: {
      type: Number,
      required: true
    },
    unitType: {
      type: String,
      required: true
    },
  }
);

module.exports = categorySchema;


// UNIT:
// BOTTLE
// 6 pack
// 12 pack
// KEG
// 
// CATEGORY:
// PILSNER
// DOPPELBOCK
// AMBER
