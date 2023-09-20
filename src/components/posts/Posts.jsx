import "./posts.css"
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Users, postss } from "../../dummyData"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from "react";


// const liking =  () =>  {
//   document.querySelector(".postBox1").style.color = "#1877f2";
//   document.querySelector(".postDownIcon").style.color = "#1877f2";
// }
export default function Posts({posts}) {
  
  const a = () => {
    document.querySelector(".postBox").style.color = "#1877f2"
    document.querySelector(".postDownIcon").style.color = "#1877f2"
  }
  const b = () => {
    document.querySelector(".postBox").style.color = "#404040"
    document.querySelector(".postDownIcon").style.color = "#404040"
  }

  const [like, setLike] = useState(posts.like);
  const [isliked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isliked? b : a)
    setLike(isliked? like - 1 :like + 1)
    setIsLiked(!isliked)
  }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="postTopImgContainer">
            <img className="postTopImg" src={Users.filter(u => u.id === posts.userId)[0].profilPicture} alt="" />
            </div>
            <span className="postUserName">{Users.filter(u => u.id === posts.userId)[0].username}</span>
            <span className="postDate">{posts.date}.</span>
            <div className="publicIconContanier">
            <PublicIcon className="publicIcon"/>
            </div>
          </div>
          <div className="postTopRight">
            <MoreHorizIcon className="postTopRightIcon"/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{posts?.desc}</span>
          <img className="postCenterImg" src={posts.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <img className="likeIcon" src="assets/like.png" alt="" />
            <span className="postlikeCounter">You and {like} others</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{posts.comment} comments</div>
          </div>
        </div>
        <hr className="postBottomHr"/>
          <div className="postDownBottom">
            <div className="postBox" onClick={likeHandler}><ThumbUpIcon className="postDownIcon"/> Like</div>
            <div className="postBox"><ChatBubbleIcon className="postDownIcon"/> Comment</div>
            <div className="postBox"><ReplyIcon className="postDownIcon"/> Share</div>
          </div>
      </div>
    </div>
  )
}
