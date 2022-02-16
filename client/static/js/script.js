const form = document.getElementById('form')
const url = ""
const postContainer = document.getElementById("post-container")
const singlePost = document.getElementById("single-post")


form.addEventListener('submit', sendData)


async function sendData(e) {
    e.preventDefault()

    let title = e.target.title.value
    let pseudonym = e.target.pseudonym.value
    let story = e.target.story.value
    try {
        const postData = {
            title: title,
            pseudonym: pseudonym,
            post_body: story
        }
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData)
        }
        
        const res = await fetch('http://localhost:3000/posts', options);
        const { path, err } = await res.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#${path}`
            getData(path)
        }
    } catch(err) {
        console.log(err)
    }
}

async function getData(path) {
    try {
        
        let res = await fetch(`http://localhost:3000${path}`)
        
        // console.log(res)
        let data = await res.json()
        console.log("hello")
        console.log(data)
        // console.log(data.posts)
        if (!data) { throw new Error("no posts")}
        else{
            drawPost(data)
        }
        
    } catch(err) {
        console.log(err)
    }
}



function drawPost(data) {
    let card = document.createElement('div')
    card.classList.add("card")
    let title = document.createElement('h2')
    let pseudonym = document.createElement('h3')
    let story = document.createElement('p')

    title.textContent = data.title
    title.classList.add("title")
    pseudonym.textContent = data.pseudonym
    pseudonym.classList.add("pseudonym")
    story.textContent = data.post_body
    story.classList.add("story")

    card.append(title)
    card.append(pseudonym)
    card.append(story)
    let body = document.querySelector('body')
    body.innerHTML = ""
    body.append(card)
}
