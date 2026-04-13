//Learning website focused on teaching computer science concepts through brief lessons.

//change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// Settings tab bar toggle
const settingsLinks = document.querySelectorAll('.settings__menu a');
const settingsContents = document.querySelectorAll('.settings__content section');

if (settingsLinks.length > 0) {
    settingsContents.forEach((s, i) => {
        s.style.display = i === 0 ? 'block' : 'none';
    });

    settingsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = e.target.getAttribute('href');
            if (!target.startsWith('#')) return;
            e.preventDefault();

            settingsContents.forEach(s => {
                s.style.display = s.id === target.slice(1) ? 'block' : 'none';
            });

            settingsLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

//Signout functionality
const signOutBtn = document.getElementById('signoutbtn');
if (signOutBtn) {
  signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/pages/login.html';
  });
}