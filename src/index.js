import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = {
    Latitude: null,
    Longitude: null,
    errorMessage: ''
  };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          Latitude: position.coords.latitude,
          Longitude: position.coords.longitude
        });
      },

      err => {
        console.log(err.message);
        this.setState({ errorMessage: err.message });
      }
    );
  };

  render() {
    if (this.state.errorMessage && !this.state.Latitude) {
      return (
        <div>
          <h1> Error: {this.state.errorMessage} </h1>
        </div>
      );
    } else if (
      !this.state.errorMessage &&
      this.state.Latitude &&
      this.state.Longitude
    ) {
      return (
        <div>
          <h1>Longitude : {this.state.Longitude}</h1>
          <h1>Latitude : {this.state.Latitude}</h1>
          <SeasonDisplay lat={this.state.Latitude} />
        </div>
      );
    }
    if (
      !this.state.errorMessage &&
      !this.state.Latitude &&
      !this.state.Longitude
    ) {
      return <h1>Loading!</h1>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
