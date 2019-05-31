import React, { Component } from 'react';
import Offer from '../../components/offer/Offer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { increase, decrease } from '../../reducers/offer';

class OfferContainer extends Component {
    static propTypes = {
        tiger: PropTypes.number,
        increase: PropTypes.func,
        decrease: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleIncrease = () => {
        if (this.props.increase) {
            this.props.increase();
        }
    }
    handleDecrease = () => {
        if (this.props.decrease) {
            this.props.decrease();
        }
    }
    render() {
        return (
            <Offer
                tiger={this.props.tiger}
                onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tiger: state.tiger
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(increase())
        },
        decrease: () => {
            dispatch(decrease())
        }
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(OfferContainer);