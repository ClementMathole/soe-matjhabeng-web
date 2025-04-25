document.getElementById('current-year').innerHTML = new Date().getFullYear();

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.dropbtn').forEach(item => {
    item.addEventListener('click', event => {
        const dropdown = item.parentElement;
        dropdown.classList.toggle('active')
    })
});

const banner = document.querySelector('.banner');
const bannerText = document.getElementById('banner-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dancePages = ['Amapiano Dance', 'Mokhibo', 'Pantsula Dance'];
const backgrounds = [
                        'https://news.cgtn.com/news/2023-08-16/Amapiano-dance-moves-bring-South-African-sway-to-China-1mjDAfzZfoc/img/c5d18354e1cb421e87b935f22617cd23/c5d18354e1cb421e87b935f22617cd23.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Singing-for-Mokhibo-Lesotho.jpg/1200px-Singing-for-Mokhibo-Lesotho.jpg',
                        'https://fowler.ucla.edu/wp-content/uploads/2021/05/pantsula.png'
                    ];
let currentIndex = 0;

function updatePage(index) {
    bannerText.textContent = dancePages[index];
    banner.style.backgroundImage = `url(${backgrounds[index]})`;
    document.querySelectorAll('.page-content').forEach(page => page.classList.remove("active"));
    document.querySelectorAll('.page-content')[index].classList.add("active");
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < dancePages.length - 1) {
        currentIndex++;
        updatePage(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePage(currentIndex);
    }
});
updatePage(currentIndex);

function openVideoModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    
    const video = modal.querySelector("video");
    if (video) {
        video.play();
    }
}

window.onclick = function(event) {
    document.querySelectorAll('.video-modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            const video = modal.querySelector("video");
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
};



function showPopup(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = `${name}! Your message has been received. Expect feedback soon.`;
    popup.style.display = 'flex';

    setTimeout(function() {
        popup.style.display = 'none';
    }, 900);
}

function playVideo(cardType) {
    const videoUrls = {
        amapiano: './assets/videos/amapiano.mp4',
        amapiano1: './assets/videos/piano1.mp4',
        amapiano2:'./assets/videos/piano2.mp4',
        amapiano3: './assets/videos/piano3.mp4',
        mokhibo: './assets/videos/Traditional Sotho Dancers.mp4',
        mokhibo4: './assets/videos/mokhibo.mp4',
        mokhibo2:'./assets/videos/mokhibo2.mp4',
        mokhibo3:'./assets/videos/mokhibo3.mp4',
        pantsula1: './assets/videos/Alex rockstars pantsula.mp4',
        pantsula2: './assets/videos/pantsula2.mp4',
        pantsula3: './assets/videos/pantsula.mp4',
        pantsula4: './assets/videos/pantsula3.mp4',
    };
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('video-modal-content');
    const videoSource = document.getElementById('video-source');
    
    videoSource.src = videoUrls[cardType];
    video.load();
    video.play();
    
    modal.style.display = 'flex';
}

function closeVideoModal(event) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('video-modal-content');
    if (event.target === modal) {
        video.pause();
        modal.style.display = 'none';
    }
}

