(function () {
  function openChat() {
    try {
      if (window.embeddedservice_bootstrap && embeddedservice_bootstrap.utilAPI) {
        embeddedservice_bootstrap.utilAPI.launchChat();
        return;
      }
    } catch (e) {}
    var launcher = document.querySelector('#embeddedMessagingConversationButton');
    if (launcher) launcher.click();
  }
  document.querySelectorAll('[data-open-chat]').forEach(function (el) {
    el.addEventListener('click', openChat);
  });
})();
