import React, { Component } from 'react';
import Offer from '../components/Offer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { increase, decrease } from '../reducers/offer';

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
            <div >
                <div className="wrapper">
                    <Offer
                        tiger={this.props.tiger}
                        onIncrease={this.handleIncrease}
                        onDecrease={this.handleDecrease}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    state = state.offerReducer;
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