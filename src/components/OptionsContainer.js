import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as laptopActions from '../actions/laptop-actions';

export class Options extends React.Component {
    handleClick = option => {
        // fire redux action
        this.props.actions.changeSelection(option);
    }

    // TODO: this can be separate component
    renderLaptopComponent = (laptopComponent, i) => {
        return (
            <div className="spec-sheet__component" key={ `laptopComponent${ i }` }>
                <h4 className="component__title">{ laptopComponent }</h4>
                <ul className="component__component-options list--no-style">
                    { this.props.laptop[laptopComponent].options.map(this.renderComponentOptions) }
                </ul>
            </div>
        );
    }

    // TODO: so can this
    renderComponentOptions = (option, i) => {
        const classes = classnames('component-options__component-option clickable rounded-grey-border', {
            selected: option.selected
        });

        return (
            <li className={ classes } onClick={ () => this.handleClick(option) } key={ `option${ i }` }>
                <span className="component-option__name">{ option.name }</span>
                <span className="component-option__price">{ `£${ option.price }` }</span>
            </li>
        );
    }

    render () {
        const data = Object.keys(this.props.laptop);

        return (
            <div className="spec-sheet rounded-grey-border">
                <h2>Customisation Choices</h2>

                { data.map(this.renderLaptopComponent) }
            </div>
        );
    }
}

// TODO: add prop shapes
Options.propTypes = {
    laptop: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps(state, props) {
  return {
    laptop: state.laptop
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(laptopActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
