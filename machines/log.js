module.exports = {


  friendlyName: 'Logarithm (log)',


  description: 'Calculate the logarithm of a number at a particular base.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    number: {
      friendlyName: 'Number',
      description: 'The number to calculate the log of.',
      example: 100,
      required: true
    },

    base: {
      friendlyName: 'Base',
      description: 'The base of the logarithm',
      example: 10,
      defaultsTo: 10
    }

  },


  exits: {

    invalidLog: {
      description: 'Cannot calculate the logarithm of a number <=0.'
    },

    invalidBase: {
      description: 'A logarithm\'s base must be >0 and !=1.'
    },

    success: {
      example: 2,
      variableName: 'logarithm'
    }

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
