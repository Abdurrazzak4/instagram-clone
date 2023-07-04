const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const userPost = document.getElementById("user-post")
const likes = document.getElementById("like-count")
const postContent = document.getElementsByClassName("post-content")
const post = document.getElementById("post")

// userPost.addEventListener("dblclick", ()=>{
//     likes.textContent = parseInt(likes.textContent)+ 1
    
// })
// heartIcon.addEventListener("click", ()=>{
//     likes.textContent = parseInt(likes.textContent)+ 1
    
// })

function render(){
for(let i=0 ; i<posts.length; i++){
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "newPost")
     newDiv.innerHTML = (`<div class="post-content">
                <img src="${posts[i].avatar}" alt="user avatar" class="user-avatar">
                <div class="user">
                    <div class="username">${posts[i].name}</div>
                    <div class="location">${posts[i].location}</div>
                </div>
            </div>
                <img src="${posts[i].post}" alt="user post" id="user-post">
        </section>
        <section class="post-actions">
            <div class="buttons">
                <img src="images/icon-heart.png" class="icon" id="heartIcon">
                <img src="images/icon-comment.png" class="icon">
                <img src="images/icon-dm.png" class="icon">
            </div>
            <div class="likes"><span id="like-count">${posts[i].likes} </span> likes</div>
            <div class="comments"><span>${posts[i].username} </span> ${posts[i].comment}</div>
            `)
            post.append(newDiv)
}
}
render()