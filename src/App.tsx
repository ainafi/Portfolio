import React from 'react';
import { About, Hero,Project,Service, Skills } from './section';
import Bar from './components/Bar';

const App: React.FC = () => {
  return (
    <main className='relative bg-background flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <Hero />
        <Bar />
        <About />
        <Service/>
        <Skills/>
        <Project/>
      </div>
    </main>
  );
}

export default App;
