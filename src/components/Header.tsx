import { Search, User, LogIn, Heart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  return (
    <header className="w-full bg-card border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
              <Heart className="h-6 w-6 text-primary fill-primary/20" />
            </div>
            <div>
              <h1 className="text-2xl text-foreground tracking-tight">
                동반자
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                유기견 보호소 통합 플랫폼
              </p>
            </div>
          </div>

          {/* Spacer for centering navigation */}
          <div className="flex-1" />

          {/* Search and Auth */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="통합검색..."
                className="w-80 pr-12 bg-input-background border-border focus:border-primary h-11 rounded-lg"
              />
              <Search className="absolute right-4 h-5 w-5 text-muted-foreground" />
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="text-sm px-4 py-2 h-9 border-border text-foreground hover:bg-primary/5 hover:border-primary/30"
              >
                <LogIn className="h-4 w-4 mr-2" />
                로그인
              </Button>
              <Button
                size="sm"
                className="text-sm px-4 py-2 h-9 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <User className="h-4 w-4 mr-2" />
                회원가입
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-border">
          <div className="flex items-center justify-center h-14 relative">
            {/* Main Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-12">
              {[
                { name: '커뮤니티', href: '#' },
                { name: '최근구조', href: '#' },
                { name: '실종신고', href: '#' },
                { name: '입양하기', href: '#' },
                { name: '후원하기', href: '#' },
                { name: '봉사하기', href: '#' },
                { name: '공지사항', href: '#' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm text-foreground hover:text-primary transition-colors duration-200 group py-2"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* Mobile Menu for lg screens and below */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm px-3 py-2 h-8"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="space-y-4 mt-8">
                    {[
                      { name: '커뮤니티', href: '#' },
                      { name: '최근구조', href: '#' },
                      { name: '실종신고', href: '#' },
                      { name: '입양하기', href: '#' },
                      { name: '후원하기', href: '#' },
                      { name: '봉사하기', href: '#' },
                      { name: '공지사항', href: '#' }
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-base text-foreground hover:text-primary py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}