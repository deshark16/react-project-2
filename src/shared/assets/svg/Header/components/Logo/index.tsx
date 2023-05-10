import React, { SVGProps } from 'react';

// import styles from './styles.module.scss';
// import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const LogoIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 78, height = 28 } = props;

    // const classname = classNames([
    //     styles.header,
    // ])

    return (
        // <svg className={classname} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1"
        // viewBox="0 0 11083.72 1838.55"
        // xmlnsXlink="http://www.w3.org/1999/xlink">
        // <defs>
        // <style type="text/css">
        // </style>
        // </defs>
        // <g id="Слой_x0020_1">
        // <metadata id="CorelCorpID_0Corel-Layer"/>
        // <path fill="#F09A38" fillRule="nonzero" d="M3420.87 1073.92l-180.22 243.43 -839.24 0 0 -793.51 839.24 0 180.22 243.43 -112.98 153.32 112.98 153.32zm7662.85 -550.08l-418.27 418.27 0 373.89 -239.4 0 0 -373.89 -419.62 -418.27 285.13 0 254.19 254.19 254.19 -254.19 283.78 0zm-1088.81 792.16l-239.4 0 0 -193.67 -72.62 -71.28 -457.28 0 0 264.95 -239.4 0 0 -792.16 828.47 0 180.22 243.43 -137.18 184.26 137.18 137.18 0 227.3zm-246.12 -532.59l-63.21 -83.39 -459.97 0 0 170.81 459.97 0 63.21 -87.42zm-891.4 532.59l-239.4 0 0 -193.67 -72.62 -71.28 -457.28 0 0 264.95 -239.4 0 0 -792.16 828.47 0 180.22 243.43 -137.18 184.26 137.18 137.18 0 227.3zm-246.12 -532.59l-63.21 -83.39 -459.97 0 0 170.81 459.97 0 63.21 -87.42zm-1131.9 532.59l0 -227.3 -481.49 0 0 227.3 -239.4 0 0 -611.94 180.22 -180.22 601.19 0 180.22 180.22 0 611.94 -240.74 0zm0 -402.13l0 -212.5 -481.49 0 0 212.5 481.49 0zm-761.8 -390.03l-176.19 177.53 -532.6 0 0 438.45 680.54 0 -176.19 176.19 -564.87 0 -178.88 -178.88 0 -433.06 180.22 -180.22 767.96 0zm-1017.83 0l-418.27 418.27 0 373.89 -239.4 0 0 -373.89 -419.62 -418.27 285.13 0 254.19 254.19 254.19 -254.19 283.78 0zm-1202.08 611.94l-180.22 180.22 -601.19 0 -180.22 -180.22 0 -611.94 239.4 0 0 615.98 481.49 0 0 -615.98 239.4 0 1.35 611.94zm-1339.03 -368.51l-57.83 -65.9 -459.97 0 0 138.53 459.97 0 57.83 -72.63zm0 306.65l-57.83 -72.62 -459.97 0 0 138.52 459.97 0 57.83 -65.9z"/>
        // <path fill="#F09A38" d="M919.28 498.77c232.24,0 420.51,188.27 420.51,420.51 0,232.25 -188.27,420.51 -420.51,420.51 -232.25,0 -420.51,-188.27 -420.51,-420.51 0,-232.24 188.27,-420.51 420.51,-420.51zm-0.01 -498.77c507.7,0 919.27,411.57 919.27,919.27 0,28.68 -1.38,57.04 -3.95,85.05 -83.07,-393.29 -288.23,-664.06 -645.52,-782.15l32.22 144.58c-89.66,-49.13 -192.58,-77.07 -302.03,-77.07 -260.92,0 -484.77,158.72 -580.26,384.88l0 -0.02c50.46,-236.58 212.77,-406.05 470.14,-518.48l-66.59 -139.02c57.2,-11.14 116.25,-17.04 176.71,-17.04zm869.83 1217.36c-123.81,361.38 -466.47,621.19 -869.83,621.19 -198.05,0 -381.48,-62.63 -531.55,-169.18 382.23,124.81 719.38,82.54 1000.36,-167.89l-141.34 -44.39c181.18,-110.55 302.13,-310.06 302.13,-537.82 0,-143 -47.71,-274.84 -128.03,-380.54l0.51 0.39c179.65,162 245.26,387.29 213.95,666.4l153.81 11.85zm-1562.77 305.96c-140.94,-161.55 -226.34,-372.82 -226.34,-604.05 0,-370.78 219.54,-690.26 535.7,-835.61 -299.38,268.67 -431.44,581.86 -355.04,950.51l109.2 -100.29c7.77,340.97 286.58,614.99 629.42,614.99 26.61,0 52.83,-1.66 78.57,-4.87l-0.39 0.16c-230.12,74.58 -458.03,18.76 -684.08,-147.92l-87.03 127.08z"/>
        // </g>
        // </svg>
        <svg width={width} height={height} viewBox="0 0 111 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.2426 10.6267C58.9466 10.9947 59.4826 11.4667 59.8506 12.0427C60.2186 12.6187 60.4026 13.2907 60.4026 14.0587V14.2987C60.4026 15.6587 59.8666 16.7307 58.7946 17.5147C57.7386 18.2827 56.2746 18.6667 54.4026 18.6667H44.3706V2.9227H53.9226C55.8266 2.9227 57.2986 3.2907 58.3386 4.0267C59.3786 4.7627 59.8986 5.8107 59.8986 7.1707V7.4107C59.8986 8.7867 59.3466 9.8587 58.2426 10.6267ZM48.6186 6.5707V9.0667H53.9226C54.5146 9.0667 54.9466 8.9787 55.2186 8.8027C55.5066 8.6107 55.6506 8.3227 55.6506 7.9387V7.6987C55.6506 6.9467 55.0746 6.5707 53.9226 6.5707H48.6186ZM56.0586 13.5787C56.0586 12.7947 55.4746 12.4027 54.3066 12.4027H48.6186V15.0187H54.3066C55.4746 15.0187 56.0586 14.6187 56.0586 13.8187V13.5787ZM77.0143 18.9787C75.3983 18.9787 73.9823 18.6667 72.7663 18.0427C71.5503 17.4027 70.6143 16.4987 69.9583 15.3307C69.3023 14.1627 68.9743 12.8107 68.9743 11.2747V2.9227H73.2223V11.3467C73.2223 12.5467 73.5423 13.4587 74.1823 14.0827C74.8223 14.7067 75.7663 15.0187 77.0143 15.0187C78.2783 15.0187 79.2303 14.7067 79.8703 14.0827C80.5103 13.4587 80.8303 12.5467 80.8303 11.3467V2.9227H85.0783V11.2747C85.0783 12.8267 84.7423 14.1867 84.0703 15.3547C83.4143 16.5067 82.4783 17.4027 81.2623 18.0427C80.0463 18.6667 78.6303 18.9787 77.0143 18.9787ZM110.086 2.9227V3.5707L103.39 12.5467V18.6667H99.1417V12.5467L92.4216 3.5707V2.9227H96.9337L101.278 8.8747L105.598 2.9227H110.086Z" fill="white"/>
            <path d="M49.7706 36.192C48.5012 36.192 47.3866 35.9733 46.4266 35.536C45.4666 35.0987 44.7252 34.48 44.2026 33.68C43.6906 32.8693 43.4346 31.9253 43.4346 30.848V30.672C43.4346 29.5947 43.6906 28.656 44.2026 27.856C44.7252 27.0453 45.4666 26.4213 46.4266 25.984C47.3866 25.536 48.5012 25.312 49.7706 25.312C50.9439 25.312 51.9946 25.504 52.9226 25.888C53.8612 26.272 54.5919 26.8053 55.1146 27.488C55.6479 28.1707 55.9146 28.9387 55.9146 29.792V29.92H53.4666V29.792C53.4666 29.3547 53.3066 28.9653 52.9866 28.624C52.6772 28.2827 52.2399 28.016 51.6746 27.824C51.1199 27.632 50.4799 27.536 49.7546 27.536C48.4852 27.536 47.5199 27.8027 46.8586 28.336C46.2079 28.8693 45.8826 29.6373 45.8826 30.64V30.88C45.8826 31.8933 46.2079 32.6613 46.8586 33.184C47.5092 33.7067 48.4799 33.968 49.7706 33.968C50.8906 33.968 51.7866 33.7653 52.4586 33.36C53.1306 32.944 53.4666 32.4 53.4666 31.728V31.616H55.9146V31.728C55.9146 32.5813 55.6479 33.3493 55.1146 34.032C54.5919 34.704 53.8612 35.232 52.9226 35.616C51.9946 36 50.9439 36.192 49.7706 36.192ZM69.1299 35.632V36H66.7299L65.7699 33.824H60.5219L59.5619 36H57.1619V35.632L61.8179 25.504H64.4739L69.1299 35.632ZM64.8579 31.744L63.1459 27.84L61.4339 31.744H64.8579ZM82.1624 29.072C82.1624 29.9253 81.8904 30.624 81.3464 31.168C80.8131 31.712 80.0504 32.0533 79.0584 32.192L82.1144 35.632V36H79.3624L76.0984 32.24H73.9064V36H71.5064V25.504H78.1624C79.4104 25.504 80.3864 25.808 81.0904 26.416C81.8051 27.0133 82.1624 27.84 82.1624 28.896V29.072ZM79.7144 28.848C79.7144 28.4533 79.5758 28.1547 79.2984 27.952C79.0318 27.7387 78.6318 27.632 78.0984 27.632H73.9064V30.256H78.0984C78.6211 30.256 79.0211 30.1547 79.2984 29.952C79.5758 29.7387 79.7144 29.4293 79.7144 29.024V28.848ZM96.0131 29.072C96.0131 29.9253 95.7411 30.624 95.1971 31.168C94.6638 31.712 93.9011 32.0533 92.9091 32.192L95.9651 35.632V36H93.2131L89.9491 32.24H87.7571V36H85.3571V25.504H92.0131C93.2611 25.504 94.2371 25.808 94.9411 26.416C95.6558 27.0133 96.0131 27.84 96.0131 28.896V29.072ZM93.5651 28.848C93.5651 28.4533 93.4264 28.1547 93.1491 27.952C92.8824 27.7387 92.4824 27.632 91.9491 27.632H87.7571V30.256H91.9491C92.4718 30.256 92.8718 30.1547 93.1491 29.952C93.4264 29.7387 93.5651 29.4293 93.5651 29.024V28.848ZM109.123 25.504V25.872L104.515 31.92V36H102.099V31.92L97.475 25.872V25.504H100.083L103.299 29.744L106.515 25.504H109.123Z" fill="white"/>
            <path d="M0.587402 21.1714C0.90211 18.277 1.33586 15.6387 1.88211 13.2939C3.75731 5.22558 6.7984 1.04469 10.9157 0.868579L11.0364 0.865326V6.99642C6.03692 9.37386 2.59795 14.0292 0.587402 21.1714Z" fill="#FFB055"/>
            <path d="M0 8.20468C0 3.81018 3.29873 0.211411 7.51061 0.0092241C7.83999 -0.00716256 8.17011 -0.00170934 8.49876 0.0255307C4.92772 1.43274 2.27471 5.78322 0.600072 12.984C0.3832 13.9135 0.182628 14.8967 0 15.924V8.20468Z" fill="#FFBA6C"/>
            <path d="M7.30067 36.0425C3.89922 36.0425 1.51363 34.95 0.212402 32.7943L5.45482 29.7271C8.33122 31.754 11.7588 32.7813 15.6412 32.7813C17.854 32.7813 20.2135 32.46 22.7866 31.8045C17.841 33.9977 11.9773 36.0441 7.30067 36.0441" fill="#FFB055"/>
            <path d="M7.90083 40C4.85484 40 2.07954 38.1753 0.783203 35.4392C2.3812 36.7273 4.56622 37.378 7.30564 37.378C10.3891 37.378 14.1918 36.5561 18.64 34.9288L11.8224 38.9189C10.636 39.6248 9.28139 39.9983 7.90083 40Z" fill="#FFBA6C"/>
            <path d="M0.130371 31.273C0.986443 22.8346 3.02308 12.7003 11.0343 8.48032V13.0738C8.14483 16.4735 6.11309 20.0202 4.91786 22.4009C4.87212 22.4899 4.84999 22.5893 4.85357 22.6893C4.85717 22.7894 4.88637 22.8869 4.9384 22.9725C4.99042 23.0579 5.06352 23.1287 5.1507 23.1781C5.23789 23.2273 5.33625 23.2533 5.43639 23.2537C5.62391 23.2537 5.79513 23.1639 5.90601 23.0058C7.43227 20.8338 9.19657 18.8609 11.0343 17.271V18.1417C11.0343 22.4889 7.3654 26.9062 0.130371 31.273Z" fill="#F09A38"/>
            <path d="M15.669 31.4393C12.292 31.4393 9.28677 30.606 6.73486 28.9574L10.6581 26.6632C13.347 27.1752 16.199 27.4328 19.1356 27.4328C19.9918 27.4328 20.8511 27.4116 21.6908 27.366C21.8379 27.3585 21.9767 27.295 22.0784 27.1886C22.1803 27.0822 22.2376 26.9409 22.2387 26.7936C22.2436 26.6458 22.192 26.5017 22.0944 26.3906C21.997 26.2794 21.8608 26.2096 21.7136 26.1952C19.0932 25.9425 16.5251 25.3798 14.2487 24.5646L14.9923 24.126C16.243 23.3954 17.7399 23.0253 19.4439 23.0253C22.7475 23.0253 26.8599 24.4064 31.667 27.1296C27.5415 29.0048 21.4594 31.4409 15.669 31.4409" fill="#F09A38"/>
            <path d="M22.462 20.1701C21.0026 15.9355 18.9871 12.3791 17.5506 10.1386C17.4988 10.0559 17.4268 9.98781 17.3415 9.94077C17.256 9.89371 17.16 9.86929 17.0624 9.86977C16.965 9.87026 16.8692 9.89566 16.7843 9.94357C16.6994 9.99146 16.628 10.0603 16.5771 10.1435C16.5246 10.2264 16.4936 10.3212 16.4871 10.4192C16.4806 10.5171 16.4986 10.6152 16.5396 10.7044C17.6322 13.1308 18.436 15.6647 18.8763 18.0715L18.1311 17.6361C14.4166 15.4625 12.4761 10.0342 12.3604 1.50122C19.1438 6.47133 26.7864 13.3232 26.3886 22.4676L22.462 20.1701Z" fill="#F09A38"/>
            <path d="M27.6635 23.2211C28.1315 17.6508 25.878 12.3123 20.7905 6.98013C25.9351 10.8251 32.2407 16.4491 33.4441 21.6312C33.8371 23.3238 33.656 24.8908 32.906 26.2882L27.6635 23.2211Z" fill="#FFB055"/>
            <path d="M34.8832 24.4717C35.0315 23.4207 34.979 22.3511 34.7284 21.3197C33.7288 17.0165 29.5968 12.5552 25.5024 9.03467L32.3379 13.0329C33.4984 13.7109 34.4676 14.6725 35.1547 15.8277C35.8418 16.9828 36.2242 18.2936 36.266 19.6369C36.3264 21.354 35.8426 23.0463 34.8832 24.4717Z" fill="#FFBA6C"/>
        </svg>

    );
};
