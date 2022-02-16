const Post =require('../models/Posts')


const index = async(req,res) => {
    try{
        const posts = await Post.all
        res.status(200).json(posts)

    }catch (err) {
        res.status(500).send(err)
    }
}

const show = async(req,res) => {
    try{
        const id = req.params.id
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch(err) {
        res.status(500).send(err)
    }
}

const create = async(req,res) => {
    try{
        const postData = req.body
        const post = await Post.create(postData)
        res.status(200).json(post)
    } catch(err) {
        res.status(500).send(err)
    }
}

module.exports = { index, show, create }
