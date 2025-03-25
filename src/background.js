
chrome.commands.onCommand.addListener(async (command) => {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    let targetIndex = 0;

    switch (command) {
      case 'jump-first':
        targetIndex = 0;
        break;
      case 'jump-third':
        targetIndex = Math.round((tabs.length - 1) * 0.33);
        break;
      case 'jump-two-thirds':
        targetIndex = Math.round((tabs.length - 1) * 0.66);
        break;
      case 'jump-last':
        targetIndex = tabs.length - 1;
        break;
    }

    await chrome.tabs.update(tabs[targetIndex].id, { active: true });
  } catch (error) {
    console.error('Error handling tab jump:', error);
  }
});
