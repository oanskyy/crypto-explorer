import { ImageProps } from "next/image"

export interface ImgWithFallbackProps extends Omit<ImageProps, "src"> {
	src: string
	fallbackSrc: string
	alt: string
}
