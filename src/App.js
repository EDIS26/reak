import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = { ITDivision: [] }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/EDIS26/reak/master/homestays.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({ homestays: data })
      }
      )
  }
  render() {
    return (
      <div>
        {
          this.state.ITDivision.map((dinamis, key) =>
            <div>
              <h3>{dinamis.npk} {dinamis.nama} {dinamis.alamat} rb</h3>
            </div>
          )
        }
      </div>
    );
  }

}

export default App;