import React, { useState } from 'react';

import { Panel } from '..';

import './sideBar.scss';

import block from '../../image/sidebar/block.svg';
import box from '../../image/sidebar/box.svg';
import school from '../../image/sidebar/school.svg';
import history from '../../image/sidebar/history.svg';
import favorite from '../../image/sidebar/favorite.svg';

const sideBarImageMok = [
  {
    id: 1,
    image: block,
    name: 'block',
  },
  {
    id: 2,
    image: box,
    name: 'box',
  },
  {
    id: 3,
    image: school,
    name: 'school',
  },
  {
    id: 4,
    image: history,
    name: 'history',
  },
  {
    id: 5,
    image: favorite,
    name: 'favotite',
  },
];

export const SideBar= () => {
  const [openPanel, setOpenPanel] = useState<any>();

  return (
    <div className="sideBar">
      {sideBarImageMok.map((item) => (
        <div className="sideBar__item" key={item.id}>
          <div className="sideBar__content" onClick={() => setOpenPanel(item.name)}>
            <img src={item.image} alt="" />
            <div className="sideBar__content-dropright">
              <p>{item.name}</p>
            </div>
          </div>
          <Panel
            className={openPanel === item.name ? 'panel open' : 'panel'}
            setOpenPanel={setOpenPanel}
            title={item.name}
          />
        </div>
      ))}
    </div>
  );
};
