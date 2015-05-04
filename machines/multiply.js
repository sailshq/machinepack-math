module.exports = {


  friendlyName: 'Multiply (✕)',


  description: 'Multiply two numbers and return the product.',


  sync: true,


  cacheable: true,


  inputs: {

    a: {
      friendlyName: 'First number',
      description: 'The first number.',
      example: 2,
      required: true
    },

    b: {
      friendlyName: 'Second number',
      description: 'The second number.',
      example: -10,
      required: true
    }

  },


  exits: {

    success: {
      description: 'Returns the product (a ✕ b)',
      variableName: 'product',
      example: -20
    }

  },


  fn: function(inputs, exits) {
    return exits.success(inputs.a*inputs.b);
  }


};
