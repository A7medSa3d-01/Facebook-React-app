import './share.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideocamIcon from '@mui/icons-material/Videocam';
import TagFacesIcon from '@mui/icons-material/TagFaces';
export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="sharerTop">
          <div className="imgContainer">
          <img className='shareProfileImg' src="/assets/person/11.jpg" alt="" />
          </div>
          <input placeholder= "What's on your mind, Ahmed" className="shareInput" />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
          <div className="shareObtions">
            <div className="shareObtion">
              <VideocamIcon className='shareIcon icon1'/>
              <span className='shareObtionText'>Live video</span>
            </div>
            <div className="shareObtion">
              <PhotoLibraryIcon className='shareIcon icon2'/>
              <span className='shareObtionText'>Photo/Vedio</span>
            </div>
            <div className="shareObtion">
              <TagFacesIcon className='shareIcon icon3'/>
              <span className='shareObtionText'>Feeling/activity</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
