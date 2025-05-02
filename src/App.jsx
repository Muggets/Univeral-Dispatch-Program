import React from 'react';
import IncidentQueue from './components/IncidentQueue';
import './index.css';

export default function App() {
  return (
    <div style={{ padding: '1rem', height: '100vh', boxSizing: 'border-box' }}>
      <h1>SAFR Dispatch UI</h1>
      <IncidentQueue />
      {/* Future panels will go here */}
    </div>
  );
}
