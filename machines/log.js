module.exports = {


  friendlyName: 'Logarithm (log)',


  description: 'Calculate the logarithm of a number at a particular base.',


  sideEffects: 'idempotent',


  sync: true,


  inputs: {

    number: {
      description: 'The number to calculate the log of.',
      example: 100,
      required: true
    },

    base: {
      description: 'The base of the logarithm.',
      example: 10,
      defaultsTo: 10
    }

  },


  exits: {

    success: {
      outputExample: 2,
      outputFriendlyName: 'Logarithm',
      outputDescription: 'The logarithm of the input value.'
    },

    invalidLog: {
      friendlyName: 'Invalid input value',
      description: 'Could not calculate the logarithm of the input number (because the input was a negative number).'
    },

    invalidBase: {
      description: 'The `base` value was invalid (it must be a positive number and not 1).'
    },

  },


  fn: function (inputs,exits) {

    if (inputs.number <= 0) {
      return exits.invalidLog();
    }
    if (inputs.base <= 0 || inputs.base === 1) {
      return exits.invalidBase();
    }
    return exits.success(Math.log(inputs.number) / Math.log(inputs.base));
  },



};
