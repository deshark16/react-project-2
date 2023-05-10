import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const BoosterIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.88239 14.1854L10.9999 6.50908C11.201 6.20751 11.1195 5.80006 10.8179 5.59902C10.7101 5.52715 10.5835 5.4888 10.4539 5.4888H6.43011V0.65625C6.43011 0.293813 6.13629 0 5.77386 0C5.55444 0 5.34953 0.10966 5.22782 0.292228L0.110287 7.96853C-0.0907571 8.2701 -0.00926796 8.67754 0.292298 8.87859C0.400098 8.95045 0.52676 8.9888 0.65632 8.9888H4.68011V13.8214C4.68011 14.1838 4.97392 14.4776 5.33636 14.4776C5.55577 14.4776 5.76068 14.3679 5.88239 14.1854Z" fill="#A98B89"/>
        </svg>

    );
};
