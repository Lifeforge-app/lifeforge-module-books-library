import { type ImageProps, Image, surface } from '@lifeforge/ui'

function CoverImage({
  src,
  style,
  ...props
}: { src: string } & Omit<ImageProps, 'alt' | 'src'>) {
  return (
    <Image
      alt=""
      aspectRatio="148 / 210"
      bg={surface.light}
      fallback="tabler:book"
      fit="cover"
      height="min-content"
      overflow="hidden"
      p="sm"
      r="lg"
      src={src}
      style={{ isolation: 'isolate', ...style }}
      width="12em"
      {...props}
    />
  )
}

export default CoverImage
