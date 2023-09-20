import React from 'react';
import Header from './header';
import FilterContainer from './filter-container';

function App() {
  return (
    <div className="w-full h-full">
      <Header/>
      <main className="container py-8 flex">
        {/* Filter container */}
        <FilterContainer/>
        {/* Result container */}
      </main>
    </div>
  );
}

export default App;
