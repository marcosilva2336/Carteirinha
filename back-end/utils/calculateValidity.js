module.exports = () => {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 1);
    return now;
  };
  