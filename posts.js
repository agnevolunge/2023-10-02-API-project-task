import postsList from "./postsList.js";

async function init () {

const contentElement = document.querySelector('#content')
const postsListElement = await postsList()

contentElement.append(postsListElement)


}

init()