import { Card } from "@/components/ui/card";
import { CloudImage } from "@/components/CloudImage/CloudImage";

interface GalleryCardProps {
  image: {
    id: string;
    publicId: string;
    title: string;
    category: string;
  };
  onClick: () => void;
}

export const GalleryCard = ({ image, onClick }: GalleryCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer bg-gallery-card hover:shadow-xl transition-all hover:scale-[1.03] overflow-hidden" //bg-gallery-card
    >
      <div className="aspect-square overflow-hidden">
        <CloudImage
          publicId={image.publicId}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-3 text-center">
        <p className="text-sm text-foreground  text-white
          font-medium font-mono">
          {image.category}
        </p>
      </div>
    </Card>
  );
};
