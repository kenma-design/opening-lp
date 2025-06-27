// FAQ アコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            item.classList.toggle('active');
            
            // 他のFAQアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});

// スムーズスクロール
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// CTAボタンのクリックイベント
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#reservation');
    });
});

// スクロールによるアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// ヘッダーのスクロール時の挙動
const header = document.querySelector('.main-header');
const backToTopBtn = document.getElementById('backToTop');

// スクロール時のヘッダーのスタイル変更
window.addEventListener('scroll', () => {
    // スクロール位置に応じてヘッダーのスタイルを変更
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    // トップに戻るボタンの表示/非表示
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// トップに戻るボタンのクリックイベント
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// アニメーション対象の要素を取得
const sections = document.querySelectorAll('section');
const features = document.querySelectorAll('.feature-item');
const steps = document.querySelectorAll('.step-item');
const faqItems = document.querySelectorAll('.faq-item');
const checkItems = document.querySelectorAll('.check-item');
const problemSection = document.querySelector('.problem');
const solutionText = document.querySelector('.solution-text');

// 各要素にオブザーバーを設定
const allElements = [
    ...sections,
    ...features,
    ...steps,
    ...faqItems,
    ...checkItems,
    problemSection,
    solutionText
];

allElements.forEach(element => {
    if (element) {
        observer.observe(element);
    }
});
