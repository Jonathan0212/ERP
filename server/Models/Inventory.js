const { Schema } = require('mongoose');


const inventorySchema = new Schema(
  {
    inventoryQty: {
      type: Int,
      required: true,
    },
    
    // IS THIS NECESSARY FOR OUR NEEDS? DO WE NEED TO TRACK THIS NOW?
    
    //createdAt: {
    //  type: Date,
    //  default: Date.now,
    //  get: timestamp => dateFormat(timestamp)
    //},

    category: [categorySchema]

  },

  // USE IN CASE WE ADD DATE/TIMESTAMP
  //{
  //  toJSON: {
  //    getters: true
  //  }
  //}
);


// THIS NEEDS TO RETURN CATEGORY
//thoughtSchema.virtual('reactionCount').get(function() {
//  return this.reactions.length;
//});

module.exports = inventorySchema;