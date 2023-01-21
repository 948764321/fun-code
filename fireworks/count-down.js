
const node = document.querySelector('.count-down-time');

const freshTime = () => {
  const endTime = new Date("2023/1/22,00:00:00");//结束时间
  const nowTime = new Date();//当前时间
  const leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

  d = parseInt(leftTime / (24 * 60 * 60));
  h = parseInt(leftTime / (60 * 60) % 24);
  m = parseInt(leftTime / 60 % 60);
  s = parseInt(leftTime % 60);

  if(d + h + m + s <= 0) {
    return node.innerHTML = ''`${0} 天 ${0} 时 ${0} 分 ${0} 秒`
  }
  node.innerHTML = `${d} 天 ${h} 时 ${m} 分 ${s} 秒`
}

freshTime();
const timer = setInterval(freshTime, 1000)

window.onunload = () => clearInterval(timer);