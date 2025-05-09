import React from "react";

const Section = ({
	children,
	className,
	style,
}: {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) => {
	return (
		<section
			style={style}
			className={` px-4 md:px-8 lg:px-[10vw] py-12 md:py-20 max-w-4xl mx-auto ${className}`}
		>
			{children}
		</section>
	);
};

export default Section;
