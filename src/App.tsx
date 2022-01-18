import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello DefaultProps',
};
export default App;
