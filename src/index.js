import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }



    // React says we have to define render!!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        else if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        else {
            return <Spinner  message="Pleace accept location request"/>;
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));