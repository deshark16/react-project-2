import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/iron.png';

interface IProps {
    height?: number;
    width?: number;
}

export const IronIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <img src={icon} alt="Iron" />
    );
};
