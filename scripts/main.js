// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // Feather Icons 활성화
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // 모바일 메뉴 토글 기능
    initMobileMenu();
    
    // 캐러셀 초기화 (data.js와 carousel.js 로드 후)
    setTimeout(() => {
        if (typeof initCarousels === 'function') {
            initCarousels();
        }
        
        // 커뮤니티 섹션 초기화
        if (typeof initCommunity === 'function') {
            initCommunity();
        }
    }, 100);
});

// 모바일 메뉴 초기화
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuBtn && mobileMenuOverlay) {
        // 메뉴 열기
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // 스크롤 방지
        });
        
        // 오버레이 클릭시 메뉴 닫기
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
        
        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
}

// 모바일 메뉴 닫기
function closeMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// 이미지 로딩 에러 처리
function handleImageError(img) {
    img.style.backgroundColor = '#f3f4f6';
    img.style.display = 'flex';
    img.style.alignItems = 'center';
    img.style.justifyContent = 'center';
    img.innerHTML = '<span style="color: #9ca3af; font-size: 14px;">이미지를 불러올 수 없습니다</span>';
}

// 부드러운 스크롤 효과
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}