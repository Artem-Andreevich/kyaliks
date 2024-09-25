export const generateUniqueId = () => {
    const timestamp = new Date().getTime()
    const randomNum = Math.floor(Math.random() * 1000);
    return Number(`${timestamp}${randomNum}`)
}

