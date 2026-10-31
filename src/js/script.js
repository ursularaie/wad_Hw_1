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

    if (post.postText != null) { // maybe post has no text
        clone.querySelector(".post_text").innerHTML = post.postText;
    }

    clone.querySelector(".username").innerText = post.accountName;

    postsDiv.appendChild(clone);
}

/* fetch('https://api.npoint.io/c288ee2d6ecfa4f502b7')
    .then((response) => response.json())
    .then(json => {
        for (let i = 0; i < json.Posts.length; i++) {
            showPosts(json.Posts[i]);
        }
    })
    .catch(error => console.error("Error loading posts from URL:", error)); */


fetch('res/json/postsContent.json')
    .then((response) => response.json())
    .then(json => {
        for (let i = 0; i < json.Posts.length; i++) {
            showPosts(json.Posts[i]);
        }
    })
    .catch(error => console.error("Error loading posts locally:", error));


function profileDropdown(){
    const avatarButton = document.getElementById("avatar-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if(avatarButton && dropdownMenu){
        avatarButton.addEventListener("click", (event) => {
            event.stopPropagation();
            dropdownMenu.classList.toggle("hidden");
        });
    }
}

//when loaded
document.addEventListener("DOMContentLoaded", () => {
    profileDropdown();
});


