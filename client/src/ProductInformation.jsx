import React from 'react';


const ProductInformation = (props) => {

  return (
    <div>
      <h2 id="tsImportantInformationHeader">Important Information</h2>
      <div id="tsImportantInformationSubContainer">
        {props.safetyWarning ? (
          <div>
            <h5 className="tsProductInformationSubHeader">Safety Warning</h5>
            <p className="tsProductInformationBody">{props.safetyWarning}</p>
          </div>
        ) : (null)}
        <h5 className="tsProductInformationSubHeader">Legal Disclaimer</h5>
        <p className="tsProductInformationBody">*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. 
          <br></br><br></br>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p>
        {props.foodIngredients ? (
          <div>
            <h5 className="tsProductInformationSubHeader">Ingredients</h5>
            <p className="tsProductInformationBody">{props.foodIngredients}</p>
          </div>
        ) : (null)}
        {props.directions ? (
          <div>
            <h5 className="tsProductInformationSubHeader">Directions</h5>
            <p className="tsProductInformationBody">{props.directions}</p>
          </div>
        ) : (null)}
      </div>
    </div>
  )

}



export default ProductInformation;