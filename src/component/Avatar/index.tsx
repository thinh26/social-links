import Image from "next/image";

type AvatarProps = Readonly<
  {
    src: string;
    alt: string;
    width: number;
    height: number;
  } & Partial<{
    className: string;
  }>
>;

function Avatar({ src, alt, width, height, className }: AvatarProps) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid='avatar'
    />
  );
}

export default Avatar;
