module.exports = {


  friendlyName: 'E',


  description: 'Get the value of E (the mathematical constant).',


  sideEffects: 'idempotent',


  sync: true,


  inputs: {

  },


  exits: {

    success: {
      outputFriendlyName: 'E',
      outputDescription: 'The mathematical constant `e`.',
      outputExample: 2.718281828459045
    },

  },


  fn: function (inputs,exits) {
    return exits.success(Math.E);
  },



};
