const { Schema, model } = require('mongoose');
const inventorySchema = require('./Inventory');
const categorySchema = require('./Category');


const locationSchema = new Schema(
  {
    location: {
      // store/site location. should be a store number
      type: String,
      
    },
  },


    // PLACE CODE FOR GETTING INVENTORY AND CATEGORY HERE




  {
    toJSON: {
      getters: true
    }
  }
);


// THIS NEEDS TO RETURN INVENTORY (AND CATEGORY???)
//thoughtSchema.virtual('reactionCount').get(function() {
//  return this.reactions.length;
//});

const Location = model('Location', locationSchema);

module.exports = Location;
