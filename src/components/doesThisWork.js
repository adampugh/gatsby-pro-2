import React, { Component } from 'react';

class DoesThisWork extends Component {
    componentDidMount() {
        alert('this will mount');
    }

    render() {
        return (
            <div>hello this rendered</div>
        )
    }
}

export default DoesThisWork;