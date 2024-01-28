// Saves options to chrome.storage
const saveOptions = () => {
  const autoSkipIntro = document.getElementById("autoSkipIntro").checked;

  chrome.storage.sync.set({ autoSkipIntro }, () => {
    // Update status to let user know options were saved.
    const status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(() => {
      status.textContent = "";
    }, 750);
  });
};

const restoreOptions = () => {
  chrome.storage.sync.get({ autoSkipIntro: false }, (items) => {
    document.getElementById("autoSkipIntro").checked = items.autoSkipIntro;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
