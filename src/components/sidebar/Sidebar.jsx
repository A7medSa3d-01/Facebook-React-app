import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
	return(
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarGift">
					<span className="sidbarGiftPerson">Today Is Ali's Birthday</span>
					<img className="sidebarGiftIcon" src="/assets/gift.png" alt="Gift Icon" />
				</div>
				<hr className="sidebarHr"/>
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeedIcon className="sidebarIcon"/>
						<span className="sidebarListText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<ChatIcon className="sidebarIcon"/>
						<span className="sidebarListText">Chats</span>
					</li>
					<li className="sidebarListItem">
						<PlayCircleFilledIcon className="sidebarIcon"/>
						<span className="sidebarListText">Videos</span>
					</li>
					<li className="sidebarListItem">
						<GroupIcon className="sidebarIcon"/>
						<span className="sidebarListText">Groups</span>
					</li>
					<li className="sidebarListItem">
						<BookmarksIcon className="sidebarIcon"/>
						<span className="sidebarListText">Bookmarks</span>
					</li>
					<li className="sidebarListItem">
						<HelpOutlineIcon className="sidebarIcon"/>
						<span className="sidebarListText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<WorkIcon className="sidebarIcon"/>
						<span className="sidebarListText">Jops</span>
					</li>
					<li className="sidebarListItem">
						<EventIcon className="sidebarIcon"/>
						<span className="sidebarListText">Events</span>
					</li>
					<li className="sidebarListItem">
						<SchoolIcon className="sidebarIcon"/>
						<span className="sidebarListText">Courses</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr"/>
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Ali</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Mohamed</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Khalid</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Essam</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/7.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Omer</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/8.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Abd Elrahman</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/9.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Mostafa</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/10.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Osama</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Islam</span>
					</li>
					<li className="sidebarFriend">
						<div className="sidebarImgContainer">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
						</div>
						<span className="sidebarFriendName">Yousef</span>
					</li>
				</ul>
			</div>
		</div>
	)
}