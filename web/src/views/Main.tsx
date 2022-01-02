import React from 'react';
import data, { TChipItem } from '../store/Data';
import Chips from './Chips';

const Main = () => {
    const CompItem = data.colors.map((item: TChipItem, i: number) => {
        return <li className="grid-item" key={`grid-item-${i}`}>
            <Chips info={item} />
        </li>
    });
    return (
        <div className="view-main">
            <ul className="grid-container">
                {CompItem}
            </ul>
        </div>
    );
};


export default Main;