import React from "react";

interface HistoryLogoProps {
	className: string;
}

function HistoryLogo({ className }: HistoryLogoProps) {
	return (
		<svg
			version="1.1"
			viewBox="0 0 1200 1200"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="m627.38 127.38c-252.76 0-459.81 199.46-472.06 449.24h-55.312l83.273 136.61 83.273-136.61h-53.301c12.164-217.88 193.26-391.41 414.12-391.41 228.71 0 414.8 186.07 414.8 414.79 0.003906 228.71-186.09 414.81-414.8 414.81-95.801 0-189.46-33.852-263.73-95.336l-38.289-31.688v75.438l8.8516 7.0391c84.363 66.977 185.74 102.38 293.15 102.38 260.63-0.003906 472.64-212.02 472.64-472.63s-212.01-472.62-472.62-472.62z" />
		</svg>
	);
}

export default HistoryLogo;
