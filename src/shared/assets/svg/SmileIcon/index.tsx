import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const SmileIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 21, height = 21 } = props;

    const classname = classNames([
        styles.svg,
    ])
//fill="#403B43"
    return (
        <svg className={classname} height={height} width={width} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2501 0.0773926C15.888 0.0773926 20.4584 4.64782 20.4584 10.2857C20.4584 15.9236 15.888 20.4941 10.2501 20.4941C4.61217 20.4941 0.041748 15.9236 0.041748 10.2857C0.041748 4.64782 4.61217 0.0773926 10.2501 0.0773926ZM13.1995 12.3831C13.0835 12.5455 12.9535 12.699 12.8099 12.8426C11.396 14.2565 9.10361 14.2563 7.68959 12.8423C7.54616 12.6989 7.41623 12.5455 7.30034 12.3834C6.97235 11.9245 6.33453 11.8184 5.87572 12.1463C5.4169 12.4742 5.31085 13.112 5.63884 13.5709C5.81996 13.8243 6.02259 14.0635 6.2455 14.2864C8.45717 16.4981 12.0428 16.4983 14.2541 14.2869C14.4773 14.0637 14.6801 13.8243 14.8614 13.5705C15.1892 13.1117 15.083 12.4738 14.6241 12.146C14.1651 11.8181 13.5273 11.9243 13.1995 12.3831ZM6.67716 6.71281C5.83148 6.71281 5.14591 7.39837 5.14591 8.24406C5.14591 9.08975 5.83148 9.77531 6.67716 9.77531C7.52285 9.77531 8.20842 9.08975 8.20842 8.24406C8.20842 7.39837 7.52285 6.71281 6.67716 6.71281ZM13.823 6.71281C12.9773 6.71281 12.2917 7.39837 12.2917 8.24406C12.2917 9.08975 12.9773 9.77531 13.823 9.77531C14.6687 9.77531 15.3542 9.08975 15.3542 8.24406C15.3542 7.39837 14.6687 6.71281 13.823 6.71281Z" />
        </svg>
    );
};