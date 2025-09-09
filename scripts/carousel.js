// Animal Carousel JavaScript
class AnimalCarousel {
    constructor(sectionId, animals) {
        this.sectionId = sectionId;
        this.animals = animals;
        this.currentPage = 0;
        this.itemsPerPage = 5;
        this.totalPages = Math.ceil(animals.length / this.itemsPerPage);
        
        this.init();
    }
    
    init() {
        this.renderCarousel();
        this.renderDots();
        this.bindEvents();
        this.updateNavButtons();
    }
    
    renderCarousel() {
        const track = document.getElementById(`${this.sectionId}-track`);
        if (!track) return;
        
        track.innerHTML = '';
        
        // 현재 페이지의 동물들만 표시
        const startIndex = this.currentPage * this.itemsPerPage;
        const visibleAnimals = this.animals.slice(startIndex, startIndex + this.itemsPerPage);
        
        visibleAnimals.forEach(animal => {
            const cardElement = this.createAnimalCard(animal);
            track.appendChild(cardElement);
        });
    }
    
    createAnimalCard(animal) {
        const card = document.createElement('div');
        card.className = 'animal-card';
        
        // 상태에 따른 클래스명과 텍스트
        const statusInfo = this.getStatusInfo(animal.status);
        
        card.innerHTML = `
            <div class="animal-card-image-wrapper">
                <img 
                    src="${animal.image}" 
                    alt="${animal.name} - ${animal.breed}"
                    class="animal-card-image"
                    onerror="handleImageError(this)"
                >
                <div class="animal-card-gradient"></div>
                
                <div class="animal-card-status ${statusInfo.badgeClass}">
                    ${statusInfo.statusText}
                </div>
                
                <button class="animal-card-heart-btn" onclick="toggleHeart(this, '${animal.id}')">
                    <i data-feather="heart"></i>
                </button>
                
                <button class="animal-card-view-btn" onclick="viewAnimal('${animal.id}')">
                    <i data-feather="eye"></i>
                </button>
                
                <div class="animal-card-featured">
                    <i data-feather="star"></i>
                    <span>추천</span>
                </div>
            </div>
            
            <div class="animal-card-content">
                <div class="animal-card-header">
                    <h3 class="animal-card-name">${animal.name}</h3>
                    <span class="animal-card-age">${animal.age}</span>
                </div>
                
                <p class="animal-card-breed">${animal.breed}</p>
                
                ${animal.description ? `<p class="animal-card-description">${animal.description}</p>` : ''}
                
                <div class="animal-card-footer">
                    <div class="animal-card-location">
                        <i data-feather="map-pin"></i>
                        <span>${animal.location}</span>
                    </div>
                    <div class="animal-card-date">
                        <i data-feather="calendar"></i>
                        <span>${animal.date}</span>
                    </div>
                </div>
                
                <button class="animal-card-action ${statusInfo.actionClass}" onclick="handleAction('${animal.id}', '${animal.status}')">
                    ${statusInfo.actionText}
                </button>
            </div>
        `;
        
        return card;
    }
    
    getStatusInfo(status) {
        switch (status) {
            case 'rescued':
                return {
                    statusText: '최근 구조',
                    badgeClass: 'status-rescued',
                    actionText: '자세히 보기',
                    actionClass: 'action-rescued'
                };
            case 'adoptable':
                return {
                    statusText: '입양 가능',
                    badgeClass: 'status-adoptable',
                    actionText: '입양 신청하기',
                    actionClass: 'action-adoptable'
                };
            case 'missing':
                return {
                    statusText: '실종',
                    badgeClass: 'status-missing',
                    actionText: '제보하기',
                    actionClass: 'action-missing'
                };
            default:
                return {
                    statusText: '알 수 없음',
                    badgeClass: 'status-rescued',
                    actionText: '자세히 보기',
                    actionClass: 'action-rescued'
                };
        }
    }
    
    renderDots() {
        const dotsContainer = document.getElementById(`${this.sectionId}-dots`);
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalPages; i++) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${i === this.currentPage ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToPage(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    bindEvents() {
        const prevBtn = document.getElementById(`${this.sectionId}-prev`);
        const nextBtn = document.getElementById(`${this.sectionId}-next`);
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
    }
    
    prevSlide() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.renderCarousel();
            this.renderDots();
            this.updateNavButtons();
            
            // 아이콘 다시 활성화
            setTimeout(() => {
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }, 50);
        }
    }
    
    nextSlide() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.renderCarousel();
            this.renderDots();
            this.updateNavButtons();
            
            // 아이콘 다시 활성화
            setTimeout(() => {
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }, 50);
        }
    }
    
    goToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < this.totalPages) {
            this.currentPage = pageIndex;
            this.renderCarousel();
            this.renderDots();
            this.updateNavButtons();
            
            // 아이콘 다시 활성화
            setTimeout(() => {
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }, 50);
        }
    }
    
    updateNavButtons() {
        const prevBtn = document.getElementById(`${this.sectionId}-prev`);
        const nextBtn = document.getElementById(`${this.sectionId}-next`);
        
        if (prevBtn) {
            prevBtn.disabled = this.currentPage === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentPage === this.totalPages - 1;
        }
    }
}

// 캐러셀 인스턴스들을 저장할 배열
let carousels = [];

// 캐러셀 초기화 함수
function initCarousels() {
    // 구조된 동물들 캐러셀
    if (typeof rescuedAnimals !== 'undefined') {
        carousels.push(new AnimalCarousel('rescued', rescuedAnimals));
    }
    
    // 입양 대기 동물들 캐러셀
    if (typeof adoptableAnimals !== 'undefined') {
        carousels.push(new AnimalCarousel('adoptable', adoptableAnimals));
    }
    
    // 실종 동물들 캐러셀
    if (typeof missingAnimals !== 'undefined') {
        carousels.push(new AnimalCarousel('missing', missingAnimals));
    }
}

// 하트 버튼 토글 함수
function toggleHeart(button, animalId) {
    const heartIcon = button.querySelector('[data-feather="heart"]');
    
    // 하트 상태 토글 (실제 구현에서는 서버에 저장)
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.style.color = 'var(--color-primary)';
        console.log('Unlike animal:', animalId);
    } else {
        button.classList.add('liked');
        button.style.color = '#ef4444';
        console.log('Like animal:', animalId);
    }
}

// 동물 상세보기 함수
function viewAnimal(animalId) {
    console.log('View animal details:', animalId);
    // 실제 구현에서는 동물 상세 페이지로 이동하거나 모달 표시
    alert(`동물 ${animalId}의 상세 정보를 확인합니다.`);
}

// 액션 버튼 클릭 핸들러
function handleAction(animalId, status) {
    console.log('Handle action:', animalId, status);
    
    switch (status) {
        case 'rescued':
            alert(`구조된 동물 ${animalId}의 상세 정보를 확인합니다.`);
            break;
        case 'adoptable':
            alert(`동물 ${animalId}의 입양 신청을 진행합니다.`);
            break;
        case 'missing':
            alert(`실종 동물 ${animalId}를 제보합니다.`);
            break;
        default:
            alert(`동물 ${animalId}에 대한 액션을 수행합니다.`);
    }
}

// 이미지 로딩 에러 처리 (이미 main.js에 있음)
function handleImageError(img) {
    if (img.classList.contains('animal-card-image')) {
        img.style.backgroundColor = '#f3f4f6';
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.innerHTML = '<span style="color: #9ca3af; font-size: 14px;">이미지를 불러올 수 없습니다</span>';
    }
}

// ===== COMMUNITY SECTION =====

// 커뮤니티 섹션 초기화
function initCommunity() {
    if (typeof communityPosts !== 'undefined') {
        renderCommunityPosts(communityPosts.slice(0, 9)); // 처음 9개만 표시
    }
}

// 커뮤니티 게시글 렌더링
function renderCommunityPosts(posts) {
    const postsContainer = document.getElementById('community-posts');
    if (!postsContainer) return;
    
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = createCommunityPost(post);
        postsContainer.appendChild(postElement);
    });
    
    // 아이콘 다시 활성화
    setTimeout(() => {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }, 50);
}

// 커뮤니티 게시글 카드 생성
function createCommunityPost(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'community-post';
    postDiv.onclick = () => viewPost(post.id);
    
    const categoryClass = getCategoryClass(post.category);
    const hasImage = post.image && post.image.trim() !== '';
    
    postDiv.innerHTML = `
        <div class="post-header">
            <span class="post-category ${categoryClass}">
                ${post.category}
            </span>
            ${hasImage ? '<div class="post-indicator"></div>' : ''}
        </div>
        
        <h3 class="post-title">${post.title}</h3>
        
        <p class="post-author">${post.author}</p>
        
        <p class="post-content">${post.content}</p>
        
        <div class="post-footer">
            <div class="post-info">
                <span>${post.date}</span>
            </div>
            <div class="post-stats">
                <div class="post-stat">
                    <i data-feather="message-square"></i>
                    <span>${post.comments}</span>
                </div>
                <div class="post-stat">
                    <i data-feather="users"></i>
                    <span>${post.views.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `;
    
    return postDiv;
}

// 카테고리에 따른 CSS 클래스 반환
function getCategoryClass(category) {
    switch (category) {
        case '입양 후기':
            return 'category-adoption';
        case '봉사 후기':
            return 'category-volunteer';
        case '보호일지':
            return 'category-diary';
        case '보호소 타임라인':
            return 'category-timeline';
        case '질문과 답변':
            return 'category-qa';
        default:
            return 'category-timeline';
    }
}

// 게시글 상세보기
function viewPost(postId) {
    console.log('View post:', postId);
    // 실제 구현에서는 게시글 상세 페이지로 이동
    alert(`게시글 ${postId}를 확인합니다.`);
}