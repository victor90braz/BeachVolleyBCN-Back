const { Joi } = require("express-validation");

const playerCredentials = {
  body: Joi.object({
    name: Joi.string()
      .max(30)
      .messages({ message: "A name is required" })
      .required(),
    image: Joi.string().messages({
      message: "Content for the image is required",
    }),
    like: Joi.number().integer().min(1).max(99).required(),
    point: Joi.number().integer().min(1).max(99).required(),
    rate: Joi.number().integer().min(1).max(99).required(),
    game: Joi.number().integer().min(1).max(99).required(),
  }),
};

module.exports = {
  playerCredentials,
};
