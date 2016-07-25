module.exports = {


  friendlyName: 'Natural logarithm (ln)',


  description: 'Calculate the natural logarithm of a number.',


  sideEffects: 'idempotent',


  sync: true,


  inputs: {

    number: {
      description: 'The number to calculate the natural log of.',
      example: 2.718281828459045,
      required: true
    }

  },


  exits: {

    success: {
      outputExample: 1,
      outputFriendlyName: 'Natural logarithm',
      outputDescription: 'The natural logarithm of the input number.'
    },

    invalidLog: {
      friendlyName: 'Invalid input value',
      description: 'Could not calculate the natural logarithm of the input number (because the input was a negative number).'
    },

  },


  fn: function (inputs,exits) {

    if (inputs.number <= 0) {
      return exits.invalidLog();
    }
    return exits.success(Math.log(inputs.number));
  },



};
