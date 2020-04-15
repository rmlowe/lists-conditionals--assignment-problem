import React from 'react';

const validationComponent = props => <p>{props.textLength < 5 ? 'Text too short' : 'Text long enough'}</p>;

export default validationComponent;