import React from 'react';

const SummaryOption = (props) => (
    <li className="spec-list__spec" key={ `selected${ props.i }` }>{ props.name }</li>
);

export default SummaryOption;
