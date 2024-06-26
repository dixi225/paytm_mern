import zod from 'zod'

export const signUpBody=zod.object({
    userName:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
})

export const sigInBody=zod.object({
    username:zod.string(),
    password:zod.string()
})