import "./PageOne.css"
import { Audio } from '../../assets/Audio1'


const PageOneCom = () => {
  
  return (
    <div className="pageOne-com">
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

export default PageOneCom
