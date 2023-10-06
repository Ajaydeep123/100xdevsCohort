import {z} from "zod";

export const signupInput =  z.object({
    username: z.string(),
    password: z.string(),
})

export type SignupParams = z.infer<typeof signupInput>