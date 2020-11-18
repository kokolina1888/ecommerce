import React from "react";
import CollectionPreview from "../collection-preview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {selectCollectionsForPreview } from "../../redux/shop/selectors";


const index = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateFromProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateFromProps)(index);
