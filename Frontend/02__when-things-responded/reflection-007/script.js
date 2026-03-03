let allreels = document.querySelector(".all-reels");
let reel = [
  {
    likeCount: 23000,
    isLiked: false,
    commentCount: 25,
    logoImg:
      "https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png",
    channelName: "@youtube-fest",
    subscribe: false,
    videoDes:
      "Start watching videos to help us build a feed of videos you'll love",
    musicName: "Pop, Hip Hop, and Rock",
    musicLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEVDmSRiMVbJtdO9XstUD35T8tVB8Oaqm8w&s",
    isMute: false,
  },

  {
    likeCount: 15400,
    isLiked: true,
    commentCount: 87,
    logoImg: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    channelName: "@travel.diaries",
    subscribe: true,
    videoDes: "POV: You finally visit your dream beach destination 🌊☀️",
    musicName: "Summer Vibes",
    musicLogo: "https://cdn-icons-png.flaticon.com/512/727/727240.png",
    isMute: false,
  },

  {
    likeCount: 9820,
    isLiked: false,
    commentCount: 42,
    logoImg: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    channelName: "@foodie.heaven",
    subscribe: false,
    videoDes: "Making the cheesiest pizza ever 🧀🍕 Wait for the cheese pull!",
    musicName: "Cooking Beat Mix",
    musicLogo: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
    isMute: false,
  },

  {
    likeCount: 43210,
    isLiked: true,
    commentCount: 310,
    logoImg: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    channelName: "@fitlife.daily",
    subscribe: true,
    videoDes: "30-second abs workout you can do anywhere 💪🔥",
    musicName: "Workout Energy",
    musicLogo: "https://cdn-icons-png.flaticon.com/512/727/727218.png",
    isMute: false,
  },

  {
    likeCount: 18765,
    isLiked: false,
    commentCount: 156,
    logoImg: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
    channelName: "@tech.trends",
    subscribe: false,
    videoDes: "This AI gadget will blow your mind 🤖✨",
    musicName: "Futuristic Chill",
    musicLogo: "https://cdn-icons-png.flaticon.com/512/727/727269.png",
    isMute: false,
  },
];

function addData() {
  let sum = "";
  reel.forEach((item, idx) => {
    sum =
      sum +
      `<div class="reel">
        <video ${item.isMute ? "" : "muted"} autoplay loop src='./assets/${idx + 1}.mp4' id=${idx} class='video'>
        </video>
        
        <div class="sound">
         ${item.isMute ? '<i class="ri-volume-down-fill"></i>' : '<i class="ri-volume-mute-fill"></i>'} 
          
        </div>
        <div class="content">
          <div class="like" id=${idx}>
            ${item.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}
            <p>${item.likeCount}</p>
          </div>
          <div class="comment">
            <i class="ri-chat-1-line"></i>
            <p>${item.commentCount}</p>
          </div>
          <div class="share">
            <i class="ri-share-forward-line"></i>
            <p>Share</p>
          </div>
          <div class="more">
            <i class="ri-more-fill"></i>
            <p>more</p>
          </div>
        </div>
        <div class="channel-details">
          <div class="logoName">
            <img
              src=${item.logoImg}
              alt=""
            />
            <p>${item.channelName}</p>
            <button class ="sub-btn" id= ${idx}>${item.subscribe ? "Subscribed" : "Subscribe"}</button>
          </div>
          <div class="descrption">
            <h2>
            ${item.videoDes}
            </h2>
          </div>
        </div>
        <div class="music-det">
          <p>${item.musicName}</p>
          <img
            src=${item.musicLogo}
            alt=""
          />
        </div>
        
        
        <div class="progress">
          <div class="inner"></div>
        </div>
      </div>`;
    allreels.innerHTML = sum;
    let random = 0;
  let time = Math.floor(Math.random() * 45);
  let inner = document.querySelector(".inner");
  setInterval(() => {
    random++;
    inner.style.width = random + "%";
  }, 200);
  });
}

addData();
allreels.addEventListener("click", (det) => {
  if (det.target.className == "like") {
    if (!reel[det.target.id].isLiked) {
      reel[det.target.id].isLiked = true;
      reel[det.target.id].likeCount++;
      addData();
    } else {
      reel[det.target.id].likeCount--;
      reel[det.target.id].isLiked = false;
      addData();
    }
  }
  if (det.target.className == "sub-btn") {
    if (!reel[det.target.id].subscribe) {
      reel[det.target.id].subscribe = true;
      addData();
    } else {
      reel[det.target.id].subscribe = false;
      addData();
    }
  }
  if (det.target.className == "video") {
    if (!reel[det.target.id].isMute) {
      reel[det.target.id].isMute = true;
      addData();
    } else {
      reel[det.target.id].isMute = false;
      addData();
    }
  }
});
