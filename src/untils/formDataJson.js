export const formDataJson = (form) => {
    const formData = new FormData(form)
    const jsonData = {}
    formData.forEach( (value, key) => {
        jsonData[key] = value
    })
    return jsonData
}