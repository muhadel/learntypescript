import Joi from "@hapi/joi";
import { Request, Response } from "express";

/** Class representing a Validator Utils. */
/* global module */
class ValidatorUtils {
  static errorMapped(req: Request, res: Response, next: any, result: any) {
    if (result.error) {
      return res
        .status(400)
        .json({ done: false, reason: result.error.details[0].message });
    }
    return next();
  }

  // Check item validation
  checkItem(req: Request, res: Response, next: any) {
    console.log("body", req.body);
    const schema = Joi.object().keys({
      name: Joi.string()
        .min(4)
        .required(),
      phone: Joi.number().required()
    });
    const result = Joi.validate(req.body, schema);
    return ValidatorUtils.errorMapped(req, res, next, result);
  }
}
export default new ValidatorUtils();
