import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-16 px-4 sm:px-6 lg:px-8 relative bg-foreground text-background">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A4907C' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/20 border-2 border-primary/30">
                <Heart className="h-6 w-6 text-primary fill-primary/20" />
              </div>
              <div>
                <h3 className="text-2xl text-background">
                  동반자
                </h3>
                <p className="text-sm text-muted-foreground">
                  유기견 보호소 통합 플랫폼
                </p>
              </div>
            </div>
            
            <p className="text-base mb-8 max-w-md leading-relaxed text-muted-foreground">
              전국의 유기동물보호소를 통합하여 입양, 후원, 봉사, 커뮤니티 기능을 
              한곳에서 제공하는 종합 플랫폼입니다. 더 많은 생명을 구하는 일에 함께해주세요.
            </p>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  1588-0000 (평일 9:00-18:00)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  help@dongbanja.kr
                </span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  서울시 강남구 테헤란로 123, 동반자빌딩
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-6 mt-8">
              <span className="text-sm text-muted-foreground">
                Follow us:
              </span>
              {[
                { icon: Instagram, href: '#', name: 'Instagram' },
                { icon: Facebook, href: '#', name: 'Facebook' },
                { icon: Youtube, href: '#', name: 'YouTube' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 bg-primary/20 border border-primary/30 hover:bg-primary/30"
                  title={social.name}
                >
                  <social.icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 text-background flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              빠른 메뉴
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: '최근구조', href: '#', count: '19마리' },
                { name: '입양하기', href: '#', count: '143마리' },
                { name: '실종신고', href: '#', count: '78마리' },
                { name: '후원하기', href: '#', count: '₩2.1억' },
                { name: '봉사하기', href: '#', count: '1,240명' },
                { name: '커뮤니티', href: '#', count: '2.8K글' },
                { name: '공지사항', href: '#', count: null }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="flex items-center justify-between hover:text-primary transition-all duration-200 hover:translate-x-1 text-muted-foreground group"
                  >
                    <span>{link.name}</span>
                    {link.count && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                        {link.count}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Info */}
          <div>
            <h4 className="text-lg mb-6 text-background">
              지원 정보
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                '이용약관',
                '개인정보처리방침', 
                'FAQ', 
                '고객센터', 
                '파트너 등록'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="hover:text-primary transition-all duration-200 hover:translate-x-1 text-muted-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Achievement Badge */}
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-primary">통합 인증</span>
              </div>
              <p className="text-xs text-muted-foreground">
                농림축산식품부 · 동물보호단체 공식 인증
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-muted-foreground">
            © 2024 동반자. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 mx-1 animate-pulse text-primary fill-primary/20" />
            <span className="text-muted-foreground">for all animals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}