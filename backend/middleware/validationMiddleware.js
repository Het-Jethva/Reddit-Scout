const validationMiddleware = (schema) => (req, res, next) => {
  try {
      schema.parse(req.body); // Use parse instead of validate
      next();
  } catch (error) {
      res.status(400).json({ error: error.errors[0].message }); // Adjust the error response based on zod's error format
  }
};

module.exports = validationMiddleware;
