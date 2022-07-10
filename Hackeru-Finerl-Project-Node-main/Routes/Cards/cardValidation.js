const Joi = require("joi");

function validateCard(card) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(10).max(1024).required(),
    phone: Joi.string().min(2).max(14).required(),
    image1: Joi.string().min(11).max(256),
    image2: Joi.string().min(11).max(256),
    image3: Joi.string().min(11).max(256),
    image: Joi.string().min(11).max(256),
    MenCollation: Joi.string().min(11).max(256),
    WomenCollation: Joi.string().min(11).max(256),
  });
  return schema.validate(card);
}
exports.validateCard = validateCard;
