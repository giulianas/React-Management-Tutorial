import React from 'react';
import Customer from './components/Customer'
import './App.css';
import { render } from '@testing-library/react';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '이경진',
    'company' : 'SOSIT',
    'job' : 'web designer',
    'age' : '44'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'company' : 'no',
    'job' : 'no job',
    'age' : '144'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '제니',
    'company' : 'JYP',
    'job' : 'singer',
    'age' : '24'
  }
]

function App() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                job={c.job}
                age={c.age}
              />
            )
          })
        }
      </div>
    );
}

export default App;
