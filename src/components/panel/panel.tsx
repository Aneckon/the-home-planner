import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDataNameItem } from '../../redux/dataName/reducer';

import removeImage from '../../image/remove.svg';

import './panel.scss';

const panelImageMok = [
  {
    id: 1,
    name: 'table',
  },
  {
    id: 2,
    name: 'bed',
  },
  {
    id: 3,
    name: 'rug',
  },
  {
    id: 4,
    name: 'window',
  },
  {
    id: 5,
    name: 'door',
  },
  {
    id: 6,
    name: 'painting',
  },
];

interface PanelProps {
  title: string;
  setOpenPanel: (name: string) => void;
  className: string;
}

export const Panel: FC<PanelProps> = ({ title, className, setOpenPanel }) => {
  const [clickBlock, setClickBlock] = useState<any>();
  const dispatch = useDispatch();

  const handleClick = (name: string) => {
    setClickBlock(name);
    dispatch(setDataNameItem(name));
  };

  return (
    <div onClick={() => setClickBlock('')} className={className}>
      <div className="panel__head">
        <p>{title}</p>
        <img className="panel__remove" onClick={() => setOpenPanel('')} src={removeImage} alt="" />
      </div>
      <div className="panel__body">
        <div className="panel__body-search">
          <input type="text" placeholder="search" />
        </div>
        <div onClick={(e) => e.stopPropagation()} className="panel__body-content">
          {panelImageMok.map((item) => (
            <div
              onClick={() => handleClick(item.name)}
              key={item.id}
              className={
                clickBlock === item.name
                  ? 'panel__body-item panel__body-item__active'
                  : 'panel__body-item'
              }>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
