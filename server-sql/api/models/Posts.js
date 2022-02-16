
const db = require("../dbConfig");

class Post {

    constructor(data) {
        this.id = data.id
        this.pseudonym  = data.pseudonym 
        this.post_body = data.post_body
        this.path = `/post/${data.id}`
    }

    static get all() {
        return new Promise(async (res,rej) => {
            try{
                let postData = await db.query("SELECT * FROM posts")
                let posts = postData.rows.map((post) => new Post)
                res(posts)
            } catch (err) {
                console.log(err)
                rej("could not find post")
            }
        }) 
    }

    static findById(id) {
        return new Promise(async (res, rej) => {
            try{
                let postData = await db.query(`Select * from posts WHERE posts.id = $1;`, [id]);
                let post = new Post(postData.rows[0])
                res(post)

            } catch(err) {
                console.log(err)
                rej("could not find post")
            }
        })
    }

    static create(postData){
        return new Promise (async (res, rej) => {
            try {
                const {title, pseudonym, post_body} = postData
                let postData = await db.query(`INSERT INTO posts (title, pseudonym, post_body) VALUES ($1, $2, $3) RETURNING *;`, [ title, pseudonym, post_body]);
                let newPost = new Post(postData.rows[0]);
                res (newPost);
            } catch (err) {
                console.log(err.message)
                rej('Error creating post');
            }
        });
    }



}

module.exports = Post
