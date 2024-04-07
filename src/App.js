import './App.css';

import {useState} from 'react';

const App = () => {
  const initialEmployees = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bobby Hadz'},
  ];
  const [employees, setEmployees] = useState(initialEmployees);

  // 👇️ Check if array contains object
  const isFound = employees.some(element => {
    if (element.id === 1) {
      return true;
    }

    return false;
  });

  if (isFound) {
    console.log('✅ array contains object with id = 1');
  }

  return (
    <div>
      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <h2>id: {employee.id}</h2>
            <h2>name: {employee.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
