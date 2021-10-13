export const throttle = (fn, wait = 100) => {
  let timer;
  let time = Date.now();

  return (params) => {
    clearTimeout(timer);

    if (time + wait - Date.now() < 0) {
      fn(params);
      time = Date.now();
    } else {
      timer = setTimeout(fn, wait / 5);
    }
  };
};
