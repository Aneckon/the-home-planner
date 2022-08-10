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

  const onLoad = (spline: { findObjectByName: (arg0: string) => any }) => {
    const homeLoad = spline.findObjectByName('home');

    const bedLoad = spline.findObjectByName('bed');
    const rugLoad = spline.findObjectByName('rug');
    const tableLoad = spline.findObjectByName('table');
    const windowLoad = spline.findObjectByName('window');
    const doorLoad = spline.findObjectByName('door');
    const paintingLoad = spline.findObjectByName('painting');
    const chairLoad = spline.findObjectByName('chair');
    const pcLoad = spline.findObjectByName('pc');

    if (homeLoad !== undefined) {
      setDataHide({
        bedLoad,
        rugLoad,
        tableLoad,
        windowLoad,
        doorLoad,
        paintingLoad,
        chairLoad,
        pcLoad,
      });
      dataRef.current = {
        bedLoad,
        rugLoad,
        tableLoad,
        windowLoad,
        doorLoad,
        paintingLoad,
        pcLoad,
        chairLoad,
      };
    }
  };

  useEffect(() => {
    if (dataHide) {
      dataRef.current.bedLoad.visible = false;
      dataRef.current.rugLoad.visible = false;
      dataRef.current.tableLoad.visible = false;
      dataRef.current.windowLoad.visible = false;
      dataRef.current.doorLoad.visible = false;
      dataRef.current.paintingLoad.visible = false;
      dataRef.current.chairLoad.visible = false;
      dataRef.current.pcLoad.visible = false;
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
    if (dataName.includes('window')) {
      dataRef.current.windowLoad.visible = true;
    }
    if (dataName.includes('door')) {
      dataRef.current.doorLoad.visible = true;
    }
    if (dataName.includes('painting')) {
      dataRef.current.paintingLoad.visible = true;
    }
    if (dataName.includes('chair')) {
      dataRef.current.chairLoad.visible = true;
    }
    if (dataName.includes('pc')) {
      dataRef.current.pcLoad.visible = true;
    }
  }, [dataHide, dataRef, dataName]);

  const onMouseDown = (e: any) => {
    console.log(e);

    if (e.target.name === 'group') {
      console.log('I have been clicked! group');
    }
    if (e.target.name === 'bed') {
      console.log('I have been clicked! bed');
    }
  };

  return (
    <div className="spline">
      <Spline
        onMouseDown={onMouseDown}
        onLoad={onLoad}
        scene="https://prod.spline.design/eemBju5AbZCRFpu6/scene.splinecode"
      />
    </div>
  );
};
