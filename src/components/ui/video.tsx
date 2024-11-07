"use client";
import React, { useEffect, useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VideoHero() {
	return (
		<div className="absolute inset-0">
			{/* <iframe
						src="https://player.cloudinary.com/embed/?public_id=mami-video&cloud_name=db4afdfzv&player[autoplay]=true&player[loop]=true&player[controls]=false&player[hideContextMenu]=true&player[showLogo]=false&player[seekThumbnails]=false&source[sourceTypes][0]=dash"
						width="640"
						height="360"
						allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
					></iframe> */}
			<Image src={"/rosa.webp"} alt="fondo-hero" fill className="object-cover blur-sm" />
		</div>
	);
}
