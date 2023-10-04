import postsList from "./postsList.js";
import { getPosts } from "./getData.js";

async function init () {

    const posts = await getPosts('?_limit=25&expand=user')

const contentElement = document.querySelector('#content')
const postsListElement = await postsList()

contentElement.append(postsListElement)


}

init()