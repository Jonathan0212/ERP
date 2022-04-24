const { Schema } = require('mongoose');


const categorySchema = new Schema(
  {
    categoryType: {
      type: String,
      required: true,
    },
    categoryQty: {
      type: Int,
      required: true,
    },
    unitQty: {
      type: Int,
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
