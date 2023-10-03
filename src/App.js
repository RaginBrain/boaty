import React from 'react'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Slider from '@mui/material/Slider';



const cache = createCache({
  key: 'css',
  prepend: true, // Ensure Emotion's styles are injected first
});


const App = () => {
  return (
  <CacheProvider value={cache}>
    <StyledEngineProvider injectFirst>

        <div className='bg-black'>App</div>
        <Slider defaultValue={30} />
        <Slider
        defaultValue={30}
        className="text-teal-600"
        slotProps={{ thumb: { className: 'rounded-sm' } }}
      />

    </StyledEngineProvider>
  </CacheProvider>

  )
}

export default App