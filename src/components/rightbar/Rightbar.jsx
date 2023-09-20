import "./rightbar.css"

export default function Rightbar(profile) {

	const HomeRightbar = () => {
		return (
		<>
		<img className="rightbarAd" src="assets/ad.png" alt="" />
		</>
		)
	}
	const ProfileRightbar = () => {
		return (
			<>
			<h4 className="rightbarTitle">Info</h4>
			<div className="rightbarInfo">
				<div className="rightbarInfoItem">
					<span className="rightbarInfokey">City:</span>
					<span className="rightbarInfoValue">New York</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfokey">from:</span>
					<span className="rightbarInfoValue">Luxor</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfokey">Relationship</span>
					<span className="rightbarInfoValue">Single</span>
				</div>
				</div>
				<h4 className="rightbarTitle">Friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Heba</span>
					</div>
					<div className="rightbarFollowing">
						<img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Israa</span>
					</div>
					<div className="rightbarFollowing">
						<img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Alaa</span>
					</div>
					<div className="rightbarFollowing">
						<img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">abear</span>
					</div>
					<div className="rightbarFollowing">
						<img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">alyaa</span>
					</div>
					<div className="rightbarFollowing">
						<img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Ahmed Ali</span>
					</div>
					</div>
			</>
		)
	}
	return(
		<div className="rightbar">
			<div className="rightbarWrapper">
				{profile ? <ProfileRightbar/> : <HomeRightbar/>}
			</div>
		</div>
	)
}