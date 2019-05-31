import React, { Component } from 'react';

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            clickFlag: 0
        };
    }
    handleStartClick = (start) => {
        if (start === this.state.clickFlag) {
            this.setState({ start: 0, clickFlag: 0 });
        } else {
            this.setState({ start, clickFlag: start });
        }
    }
    handleStartMouseUserOver = (start) => {
        this.setState({ start });
    }
    handleStartMouseOut = () => {
        this.setState({ start: this.state.clickFlag });
    }
    render() {
        const { tiger, onIncrease, onDecrease } = this.props;
        return (
            <div>
                <div>{tiger}</div>
                <div>
                    <button onClick={onIncrease}>click up</button>
                    <button onClick={onDecrease}>click down</button>
                </div>
                <div className="start" onMouseLeave={this.handleStartMouseOut}>
                    {
                        [1, 2, 3, 4, 5].map((start) => {
                            const startClass = start > this.state.start ? 'normal' : 'active';
                            return (
                                <span
                                    key={start}
                                    className={"start-" + startClass}
                                    onClick={this.handleStartClick.bind(this, start)}
                                    onMouseOver={this.handleStartMouseUserOver.bind(this, start)}
                                >★</span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Offer;