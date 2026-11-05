document.addEventListener('DOMContentLoaded', () => {
  const resetHeight = () => {
    document.body.style.height = `${window.innerHeight}px`;
  };
  window.addEventListener('resize', resetHeight);
  resetHeight();
});
