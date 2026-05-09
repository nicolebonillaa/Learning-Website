//Learning website focused on teaching computer science concepts through brief lessons.

//const { use } = require("react");

//change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

//Hamburger menu toggle
const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');

if(hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('nav__menu__open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('nav__menu__open');
        });
    });

    document.addEventListener('click', (e) => {
        if(!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('open');
            navMenu.classList.remove('nav__menu__open');
        }
    });
}

// Settings tab bar toggle
const settingsLinks = document.querySelectorAll('.settings__menu a');
const settingsContents = document.querySelectorAll('.settings__content section');

if (settingsLinks.length > 0) {
    settingsContents.forEach((s, i)=> {
        s.style.display = i === 0 ? 'block' : 'none';
    });

    settingsLinks[0].classList.add('active');

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
	fetch("/logout", {
	  method: "POST",
	  body: JSON.stringify({
	    logout: true
	  }),
	  headers: {
	    "Content-type": "application/json; charset=UTF-8"
	  }
	});
  });
}

// --progress page code--
const progressBar = [

    { id: "progress0", category: "inProgress", name: "progress0", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_0.gif" },
    { id: "progress1", category: "inProgress", name: "progress1", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_01.gif" },
    { id: "progress2", category: "inProgress", name: "progress2", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_02.gif" },
    { id: "progress3", category: "inProgress", name: "progress3", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_03.gif" },
    { id: "progress4", category: "inProgress", name: "progress4", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_04.gif" },
    { id: "progress5", category: "inProgress", name: "progress5", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_05.gif" },
    { id: "progress6", category: "inProgress", name: "progress6", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_06.gif" },
    { id: "progress7", category: "inProgress", name: "progress7", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_07.gif" },
    { id: "progress8", category: "inProgress", name: "progress8", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_08.gif" },
    { id: "progress9", category: "inProgress", name: "progress9", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_09.gif" },
    { id: "progress10", category: "inProgress", name: "progress10", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_10.gif"},
    { id: "progress11", category: "inProgress", name: "progress11", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_11.gif" },
    { id: "progress12", category: "inProgress", name: "progress12", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_12.gif" },
    { id: "progress13", category: "inProgress", name: "progress13", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_13.gif" },
    { id: "progress14", category: "inProgress", name: "progress14", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_14.gif" },
    { id: "progress15", category: "inProgress", name: "progress15", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_15.gif" },
    { id: "progress16", category: "inProgress", name: "progress16", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_16.gif" },
    { id: "progress17", category: "inProgress", name: "progress17", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_17.gif" },
    { id: "progress18", category: "inProgress", name: "progress18", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_18.gif" },
    { id: "progress19", category: "inProgress", name: "progress19", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_19.gif" },
    { id: "progress20", category: "inProgress", name: "progress20", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_20.gif" },
    { id: "progress21", category: "inProgress", name: "progress21", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_21.gif" },
    { id: "progress22", category: "inProgress", name: "progress22", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_22.gif" },
    { id: "progress23", category: "inProgress", name: "progress23", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_23.gif" },
    { id: "progress24", category: "inProgress", name: "progress24", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_24.gif" },
    { id: "progress25", category: "inProgress", name: "progress25", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_25.gif" },
    { id: "progress26", category: "inProgress", name: "progress26", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_26.gif" },
    { id: "progress27", category: "inProgress", name: "progress27", image: "/main/images/progress-html-assests/progress-bar-assets/progress_bar_27.gif" },
    { id: "progress28", category: "inProgress", name: "progress28", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_28.gif" },
    { id: "progress29", category: "inProgress", name: "progress29", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_29.gif" },
    { id: "progress30", category: "inProgress", name: "progress30", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_30.gif" },
    { id: "progress31", category: "inProgress", name: "progress31", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_31.gif" },
    { id: "progress32", category: "inProgress", name: "progress32", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_32.gif" },
    { id: "progress33", category: "inProgress", name: "progress33", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_33.gif" },
    { id: "progress34", category: "inProgress", name: "progress34", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_34.gif" },
    { id: "progress35", category: "inProgress", name: "progress35", image: "/main/images/progress-html-assests/prgress-bar-assets/progress_bar_35.gif" }
    // 100% progress
];

// Map each backend value to a container
const progressConfig = [
  { id: "dProgress", container: "progress-d" },
  { id: "jProgress", container: "progress-j" },
  { id: "sProgress", container: "progress-s" },
  { id: "fProgress", container: "progress-f" }
];

// Convert 0-100 into 0-35
function getProgressImageIndex(progressValue) {
  if (isNaN(progressValue)) return 0;

  const clamped = Math.max(0, Math.min(100, progressValue));
  return Math.round((clamped / 100) * 35);
}

function renderAllProgressBars() {
    console.log("renderAllProgressBars called");

  progressConfig.forEach(item => {
    const element = document.getElementById(item.id);
    if (!element) return;

    const raw = element.textContent;
    const value = raw ? Math.round(Number(raw)) : 0;
    const imageIndex = getProgressImageIndex(value);

    console.log(item.id, "raw text =", raw, "value =", value, "imageIndex =", imageIndex);

    const img = document.createElement("img");
    img.src = `/main/images/progress-html-assests/progress-bar-assets/progress_bar_${imageIndex}.gif`;
    img.alt = `Progress ${value}%`;
    img.className = "progress_gif";

    img.onerror = () => {
      img.src = "/main/images/progress-html-assests/progress-bar-assets/progress_bar_0.gif";
    };

    const container = document.getElementById(item.container);
    if (!container) return;

    container.innerHTML = "";
    container.appendChild(img);
  });
}
/*
document.addEventListener("DOMContentLoaded", () => {
  renderAllProgressBars();
});*/
// --End of progress page code--

// --Avatar customization code--

//Array of accessories for avatar customization
const accessories = [
  { id: "head_accessory_00", category: "hat", name: "Funny hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-00.png" },
  { id: "head_accessory_01", category: "hat", name: "Crown hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-01.png" },
  { id: "head_accessory_02", category: "hat", name: "Baseball hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-02.png" },
  { id: "head_accessory_03", category: "hat", name: "Peach hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-03.png" },
  { id: "head_accessory_04", category: "hat", name: "Flower hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-04.png" },
  { id: "head_accessory_05", category: "hat", name: "Fancy hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-05.png" },
  { id: "head_accessory_06", category: "hat", name: "Fancy hat", image: "/main/images/profile-html-assets/red-panda-head-accessories/head-accessory-06.png" },

  { id: "eye_accessory_00", category: "glasses", name: "Sun glasses", image: "/main/images/profile-html-assets/red-panda-eye-accessories/eye-accessory-00.png" },
  { id: "eye_accessory_01", category: "glasses", name: "Nerd glasses", image: "/main/images/profile-html-assets/red-panda-eye-accessories/eye-accessory-01.png" },
  { id: "eye_accessory_02", category: "glasses", name: "Fancy glasses", image: "/main/images/profile-html-assets/red-panda-eye-accessories/eye-accessory-05.png" },
  { id: "eye_accessory_03", category: "glasses", name: "Round glasses", image: "/main/images/profile-html-assets/red-panda-eye-accessories/eye-accessory-02.png" },
  { id: "eye_accessory_04", category: "glasses", name: "Heart glasses", image: "/main/images/profile-html-assets/red-panda-eye-accessories/eye-accessory-03.png" },
  { id: "eye_accessory_05", category: "glasses", name: "Pirate glasses", image: "/main/images/profile-html-assets/red-panda-eye-accessories/eye-accessory-04.png" }
];


// State management for avatar customization
const state = {
  accessories: accessories,
  avatar: {
    hat: null,
    glasses: null
  }
};


// Base avatar images for different states (with and without hat)
const BASE_AVATAR_IMAGE_0 = "/main/images/profile-html-assets/red-panda-bodies/red-panda-body-ears-up.png";
const BASE_AVATAR_IMAGE_1 = "/main/images/profile-html-assets/red-panda-bodies/red-panda-body-ears-down.png";

// Define the order of layers for rendering the avatar
const LAYER_ORDER = ["glasses", "hat"];

// DOM elements
const avatarPreviewEl = document.getElementById("avatarPreview");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const statusMessageEl = document.getElementById("statusMessage");

// Set up event listeners for accessory selection
const cardButtons = document.querySelectorAll("#accessoryList .card");

// Loop through each accessory card button and attach click event listeners to handle accessory selection
cardButtons.forEach((button, index) => {
  const item = accessories[index];

  if (!item) return;

    button.addEventListener("click", () => {
    handleAccessoryClick(item);
  });
});

// Handle accessory click to update avatar state
function handleAccessoryClick(item) {
  const category = item.category;

  if (state.avatar[category] === item.id) {
    state.avatar[category] = null;
  } else {
    state.avatar[category] = item.id;
  }

  console.log("Clicked item:", item);
  console.log("Updated avatar state:", state.avatar);

  renderAvatarPreview();
}

// Render the avatar preview based on the current state
function renderAvatarPreview() {
  avatarPreviewEl.innerHTML = "";

  const baseImg = document.createElement("img");
    // Use different base image depending on whether a hat is selected to ensure proper layering of accessories
    if (state.avatar.hat) {
    baseImg.src = BASE_AVATAR_IMAGE_1;
    } else {
    baseImg.src = BASE_AVATAR_IMAGE_0;
    }
  
  baseImg.alt = "Base avatar";
  baseImg.className = "avatar-layer";
  avatarPreviewEl.appendChild(baseImg);

  LAYER_ORDER.forEach(category => {
    const selectedItemId = state.avatar[category];
    if (!selectedItemId) return;

    const item = state.accessories.find(accessory => accessory.id === selectedItemId);
    if (!item) return;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "avatar-layer";

    avatarPreviewEl.appendChild(img);

    console.log("Selected category:", category);
    console.log("Selected item id:", selectedItemId);
    console.log("Matched item:", item);
  });

  console.log("Rendering avatar:", state.avatar);
}

// Reset avatar to default state
function resetAvatar() {
  state.avatar.hat = null;
  state.avatar.glasses = null;

  statusMessageEl.textContent = "Avatar reset.";
  renderAvatarPreview();
}

// Save avatar state to backend
async function saveAvatar() {
  try {
    statusMessageEl.textContent = "Saving...";
    // Send the current avatar state to the backend API to save it for the user
    const response = await fetch("/api/avatar/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state.avatar)
    });

    if (!response.ok) {
      throw new Error("Failed to save avatar");
    }

    statusMessageEl.textContent = "Avatar saved successfully.";
  } catch (error) {
    statusMessageEl.textContent = "Error saving avatar.";
    console.error(error);
  }
}

// Load saved avatar state from backend when the page initializes
async function loadSavedAvatar() {
  try {
    const response = await fetch("/api/avatar/me");
    if (!response.ok) {
      throw new Error("Failed to load avatar");
    }

    const savedAvatar = await response.json();

    state.avatar = {
      hat: savedAvatar.hat || null,
      glasses: savedAvatar.glasses || null
    };
  } catch (error) {
    console.error(error);
  }
}

// Initialize the avatar page by loading saved avatar and setting up event listeners
async function initAvatarPage() {
  await loadSavedAvatar(); 
  renderAvatarPreview();

  saveBtn.addEventListener("click", saveAvatar);
  resetBtn.addEventListener("click", resetAvatar);
}

// Call the initialization function when the DOM is fully loaded
//initAvatarPage();

// --End of avatar customization code--

//Login and sign up form validation 
const loginForm = document.querySelector('.login__form');
if (loginForm){
    loginForm.addEventListener('submit', (e) => {

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            e.preventDefault();
            showFormError(loginForm, 'Please enter both username and password.');
            return;
        }
    });
}

const signupForm = document.querySelector('.signup__form');
if (signupForm) {

    const usernameInput = document.getElementById('signupusername');
    const usernameHint  = document.getElementById('username__hint');
    let usernameCheckTimer = null;
    let usernameAvailable  = false;

    if (usernameInput && usernameHint) {
        usernameInput.addEventListener('input', () => {
        const val = usernameInput.value.trim();
        clearTimeout(usernameCheckTimer);
 
        if (val.length < 3) {
            usernameHint.textContent = 'Username must be at least 3 characters.';
            usernameHint.className = 'field__hint field__hint__error';
            usernameAvailable = false;
            return;
        }
 
        usernameHint.textContent = 'Checking…';
        usernameHint.className = 'field__hint';
 
        usernameCheckTimer = setTimeout(async () => {
            try {
                const res  = await fetch(`/signup/check__username?username=${encodeURIComponent(val)}`);
                const data = await res.json();

                if (data.available) {
                    usernameHint.textContent = '✓ Username is available!';
                    usernameHint.className = 'field__hint field__hint__success';
                    usernameAvailable = true;
                } else {
                    usernameHint.textContent = '✗ Username is already taken.';
                    usernameHint.className = 'field__hint field__hint__error';
                    usernameAvailable = false;
                }
            } catch (err) {
                usernameHint.textContent = 'Could not check username.';
                usernameHint.className = 'field__hint';
                usernameAvailable = false;
            }
        }, 600);
    });
}   
const passwordInput = document.getElementById('signuppassword');
const passwordCounter = document.getElementById('password__counter');
 
    if (passwordInput && passwordCounter) {
        passwordInput.addEventListener('input', () => {
            const len = passwordInput.value.length;
            if (len === 0) {
                passwordCounter.textContent = '';
                passwordCounter.className = 'field__hint';
            } else if (len < 6) {
                passwordCounter.textContent = `${len} / 6 characters minimum`;
                passwordCounter.className = 'field__hint field__hint__error';
            } else {
                passwordCounter.textContent = `${len} characters ✓`;
                passwordCounter.className = 'field__hint field__hint__success';
            }
        });
    }

    //Signup submit
    signupForm.addEventListener('submit', async(e) => {

        e.preventDefault();

        const fullName = document.getElementById('signupfullname').value.trim();
        const username = document.getElementById('signupusername').value.trim();
        const email = document.getElementById('signupemail').value.trim();
        const password = document.getElementById('signuppassword').value.trim();
        const confirmPassword = document.getElementById('cpassword').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName || !username || !email || !password || !confirmPassword) {
            showFormError(signupForm, 'Please fill in all fields.');
            return;
        }else if (username.length < 3) {
            showFormError(signupForm, 'Username must be at least 3 characters long.');
            return;
        } else if (!usernameAvailable) {
            showFormError(signupForm, 'Please choose an available username.');
            return;
        }else if (!emailRegex.test(email)) {
            showFormError(signupForm, 'Please enter a valid email address.');
            return;
        } else if (password !== confirmPassword) {
            showFormError(signupForm, 'Passwords do not match.');
            return;
        }else if (password.length < 6) {
            showFormError(signupForm, 'Password must be at least 6 characters long.');
            return;
        }

        // Step 1 create the account
        try {
			const signupBody = new FormData();
			signupBody.append("fullname", fullName);
			signupBody.append("username", username);
			signupBody.append("email", email);
			signupBody.append("password", password);
			signupBody.append("cpassword", confirmPassword);
            const response = await fetch('/signup', {
                method: 'POST',
                body: signupBody
            });
 
            if (!response.ok) {
                const text = await response.text().catch(() => '');
                showFormError(signupForm, text || 'Signup failed. Please try again.');
                return;
            }
 			/* Currently circumvented with backend code
            // Step 2 generate the magic link for the new account
            const ottBody = new URLSearchParams({ username });
            await fetch('/ott/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: ottBody.toString()
            });
 			*/
            // Step 3  go to success page
            window.location.href = '/success';
 
        } catch (error) {
            console.error('Signup error:', error);
            showFormError(signupForm, 'An error occurred. Please try again.');
        }
    });
}
//Settinfs in account page
if(document.getElementById('emailresetform')){
    //load current email
    fetch('/api/account/me', { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
            const el = document.getElementById('currentemail');
            if(el){
                el.textContent = data.email;
            }
        })
        .catch(() => {});
    //Email change form
    document.getElementById('emailresetform').addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailConfirm = document.getElementById('useremail').value.trim();
        const message = document.getElementById('emailmessage');

		const newEmailForm = new FormData();
		newEmailForm.append("emailcon", emailConfirm);
        try{
            const res = await fetch('/settings/request-email-change', {
                method: 'POST',
                credentials: 'include',
                body: newEmailForm
            });

            if(res.ok){
                window.location.href="/emailreset";
            }else{
                message.textContent = 'Something went wrong.';
                message.className = 'form__feedback form__feedback__error';
            }
        }catch{
            message.textContent = 'Network error. Please try again.';
            message.className = 'form__feedback form__feedback__error';
        }
    });

    //Password reset button linking
    document.getElementById('passwordresetform').addEventListener('submit', async (e) => {
		e.preventDefault();
        const message = document.getElementById('passwordmessage');
		const emailConfirm = document.getElementById('passwordemail').value.trim();
		const usernameToken = document.getElementById('passwordresettoken').value.trim();
		
		
		const passwordEmailForm = new FormData();
		passwordEmailForm.append("emailcon", emailConfirm);
		passwordEmailForm.append("username", usernameToken);
        try {
            const res = await fetch('/settings/request-password-reset', {
                method: 'POST',
                credentials: 'include',
				body: passwordEmailForm
            });
 
            if (res.ok) {
                message.textContent = 'Password reset link sent! Check your email.';
                message.className = 'form__feedback form__feedback__success';
            } else {
                message.textContent = 'Something went wrong. Please try again.';
                message.className = 'form__feedback form__feedback__error';
            }
        } catch {
            message.textContent = 'Network error. Please try again.';
            message.className = 'form__feedback form__feedback__error';
        }
    });
}

//Email reset page
//Notification form validation in settings
const notificationForm = document.querySelector('.notifications__form');

//Profile update form validation and prefill inputs in settings
const profileForm = document.querySelector('.profile__form');
if (profileForm) {
    const maxChars = 20;
    const charCount = document.getElementById('charcount');
    const fulleNameInput = document.getElementById('profilefullname');
    const usernameInput = document.getElementById('profileusername');
    const availableUsername = document.getElementById('available__username');
    //Prefill profile form with current user data
    window.prefillProfile = function(userData) {

        if (fullNameInput){
            fullNameInput.value = userData.fullName || '';
        } 

        if(usernameInput){
            usernameInput.value = userData.username || '';
            updateCharCount(usernameInput.value.length);
        }
    };

    //Charcter counter for username input
    function updateCharCount(count) {
        charCount.textContent = `${count}/${maxChars}`;

        if (count >= maxChars) {
            charCount.classList.add('profile__charcount__limit');
        } else {
            charCount.classList.remove('profile__charcount__limit');
        }
    }

    //Check for username availability on input
    function checkUsernameAvailability(val) {
        availableUsername.textContent = '';
        availableUsername.className = 'available__username';

        if (val.length < 3) {
            return;
        }

        availableUsername.textContent = 'Checking availability...';
        availableUsername.classList.add('available__username__checking');

        const formData = new FormData();
        formData.append('username', val);
        fetch('/settings/check__username?username='+val, {
            method: 'GET'
        })
        
        .then(response =>{
            availableUsername.className = 'available__username';
            if( response.status === 200) {
                availableUsername.textContent = '✓ Username is available';
                availableUsername.classList.add('available__username__available');
            }else if (response.status === 409) {
                availableUsername.textContent = '✗ Username is already taken';
                availableUsername.classList.add('available__username__taken');
            }
        })
        .catch(error => {
            availableUsername.textContent = '';
            console.error('Error checking username availability:', error);
        }); 
    }

    //Updates character cpunt and clears availability message on input
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.length > maxChars) {
            usernameInput.value = usernameInput.value.slice(0, maxChars);
        }

        updateCharCount(usernameInput.value.length);
        availableUsername.textContent = '';
        availableUsername.className = 'available__username';
    });

    //Check username availability when user finishes typing
    usernameInput.addEventListener('blur', () => {
        checkUsernameAvailability(usernameInput.value.trim());
    });
	
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('profilefullname').value.trim();
        const username = usernameInput.value.trim();

        if (username.length < 3 && username.length > 0) {
            e.preventDefault();
            showFormError(profileForm, 'Username must be at least 3 characters long.');
        }else if(availableUsername.classList.contains('available__username__taken')) {
            e.preventDefault();
            showFormError(profileForm, 'Username is already taken.');
        }
		else{
			const nameFormBody = new FormData();
			nameFormBody.append("fullname", fullName);
			nameFormBody.append("username", username);
            fetch('/settings/profile', {
                method: 'POST',
                body: nameFormBody
            })
			.then(response =>{
	            if( response.status === 200) {
					window.location.href = '/logout';
	            }else if (response.status === 201) {
					window.location.href = '/settings';
	            }
				else if (response.status === 409) {
					console.error('Profile update failed:', error);
					showFormError(profileForm, 'Profile update failed. Please try again.');
				}
	        })
			.catch(error=> {
				console.error('Profile update error:', error);
				showFormError(profileForm, 'An error occurred. Please try again.');
				return;
			});
		}
    });
}


//Helper function to show form errors
function showFormError(form, message) {
    const existing = form.querySelector('.form__error');
    if (existing) {
        existing.remove();
    }

    const error = document.createElement('p');
    error.classList.add('form__error');
    error.textContent = message;
    form.appendChild(error);
}

//OTT submit page
const ottMessage = document.getElementById('ott__message');
if (ottMessage) {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const type = params.get('type');

    if (token && type) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/ott/login/submit';

        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'token';
        tokenInput.value = token;
        
        const typeInput = document.createElement('input');
        typeInput.type = 'hidden';
        typeInput.name = 'type';
        typeInput.value = type;

        form.appendChild(tokenInput);
        form.appendChild(typeInput);
        document.body.appendChild(form);
        form.submit();
    } else {
        ottMessage.textContent = 'Invalid or expired link. Redirecting...';
        setTimeout(() => {
            window.location.href = '/login';
        }, 2500);
    }
}

//Password reset form validation
const passwordResetForm = document.querySelector('.password__reset__form');
if (passwordResetForm) {
    const params = new URLSearchParams(window.location.search);

    const newPassword = document.getElementById('newpassword');
    const confirmPassword = document.getElementById('confirmnewpassword');
    const passwordbtn = document.getElementById('passwordresetbtn');

    function checkPasswordMatch(){
        passwordbtn.disabled = !(newPassword.value && newPassword.value === confirmPassword.value);
    }

    newPassword.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);

    passwordResetForm.addEventListener('submit', (e) => {
        const newPw = document.getElementById('newpassword').value.trim();
        const confirmPw = document.getElementById('confirmnewpassword').value.trim();

        if (!newPw || !confirmPw) {
            e.preventDefault();
            showFormError(passwordResetForm, 'Please fill in all fields.');
        } else if (newPw !== confirmPw) {
            e.preventDefault();
            showFormError(passwordResetForm, 'Passwords do not match.');
        } else if (newPw.length < 6) {
            e.preventDefault();
            showFormError(passwordResetForm, 'Password must be at least 6 characters long.');
        }
    });
}

//Email reset form validation
const emailResetForm = document.querySelector('.email__reset__form');
if (emailResetForm) {
    const params = new URLSearchParams(window.location.search);
    const token  = params.get('token');
 
    if (token) {
        document.getElementById('resettoken').value = token;
    } 

    const newEm = document.getElementById('newemail');
    const confirmEm = document.getElementById('confirmnewemail');
    const embtn = document.getElementById('emailresetbtn');

    function checkEmailMatch(){
        embtn.disabled = !(newEm.value && newEm.value === confirmEm.value && newEm.value.includes('@'));
    }

    newEm.addEventListener('input', checkEmailMatch);
    confirmEm.addEventListener('input', checkEmailMatch);
 
    emailResetForm.addEventListener('submit', (e) => {
        const newEmail = document.getElementById('newemail').value.trim();
        const confirmEmail = document.getElementById('confirmnewemail').value.trim();
        const emailRegex   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
        if (!newEmail || !confirmEmail) {
            e.preventDefault();
            showFormError(emailResetForm, 'Please fill in all fields.');
        } else if (!emailRegex.test(newEmail)) {
            e.preventDefault();
            showFormError(emailResetForm, 'Please enter a valid email address.');
        } else if (newEmail !== confirmEmail) {
            e.preventDefault();
            showFormError(emailResetForm, 'Email addresses do not match.');
        }
    });
}

//Form validation
function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setupFormValidation(formSelector, btnId, getIsValid){
    const form = document.querySelector(formSelector);
    if(!form){
        return;
    }

    const btn = form.querySelector('#' + btnId);
    const inputs = form.querySelectorAll('input:not([type="hidden"])');
    const validate = () => { btn.disabled = !getIsValid(form); };
    inputs.forEach(input => input.addEventListener('input', validate));
}

setupFormValidation('.login__form', 'loginbtn', form =>
    form.querySelector('#username').value.trim() &&
    form.querySelector('#password').value.trim()
);

setupFormValidation('.signup__form', 'signupbtn', form => {
    const signuppw = form.querySelector('#signuppassword').value;
    return form.querySelector('#signupfullname').value.trim() &&
        form.querySelector('#signupusername').value.trim().length >= 3 &&
        isValidEmail(form.querySelector('#signupemail').value) &&
        signuppw.length >= 6 &&
        signuppw === form.querySelector('#cpassword').value;
});

setupFormValidation('.password__reset__form', 'passwordresetbtn', form => {
    const pwreset = form.querySelector('#newpassword').value;
    return pwreset.length >= 6 && pwreset === form.querySelector('#confirmnewpassword').value;
});

setupFormValidation('.email__reset__form', 'emailresetbtn', form => {
    const emailreset = form.querySelector('#newemail').value;
    return isValidEmail(emailreset) && emailreset == form.querySelector('#confirmnewemail').value;
});

//Lesson data
const lessonData = {
    //Data Structures course
    //tree questions lesson, there are 3
    trees:{
        topic: 'Trees',
        questions: [
            {
                question: 'What is the root of a tree?',
                options: ['The last node', 'The middle node', 'The top node','The leaf node'],
                answer: 'The top node'
            },

            {
                question: 'A node with no children is called?',
                options: ['Root', 'Leaf', 'Parent','Branch'],
                answer: 'Leaf'
            },

            {
                question: 'What is the height of a tree?',
                options: ['Number of nodes', 'Number of edges on longest path from root to leaf', 'Depth of the tree', 'Number of children'],
                answer: 'Number of edges on longest path from root to leaf'
            },

            {
                question: 'In a binary tree, each node can have at most how many children?',
                options: ['1', '2', '3','unlimited'],
                answer: '2'
            },

            {
                question: 'What is a balanced tree?',
                options: ['A tree where all leaves are at the same level', 'A tree where the difference in height between left and right subtrees is at most 1', 'A tree with equal number of nodes on each side', 'A tree with only one child per node'],
                answer: 'A tree where the difference in height between left and right subtrees is at most 1'
            }
        ]
    },
    binaryTrees:{
        topic: 'Binary Trees',
        questions: [
            {
                question: 'A binary tree node cann have at most how many children?',
                options: ['1', '2', '3','unlimited'],
                answer: '2'
            },

            {
                question: 'In a full binary tree: ',
                options: ['Every node has 1 child', 'Every node has 0 or 2 children', 'Only root has children', 'Nodes have unlimited children'],
                answer: 'Every node has 0 or 2 children'
            },

            {
                question: 'In a complete binary tree: ',
                options: ['All levels are fully filled', 'All levels except possibly the last are fully filled and all nodes are as far left as possible', 'Only root is filled', 'Nodes have unlimited children'],
                answer: 'All levels except possibly the last are fully filled and all nodes are as far left as possible'
            },

            {
                question: 'In a perfect binary tree: ',
                options: ['All levels are fully filled', 'All levels except possibly the last are fully filled and all nodes are as far left as possible', 'Only root is filled', 'Nodes have unlimited children'],
                answer: 'All levels are fully filled'
            },

            {
                question: 'A binary tree is balanced if: ',
                options: ['All leaves are at the same level', 'The difference in height between left and right subtrees is at most 1', 'Equal number of nodes on each side', 'Only one child per node'],
                answer: 'The difference in height between left and right subtrees is at most 1'
            }
        ]
    },
    avlTrees:{
        topic: 'AVL Trees',
        questions: [
            {
                question: 'AVL trees are: ',
                options: ['Unbalanced trees', 'Self-balancing binary search trees', 'Graphs', 'Hash tables'],
                answer: 'Self-balancing binary search trees'
            },

            {
                question: 'What is the balance factor of a node in an AVL tree?',
                options: ['Height difference between left and right subtrees', 'Number of nodes', 'Depth of the tree', 'Number of children'],
                answer: 'Height difference between left and right subtrees'
            },

            {
                question: 'What is the maximum allowed balance factor for any node in an AVL tree?',
                options: ['0', '1', '2', '3'],
                answer: '1'
            },

            {
                question: 'Why are AVL trees used?',
                options: ['To store data in a sorted manner', 'To ensure O(log n) time complexity for search, insert, and delete operations', 'To create a linked list', 'To implement a stack'],
                answer: 'To ensure O(log n) time complexity for search, insert, and delete operations'
            },

            {
                question: 'What happens when a node in an AVL tree becomes unbalanced after an insertion?',
                options: ['The tree is deleted', 'The tree is rebalanced using rotations', 'The node is removed', 'Nothing happens'],
                answer: 'The tree is rebalanced using rotations'
            }
        ]
    },
    //Hash tables question lesson, there are 2
    hashTables:{
        topic: 'Hash Tables',
        questions: [
            {
                question: 'What is the purpose of a hash function?',
                options: ['To sort data', 'To map keys to indices', 'To delete data', 'To traverse data'],
                answer: 'To map keys to indices'
            },

            {
                question: 'A collision in a hash table occurs when:',
                options: ['Two keys map to the same index', 'Table is empty','Keys are sorted', 'Data is deleted'],
                answer: 'Two keys map to the same index'
            },

            {
                question: 'Which of the following is NOT a common type of hash function?',
                options: ['Division method', 'Multiplication method', 'Universal hashing', 'Binary search'],
                answer: 'Binary search'
            },

            {
                question: 'Which of the following is a common method for handling collisions in a hash table?',
                options: ['Chaining', 'Sorting', 'Binary search', 'Graph traversal'],
                answer: 'Chaining'
            },

            {
                question: 'What is a load factor in a hash table?',
                options: ['Number of keys divided by table size', 'Number of collisions', 'Size of the hash table', 'Number of empty slots'],
                answer: 'Number of keys divided by table size'
            }
        ]
    },
    //Stack question lesson (ADTs), there are 2
    abstractDataTypes:{
        topic: 'Abstract Data Types (ADTs)',
        questions: [
            //stack questions fit here
            {
                question: 'What principle does a stack follow?',
                options: ['First In First Out (FIFO)', 'Last In First Out (LIFO)', 'Random Access', 'Priority-based'],
                answer: 'Last In First Out (LIFO)'
            },

            {
                question: 'Which operation removes an elment from a stack?',
                options: ['Push', 'Pop', 'Peek', 'Insert'],
                answer: 'Pop'
            },

             {
                question: 'Which operation inserts an element onto a stack?',
                options: ['Push', 'Pop', 'Peek', 'Delete'],
                answer: 'Push'
            },

            {
                question: 'What is the time complexity of push and pop operations in a stack?',
                options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
                answer: 'O(1)'
            },

            {
                question: 'Whhich of the following is NOT an abstract data type?',
                options: ['Stack', 'Queue', 'Linked List', 'Array'],
                answer: 'Array'
            }

           
        ]
    },
    //Java course
    //variables question lesson, there are 2
    variables:{
        topic: 'Variables',
        questions: [
            {
                question: 'Which keyword is used to declare a constant variable in Java?',
                options: ['var', 'final', 'static', 'const'],
                answer: 'final'
            },

            {
                question: 'What is a valid variable name in Java?',
                options: ['1value', 'value_1', 'value-1', 'value 1'],
                answer: 'value_1'
            },

            {
                question: 'How do you declare an integer variable named "age" in Java?',
                options: ['int age;', 'integer age;', 'var age;', 'age int;'],
                answer: 'int age;'
            },

            {
                question: 'How do you declare a string variable named "name" in Java?',
                options: ['string name;', 'String name;', 'var name;', 'name String;'],
                answer: 'String name;'
            },

            {
                question: 'How do you declare a boolean variable named "isStudent" in Java?',
                options: ['boolean isStudent;', 'bool isStudent;', 'var isStudent;', 'isStudent boolean;'],
                answer: 'boolean isStudent;'
            }
        ]
    },

    operators:{
        topic: 'Operators',
        questions: [
            {
                question: 'What does the "==" operator check in Java?',
                options: ['Assignment', 'Equality', 'Inequality', 'Addition'],
                answer: 'Equality'
            },

            {
                question: 'Which is logical operator in Java?',
                options: ['+', '&&', '=', '%'],
                answer: '&&'
            },

            {
                question: 'What does the "!" operator do in Java?',
                options: ['Logical AND', 'Logical OR', 'Logical NOT', 'Equality'],
                answer: 'Logical NOT'
            },

            {
                question: 'Which operator is used for string concatenation in Java?',
                options: ['+', '&&', '=', '%'],
                answer: '+'
            },

            {
                question: 'What does the "%" operator do in Java?',
                options: ['Addition', 'Subtraction', 'Multiplication', 'Modulus'],
                answer: 'Modulus'
            }
        ]
    },
    //Variables and assignments question lesson, there are 2
    strings:{
        topic: 'Strings',
        questions: [
            {
                question: 'Strings in Java are:',
                options: ['Mutable', 'Immutable', 'Integers', 'Arrays only'],
                answer: 'Immutable'
            },

            {
                question: 'Which method gets string length in Java?',
                options: ['size()', 'length()', 'count()', 'getLength()'],
                answer: 'length()'
            },

            {
                question: 'Which method concatenates two strings in Java?',
                options: ['concat()', 'join()', 'append()', 'combine()'],
                answer: 'concat()'
            },

            {
                question: 'What does the substring method do in Java?',
                options: ['Extracts a portion of a string', 'Concatenates strings', 'Replaces characters in a string', 'Checks if a string contains another string'],
                answer: 'Extracts a portion of a string'
            },

            {
                question: 'Strings in Java are referenced by:',
                options: ['String literals', 'String objects', 'Both', 'None'],
                answer: 'Both'
            }

        ]
    },
    //Variables and assignments question lesson, there are 2
    booleans:{
        topic: 'Booleans',
        questions: [
            {
                question: 'Boolean values are:',
                options: ['0 and 1', 'true and false', 'yes and no', 'on and off'],
                answer: 'true and false'
            },

            {
                question: 'Which operator neagtes a boolean value in Java?',
                options: ['&&', '||', '!', '=='],
                answer: '!'
            },

            {
                question: 'Which operator is used for logical AND in Java?',
                options: ['&&', '||', '!', '=='],
                answer: '&&'
            },

            {
                question: 'Which operator is used for logical OR in Java?',
                options: ['&&', '||', '!', '=='],
                answer: '||'
            },

            {
                question: 'What is the result of true && false in Java?',
                options: ['true', 'false', 'undefined', 'error'],
                answer: 'false'
            }

        ]
    },
    //Loops question lesson, there are 2
    loops:{
        topic: 'Loops',
        questions: [
            {
                question: 'Which loop is guaranteed to execute at least once?',
                options: ['for', 'while', 'do-while', 'foreach'],
                answer: 'do-while'
            },
            
            {  
                question: 'Which loop is best when the number of iterations is known?',
                options: ['while', 'for', 'do-while', 'if'],
                answer: 'for'
            },

            {
                question: 'Which loop is best when the number of iterations is unknown?',
                options: ['while', 'for', 'do-while', 'if'],
                answer: 'while'
            },

            {
                question: 'What are if loops best used for?',
                options: ['Iterating over arrays', 'Executing code based on conditions', 'Repeating code a specific number of times', 'Creating functions'],
                answer: 'Executing code based on conditions'
            },

            {
                question: 'For each loop is used to iterate over:',
                options: ['Arrays and collections', 'Numbers', 'Strings', 'Booleans'],
                answer: 'Arrays and collections'
            }
        ]
    },

    //Sorting Algorithms course
    //Merge sort question lesson, there are 2
    mergeSort:{
        topic: 'Merge Sort',
        questions: [
            {
                question: 'Merge sort uses which strategy?',
                options: ['Greedy', 'Divide and Conquer', 'Dynamic Programming', 'Brute Force'],
                answer: 'Divide and Conquer'    
            },

            {
                question: 'What is the time complexity of merge sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n log n)'
            },

            {
                question: 'Why is merge sort efficient?',
                options: ['It has a simple implementation', 'It has a time complexity of O(n log n)', 'It is a stable sort', 'All of the above'],
                answer: 'It is a stable sort'

            },

            {
                question: 'What is the best use for merge sort?',
                options: ['Sorting small arrays', 'Sorting linked lists', 'Sorting large datasets that do not fit in memory', 'Sorting already sorted arrays'],
                answer: 'Sorting large datasets that do not fit in memory'
            },

            {
                question: 'Using`merge sort, how many comparisons are needed to sort an array of 4 elements?', 
                options: ['4', '5', '6', '7'],
                answer: '5'
            }
        ]
    },
    //radix sort question lesson, there are 2
    radixsort:{
        topic: 'Radix Sort',
        questions: [
            {
                question: 'Radix sort processes numbers by:',
                options: ['Comparing elements', 'Digits', 'Swapping randomly', 'Trees'],
                answer: 'Digits'
            },      

            {
                question :'Radix sort is',
                options: ['Comparison-based', 'Non-comparison-based', 'Recursive only', 'Graph-based'],
                answer: 'Non-comparison-based'
            },

            {
                question: 'What is the time complexity of radix sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(k * n) where k is the number of digits'],
                answer: 'O(k * n) where k is the number of digits'
            },

            {
                question: 'Radix sort is most efficient when:',
                options: ['Sorting small arrays', 'Sorting large datasets with small range of digits', 'Sorting already sorted arrays', 'Sorting linked lists'],
                answer: 'Sorting large datasets with small range of digits'
            },

            {
                question: 'Using radix sort, how many passes are needed to sort an array of 3-digit numbers?',
                options: ['1', '2', '3', '4'],
                answer: '3'
            }
        ]
    },
    //Selection sort question lesson, there are 2
    selectionSort:{
        topic: 'Selection Sort',
        questions: [
            {
                question: 'Selection sort repeatedly selects the:',
                options: ['Largest element', 'Smallest element', 'Middle element', 'Random element'],
                answer: 'Smallest element'
            },

            {
                question: 'What is the time complexity of selection sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n^2)'
            },

            {
                question: 'Selection sort is inefficient for:',
                options: ['Sorting small arrays', 'Sorting large datasets', 'Sorting already sorted arrays', 'Sorting reverse sorted arrays'],
                answer: 'Sorting large datasets'

            },

            {
                question: 'Selection sort is',
                options: ['Stable', 'Unstable', 'Recursive only', 'Graph-based'],
                answer: 'Unstable'
            },

            {
                question: 'Using selection sort, how many comparisons are needed to sort an array of 5 elements?',
                options: ['10', '15', '20', '25'],
                answer: '10'
            }
        ]
    },
    //Bubble sort question lesson, there are 2
    bubbleSort:{
        topic: 'Bubble Sort',
        questions: [
            {
                question: 'Bubble sort distributes elements into:',
                options: ['Arrays', 'Buckets', 'Trees', 'Stacks'],
                answer: 'Arrays'
            },

            {
                question: 'What is the best case complexity of bubble sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n)'
            },

            {
                question: 'Bubble sort is efficient for:',
                options: ['Sorting large datasets', 'Sorting small or nearly sorted arrays', 'Sorting linked lists', 'Sorting trees'],
                answer: 'Sorting small or nearly sorted arrays'
            },

            {
                question: 'What is the worst case complexity of bubble sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n^2)'
            },

            {
                question: 'How many comparisons are needed to sort an array of 5 elements using bubble sort?',
                options: ['10', '15', '20', '25'],  
                answer: '10'
            }
        ]
    },
    //Heap sort question lesson, there are 2
    heapSort:{
        topic: 'Heap Sort',
        questions: [

            {
                question: 'Heap sort uses:',
                options: ['Stack', 'Heap', 'Queue', 'Graph'],
                answer: 'Heap'
            },

            {
                question: 'What is the time complexity of heap sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n log n)'
            },

            {
                question: 'Heap sort is efficient for:',
                options: ['Sorting small arrays', 'Sorting large datasets', 'Sorting already sorted arrays', 'Sorting reverse sorted arrays'],
                answer: 'Sorting large datasets'
            },

            {
                question: 'Heap sort is',
                options: ['Stable', 'Unstable', 'Recursive only', 'Graph-based'],
                answer: 'Unstable'
            },

            {
                question: 'Using heap sort, how many comparisons are needed to sort an array of 5 elements?',
                options: ['10', '15', '20', '25'],
                answer: '10'
            }
        ]
    },
    //Insertion sort question lesson, there are 2
    insertionSort:{
        topic: 'Insertion Sort',
        questions: [
            {
                question: 'Insertion sort builds the sorted array by:',
                options: ['Swapping elements', 'Inserting elements into correct position', 'Dividing the array', 'Using a heap'],
                answer: 'Inserting elements into correct position'
            },

            {
                question: 'What is the worst case time complexity of insertion sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n^2)'
            },

            {
                question: 'Insertion sort is efficient for:',
                options: ['Sorting small arrays', 'Sorting large datasets', 'Sorting already sorted arrays', 'Sorting reverse sorted arrays'],
                answer: 'Sorting small arrays'
            },

            {
                question: 'What is the best case time complexity of insertion sort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
                answer: 'O(n)'
            },

            {
                question: 'Using insertion sort, how many comparisons are needed to sort an array of 5 elements?',
                options: ['10', '15', '20', '25'],
                answer: '10'
            }
        ]
    },

    //Formal Logic course
    //Propositional logic question lesson, there are 2
    propositions:{
        topic: 'Propositions',
        questions: [
            {
                question: 'A proposition is:',
                options: ['A question', 'A statement with  a truth value', 'A varibale', 'A number'],
                answer: 'A statement with  a truth value'       
            },

            {
                question: 'Example of a proposition is:',
                options: ['Close the door', 'Is it raining?', 'It is raining', 'Please sit'],
                answer: 'It is raining'
            },

            {
                question: 'Which of the following is NOT a proposition?',
                options: ['The sky is blue', '2 + 2 = 4', 'What time is it?', 'All dogs are mammals'],
                answer: 'What time is it?'
            },

            {
                question: 'Which of the following is a proposition?',
                options: ['The sky is blue', '2 + 2 = 4', 'What time is it?', 'All dogs are mammals'],
                answer: 'The sky is blue'
            },

            {
                question: 'The truth value of a proposition can be:',
                options: ['True', 'False', 'Both', 'Neither'],
                answer: 'Both'
            }
        ]
    },
    //Negation question lesson, there are 2
    negation:{
        topic: 'Negation',
        questions: [
            {
                question: 'The negation of P is written as:',
                options:['p ∧ q', '¬P', 'P → Q', 'P ∨ Q'],
                answer: '¬P'
            },

            {
                question: 'If p is true, then ¬P is:',
                options: ['True', 'False', 'Undefined', 'Both'],
                answer: 'False'
            },

            {
                question: 'If p is false, then ¬P is:',
                options: ['True', 'False', 'Undefined', 'Both'],
                answer: 'True'
            },

            {
                question: 'The negation of "All dogs are mammals" is:',
                options: ['Some dogs are not mammals', 'All dogs are not mammals', 'Some dogs are mammals', 'No dogs are mammals'],
                answer: 'Some dogs are not mammals'

            },

            {
                question: 'The negation of "It is raining" is:',
                options: ['It is not raining', 'It is sunny', 'It is cloudy', 'It is snowing'],
                answer: 'It is not raining'
            },
        ]
    },
    //Conjunction question lesson, there are 2
    conjunction:{
        topic: 'Conjunction',
        questions: [
            {
                question: 'What is the symbol for conjunction?',
                options: ['∧', '∨', '→', '↔'],
                answer: '∧'
            },

            {
                question: 'The conjunction P ∧ Q is true when:',
                options: ['One is true', 'Both are true', 'Both are false', 'One is false'],
                answer: 'Both are true'
            },

            {
                question: 'The conjunction P ∧ Q is false when:',
                options: ['One is true', 'Both are true', 'Both are false', 'One is false'],
                answer: 'Both are false'
            },

            {
                question: 'The conjunction of "It is raining" and "It is sunny" is:',
                options: ['It is raining and sunny', 'It is raining or sunny', 'It is not raining and not sunny', 'It is either raining or sunny but not both'],
                answer: 'It is raining and sunny'
            },

            {
                question: 'The conjunction of "Its raining" and "It is cloudy" is:',
                options: ['It is raining and cloudy', 'It is raining or cloudy', 'It is not raining and not cloudy', 'It is either raining or cloudy but not both'],
                answer: 'It is raining and cloudy'
            }
        ]
    },
    //Disjunction question lesson, there are 2
    disjunction:{
        topic: 'Disjunction',
        questions: [
            {
                question: 'What is the symbol for disjunction?',
                options: ['∧', '∨', '→', '↔'],
                answer: '∨'
            },

            {
                question: 'The disjunction P ∨ Q is false when:',
                options: ['One is true', 'Both are true', 'Both are false', 'One is false'],
                answer: 'Both are false'
            },

            {
                question: 'The disjunction P ∨ Q is true when:',
                options: ['One is true', 'Both are true', 'Both are false', 'One is false'],
                answer: 'One is true'
            },

            {
                question: 'The disjunction of "It is raining" and "It is sunny" is:',
                options: ['It is raining and sunny', 'It is raining or sunny', 'It is not raining and not sunny', 'It is either raining or sunny but not both'],
                answer: 'It is raining or sunny'
            },

            {
                question: 'The disjunction of "Cats are mammals" and "Dogs are mammals" is:',
                options: ['Cats are mammals and dogs are mammals', 'Cats are mammals or dogs are mammals', 'Cats are not mammals and dogs are not mammals', 'Either cats are mammals or dogs are mammals but not both'],
                answer: 'Cats are mammals or dogs are mammals'
            }
        ]
    },
    //Truth tables question lesson, there are 2
    truthTables:{
        topic: 'Truth Tables',
        questions: [
            {
                question: 'Truth tables show:',
                options: ['Code', 'All possible truth values', 'Numbers', 'Variables'],
                answer: 'All possible truth values'
            },

            {
                question: 'Rows in a truth table depend on:',
                options: ['Operators', 'Variables', 'Constants', 'Functions'],
                answer: 'Variables'
            },

            {
                question: 'Columns in a truth table depend on:',
                options: ['Operators', 'Variables', 'Constants', 'Functions'],
                answer: 'Operators'
            },

            {
                question: 'The truth table for P has how many rows?',
                options: ['1', '2', '3', '4'],
                answer: '2'
            },

            {
                question: 'The truth table for P ∧ Q has how many rows?',
                options: ['2', '4', '8', '16'],
                answer: '4'
            },
        ]
    },
    //XOR question lesson, there are 2
    xor:{
        topic: 'Exclusive Or (XOR)',
        questions: [
            {
                question: 'XOR is true when:',
                options: ['Both are true', 'Both are false', 'Exactly one is true', 'At least one is true'],
                answer: 'Exactly one is true'
            },

            {
                question: 'XOR is represented by which symbol?',
                options: ['∧', '∨', '⊕', '→'],
                answer: '⊕'
            },

            {
                question: 'The XOR of "It is raining" and "It is sunny" is:',
                options: ['It is raining and sunny', 'It is raining or sunny', 'It is not raining and not sunny', 'Either it is raining or it is sunny but not both'],
                answer: 'Either it is raining or it is sunny but not both'
            },

            {
                question: 'The XOR of "Cats are mammals" and "Dogs are mammals" is:',
                options: ['Cats are mammals and dogs are mammals', 'Cats are mammals or dogs are mammals', 'Cats are not mammals and dogs are not mammals', 'Either cats are mammals or dogs are mammals but not both'],
                answer: 'Either cats are mammals or dogs are mammals but not both'
            },

            {
                question: 'XOR is useful in:',
                options: ['Encryption', 'Error detection', 'Both', 'Neither'],
                answer: 'Both'
            }
        ]
    },
    //Biconditional question lesson, there are 2
    biconditional:{
        topic: 'Biconditional',
        questions: [
            {
                question: 'Biconditional P ↔ Q is true when:',
                options: ['Both are true', 'Both are false', 'Both are the same', 'At least one is true'],
                answer: 'Both are the same'
            },

            {
                question: 'Biconditional is represented by which symbol?',
                options: ['∧', '∨', '↔', '→'],
                answer: '↔'
            },

            {
                question: 'The biconditional of "It is raining" and "It is sunny" is:',
                options: ['It is raining and sunny', 'It is raining or sunny', 'It is not raining and not sunny', 'It is raining if and only if it is sunny'],
                answer: 'It is raining if and only if it is sunny',
            },

            {
                question: 'The biconditional of "Cats are mammals" and "Dogs are mammals" is:',
                options: ['Cats are mammals and dogs are mammals', 'Cats are mammals or dogs are mammals', 'Cats are not mammals and dogs are not mammals', 'Cats are mammals if and only if dogs are mammals'],
                answer: 'Cats are mammals if and only if dogs are mammals'
            },

            {
                question: 'Biconditional is useful in:',
                options: ['Mathematical proofs', 'Logical equivalence', 'Both', 'Neither'],
                answer: 'Both'
            }
        ]
    }
};

const courseTopics = {
    datastructures: ['trees', 'binaryTrees', 'avlTrees', 'hashTables', 'abstractDataTypes'],
    java:           ['variables', 'operators', 'strings', 'booleans', 'loops'],
    sorting:        ['mergeSort', 'radixsort', 'selectionSort', 'bubbleSort', 'heapSort', 'insertionSort'],
    formallogic:    ['propositions', 'negation', 'conjunction', 'disjunction', 'truthTables', 'xor', 'biconditional']
};

//Variables to track quiz state
let course = null;
let topic = null;
let storeTopic = null;
let currentQuestionIndex = 0;
let score = 0;
let userAnswered = false;

//Function to intialize quiz based on selected course and lesson
function initCoursePage(courseKey){
    course = courseKey;

    document.getElementById('lesson__cards__grid').addEventListener('click', (e) => {
        const btn = e.target.closest('.quiz__open__btn');
        if (btn) {
			storeTopic=btn.dataset.topic;
            openQuiz(btn.dataset.course, btn.dataset.topic);
        }   
    });

    document.getElementById('quiz__close').addEventListener('click', closeQuiz);
    document.getElementById('question__next').addEventListener('click', nextQuestion);
    document.getElementById('question__retry').addEventListener('click', retryQuiz);
    document.getElementById('quiz__submit').addEventListener('click', closeQuiz);

    renderCard(courseKey);
}

function renderCard(courseKey) {
    const grid     = document.getElementById('lesson__cards__grid');
    const template = document.getElementById('lesson__card__template');
    const keys     = courseTopics[courseKey];

    if (!grid || !template || !keys) return;

    grid.innerHTML = '';

    keys.forEach(key => {
        const topicData = lessonData[key];
        const card = template.content.cloneNode(true);

        card.querySelector('.card__topic').textContent        = topicData.topic;
        card.querySelector('.lesson__course__description').textContent  = getTopicDescription(key);
        card.querySelector('.card__questionCount').textContent = topicData.questions.length + ' questions';

        const btn = card.querySelector('.quiz__open__btn');
        btn.dataset.course = courseKey;
        btn.dataset.topic  = key;

        grid.appendChild(card);
    });
}

function getTopicDescription(topicKey) {
    const descriptions = {
        trees: 'Learn about tree data structures, including binary trees and AVL trees.',
        binaryTrees: 'Explore the properties and types of binary trees.',
        avlTrees: 'Understand self-balancing binary search trees and their operations.',
        hashTables: 'Discover how hash tables work and how to handle collisions.',
        abstractDataTypes: 'Learn about stacks, queues, and other abstract data types.',
        variables: 'Understand variable declaration, types, and scope in Java.',
        operators: 'Learn about different operators and their usage in Java.',
        strings: 'Explore string manipulation and methods in Java.',
        booleans: 'Understand boolean values and logical operators in Java.',
        loops: 'Learn about different types of loops and their use cases in Java.',
        mergeSort: 'Understand the merge sort algorithm and its time complexity.',
        radixsort: 'Learn about radix sort and how it differs from comparison-based sorting.',
        selectionSort: 'Discover how selection sort works and its efficiency.',
        bubbleSort: 'Understand the bubble sort algorithm and its best case scenario.',
        heapSort: 'Learn about heap sort and its time complexity.', 
        insertionSort: 'Discover how insertion sort builds a sorted array and its worst case scenario.',
        propositions: 'Learn about propositions and their truth values in formal logic.',
        negation: 'Understand negation and how it affects truth values.',
        conjunction: 'Learn about conjunction and when it is true.',
        disjunction: 'Understand disjunction and when it is false.',    
        truthTables: 'Learn how to construct and interpret truth tables.',
        xor: 'Understand exclusive or (XOR) and its truth conditions.',
        biconditional: 'Learn about biconditional statements and their truth values.'
    };

    return descriptions[topicKey] || '';
}

//Open lesson quiz
function openQuiz(courseKey, topicKey) {
    course = courseKey;
    topic  = lessonData[topicKey]; 
    currentQuestionIndex = 0;
    score = 0;
    userAnswered = false;

    document.getElementById('quiz__question__screen').style.display = 'block';
    document.getElementById('quiz__result__screen').style.display = 'none';
    document.querySelector('.lesson__courses').style.display = 'none';
    document.querySelector('header.lessons__header').style.display = 'none';
    document.getElementById('quiz__fullpage').classList.add('quiz__overlay__active');

    renderQuestion();
}

//Rendering questions in quiz lesson
function renderQuestion() {
    userAnswered = false;
    const question = topic.questions[currentQuestionIndex];
    const totalQuestions = topic.questions.length;
    const labels = ['A', 'B', 'C', 'D'];

    document.getElementById('question__topic').textContent = topic.topic;
    document.getElementById('question__title').textContent = 'Question ' + (currentQuestionIndex + 1);
    document.getElementById('question__step').textContent = (currentQuestionIndex + 1) + ' / ' + totalQuestions;
    document.getElementById('question__progress').style.width = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100) + '%';
    document.getElementById('question__question').textContent = question.question;
    document.getElementById('question__next').disabled = true;
    document.getElementById('question__feedback').className = 'quiz__feedback';
    document.getElementById('question__feedback').textContent = '';

    const optionsContainer = document.getElementById('question__options');
    const template = document.getElementById('option__template');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, i) => {
        const optionElement = template.content.cloneNode(true);
        optionElement.querySelector('.quiz__option__label').textContent = labels[i];
        optionElement.querySelector('.quiz__option__text').textContent = option;

        const btn = optionElement.querySelector('.quiz__option');
        btn.dataset.index = i;
        btn.addEventListener('click', () => pickAnswer(i, question.answer, btn));
        
        optionsContainer.appendChild(optionElement);
    });
}

//Handling answer selection for lesson quiz
function pickAnswer(selected, correct, element) {
    if (userAnswered) return;
    userAnswered = true;

    const selectedText = topic.questions[currentQuestionIndex].options[selected];
    const correctIndex = topic.questions[currentQuestionIndex].options.indexOf(correct);
    const allOptions   = document.querySelectorAll('.quiz__option');
    const feedback     = document.getElementById('question__feedback');

    if (selectedText === correct) {
        element.classList.add('quiz__option__correct');
        feedback.textContent = 'Correct!';
        feedback.className   = 'quiz__feedback quiz__feedback__correct';
        score++;
    } else {
        element.classList.add('quiz__option__incorrect');
        allOptions[correctIndex].classList.add('quiz__option__correct');
        feedback.textContent = 'Incorrect! The correct answer is: ' + correct;
        feedback.className   = 'quiz__feedback quiz__feedback__incorrect';
    }

    document.getElementById('question__next').disabled = false;
}

//Next question for lesson quiz
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= topic.questions.length) {
        showResult();
    } else {
        renderQuestion();
    }
}

//Show result screen for lesson quiz
function showResult() {
   const totalQuestions = topic.questions.length;
   const percentage = Math.round((score / totalQuestions) * 100);
   
   
   
   document.getElementById('quiz__question__screen').style.display = 'none';
   document.getElementById('quiz__result__screen').style.display = 'block';
   document.getElementById('result__score').textContent = score + ' / ' + totalQuestions;
   document.getElementById('result__percentage').textContent = percentage == 100 ? 'Perfect score!' : percentage >= 50 ? 'Good job!' : 'Keep practicing!';
   const scoreForm = new FormData();
  if (course=="datastructures"){
  		scoreForm.append('course', 0);
  }
  else if (course=="java"){
  		scoreForm.append('course', 1);
  }
  else if (course=="sorting"){
  		scoreForm.append('course', 2);
  }
  else if (course=="formallogic"){
  		scoreForm.append('course', 3);
  }
  console.log(course+" " +storeTopic+" "+score);
  scoreForm.append("topic", courseTopics[course].indexOf(storeTopic));
  scoreForm.append('score', score);
  try {
  	   fetch('/quiz', {
          method: 'POST',
          body: scoreForm
      });

  } catch (error) {
      console.error('Quiz score submission error:', error);
      showFormError(quiz__form, 'An error occurred. Please try again.');
  }
}

//Retry quiz for lesson
function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswered = false;

    document.getElementById('quiz__question__screen').style.display = 'block';
    document.getElementById('quiz__result__screen').style.display = 'none';
    
    renderQuestion();
}

//Close quiz overlay
function closeQuiz() {
    document.getElementById('quiz__fullpage').classList.remove('quiz__overlay__active');
    document.querySelector('.lesson__courses').style.display = 'block';
    document.querySelector('header.lessons__header').style.display = 'flex';
}

//Back button for error page
const backBtn = document.querySelector('.btn__back');
if (backBtn) {
    backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
    });
}

/*About page functionality for full screen*/
const slidesEmbedded = document.getElementById('slidesembed');
const fsOverlay = document.getElementById('fullscreenoverlay');
const fsFrame = document.getElementById('slidesfullscreen');
const expandBtn = document.getElementById('slidesexpandbtn');
const closeBtn = document.getElementById('slidesclosebtn');

if(slidesEmbedded && fsOverlay && fsFrame){
    function openSlidesFullscreen(){
        fsFrame.src = slidesEmbedded.src;
        fsOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSlidesFullscreen(){
        fsOverlay.classList.remove('active');
        fsFrame.src = '';
        document.body.style.overflow = '';
    }

    if(expandBtn){
        expandBtn.addEventListener('click', openSlidesFullscreen);
    }

    if(closeBtn){
        closeBtn.addEventListener('click', closeSlidesFullscreen);
    }

    // Close when clicking the dark backdrop
    fsOverlay.addEventListener('click', (e) => {
        if (e.target === fsOverlay) closeSlidesFullscreen();
    });
 
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fsOverlay.classList.contains('active')) {
            closeSlidesFullscreen();
        }
    });
}

const contrastToggle = document.getElementById('contrastToggle');
const HIGH_CONTRAST_KEY = 'highContrastEnabled';

function applyHighContrast(enabled) {
  document.body.classList.toggle('high-contrast', enabled);

  if (contrastToggle) {
    contrastToggle.checked = enabled;
  }
}

function loadHighContrastSetting() {
  const saved = localStorage.getItem(HIGH_CONTRAST_KEY);
  return saved === 'true';
}

function saveHighContrastSetting(enabled) {
  localStorage.setItem(HIGH_CONTRAST_KEY, String(enabled));
}

const initialContrast = loadHighContrastSetting();
applyHighContrast(initialContrast);

if (contrastToggle) {
  contrastToggle.addEventListener('change', () => {
    const enabled = contrastToggle.checked;
    applyHighContrast(enabled);
    saveHighContrastSetting(enabled);
  });
}

const prefersMoreContrast = window.matchMedia('(prefers-contrast: more)').matches;

function loadHighContrastSetting() {
  const saved = localStorage.getItem(HIGH_CONTRAST_KEY);
  if (saved !== null) return saved === 'true';

  return window.matchMedia('(prefers-contrast: more)').matches;
}
