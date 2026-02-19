import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

interface GalleryNavbarProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
}

export const GalleryNavbar = ({ categories, onCategoryClick }: GalleryNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    onCategoryClick(category);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-gallery-nav/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
          <img src="public/LogoAL.png" alt="logo" className="h-11 w-auto" />
            <h1 className="text-xl font-bold text-foreground">NOSSA GA+LERIA </h1>
            <div className="flex space-x-2 max-w-2xl overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  onClick={() => handleCategoryClick(category)}
                  className="whitespace-nowrap text-sm hover:bg-primary/20 hover:text-primary"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gallery-nav/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <div ><img src="https://res.cloudinary.com/dcep22u3p/image/upload/v1771523094/imgonline-com-ua-Negative-Vl1yYMIz0tF_kbwjc5.png" alt="logo" className="h-11 w-auto" />
          
          </div>
          <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Card className="md:hidden fixed top-16 left-4 right-4 z-50 bg-gallery-card border-border shadow-elegant max-h-[70vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => handleCategoryClick(category)}
                className="w-full justify-start text-left hover:bg-primary/20 hover:text-primary"
              >
                {category}
              </Button>
            ))}
          </div>
        </Card>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-gallery-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
