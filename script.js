let postsTemplate = document.querySelector(".post_template");
let postsDiv = document.getElementById("posts");

function showPosts(post) {
    console.log(post)
    let clone = postsTemplate.content.cloneNode(true);

    clone.querySelector(".post_profile_pic").src = post.profileImage;
    clone.querySelector(".post_date").innerText = post.postDate;
    
    let picDiv = clone.querySelector(".post_pic_div");
    
    if (post.postPic != null) {
        clone.querySelector(".post_pic").src = post.postPic;
        clone.querySelector(".post_pic").alt = post.picAlt;
    } else {
        picDiv.remove();
    }
    
    clone.querySelector(".post_text").innerText = post.postText;
    clone.querySelector(".username").innerText = post.accountName;

    postsDiv.appendChild(clone);
}

fetch('json/postsContent.json') //change the url once it's in server, might need to keep picture as 
    .then((response) => response.json())
    .then(json => {
        for (let i = 0; i < json.Posts.length; i++) {
            showPosts(json.Posts[i]);
        }
    })
    .catch(error => console.error("Error loading posts:", error));
