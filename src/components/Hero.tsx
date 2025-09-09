import { ArrowRight, Home, Heart, Users, MessageSquare, Eye, Search, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1627014450098-8e7ed1084606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHdpdGglMjByZXNjdWUlMjBkb2clMjBhZG9wdGlvbnxlbnwxfHx8fDE3NTY4Nzk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Happy family with rescue dog"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center items-center text-center h-full space-y-8">
          {/* Main Slogan */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
              지금, <span className="text-secondary">동반자</span>와 함께 해주세요.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              당신의 참여가 더 많은 생명을 구합니다.
            </p>
          </div>

          {/* Browse Button */}
          <div className="space-y-6">
            <Button
              size="lg"
              className="text-lg px-8 py-4 h-14 bg-white/90 text-foreground hover:bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Eye className="h-5 w-5 mr-3" />
              내 주변 보호소 찾기
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 max-w-5xl mx-auto">
              <Button
                size="lg"
                className="flex flex-col items-center gap-3 py-8 h-24 bg-primary/90 text-primary-foreground hover:bg-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Heart className="h-7 w-7" />
                <span className="text-base">최근구조</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="flex flex-col items-center gap-3 py-8 h-24 bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Search className="h-7 w-7" />
                <span className="text-base">실종신고</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="flex flex-col items-center gap-3 py-8 h-24 bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Home className="h-7 w-7" />
                <span className="text-base">입양하기</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="flex flex-col items-center gap-3 py-8 h-24 bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <DollarSign className="h-7 w-7" />
                <span className="text-base">후원하기</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="flex flex-col items-center gap-3 py-8 h-24 bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Users className="h-7 w-7" />
                <span className="text-base">봉사하기</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}