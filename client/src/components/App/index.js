import React from 'react';

const headerData = [
  {
    name: 'Name'
  },
  {
    name: 'Age'
  }
];

const bodyData = [
  {
    name: 'Dmitry',
    age: 20
  },
  {
    name: 'Vasiliy',
    age: 30
  }
];

class App extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {
              headerData.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            bodyData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  };
}

export default App;