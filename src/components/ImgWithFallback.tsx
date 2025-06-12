import Image from "next/image"
import { useState } from "react"
import type { ImgWithFallbackProps } from "@/types"

export const ImgWithFallback = ({
	src,
	fallbackSrc,
	alt,
	...props
}: ImgWithFallbackProps) => {
	const [imgSrc, setImgSrc] = useState(src)

	return (
		<Image
			{...props}
			src={imgSrc}
			alt={alt}
			onError={() => setImgSrc(fallbackSrc)}
		/>
	)
}


