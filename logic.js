const Tweeter = function () {

    let postIdCounter = 2 //?????? supposed to be a number?
    let commentIdCounter = 6 //????? supposed to be a number?

    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    const getPosts = function () { return posts }


    const addPost = function (text) {
        postIdCounter++
        let newPost = {
            text,
            id: `p` + postIdCounter,
            comments: []
        }
        posts.push(newPost)
    }


    const removePost = function (postID) {
        for (let i in posts) {
            if (posts[i].id === postID)
                posts.splice(i, 1)
            return
        }
    }

    const addComment = (text, postID) => {
        for (let i in posts) {
            if (posts[i].id === postID) {
                commentIdCounter++
                posts[i].comments.push({
                    id: 'c' + commentIdCounter,
                    text
                })
            }
        }
    }


    const removeComment = function (postID, commentID) {
        for (let post of posts) {
            if (posts.id == postID) {
                const commentsArray = post.comments
                for (let i in commentsArray) {
                    if (commentsArray[i].id == commentID) {
                        commentsArray.splice(i, 1)
                        return
                    }
                }
            }

        }
    }



    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}