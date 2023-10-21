const now = new Date();
const expire = `${now.getFullYear()}-${
  now.getMonth() + 1
}-${now.getDate()} 23:59:59`;
const countdownItems = document.querySelectorAll(".countdown span");
const countdown = () => {
  const todayDate = new Date();
  const todayTime = todayDate.getTime() / 1000;
  const expireDate = new Date(expire);
  const expireTime = expireDate.getTime() / 1000;

  if (todayTime >= expireTime) {
    return;
  }

  let diff = expireTime - todayTime;
  const days = Math.floor(diff / 86400);
  diff -= days * 86400;

  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;

  const mins = Math.floor(diff / 60);
  diff -= mins * 60;

  const seconds = Math.floor(diff);

  countdownItems[0].innerText = days < 10 ? "0" + days : days;
  countdownItems[1].innerText = hours < 10 ? "0" + hours : hours;
  countdownItems[2].innerText = mins < 10 ? "0" + mins : mins;
  countdownItems[3].innerText = seconds < 10 ? "0" + seconds : seconds;
};

setInterval(countdown, 1000);
