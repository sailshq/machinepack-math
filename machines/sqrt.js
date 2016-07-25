module.exports = {


  friendlyName: 'Square root (√)',


  description: 'Calculate the square root of a number.',


  sideEffects: 'idempotent',


  sync: true,


  inputs: {

    number: {
      description: 'The number to take the square root of.',
      example: 64,
      required: true
    }

  },


  exits: {

    success: {
      outputExample: 8,
      outputFriendlyName: 'Square root',
      outputDescription: 'The principal square root of the input number.'
    },

    imaginary: {
      outputFriendlyName: 'Imaginary square root',
      outputExample: 8,
      outputDescription: 'A number which, if multiplied by the square root of -1, would represent the square root of the input number.',
      description: 'Could not calculate a real result for the square root because the input was a negative number.'
    },

  },


  fn: function (inputs,exits) {

    if (inputs.number < 0) {
      return exits.imaginary(Math.sqrt(-1*inputs.number));
    }
    return exits.success(Math.sqrt(inputs.number));
  },



};
