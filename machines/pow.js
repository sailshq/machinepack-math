module.exports = {


  friendlyName: 'Exponent (^)',


  description: 'Raise a number to a power.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    number: {
      friendlyName: 'Number',
      description: 'The number to raise to a power.',
      example: 8,
      required: true
    },

    exponent: {
      friendlyName: 'Exponent',
      description: 'The exponent to raise the other number to.',
      example: 2,
      required: true
    }

  },


  exits: {

    imaginary: {
      friendlyName: 'imaginary',
      variableName: 'imaginaryFactor',
      example: 8,
      description: 'Returns a number which, if multiplied by √-1, would represent the number raised to the specified fractional power.',
      extendedDescription: 'Cannot calculate a real result for a negative number raised to a fractional exponent.'
    },

    success: {
      example: 64,
      variableName: 'result'
    }

  },


  fn: function (inputs,exits) {

    // If the number is negative, and it's being raised to a
    // fractional power, we'll calculate the imaginary factor instead.
    if (inputs.number < 0 && Math.floor(inputs.exponent) !== inputs.exponent) {
      return exits.imaginary(Math.pow(-1*inputs.number, inputs.exponent));
    }
    return exits.success(Math.pow(inputs.number, inputs.exponent));
  },



};
