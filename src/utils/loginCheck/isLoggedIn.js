const isLoggedOn = () => {
  if (localStorage.getItem('x-access')) {
    return true;
  }
  return false;
};

export default isLoggedOn;
