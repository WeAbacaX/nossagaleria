import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qAuto } from "@cloudinary/url-gen/qualifiers/quality";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

interface CloudImageProps {
  publicId?: string;
  className?: string;
  width?: number;
}

const cld = new Cloudinary({
  cloud: {
    cloudName: "dcep22u3p",
  },
});

export const CloudImage = ({
  publicId,
  className,
  width = 800,
}: CloudImageProps) => {
  if (!publicId) return null;

  const img = cld
    .image(publicId)
    .resize(
      fill()
        .width(width)
        .gravity(autoGravity())
    )
    .format(auto())
    .quality(qAuto());

  return (
    <AdvancedImage
      cldImg={img}
      className={className}
      loading="lazy"
    />
  );
};
