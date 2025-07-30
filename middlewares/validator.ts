const { z } = require('zod');

// Password regex: At least 6 chars, 1 uppercase, 1 number, 1 special char
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

export const SignupSchema = z.object({
  username: z.string().min(3).regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: z.string().regex(passwordRegex, {
    message: 'Password must contain 1 uppercase, 1 number, and 1 special character',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
  password: z.string().min(6),
})
export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});