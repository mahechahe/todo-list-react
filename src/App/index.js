import React from 'react';
import { AppUi } from './AppUi';
import {TodoProvider} from '../TodoContext'


function App() {
  
 

  return (
    <TodoProvider>
      <AppUi></AppUi>
    </TodoProvider>
  );
}

export default App;