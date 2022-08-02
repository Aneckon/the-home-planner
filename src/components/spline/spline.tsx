import React, { useEffect, useState, FC } from 'react';
import Spline from '@splinetool/react-spline';

import './spline.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface SplinePanelProps {
  dataRef: any;
}

export const SplinePanel: FC<SplinePanelProps> = ({ dataRef }) => {
  const [dataHide, setDataHide] = useState<any>();
  const dataName = useSelector((state: RootState) => state.dataNameReducer.dataNameList);

  const onLoad = (spline: { findObjectByName: (name: string) => void }) => {
    const bedLoad = spline.findObjectByName('bed');
    const rugLoad = spline.findObjectByName('rug');
    const tableLoad = spline.findObjectByName('table');

    setDataHide({ bedLoad, rugLoad, tableLoad });

    dataRef.current = { bedLoad, rugLoad, tableLoad };
  };

  useEffect(() => {
    if (dataHide) {
      dataRef.current.bedLoad.visible = false;
      dataRef.current.rugLoad.visible = false;
      dataRef.current.tableLoad.visible = false;
    }
    if (dataName.includes('bed')) {
      dataRef.current.bedLoad.visible = true;
    }
    if (dataName.includes('rug')) {
      dataRef.current.rugLoad.visible = true;
    }
    if (dataName.includes('table')) {
      dataRef.current.tableLoad.visible = true;
    }
  }, [dataHide, dataRef, dataName]);

  return (
    <div className="spline">
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/wDOnG4ub6UUJ5cGk/scene.splinecode"
      />
    </div>
  );
};
