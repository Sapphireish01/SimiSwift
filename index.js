window.addEventListener('load', () => {
const currentTimeUTC = document.getElementById('currentTimeUTC');
setInterval(() => {
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString();
}, 1000);
});

document.querySelector('button').addEventListener('click', function() {
const bio = document.querySelector('.profile-bio');
if (bio.style.display === 'block') {
    bio.style.display = 'none';
} else {
    bio.style.display = 'block';
}
});

