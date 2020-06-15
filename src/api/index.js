const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

async function submitLogin(user) {
  // this is a fake API call. Needs to be replaced with a real Authentication flow
  await sleep(1000);
  return { success: true, username: user.username };
}

export { submitLogin, sleep };
