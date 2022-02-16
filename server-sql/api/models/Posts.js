
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



}

module.exports = Post
