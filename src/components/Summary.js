import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummaryOption from './SummaryOption';

export class Summary extends React.Component {
    renderSelected (option, i) {
        return <SummaryOption name={ option.name } key={ `selected${ i }` } />
    }

    render () {
        const selected = [];
        let total = 0;

        const keys = Object.keys(this.props.laptop);
        keys.forEach(key => {

            // bit naive, assumes there will always be a selected option and will crash if not
            const selectedOption = this.props.laptop[key].options.filter(option => option.selected)[0];
            selected.push(selectedOption);
            total += selectedOption.price;
        });

        return (
            <div className="summary-window rounded-grey-border">
                <h2>Summary</h2>
                <div className="summary-window__chosen-specs">
                    <ul className="chosen-specs__spec-list list--no-style">
                        { selected.map(this.renderSelected) }
                    </ul>
                </div>
                <span className="summary-window__total">{ `Total: £${ total }` }</span>
                <button className="buy-button clickable">Buy now</button>
            </div>
        );
    }
}

Summary.propTypes = {
    laptop: PropTypes.object
}

function mapStateToProps(state, props) {
  return {
    laptop: state.laptop
  };
}

export default connect(mapStateToProps)(Summary);
