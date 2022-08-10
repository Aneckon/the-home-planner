import React, { useRef } from 'react';

import { Header, Info, SideBar, SplinePanel } from './components';

export const App = () => {
  const dataRef = useRef<any>();

  return (
    <div>
      <Header />
      <SideBar />
      <SplinePanel dataRef={dataRef} />
      <Info />
    </div>
  );
};
