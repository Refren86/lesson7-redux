import Joi from "joi";

export const InputValidator = Joi.object({
  title: Joi.string().min(3).required().messages({
    "string.empty": 'Field "Title" cannot be empty!',
    "string.min": 'Field "Title" must contain at least 3 Latin characters',
  }),
  description: Joi.string().min(10).max(1000).required().messages({
    "string.empty": 'Field "Description" cannot be empty!',
    "string.min":
      'Field "Description" must contain at least 10 Latin characters',
    "string.max": 'Field "Description" may contain up to 1000 Latin characters',
  }),
});
