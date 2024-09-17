const { z } = require('zod');

const userSchema = z.object({
  // username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = userSchema;
