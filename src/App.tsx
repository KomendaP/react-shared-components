import { useEffect, useState } from 'react';
import Button from './components/button/Button';

function App() {
  const [isDarkMode, seIsDarkMode] = useState(false);

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <section className="flex bg-white h-full dark:bg-black">
      <main className="container w-5/6 mx-auto text-sm font-bold">
        <h1 className="flex flex-col flex-grow text-center text-lg font-bold uppercase dark:text-white">
          Components
          <Button
            className="bg-blue-400 dark:text-white"
            onClick={() => seIsDarkMode((p) => !p)}
          >
            {isDarkMode ? 'Light' : 'Dark'} mode
          </Button>
        </h1>
      </main>
    </section>
  );
}

export default App;
