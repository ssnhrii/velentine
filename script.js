function startExperience() {
    const overlay = document.getElementById('startOverlay');
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = document.getElementById('musicIcon');
    
    // Hide overlay with fade animation
    overlay.style.transition = 'opacity 0.5s ease-out';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 500);
    
    // Force play music
    music.muted = false;
    music.volume = 1.0;
    
    music.play().then(() => {
        musicBtn.classList.add('playing');
        musicIcon.textContent = '🎵';
        console.log('Music started successfully');
    }).catch(err => {
        console.log('Music play error:', err);
        // Retry multiple times for stubborn browsers
        let retries = 0;
        const retryPlay = setInterval(() => {
            music.play().then(() => {
                musicBtn.classList.add('playing');
                musicIcon.textContent = '🎵';
                clearInterval(retryPlay);
            }).catch(() => {
                retries++;
                if (retries > 5) clearInterval(retryPlay);
            });
        }, 200);
    });
}

function openGift() {
    const giftContent = document.getElementById('giftContent');
    const giftBox = document.getElementById('giftBox');
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = document.getElementById('musicIcon');
    
    // Force play music when opening gift (works better on mobile)
    music.muted = false;
    music.volume = 1.0;
    
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            musicBtn.classList.add('playing');
            musicIcon.textContent = '🎵';
            console.log('Music playing');
        }).catch(err => {
            console.log('Music play error:', err);
            // Retry after a short delay for mobile
            setTimeout(() => {
                music.play().then(() => {
                    musicBtn.classList.add('playing');
                    musicIcon.textContent = '🎵';
                }).catch(e => console.log('Retry failed:', e));
            }, 100);
        });
    }
    
    // Hide gift box with animation
    giftBox.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        giftBox.style.display = 'none';
        giftContent.classList.add('show');
        
        // Create confetti effect
        createConfetti();
    }, 500);
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = document.getElementById('musicIcon');
    
    if (music.paused) {
        music.play();
        musicIcon.textContent = '🎵';
        musicBtn.classList.add('playing');
    } else {
        music.pause();
        musicIcon.textContent = '🔇';
        musicBtn.classList.remove('playing');
    }
}

function previewMedia(num) {
    const file = document.getElementById('file' + num).files[0];
    const preview = document.getElementById('preview' + num);
    const video = document.getElementById('video' + num);
    const icon = document.getElementById('icon' + num);
    const badge = document.getElementById('badge' + num);
    
    if (file) {
        const reader = new FileReader();
        const fileType = file.type;
        
        reader.onload = function(e) {
            // Hide icon
            icon.style.display = 'none';
            
            // Check if it's a video or image
            if (fileType.startsWith('video/')) {
                // Show video
                video.src = e.target.result;
                video.style.display = 'block';
                preview.style.display = 'none';
                badge.textContent = '🎥 VIDEO';
                badge.style.display = 'block';
                
                // Ensure video plays
                video.load();
                video.play().catch(err => console.log('Autoplay prevented:', err));
            } else if (fileType.startsWith('image/')) {
                // Show image
                preview.src = e.target.result;
                preview.style.display = 'block';
                video.style.display = 'none';
                badge.textContent = '📷 FOTO';
                badge.style.display = 'block';
            }
        }
        
        reader.readAsDataURL(file);
    }
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function createConfetti() {
    const colors = ['#3b82f6', '#60a5fa', '#fbbf24', '#a78bfa', '#2563eb'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) translateX(${xMovement}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Initialize stars and music on page load
window.addEventListener('load', function() {
    createStars();
    
    const music = document.getElementById('bgMusic');
    music.load();
});

// Add CSS for fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(style);
