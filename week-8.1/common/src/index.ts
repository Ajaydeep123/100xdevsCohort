import { z } from "zod";
export const signupInput = z.object({
    username: z.string(),
    password: z.string()
})
console.log("hi there");

export type SignupParams = z.infer<typeof signupInput>;
