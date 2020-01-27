const Renderer = function () {
    let renderPosts = function (posts) {
        $(`#posts`).empty()
        for (let post of posts) {
            let newPost = $(`<div class="post post-text" data-id="${post.id}">${post.text}</div>`)
            for (let comment of post.comments) {
                let newComment = $(`<div class="comments" data-id="${comment.id}">${comment.text}</div>`)
                $(newPost).append(newComment)
            }
            $(`#posts`).append(newPost)
        }
    }
    return { renderPosts }
}