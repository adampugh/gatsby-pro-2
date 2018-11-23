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

// const DoesThisWork = () => (
//     <h1>ello</h1>
// )


export default DoesThisWork;