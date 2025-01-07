
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');
    let loadProgress = 0;
 
    menuBtn.addEventListener('click', () => {
       mobileNav.classList.toggle('open');
    });
 
    function updateLoader() {
       loadProgress += 1;
       progressBar.style.width = `${loadProgress}%`;
       loadingText.textContent = `${loadProgress}%`;
       if (loadProgress < 100) {
          setTimeout(updateLoader, 15); 
       } else {
          document.body.classList.add('loaded');
       }
    }
 
    setTimeout(updateLoader, 20);
 });
 
//  fetching profile photo from github
 
  async function fetchGitHubProfilePicture(username) {
   try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
         throw new Error('Failed to fetch GitHub profile data');
      }
      const data = await response.json();
      const profilePicUrl = data.avatar_url;
      document.getElementById('github-profile-pic').src = profilePicUrl;
   } catch (error) {
      console.error('Error fetching GitHub profile picture:', error);

      document.getElementById('github-profile-pic').src = 'fallback-image.jpg';
   }
}

fetchGitHubProfilePicture('anandpandey2005');