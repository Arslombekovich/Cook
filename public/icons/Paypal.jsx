import * as React from "react";

export default function Paypal(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={18}
			height={20}
			{...props}
			viewBox="0 0 18 20"
			fill="none">
			<path
				d="M14.5 5.2C16.2 6.2 17 8 17 10C17 12.5 14.5 14.5 12 14.5H9.4L8.8 18.1C8.75325 18.3293 8.62758 18.5349 8.44486 18.6811C8.26214 18.8272 8.03395 18.9047 7.8 18.9H5.1C5.02501 18.9015 4.95064 18.8861 4.88239 18.855C4.81415 18.8239 4.75378 18.7778 4.70577 18.7202C4.65775 18.6626 4.62331 18.5949 4.605 18.5222C4.58669 18.4494 4.58498 18.3735 4.6 18.3L4.8 16.9M7 11H9.5C12 11 14.5 8.5 14.5 6C14.5 3 12.6 1 9.5 1H4C3.5 1 3 1.5 3 2L1 16C1 16.5 1.5 17 2 17H4.8L6 12C6.1 11.4 6.4 11 7 11Z"
				stroke="#ABBBC2"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
