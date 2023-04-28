const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log(result);
    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
});