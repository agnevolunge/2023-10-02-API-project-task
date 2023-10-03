export async function getPosts(params = '') {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts' + params)
    const posts = await res.json()

    return posts
    
}

export async function getUsers(params = '') {
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + params)
    const users = await res.json()

    return users
    
}