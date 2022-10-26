const tg = window.Telegram.WebApp;

export function UseTelegram() {
  const user = tg.initDataUnsafe?.user;

  const onClose = () => {
    tg.close();
  };
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    tg,
    user,
    onClose,
    onToggleButton,
  };
}
//  // TODO