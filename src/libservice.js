export const convertQueryStringToObject = (string) => {

    const query = new URLSearchParams(string)
    const object = {}
    for (let pair of query.entries()) {
        object[pair[0]] = pair[1]
    }
    return object
}