import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {

      developer: [
        {
          id: 1,
          nama: 'Edi Santoso',
        },

        {
          id: 2,
          nama: 'Suranta Petrus',
        },

        {
          id: 3,
          nama: 'Abrar Chandra',
        }
      ]

    }
  }

  render() {
    return (
      <div>
        {
          this.state.developer.map((dinamis, Key) =>
            <div>
              <h3>{dinamis.id} {dinamis.nama}</h3>

            </div>

          )
        }
      </div>
    );
  }
}

export default App;