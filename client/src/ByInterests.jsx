import React from 'react';
import Rating from '@material-ui/lab/Rating'


const ByInterests = (props) => {



  return (
    <div>
      <h3 className="tsSideBarHeader">By customer groups and interests</h3>
      <div className="tsInterestSubContainer">
        <span className="tsSideBarSubtitle">Survival</span>
        <div>
          <Rating name="survival" precision={0.2} value={4.5} readOnly={true} size="small"/>
          <span className="tsSideBarTextRating">4.5</span>
        </div>
      </div>
      <div className="tsInterestSubContainer">
        <span className="tsSideBarSubtitle">Scavenging</span>
        <div>
          <Rating name="scavenging" precision={0.2} value={4.3} readOnly={true} size="small"/>
          <span className="tsSideBarTextRating">4.3</span>
        </div>
      </div>
      {props.featureHelpfulClicked === false ? (
      <div id="tsInterestSubContainerEnd">
        <span id="tsFeatureHelpfulQ">Is this feature helpful?</span>
        <div>
          <button className="tsInterestsButton" onClick={props.sidebarHelpfulClicked}>Yes</button>
          <button className="tsInterestsButton" onClick={props.sidebarHelpfulClicked}>No</button>
        </div>
      </div>
    ) : (
    <div>
      <span className="tsHelpfulSubmitted">√</span>
      <span className="tsHelpfulSubmitted">Thank you for your feedback.</span>
    </div>
    )}
      {/* <div id="tsInterestSubContainerEnd">
        <span id="tsFeatureHelpfulQ">Is this feature helpful?</span>
        <div>
          <button className="tsInterestsButton">Yes</button>
          <button className="tsInterestsButton">No</button>
        </div>
      </div> */}
      <div className="tsSeperator"></div>
    </div>
  )
}

export default ByInterests;