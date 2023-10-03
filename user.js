async function init() {
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const userId = urlParams.get('user_id')


    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
    const user = await res.json()

    console.log(user)
    console.log(user.name)
    console.log(user.email)
    console.log(user.posts)
    console.log(user.albums)

    const contentElement = document.querySelector('#content')
    
    const postsList = document.createElement('ul')
    postsList.classList.add('posts-list')
    // contentElement.append(postsList)

    user.posts.forEach(post => {
        console.log(post)
        console.log(post.title)
        console.log(`./post.html?post_id=${post.id}`)

        const postItem = document.createElement('li')
        const postLink = document.createElement('a');
        postLink.textContent = `${post.id}. ${post.title}.`;
        postLink.href = "./post.html?post_id=" + post.id;
        postItem.append(postLink);

        postsList.append(postItem)
    })


    const albumsList = document.createElement('ul')
    albumsList.classList.add('albums-list')
   

    user.albums.forEach(album => {
        console.log(album)
        console.log(album.title)
        console.log(`./album.html?album_id=${album.id}`)

        const albumItem = document.createElement('li')
        const albumLink = document.createElement('a');
        albumLink.textContent = `${album.id}. ${album.title}.`;
        albumLink.href = "./album.html?album_id=" + album.id;
        albumItem.append(albumLink);

        albumsList.append(albumItem)

    })

    contentElement.append(postsList, albumsList)
}

init()


