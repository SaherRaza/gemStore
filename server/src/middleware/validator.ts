import { RequestHandler } from "express";
import * as yup from "yup";

export const validate = (schema: any): RequestHandler =>
{
  //This code defines a custom validation middleware function
  // for an Express server that uses yup to validate request bodies
  // because middleware function looks like (req,res, next) =>{}
  return async (req, res, next) => {
    if (!req.body)
      return res.status(422).json({ error: "Empty body is not accepted!" });

    //const {name, email, password} = req.body; // to make it useable for other routes making it custom
    
    const schemaToValidate = yup.object({  
      body: schema,
    });

    try {
      await schemaToValidate.validate(
        {
          body: req.body,
        },
        {
          abortEarly: true,
        }
      );

      next();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(422).json({ error: error.message });
      }
    }
  };
};
