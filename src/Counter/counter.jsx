import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0  
        };
    }

    incrementCount = (increment) => {
        this.setState(prevState => ({
            count: prevState.count + increment
        }));
    }

    render() {
        const { count } = this.state;
        return (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={() => this.incrementCount(10)} style={{ margin: '10px', fontSize: '16px' }}>
                    +10
                </button>
                <button onClick={() => this.incrementCount(-100)} style={{ margin: '10px', fontSize: '16px' }}>
                    -100
                </button>
                <button onClick={() => this.incrementCount(25)} style={{ margin: '10px', fontSize: '16px' }}>
                    +25
                </button>
                <div style={{ fontSize: '20px', marginTop: '20px' }}>
                    Общий счёт: {count}
                </div>
            </div>
        );
    }
}

export default Counter;
