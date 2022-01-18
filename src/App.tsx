import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello DefaultProps',
};
export default App;
