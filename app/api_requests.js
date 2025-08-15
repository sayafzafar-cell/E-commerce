
export async function get(params,urlParam= '') {
    let response = await fetch(`http://localhost:3000/${params}${urlParam}`)
    response = await response.json()
    return response
}