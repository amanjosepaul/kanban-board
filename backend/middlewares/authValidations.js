import Joi from "joi";

export const signUpValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  const { error } = schema.validate(req.body);
  console.log("error --- : ", error);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
      message: "Bad request",
    });
  }
  next();
};

export const signInValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
      message: "Bad request",
    });
  }
  next();
};
