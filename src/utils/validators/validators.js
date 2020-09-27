export const requireField = value => {
    if (value) return undefined;
    return "Field is required";
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Мax lenght is ${maxLength} symbols`;
    return undefined;
}
