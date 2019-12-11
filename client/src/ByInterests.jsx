import React from 'react';
import Rating from '@material-ui/lab/Rating'


const ByInterests = (props) => {



  return (
    <div>
      <h3>By customer groups and interests</h3>
      <div>
        <span className="tsSideBarSubtitle">Survival</span>
        <Rating name="survival" precision={0.2} value={4.5} readOnly={true} size="small"/>
        <span>4.5</span>
      </div>
      <div>
        <span>Scavenging</span>
        <Rating name="scavenging" precision={0.2} value={4.3} readOnly={true} size="small"/>
        <span>4.3</span>
      </div>
      <div>
        <span className="tsSideBarSubtitle">Is this feature helpful?</span>
        <button>Yes</button>
        <button>No</button>
      </div>
      <div className="tsSeperator"></div>
    </div>
  )
}

export default ByInterests;