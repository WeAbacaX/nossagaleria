import { useState, useEffect } from "react";
import { apiFetch } from "../services/ApiService";

export interface GalleryImage {
  id: string;
  publicId: string;
  title: string;
  category: string;
}

export const useImageGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const folders = [
          {
            path: "ALApp/13-Feirinha",
            title: "",
            category: "Feirinha",
          },
          {
            path: "ALApp/RolêNaJanja",
            title: "",
            category: "Viagem Para Embu",
          },
          {
            path: "ALApp/26-DateNaMerceariaLiberdade",
            title: "",
            category: "Date No Mercado Liberdade",
          },
          {
            path: "ALApp/25-ViajemParaEmPiuma",
            title: "",
            category: "Aniversario Da Mamãe Dela",
          },
          {
            path: "ALApp/24-DiaDosNamorados",
            title: "",
            category: "Dia Dos Namorados",
          },
          {
            path: "ALApp/23-ArraiaDoBeco",
            title: "",
            category: "Arraia Do Becô",
          },
          {
            path: "ALApp/22-ArraiaDaAline",
            title: "",
            category: "Arraia Da Aline",
          },
          {
            path: "ALApp/21-RoleNoMotoClube",
            title: "",
            category: "-Role No Moto Clube",
          },
          {
            path: "ALApp/20-AniversarioDaAmiga",
            title: "",
            category: "Aniversario Da Amiga",
          },
          {
            path: "ALApp/19-DiaDoCinema",
            title: "",
            category: "Dia Do Cinema",
          },
          {
            path: "ALApp/18-DiaDePizza",
            title: "",
            category: "Dia De Pizza",
          },
          {
            path: "ALApp/17-NaPracaDosNamorados",
            title: "",
            category: "Na Praça Dos Namorados",
          },
          {
            path: "ALApp/16-PasseioEmFamilia",
            title: "",
            category: "Passeio Em Familia",
          },
          {
            path: "ALApp/15-Feriadin",
            title: "",
            category: "Feriadin",
          },
          {
            path: "ALApp/14-AniversarioDelaPart2",
            title: "",
            category: "Aniversario Dela Parte 2",
          },
          {
            path: "ALApp/13-AniversarioDelaPart1",
            title: "",
            category: "Aniversario Dela Parte 1",
          },
          {
            path: "ALApp/12-AniversarioDele",
            title: "",
            category: "Aniversario Dele",
          },
          {
            path: "ALApp/11-DiaDeArtesNoParque",
            title: "",
            category: "Dia De Artes No Parque",
          },
          {
            path: "ALApp/10-DiaDeTatooDela",
            title: "",
            category: "Dia De Tatoo Dela",
          },
          {
            path: "ALApp/8-BateVolta",
            title: "",
            category: "Bate e Volta S2 ",
          },
          {
            path: "ALApp/7-PedidoDeNamoro",
            title: "",
            category: "Pedido De Namoro",
          },
          {
            path: "ALApp/6-RoleDeSkate",
            title: "",
            category: "Role De Skate",
          },
          {
            path: "ALApp/5-DateNoBrizz",
            title: "",
            category: "Date No Brizz",
          },
          {
            path: "ALApp/4-DiaDeSol",
            title: "",
            category: "Dia De Sol",
          },
          {
            path: "ALApp/3-Piniquenique",
            title: "",
            category: "Piquinique",
          },
          {
            path: "ALApp/2-DateNoParque",
            title: "06/01/2025",
            category: "Date No Parque",
          },
          {
            path: "ALApp/1-ComoTudoComecou",
            title: "07/12/2024",
            category: "Como Tudo Começou",
          },
        ];

        let allImages: GalleryImage[] = [];

        for (const folder of folders) {
          const response = await apiFetch(`/images/${folder.path}`);
          const data = await response.json();

          const formatted = data.map((img: any) => ({
            id: img.id,
            publicId: img.publicId,
            title: folder.title,
            category: folder.category,
          }));

          allImages = [...allImages, ...formatted];
        }

        setImages(allImages);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar imagens");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImagesByCategory = () => {
    return images.reduce((acc, image) => {
      if (!acc[image.category]) acc[image.category] = [];
      acc[image.category].push(image);
      return acc;
    }, {} as Record<string, GalleryImage[]>);
  };

  const getCategories = () => Object.keys(getImagesByCategory());

  return {
    images,
    loading,
    error,
    getImagesByCategory,
    getCategories,
  };
};
