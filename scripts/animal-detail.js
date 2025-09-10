document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const likeBtn = document.getElementById('likeBtn');
    const shareBtn = document.getElementById('shareBtn');
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const animalCards = document.querySelectorAll('.animal-card');
    const zoomBtn = document.querySelector('.btn-zoom');

    // Thumbnail click handler
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const imgSrc = this.querySelector('img').src;
            mainImage.src = imgSrc;
            
            // For accessibility, update the main image's alt text
            const altText = this.querySelector('img').alt;
            mainImage.alt = altText;
        });
    });

    // Like button click handler
    if (likeBtn) {
        likeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            const isLiked = this.classList.toggle('liked');
            
            if (isLiked) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('관심 동물로 등록되었습니다.');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('관심 동물에서 제거되었습니다.');
            }
            
            // In a real app, you would make an API call to save the like status
        });
    }

    // Share button click handler
    if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Check if the Web Share API is supported
            if (navigator.share) {
                navigator.share({
                    title: '미니펫 - 포포',
                    text: '포포의 입양 상세 정보를 확인해보세요!',
                    url: window.location.href
                })
                .then(() => console.log('Shared successfully'))
                .catch(err => console.error('Error sharing:', err));
            } else {
                // Fallback for browsers that don't support Web Share API
                copyToClipboard(window.location.href);
                showToast('링크가 클립보드에 복사되었습니다.');
            }
        });
    }

    // Tab click handler
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabPanes.forEach(pane => {
                if (pane.id === tabId) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

    // Image click handler for modal
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    }

    // Zoom button click handler
    if (zoomBtn) {
        zoomBtn.addEventListener('click', function() {
            openModal(mainImage.src, mainImage.alt);
        });
    }

    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            closeImageModal();
        });
    }

    // Close modal when clicking outside the image
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeImageModal();
        }
    });

    // Animal card click handler
    animalCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to the animal's detail page
            const animalName = this.querySelector('h3').textContent;
            console.log(`Navigating to ${animalName}'s detail page`);
            // window.location.href = `/animal-detail.html?id=${animalId}`;
        });
    });

    // Helper function to open image modal
    function openModal(imgSrc, imgAlt) {
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Helper function to close image modal
    function closeImageModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Helper function to copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // Show toast notification
    function showToast(message) {
        // Check if toast container already exists
        let toastContainer = document.querySelector('.toast-container');
        
        // Create container if it doesn't exist
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Add to container
        toastContainer.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide and remove toast after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
                // Remove container if no more toasts
                if (toastContainer.children.length === 0) {
                    toastContainer.remove();
                }
            }, 300);
        }, 3000);
    }

    // Initialize the page
    function init() {
        // Set the first tab as active by default
        if (tabs.length > 0 && tabPanes.length > 0) {
            tabs[0].classList.add('active');
            tabPanes[0].classList.add('active');
        }
        
        // Set the first thumbnail as active by default
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
        }
        
        // Add any other initialization code here
    }
    
    // Start the app
    init();
});
