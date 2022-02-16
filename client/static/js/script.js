const form = document.getElementById('form');
const title = document.getElementById('title');
const pseudonym = document.getElementById('pseudonym');
const story = document.getElementById('story')
const submit = document.getElementById("submit")
const url = ""
const postContainer = document.getElementById("post-container")
const singlePost = document.getElementById("single-post")

const getStory = async(e) => {
    e.preventDefault();
    let data = await fetch("").json();
    for(let i in data.posts){
        let newUl = document.createElement("ul")

        for(let i in data.posts[x]){
            let post = data.posts[x]
            let newLi = document.createElement("li")
            if(i!="id"){
            newLi.textContent = post[i]
            newUl.appendChild(newLi)
            postContainer.appendChild(newUl)
            }}
            }
            submitForm.addEventListener("submit", (e)=>{
                addPost(e)
            });
        }

const addStory = async(e) => {
    e.preventDefault();
    const postData = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        story: e.target.story.value,
    };
    const options = {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json" }
    }
    fetch('http://localhost:3000/posts', options)
    .then(r => r.json())
    .then(() => e.target.reset())
    .catch(console.error)
}
