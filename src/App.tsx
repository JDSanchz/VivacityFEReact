import React, { useState, useEffect } from 'react';
import './App.css';
import HelloCard from './components/HelloCard';
import MyPicture from './components/MyPicture'; 

const App = () => {
  const [helloData, setHelloData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3080/awesome/applicant')
      .then((res) => res.json())
      .then((data) => setHelloData(data.helloIn7Languages))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="app-container">
      <MyPicture />
      {helloData ? <HelloCard helloIn7Languages={helloData} /> : 'Loading...'}
    </div>
  );
};

export default App;
