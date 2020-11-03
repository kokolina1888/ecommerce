import React from "react";
import "./styles.scss";

const index = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className='form-input' onChange={ handleChange } { ...otherProps } />
      {
        label ? 
        (<label className={`${otherProps.value.legth ? 'shrink' : ''} form-input-label`}>
          { label }
        </label>)
        : null
      }
    </div>
  );
};

export default index;