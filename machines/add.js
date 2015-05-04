module.exports = {


  friendlyName: 'Add (+)',


  description: 'Add two numbers together and return the sum.',


  sync: true,


  cacheable: true,


  inputs: {

    a: {
      friendlyName: 'Augend',
      description: 'The first number.',
      example: 2,
      required: true
    },

    b: {
      friendlyName: 'Addend',
      description: 'The second number.',
      example: 2.2,
      required: true
    }
  },


  exits: {

    success: {
      description: 'Returns the sum (a + b)',
      variableName: 'sum',
      example: 4.2
    }

  },


  fn: function(inputs, exits) {
    return exits.success(inputs.a + inputs.b);
  }


};
