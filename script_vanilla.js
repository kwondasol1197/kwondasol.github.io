// Screenshot data
const screenshots = [
    {
        id: 1,
        image: "./src/assets/15e377265d30d27ffa58d38be29af3bd5b9fb8e0.png",
        title: "매출장부로 쉽게 시작하세요",
        description: "소상공인과 개인사업자를 위한 스마트한 장부 관리 앱입니다. 일일 수입/지출 기록부터 월별 통계까지 한 번에 관리하세요.",
        badge: "온보딩"
    },
    {
        id: 2,
        image: "./src/assets/e6d9afcfc9db0b0aefd92c60eb939a18b37d8bbb.png",
        title: "쉽고 빠른 기록",
        description: "직관적인 인터페이스로 복잡한 절차 없이 간단하게 수입과 지출을 기록할 수 있습니다. 빠른 카테고리 선택으로 시간을 절약하세요.",
        badge: "주요 기능"
    },
    {
        id: 3,
        image: "./src/assets/45c62e8a149ff548a4dc2ac297492a29a6130afe.png",
        title: "스마트한 분석",
        description: "한눈에 보는 재무현황. 자동으로 생성되는 차트와 통계로 자동으로 지출 패턴을 파악하세요. 월별/연도별 통계와 카테고리별 분석을 제공합니다.",
        badge: "주요 기능"
    },
    {
        id: 4,
        image: "./src/assets/9f19202e907208bf26bd113963339319521d12eb.png",
        title: "오늘의 장부 요약",
        description: "오늘의 수입, 지출, 잔액을 한눈에 확인하세요. 주간 비교 차트와 현재 자산 현황을 실시간으로 파악할 수 있습니다.",
        badge: "메인 화면"
    },
    {
        id: 5,
        image: "./src/assets/9bef6ee128e188182b4e0e11caa3572b38225b4f.png",
        title: "상세 내역 확인",
        description: "월별 장부 요약과 함께 모든 거래 내역을 확인하세요. 은행별, 카드별 사용량을 한눈에 파악할 수 있습니다.",
        badge: "내역 관리"
    },
    {
        id: 6,
        image: "./src/assets/72c5b10ea776e54d570e2bdf48ea5f393be3c98a.png",
        title: "간편한 거래 입력",
        description: "수입/지출 금액과 카테고리를 선택하고 메모를 입력하세요. 빠른 금액 입력 버튼으로 더 편리하게 기록할 수 있습니다.",
        badge: "입력 화면"
    },
    {
        id: 7,
        image: "./src/assets/80b80d94f77bccfa30f6fee49f6ce62d3261b7d0.png",
        title: "다양한 카테고리",
        description: "식비, 주거비, 교통비, 의료, 교육, 쇼핑 등 다양한 카테고리로 지출을 분류하세요. 결제 수단별로도 관리할 수 있습니다.",
        badge: "카테고리"
    },
    {
        id: 8,
        image: "./src/assets/8a5f0a9638005de24225a4b63f49e1c02f280114.png",
        title: "월별 요약 분석",
        description: "월별 수입, 지출, 남은액을 확인하고 카테고리별 지출 비율을 차트로 확인하세요. 어디에 돈을 가장 많이 쓰는지 한눈에 파악할 수 있습니다.",
        badge: "통계/분석"
    },
    {
        id: 9,
        image: "./src/assets/51e39877ae11e5c87c06695806c82eea71c66d60.png",
        title: "설정 및 관리",
        description: "계정 설정, 비밀번호 변경, 연간 목표금액 설정, 자산 관리 등 다양한 기능을 설정할 수 있습니다.",
        badge: "설정"
    }
];

let currentIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    setupEventListeners();
    updateDisplay();
    renderThumbnails();
});

// Initialize Gallery
function initializeGallery() {
    // Display first screenshot
    updateDisplay();
}

// Setup Event Listeners
function setupEventListeners() {
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    prevBtn.addEventListener('click', handlePrevious);
    nextBtn.addEventListener('click', handleNext);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
    });
}

// Navigation Handlers
function handlePrevious() {
    currentIndex = (currentIndex === 0) ? screenshots.length - 1 : currentIndex - 1;
    updateDisplay();
    scrollToGallery();
}

function handleNext() {
    currentIndex = (currentIndex === screenshots.length - 1) ? 0 : currentIndex + 1;
    updateDisplay();
    scrollToGallery();
}

// Update Display
function updateDisplay() {
    const current = screenshots[currentIndex];

    // Update image
    document.getElementById('screenshot-image').src = current.image;
    document.getElementById('screenshot-image').alt = current.title;

    // Update title and description
    document.getElementById('screenshot-title').textContent = current.title;
    document.getElementById('screenshot-description').textContent = current.description;
    document.getElementById('screenshot-badge').textContent = current.badge;

    // Update counter
    document.getElementById('current-index').textContent = currentIndex + 1;
    document.getElementById('total-count').textContent = screenshots.length;

    // Update dots
    updateDots();

    // Update thumbnails
    updateThumbnails();
}

// Update Dots Indicator
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Render Thumbnails
function renderThumbnails() {
    const grid = document.getElementById('screenshots-grid');
    grid.innerHTML = '';

    screenshots.forEach((screenshot, index) => {
        const thumbnail = document.createElement('button');
        thumbnail.className = `screenshot-thumbnail ${index === currentIndex ? 'active' : ''}`;
        thumbnail.setAttribute('aria-label', `스크린샷 ${index + 1}: ${screenshot.title}`);

        thumbnail.innerHTML = `
            <img src="${screenshot.image}" alt="${screenshot.title}">
            <div class="thumbnail-overlay">
                <div class="thumbnail-badge">${screenshot.badge}</div>
                <div class="thumbnail-title">${screenshot.title}</div>
            </div>
            ${index === currentIndex ? `
                <div class="thumbnail-checkmark">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            ` : ''}
        `;

        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateDisplay();
            scrollToGallery();
        });

        grid.appendChild(thumbnail);
    });

    // Render dots
    renderDots();
}

// Render Dots
function renderDots() {
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = '';

    screenshots.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `스크린샷 ${index + 1}로 이동`);

        dot.addEventListener('click', () => {
            currentIndex = index;
            updateDisplay();
            scrollToGallery();
        });

        dotsContainer.appendChild(dot);
    });
}

// Update Thumbnails
function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.screenshot-thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentIndex) {
            thumbnail.classList.add('active');
            // Add checkmark if not exists
            if (!thumbnail.querySelector('.thumbnail-checkmark')) {
                const checkmark = document.createElement('div');
                checkmark.className = 'thumbnail-checkmark';
                checkmark.innerHTML = `
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                `;
                thumbnail.appendChild(checkmark);
            }
        } else {
            thumbnail.classList.remove('active');
            const checkmark = thumbnail.querySelector('.thumbnail-checkmark');
            if (checkmark) {
                checkmark.remove();
            }
        }
    });
}

// Scroll to Gallery
function scrollToGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Preload Images
function preloadImages() {
    screenshots.forEach(screenshot => {
        const img = new Image();
        img.src = screenshot.image;
    });
}

// Call preload on load
window.addEventListener('load', preloadImages);

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.phone-screen').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.phone-screen').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        handleNext();
    }
    if (touchEndX - touchStartX > 50) {
        handlePrevious();
    }
}
