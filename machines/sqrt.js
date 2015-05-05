module.exports = {


  friendlyName: 'Square root (√)',


  description: 'Calculate the square root of a number.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    number: {
      friendlyName: 'Number',
      description: 'The number to take the square root of.',
      example: 64,
      required: true
    }

  },


  exits: {

    imaginary: {
      friendlyName: 'imaginary',
      variableName: 'imaginaryFactor',
      example: 8,
      description: 'Returns a number which, if multiplied by √-1, would represent the √ of the provided number.',
      extendedDescription: 'Cannot calculate a real result for the square root of a negative number.'
    },

    success: {
      example: 8,
      variableName: 'factor'
    }

  },


  fn: function (inputs,exits) {

    if (inputs.number < 0) {
      return exits.imaginary(Math.sqrt(-1*inputs.number));
    }
    return exits.success(Math.sqrt(inputs.number));
  },



};
