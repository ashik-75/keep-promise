"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
type BlurImageProps = {
	url: string;
	alt?: string | number;
	className?: string;
};
const BlurImage = ({ url, alt, className }: BlurImageProps) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div className={clsx("aspect-video relative overflow-hidden", className)}>
			<Image
				fill
				src={url}
				alt={`${alt}`}
				onLoad={() => setLoaded(true)}
				className={clsx("object-cover duration-700 hover:scale-110", {
					"scale-125 blur-xl grayscale": !loaded,
					"scale-100 blur-0 grayscale-0": loaded,
				})}
			/>
		</div>
	);
};

export default BlurImage;
