module.exports = {


  friendlyName: 'Natural logarithm (ln)',


  description: 'Calculate the natural logarithm of a number.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    number: {
      friendlyName: 'Number',
      description: 'The number to calculate the natural log of.',
      example: 2.718281828459045,
      required: true
    }

  },


  exits: {

    notDefined: {
      description: 'Cannot take the logarithm of a negative number.'
    },

    success: {
      example: 1,
      variableName: 'logarithm'
    }

  },


  fn: function (inputs,exits) {

    if (inputs.number < 0) {
      return exits.notDefined();
    }
    return exits.success(Math.log(inputs.number));
  },



};
