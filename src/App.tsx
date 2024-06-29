import React, { useState, useEffect } from 'react';
import Loading from './components/Loading'
import { About, Hero, Project, Service, Skills } from './section';
import Bar from './components/Bar';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2800)); // Adjust the duration as needed
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className='relative bg-background flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <Hero />
        <Bar />
        <About />
        <Service />
        <Skills />
        <Project />
      </div>
    </main>
  );
};

export default App;
