module.exports = {


  friendlyName: 'E',


  description: 'Get the value of E (the mathematical constant)',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

  },


  exits: {

    success: {
      variableName: 'E',
      example: 2.718281828459045
    },

  },


  fn: function (inputs,exits) {
    return exits.success(Math.E);
  },



};
