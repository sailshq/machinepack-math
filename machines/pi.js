module.exports = {


  friendlyName: 'Pi (π)',


  description: 'Get the value of π (the mathematical constant)',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

  },


  exits: {

    success: {
      variableName: 'π',
      example: 3.141592653589793
    },

  },


  fn: function (inputs,exits) {
    return exits.success(Math.PI);
  },



};
