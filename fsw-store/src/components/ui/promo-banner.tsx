import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      height={0}
      width={0}
      className="h-auto w-full"
      sizes="100vw"
      priority
      alt={alt}
    />
  );
};

export default PromoBanner;
