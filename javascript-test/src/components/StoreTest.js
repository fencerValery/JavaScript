import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

class StoreTest extends Component {

//     getChildContext() {
// debugger;

//         return {
//             store: this.props.store
//         }
//     }
    componentWillMount() {
        debugger;
        alert('sdsd');
         this.unsubscribe = store.subscribe(
             () => this.forceUpdate()
         )
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                <p>QWERTY</p>
                <button>STOP</button>
            </div>
        )
    }
}
alert('1');
StoreTest.propTypes = {
    store: PropTypes.object.isRequired
}
// alert('2');
// StoreTest.childContextTypes = {
//     store: PropTypes.object.isRequired
// }
// alert(3);

export default StoreTest 