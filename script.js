const users = [
  {
    username: "CHARAN",
    pfp: "https://i.pinimg.com/236x/93/62/c2/9362c2a25fea964da73d05b5ef37dc00.jpg",
    story: "https://status.pagalworld.com.sb/files/download/id/4456/1.mp4?_=1",
    mediaType: "video",
  },
  {
    username: "RAVINDRA ",
    pfp: "https://i.pinimg.com/474x/e2/d3/12/e2d312017833a0ab9aee7697be3d1a6b.jpg",
    story: "https://status.pagalworld.com.sb/files/download/id/4459/1.mp4?_=4",
    mediaType: "video",
  },
  {
    username: "VIRAT",
    pfp: "https://i.pinimg.com/236x/62/16/45/6216455f211d6957f5a357ca0a395e03.jpg",
    story: "https://status.pagalworld.com.sb/files/download/id/3860/1.mp4?_=2",
    mediaType: "video",
  },
  {
    username: "RAM",
    pfp: "https://i.pinimg.com/474x/9b/1c/22/9b1c22db279b04ca3f9f43ecfdd5cda9.jpg",
    story: "https://status.pagalworld.com.sb/files/download/id/3855/1.mp4?_=4",
    mediaType: "video",
  },
  {
    username: "KRISHNA",
    pfp: "https://i.pinimg.com/236x/eb/4a/09/eb4a09c0e09247f4f7b77433e3cdf815.jpg",
    story: "https://status.pagalworld.com.sb/files/download/id/3857/1.mp4?_=6",
    mediaType: "video",
  },
];

const features = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤️ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];

let header = document.querySelector("header");
let storyPopup = document.querySelector(".story-popup"); // Use single story-popup modal
let clutter = "";

function stories() {
  users.forEach(function (user, index) {
    clutter += `
            <div class="stories">
              <div class="pfp">
                <img id="${index}" src="${user.pfp}" alt="${user.username}"></div>
                <p>${user.username}</p>
            </div>
        `;
  });

  header.innerHTML = clutter;
}

stories();

header.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const selectedUser = users[e.target.id];

    // Check media type and display the story accordingly
    let mediaContent = "";
    if (selectedUser.mediaType === "video") {
      mediaContent = `
                <video muted loop autoplay>
                    <source src="${selectedUser.story}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
    } else if (selectedUser.mediaType === "image") {
      mediaContent = `<img src="${selectedUser.story}" alt="${selectedUser.username}'s story">`;
    }

    // Display the selected media in the story popup
    storyPopup.innerHTML = `
            <div class="story-content">
            <div class="loading-bar"></div>
                ${mediaContent}
                <button class="close-story">
                    <i class="ri-close-large-line"></i>
                </button>
            </div>
        `;
    storyPopup.style.display = "flex"; // Show the story popup
  }
  const loadingBar = document.querySelector(".loading-bar");
  loadingBar.style.width = "0%";
  setTimeout(function () {
    loadingBar.style.transition = "width 5s linear";
    loadingBar.style.width = "100%";
  }, 500);

  setTimeout(function () {
    storyPopup.style.display = "none";
  }, 10000);
});

// Close the story popup when the close button is clicked
storyPopup.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-story")) {
    storyPopup.style.display = "none"; // Hide the story popup
  } else {
    storyPopup.style.display = "none"; // Hide the story popup
  }
});

var container = document.querySelector(".container");
var main = document.querySelector("footer");
let clustter = "";

var likes = document.querySelector("#likes");

//  post
features.forEach((element) => {
  clustter += `  <div class="container">
        <div class="top">
          <div class="top_left">
            <div id="logo">
              <img
                src = ${element.userprofile}
                alt=""
              />
            </div>

            <div id="user_name">${element.username}</div>
          </div>
          <div class="top_right">
            <button>Follow</button>
            <div class="icon">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/small/16/more.png"
                alt="more"
              />
            </div>
          </div>
        </div>
        <div class="middle">
          <img
            src= ${element.userPost}
            alt=""
          />
            <i class="ri-heart-3-line"></i>
        </div>
        <div class="bottom">
          <div class="bottom_top">
            <div class="bottom_top_left">
            <i class="ri-heart-line"></i>
              <div id="likes">${element.likeCount}</div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-light/24/speech-bubble.png"
                alt="speech-bubble"
              />
              <div id="comments">${element.commentCount}</div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/filled-sent.png"
                alt="filled-sent"
              />
              <div id="sent">${element.shareCount}</div>
            </div>
            <div class="bottom_top_right">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png"
                alt="bookmark-ribbon--v1"
              />
            </div>
          </div>
          <div class="bottom_middle">
            <div id="caption">
              ${element.caption}
            </div>
          </div>
          <div class="bottom_bottom">
            <div id="comments">View all comments</div>
            <div id="time_ago">${element.timeAgoUploaded} days ago</div>
          </div>
        </div>
      </div> `;
});

main.innerHTML = clustter;

main.addEventListener("dblclick", (e) => {
  // Ensure the double-click happens on an image within the `.middle` class
  const middle = e.target.closest(".middle");
  if (middle) {
    const isLiked = middle.getAttribute("data-liked") === "true"; // Check if already liked
    const likeIcon = middle.querySelector("i.ri-heart-3-line");
    const likeCountElement = middle.parentElement.querySelector("#likes");
    const loveIcon = middle.parentElement.querySelector(
      ".bottom .ri-heart-line"
    );
    console.log(loveIcon);

    if (!isLiked) {
      // Increment and update the like count
      if (likeCountElement) {
        let currentLikes = parseInt(likeCountElement.textContent, 10) || 0;
        likeCountElement.textContent = currentLikes + 1;
      }

      // Animate and change the heart icon
      if (likeIcon) {
        likeIcon.classList.remove("ri-heart-3-line"); // Remove the outline icon class
        likeIcon.classList.add("ri-heart-3-fill"); // Add the filled icon class
        likeIcon.style.opacity = "1";
        likeIcon.style.transform = "translate(-50%, -50%) scale(2)";
        loveIcon.classList.remove("ri-heart-line"); // Remove the outline icon class
        loveIcon.classList.add("ri-heart-fill");
        loveIcon.style.color = "red";

        setTimeout(() => {
          likeIcon.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1000);
        setTimeout(() => {
          likeIcon.style.opacity = "0";
        }, 1000);
      }
      

      // Mark this post as liked
      middle.setAttribute("data-liked", "true");
    }
  }
});
