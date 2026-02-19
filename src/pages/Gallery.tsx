import { useState, useRef } from "react";
import { GalleryNavbar } from "@/components/gallery/GalleryNavbar";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { ImageModal } from "@/components/gallery/ImageModal";
import { GalleryLoading } from "@/components/gallery/GalleryLoading";
import { GalleryError } from "@/components/gallery/GalleryError";
import { useImageGallery } from "@/hooks/useImageGallery";
import { GalleryFooter } from "@/components/gallery/GalleryFooter";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const { images, loading, error, getImagesByCategory, getCategories } = useImageGallery();

  const imagesByCategory = getImagesByCategory();
  const categories = getCategories();

  const scrollToCategory = (category: string) => {
    const element = sectionRefs.current[category];
    if (element) {
      const navHeight = 80; // altura da navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (imageId: string) => {
    setSelectedImage(imageId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const getModalImages = () => {
    if (!selectedImage) return [];

    const selectedImg = images.find(img => img.id === selectedImage);
    if (!selectedImg) return [];

    return imagesByCategory[selectedImg.category] || [];
  };

  const getInitialImageIndex = () => {
    if (!selectedImage) return 0;

    const modalImages = getModalImages();
    return modalImages.findIndex(img => img.id === selectedImage) || 0;
  };

  // Estados de loading e erro
  if (loading) return <GalleryLoading />;
  if (error) return <GalleryError message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="min-h-screen bg-gallery-bg">
      <GalleryNavbar
        categories={categories}
        onCategoryClick={scrollToCategory}
      />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 space-y-16">
          {categories.map((category) => {
            // Pega apenas a primeira imagem de cada categoria para mostrar na galeria
            const firstImage = imagesByCategory[category][0];
            const totalImages = imagesByCategory[category].length;

            return (
              <section
                key={category}
                ref={(el) => {
                  if (el) sectionRefs.current[category] = el;
                }}
                className="space-y-6"
              >
                {/* Titulo */}
                {/* <h2 className="text-2xl font-bold text-foreground text-center">
                  {category}
                </h2> */}

                {/* Mostra apenas uma imagem por categoria */}
                <div className="flex justify-center">
                  <div className="relative">
                    <GalleryCard
                      image={firstImage}
                      onClick={() => openModal(firstImage.id)}
                    />
                    {/* Indicador de quantidade de imagens */}
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {totalImages} foto{totalImages > 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={getModalImages()}
        initialImageIndex={getInitialImageIndex()}
      />
      <GalleryFooter />
    </div>
  );
};

export default Gallery;