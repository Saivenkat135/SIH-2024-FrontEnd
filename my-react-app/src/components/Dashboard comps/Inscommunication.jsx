import React ,{useState}from 'react'
import "../styles/Inscommunication.css";
export default function Inscommunication() {
    const [isEnabled, setIsEnabled] = useState(false); 
    const [clicks, setClicks] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEnabled(false);
      setClicks(false);   
    };
  
    function isclicked() {
      if (!isEnabled) {
        setClicks(true);
        setIsEnabled(true);
      }
      console.log(clicks);
      console.log(isEnabled);
    }
  return (
   <>
   <div className='ins-cont'>
   <div className="ins-main">
    <p className="ins-head">Communication with Drug Inspector</p>
    <p className="ins-feed">Feedback</p>
    <p className="paragraph">Resend IE certificate properly</p>  
    <p className="paragraph">Reenter authorized GST number</p> 

    <button
        disabled={isEnabled}
        className={`toggle-button ${isEnabled ? "active" : "inactive"}`}
        onClick={isclicked}
    >
        Re-notify
    </button>

    {isEnabled && clicks && (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What do you wanna say to the inspector ?" className="input-field" />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    )}
</div>
</div>
 </>
  )
}
