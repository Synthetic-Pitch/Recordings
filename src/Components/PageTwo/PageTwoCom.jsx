import './PageTwo.css'
import { Audio } from '../../assets/Audio2'
const PageTwoCom = () => {
  
  return (
    <div className="pageTwo-com">
      {
        Audio.map((item,index) =>
        (
          <div className="Page-container" key={index}>
            <span>{item.title}</span>
            <audio src={item.source} controlsList="nodownload noplaybackrate nofullscreen"  controls></audio>
          </div>
        ))
      }
    </div>
  )
}

export default PageTwoCom
