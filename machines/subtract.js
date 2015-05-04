module.exports = {


  friendlyName: 'Subtract (-)',


  description: 'Subtract one number from another and return the difference.',


  sync: true,


  cacheable: true,


  inputs: {

    a: {
      friendlyName: 'First number',
      description: 'The number to subtract from.',
      example: -20,
      required: true
    },

    b: {
      friendlyName: 'Second number',
      description: 'The number to subtract.',
      example: 2.2,
      required: true
    }

  },


  exits: {

    success: {
      description: 'Returns the difference (a - b)',
      variableName: 'difference',
      example: -22.2
    }

  },


  fn: function(inputs, exits) {
    return exits.success(inputs.a - inputs.b);
  }


};
