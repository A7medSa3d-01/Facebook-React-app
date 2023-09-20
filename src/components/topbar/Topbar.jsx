import "./topbar.css"
import  SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar()  {
	
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<spn className="logo">AhmedSa3d</spn>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<SearchIcon/>
					<input placeholder="Search For Friend, Post, or Video" className="searchInput"/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconitem">
					<PersonIcon/>
					<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconitem">
					<ChatIcon/>
					<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconitem">
					<NotificationsIcon/>
					<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img src="./assets/person/11.jpg" alt="" className="topbarImg" />
			</div>
		</div>	
	)
}
