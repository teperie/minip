import { ChevronLeft, ChevronRight, Sparkles, Heart, Home, Plus, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { AnimalCard } from './AnimalCard';
import { useState } from 'react';

interface Animal {
  id: string;
  name: string;
  age: string;
  breed: string;
  location: string;
  image: string;
  status: 'rescued' | 'adoptable' | 'missing';
  date: string;
  description?: string;
}

interface AnimalCarouselProps {
  title: string;
  subtitle: string;
  animals: Animal[];
}

export function AnimalCarousel({ title, subtitle, animals }: AnimalCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(animals.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  };

  const prevSlide = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleAnimals = animals.slice(startIndex, startIndex + itemsPerPage);

  const isRescued = animals[0]?.status === 'rescued';
  const isMissing = animals[0]?.status === 'missing';

  return (
    <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 relative ${
      isRescued ? 'bg-secondary/20' : isMissing ? 'bg-red-50' : 'bg-background'
    }`}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isRescued ? '8D7B68' : 'A4907C'}' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
          <div className="text-left flex-1">
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 mb-4">
              <h2 className="text-4xl lg:text-5xl text-foreground">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-lg text-muted-foreground">
                <span className="bg-primary/10 px-4 py-2 rounded-lg text-primary whitespace-nowrap">
                  현재 {animals.length}마리
                </span>
                {isRescued && (
                  <span className="bg-green-100 px-4 py-2 rounded-lg text-green-700 whitespace-nowrap">
                    지금까지 1,247마리 구조
                  </span>
                )}
                {!isRescued && !isMissing && (
                  <span className="bg-blue-100 px-4 py-2 rounded-lg text-blue-700 whitespace-nowrap">
                    지금까지 3,892마리 입양
                  </span>
                )}
                {isMissing && (
                  <span className="bg-orange-100 px-4 py-2 rounded-lg text-orange-700 whitespace-nowrap">
                    지금까지 567마리 찾음
                  </span>
                )}
                <div className="ml-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 px-6 py-3 h-12 border-primary text-primary hover:bg-primary/5"
                  >
                    <Plus className="h-5 w-5" />
                    더보기
                  </Button>
                </div>
              </div>
            </div>
            {subtitle && (
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 shadow-lg border-border backdrop-blur-sm hover:scale-110 transition-all duration-200 bg-card/95 text-primary hover:bg-primary/10"
            onClick={prevSlide}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 shadow-lg border-border backdrop-blur-sm hover:scale-110 transition-all duration-200 bg-card/95 text-primary hover:bg-primary/10"
            onClick={nextSlide}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-8">
            <div className="grid grid-cols-5 gap-6">
              {visibleAnimals.map((animal) => (
                <AnimalCard
                  key={animal.id}
                  name={animal.name}
                  age={animal.age}
                  breed={animal.breed}
                  location={animal.location}
                  image={animal.image}
                  status={animal.status}
                  date={animal.date}
                  description={animal.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                index === currentPage 
                  ? 'bg-primary shadow-lg' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>


      </div>
    </section>
  );
}