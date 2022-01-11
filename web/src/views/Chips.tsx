/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { TChipItem } from '../store/Data';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faFileCode } from '@fortawesome/free-solid-svg-icons'


const Chips = ({
    info
}: {
    info: TChipItem
}) => {

    const CompChip = info.colors.map((item: string, i: number) => {
        return <Chip colorCode={item} key={`chip-${i}`} />
    })
    return (
        <div className="view-chips">

            <ul className="palette">
                {CompChip}
            </ul>
            <div className="functions">
                <div css={css`
                    font-size:10px;
                    padding: 5px;
                    margin: 0px -5px;
                    color: #C2C2C2;
                    display:inline-block;
                `}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </div>
            </div>


        </div>
    );
};

const Chip = ({
    colorCode
}: {
    colorCode: string
}) => {
    const [isOver, setIsOver] = useState(false);
    return <li className="chip"
        onMouseOver={() => {
            setIsOver(true);
        }}
        onMouseOut={() => {
            setIsOver(false);
        }} css={css`
        background-color: ${colorCode};`
        } >
        <div css={css`
        opacity: ${isOver ? 1 : 0}
    `} className="btn-copy">COPY</div>
    </li >
}

export default Chips;