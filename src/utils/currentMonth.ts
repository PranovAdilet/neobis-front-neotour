export const getCurrentMonth = () => {
    const date = new Date().getMonth()
    return `${date + 1}`
}