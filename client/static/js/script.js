const form = document.getElementById('form');
const title = document.getElementById('title');
const pseudonym = document.getElementById('pseudonym');
const story = document.getElementById('story')
const submit = document.getElementById("submit")
const url = ""
const postContainer = document.getElementById("post-container")
const singlePost = document.getElementById("single-post")


submit.addEventListener('submit', sendData)


async function sendData(e) {
    e.preventDefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        console.log(options.body)
        const res = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await res.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#${id}`
            updateContent()
        }
    } catch(err) {
        console.log(err)
    }
}

async function getData() {
    try {
        // console.log("hello")
        let res = await fetch('http://localhost:3000/posts')
        // console.log(res)
        let data = await res.json()
        console.log(data)
        // console.log(data.posts)
        if (!data) { throw new Error("no posts")}
        data.forEach(post => {
            drawPost(post)
        });
    } catch(err) {
        console.log(err)
    }
}



function drawPost(data) {
    let card = document.createElement('div')
    let title = document.createElement('h2')
    let pseudonym = document.createElement('h3')
    let story = document.createElement('p')

    title.textContent = data.title
    title.classList.add("title")
    pseudonym.textContent = data.pseudonym
    pseudonym.classList.add("pseudonym")
    story.textContent = data.story
    story.classList.add("story")

    card.append(title)
    card.append(pseudonym)
    card.append(story)

    let main = document.querySelector('main')
    main.innerHTML = ""
    main.append(card)
}
