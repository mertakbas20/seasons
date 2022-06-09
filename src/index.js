import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME we direct assignment
        //to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!!!!
                this.setState({ lat: position.coords.latitude });

                //we did not!!
                // this.state.lat= position.coords.latitude %böyle direk atama yapılmamalı
            },

            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }
    // React says we have to define render!!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }
        else {
            return <div>Loading...</div>
        }

        // return (
        //     <div>
        //         Latitude: {this.state.lat}
        //         <br />
        //         Error:{this.state.errorMessage}
        //     </div>
        // );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));