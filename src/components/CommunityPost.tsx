import { MessageCircle, Heart, Eye, Calendar, User, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityPostProps {
  title: string;
  author: string;
  content: string;
  image?: string;
  category: string;
  date: string;
  likes: number;
  comments: number;
  views: number;
}

export function CommunityPost({ 
  title, 
  author, 
  content, 
  image, 
  category, 
  date, 
  likes, 
  comments, 
  views 
}: CommunityPostProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case '입양 후기':
        return 'bg-primary/10 text-primary border-primary/20';
      case '봉사 후기':
        return 'bg-accent/10 text-accent-foreground border-accent/20';
      case '보호일지':
        return 'bg-secondary/30 text-secondary-foreground border-secondary/30';
      case '보호소 타임라인':
        return 'bg-muted text-muted-foreground border-border';
      case '질문과 답변':
        return 'bg-primary/5 text-primary border-primary/10';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <article className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-card border border-border">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-5">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug text-foreground">
          {title}
        </h3>

        {/* Author */}
        <p className="text-sm text-muted-foreground mb-3">
          {author}
        </p>

        {/* Content */}
        <p className="text-sm mb-4 line-clamp-2 leading-relaxed text-muted-foreground">
          {content}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>좋아요 {likes}</span>
            <span>댓글 {comments}</span>
          </div>
          <span>조회 {views.toLocaleString()}</span>
        </div>
      </div>
    </article>
  );
}