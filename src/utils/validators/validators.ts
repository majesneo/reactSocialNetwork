import { type } from "os";


type validatorsType = (value: string) => string | undefined

export const requireField: validatorsType = (value) => {
    if (value) return undefined;
    return "Field is required";
}
export const maxLengthCreator = (maxLength: number): validatorsType => (value) => {
    if (value && value.length > maxLength) return `Мax lenght is ${maxLength} symbols`;
    return undefined;
}
