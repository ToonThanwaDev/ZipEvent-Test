import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().required().trim().messages({ "string.empty": "Name is required" }),
  surname: Joi.string().required().trim().messages({ "string.empty": "Surname is required" }),
  emailOrPhone: Joi.alternatives()
    .try(Joi.string().email({ tlds: false }), Joi.string().pattern(/^[0-9]{10}$/))
    .messages({ "alternatives.match": "Must be a valid Email or Phone number" }),
  complain: Joi.string().max(1000).messages({
    "string.empty": "Complain is required",
    "string.max": "Can only write a maximum of 1000 words"
  })
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
