/** @jsxImportSource @emotion/react */

import React from 'react';
import { TChipItem } from '../store/Data';
import { css } from '@emotion/react';

const Chips = ({
    info
}: {
    info: TChipItem
}) => {
    const CompChip = info.colors.map((item: string, i: number) => {
        return <li className="chip" css={css`
            
            background-color: ${item};`
        } key={`chip-${i}`}></li >
    })
    return (
        <div className="view-chips">
            <ul className="palette">
                {CompChip}

            </ul>
        </div>
    );
};

export default Chips;