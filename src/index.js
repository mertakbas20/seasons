import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props){
        super(props);
        
        //THIS IS THE ONLY TIME we direct assignment
        //to this.state
        this.state = {lat: 40};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!!!!
                this.setState({ lat: position.coords.latitude});

                //we did not!!
                // this.state.lat= position.coords.latitude %böyle direk atama yapılmamalı
            } ,
            err => console.log(err)
        );
    }
    // React says we have to define render!!
    render() {
       
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));