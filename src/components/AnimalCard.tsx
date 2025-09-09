import { Heart, MapPin, Calendar, Eye, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AnimalCardProps {
  name: string;
  age: string;
  breed: string;
  location: string;
  image: string;
  status: 'rescued' | 'adoptable' | 'missing';
  date: string;
  description?: string;
}

export function AnimalCard({ name, age, breed, location, image, status, date, description }: AnimalCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[280px] cursor-pointer transform hover:-translate-y-2 bg-card border border-border">
      <div className="relative h-72">
        <ImageWithFallback
          src={image}
          alt={`${name} - ${breed}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs backdrop-blur-sm border ${
          status === 'rescued' 
            ? 'bg-secondary/95 text-secondary-foreground border-secondary/20' 
            : status === 'missing'
            ? 'bg-red-500/95 text-white border-red-500/20'
            : 'bg-primary/95 text-primary-foreground border-primary/20'
        }`}>
          {status === 'rescued' ? '최근 구조' : status === 'missing' ? '실종' : '입양 가능'}
        </div>
        
        <button className="absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-200 bg-card/90 border border-border/50 shadow-sm">
          <Heart className="h-4 w-4 text-primary" />
        </button>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2.5 rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-200 bg-card/90 border border-border/50 shadow-sm">
            <Eye className="h-4 w-4 text-primary" />
          </button>
        </div>

        {/* Featured Badge */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/90 backdrop-blur-sm">
            <Star className="h-3 w-3 text-accent-foreground" />
            <span className="text-xs text-accent-foreground">추천</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl group-hover:text-primary transition-colors text-foreground">
            {name}
          </h3>
          <span className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
            {age}
          </span>
        </div>
        
        <p className="text-sm mb-4 text-primary">
          {breed}
        </p>
        
        {description && (
          <p className="text-sm mb-4 line-clamp-2 leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{date}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className={`w-full py-2.5 text-sm rounded-lg transition-colors duration-200 border ${
            status === 'missing' 
              ? 'bg-red-500 text-white hover:bg-red-600 border-red-500/20'
              : 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary/20'
          }`}>
            {status === 'rescued' ? '자세히 보기' : status === 'missing' ? '제보하기' : '입양 신청하기'}
          </button>
        </div>
      </div>
    </div>
  );
}