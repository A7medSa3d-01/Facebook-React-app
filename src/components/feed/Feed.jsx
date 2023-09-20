import "./feed.css"
import Share from "./share/Share"
import { postss } from "../../dummyData"
import Posts from "../posts/Posts"

export default function Feed() {
	return(
		<div className="feed">
			<div className="feedWrapper">
				<Share/>
				{postss.map((p) => (
					<Posts key={p.id} posts={p}/>
				))}

			</div>
		</div>
	)
}