const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

async function submitLogin() {
  await sleep(1000);
  return { success: true };
}

export { submitLogin };
