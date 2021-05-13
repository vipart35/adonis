'use strict'

class PostController {
    async index({ view }) {
      const posts = [
        {title:'Post One', body:'Это запись номер один'},
        {title:'Post Two', body:'Это запись номер два'},
        {title:'Post Three', body:'Это запись номер три'}
        ]
        return view.render('posts.index', {
          title: 'Latest Posts',
          posts: posts
        })
    }
}

module.exports = PostController
