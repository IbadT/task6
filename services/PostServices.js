// const database = require('../config/database.js');
// const Posts = require('../models/postsModel.js');

// class PostServices {
//     getPosts() {
//         return new Promise((res, rej) => {
//             // const posts = await database.query('SELECT * FROM posts');
//             // return posts 

//             Posts.findAll().then(data => res(data));

//         })
//     };

//     createPosts(title, content, user_id) {
//         return new Promise((res, rej) => {
//             // const post = database.query(
//             //     'INSERT INTO posts (title, content, user_id) values($1, $2, $3) RETURNING *',
//             //     [title, content, user_id]
//             // );
//             // return post;
        
//             Posts.create({title, content, user_id}).then(data => res(data));

//         })
//     };

// }

// module.exports = new PostServices();








