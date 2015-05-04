module.exports = {


  friendlyName: 'Parse number',


  description: 'Convert the specified string to its numeric equivalent.',


  extendedDescription: 'For example, "5" is converted to 5, "10.5" is converted to 10.5, and "-100.429" is converted to -100.429.',


  sync: true,


  cacheable: true,


  inputs: {

    string: {
      friendlyName: 'String',
      description: 'The string to parse.',
      example: '5',
      required: true
    }

  },


  exits: {

    notANumber: {
      description: 'The provided string cannot be converted into a number.'
    },

    success: {
      description: 'Done.',
      example: 5
    }

  },


  fn: function(inputs, exits) {
    var _ = require('lodash');
    if (_.isNaN(+inputs.string)) {
      return exits.notANumber();
    }
    return exits.success(inputs.string);
  }


};
