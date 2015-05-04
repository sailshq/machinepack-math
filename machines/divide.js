module.exports = {


  friendlyName: 'Divide (÷)',


  description: 'Divide one number by another and return the quotient.',


  extendedDescription: 'Note that this is **not** integer division-- e.g. `5/2` will result in `2.5`, not `2`.',


  sync: true,


  cacheable: true,


  inputs: {

    a: {
      friendlyName: 'Numerator',
      description: 'The number to divide (aka "dividend")',
      example: 5,
      required: true
    },

    b: {
      friendlyName: 'Denominator',
      description: 'The number to divide by (aka "divisor")',
      example: -2,
      required: true
    }

  },


  exits: {

    invalidDenominator: {
      friendlyName: 'invalid denominator',
      description: 'The denominator was provided as 0, but computers haven\'t learned how to divide by zero (yet).'
    },

    success: {
      friendlyName: 'then',
      description: 'Returns the quotient (numerator ÷ denominator)',
      variableName: 'quotient',
      example: -2.5
    }

  },


  fn: function(inputs, exits) {
    if (inputs.b === 0) {
      return exits.invalidDenominator();
    }
    return exits.success(inputs.a / inputs.b);
  }


};
