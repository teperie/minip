# 동반자 - 프로젝트 구조

## 개요
유기견 보호소 통합 관리 플랫폼의 HTML+CSS+JavaScript 버전

## 디렉토리 구조

```
painful/
├── index.html                    # 메인 홈페이지
├── PROJECT_STRUCTURE.md          # 이 문서
├── 기능명세.md                   # 프로젝트 기능 명세서
│
├── styles/                       # CSS 파일들
│   ├── reset.css                 # CSS 리셋
│   ├── main.css                  # 메인 스타일 (따뜻한 갈색/베이지 테마)
│   └── responsive.css            # 반응형 디자인
│
├── scripts/                      # JavaScript 파일들
│   ├── main.js                   # 메인 JavaScript
│   ├── data.js                   # 정적 데이터
│   └── carousel.js               # 캐러셀 기능
│
└── pages/                        # 기능별 페이지들
    ├── 통합검색.html              # 전체 검색 페이지
    │
    ├── adoption/                  # 입양 관련 페이지들
    │   ├── 입양상세.html           # ✅ 업데이트 완료 (테마 적용)
    │   ├── 입양신청내역목록.html
    │   ├── 입양신청내역상세.html
    │   ├── 입양신청작성폼.html
    │   └── 동물프로필페이지.html
    │
    ├── shelter/                   # 보호소 관련 페이지들
    │   ├── 보호소프로필.html
    │   ├── 보호소관리메뉴.html
    │   └── 보호소찾기.html
    │
    ├── community/                 # 커뮤니티 페이지들
    │   ├── 게시판목록.html
    │   ├── 게시판글작성.html
    │   └── 게시판글상세.html
    │
    ├── timeline/                  # 동물 타임라인 & 블로그
    │   ├── 동물타임라인.html
    │   ├── 동물타임라인상세.html
    │   └── 동물블로그.html
    │
    ├── volunteer/                 # 봉사활동 페이지들
    │   ├── 봉사일정등록.html
    │   └── 봉사신청작성.html
    │
    ├── member/                    # 회원 페이지들
    │   └── 회원마이페이지.html
    │
    ├── admin/                     # 관리자 페이지들
    │   ├── 관리자페이지대시보드.html
    │   ├── 관리자용보호소목록.html
    │   ├── 관리자용보호소상세.html
    │   ├── 관리자용회원목록.html
    │   ├── 관리자용회원상세.html
    │   └── 관리자용신고목록.html
    │
    └── notification/              # 알림 및 공지사항
        ├── 알림목록.html
        ├── 공지목록.html
        ├── 공지상세.html
        └── 공지작성.html
```

## 테마 시스템

### 색상 팔레트 (따뜻한 갈색/베이지 테마)
- **Primary**: `#8D7B68` (따뜻한 갈색)
- **Secondary**: `#F1DEC9` (연한 베이지)
- **Background**: `#F9F9F9` (매우 연한 회색)
- **Accent**: `#A4907C` (중간 갈색)
- **Muted**: `#FFF8EA` (크림색)

### CSS 변수 시스템
모든 페이지는 `styles/main.css`의 CSS 변수를 사용:
```css
:root {
  --primary: #8D7B68;
  --secondary: #F1DEC9;
  --background: #F9F9F9;
  /* ... */
}
```

### 아이콘 시스템
- **라이브러리**: Feather Icons
- **CDN**: `https://unpkg.com/feather-icons`
- **초기화**: `feather.replace()`

## 파일 상태

### 완료된 페이지 (1/30)
- ✅ `pages/adoption/입양상세.html` - 테마 적용, CSS 변수 사용, 아이콘 추가, 반응형 완료

### 작업 대기 중인 페이지 (29/30)
나머지 모든 HTML 페이지들은 인라인 스타일을 사용하고 있으며 다음 작업이 필요:
1. CSS 경로 수정 (상대 경로)
2. 인라인 스타일을 CSS 변수로 변경
3. Feather 아이콘 추가
4. 반응형 디자인 적용
5. 접근성 개선

## 다음 작업 계획

### 우선순위 1: 핵심 기능 페이지들
1. `pages/adoption/입양신청작성폼.html`
2. `pages/adoption/동물프로필페이지.html`
3. `pages/shelter/보호소프로필.html`
4. `pages/community/게시판목록.html`

### 우선순위 2: 관리 페이지들
1. `pages/admin/관리자페이지대시보드.html`
2. `pages/member/회원마이페이지.html`

### 우선순위 3: 나머지 페이지들
- Timeline, Volunteer, Notification 페이지들

## 개발 가이드라인

### CSS 경로 규칙
- 루트에서: `styles/main.css`
- pages 하위에서: `../../styles/main.css`
- pages 서브디렉토리에서: `../../styles/main.css`

### HTML 페이지 기본 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지명 - 동반자</title>
    
    <!-- CSS 파일들 -->    
    <link rel="stylesheet" href="../../styles/reset.css">
    <link rel="stylesheet" href="../../styles/main.css">
    <link rel="stylesheet" href="../../styles/responsive.css">
    
    <!-- Feather Icons -->    
    <script src="https://unpkg.com/feather-icons"></script>
    
    <style>
        /* 페이지별 커스텀 스타일 */
    </style>
</head>
<body>
    <!-- 페이지 내용 -->
    
    <!-- JavaScript 초기화 -->
    <script>
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    </script>
</body>
</html>
```

## 배포 준비사항
- 모든 경로가 상대경로로 설정됨
- Servlet+JSP 환경에서 바로 사용 가능
- CSS/JS 파일들이 독립적으로 동작
- 외부 의존성: Feather Icons CDN만 사용