module.exports = {

  // TODO: move to mp-numbers (for consistency w/ lodash)
  friendlyName: 'Parse number',


  description: 'Convert the specified string to its numeric equivalent.',


  extendedDescription: 'For example, "5" is converted to 5, "10.5" is converted to 10.5, and "-100.429" is converted to -100.429.',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    string: {
      description: 'The string to parse.',
      example: '5',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Number',
      outputDescription: 'The value obtained from converting the input string to a number.',
      outputExample: 5
    },

    notANumber: {
      description: 'The provided string could not be converted into a number.'
    },

  },


  fn: function(inputs, exits) {
    var _ = require('lodash');
    if (_.isNaN(+inputs.string)) {
      return exits.notANumber();
    }
    return exits.success(inputs.string);
  }


};
