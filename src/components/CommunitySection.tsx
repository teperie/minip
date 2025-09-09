import { Button } from './ui/button';
import { ArrowRight, MessageSquare, Users } from 'lucide-react';

interface Post {
  id: string;
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

interface CommunitySectionProps {
  posts: Post[];
}

export function CommunitySection({ posts }: CommunitySectionProps) {

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative bg-muted/30">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A4907C' fill-opacity='0.2'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-foreground">
            커뮤니티
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            보호소의 일상과 반려동물 이야기들을 나누어보세요
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.slice(0, 9).map((post, index) => (
            <div
              key={post.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-primary/30 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  post.category === '입양 후기' 
                    ? 'bg-primary/10 text-primary' 
                    : post.category === '봉사 후기'
                    ? 'bg-accent/10 text-accent-foreground'
                    : post.category === '보호일지'
                    ? 'bg-secondary/30 text-secondary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {post.category}
                </span>
                {post.image && (
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                )}
              </div>
              
              <h3 className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.content}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* View More Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-primary text-primary-foreground"
          >
            더 많은 글 보기
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}