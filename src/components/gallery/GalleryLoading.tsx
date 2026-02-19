import { Card } from "@/components/ui/card";

export const GalleryLoading = () => {
  return (
    <div className="min-h-screen bg-gallery-bg pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Carregando Nossa Galeria</h2>
          <p className="text-muted-foreground">Preparando nossos momentos...</p>
        </div>

        <div className="space-y-16">
          {[1, 2, 3].map((section) => (
            <div key={section} className="space-y-6">
              <div className="w-48 h-8 bg-muted rounded animate-pulse mx-auto" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <Card key={item} className="bg-gallery-card border-border overflow-hidden">
                    <div className="aspect-square bg-muted animate-pulse" />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};