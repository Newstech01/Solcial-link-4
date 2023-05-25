window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: '#vanta',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    wingSpan: 40.0,
    speedLimit: 8.0,
    separation: 100.0,
    alignment: 43.0,
    quantity: 4.0,
    backgroundAlpha: 0.0,
  });
  setTimeout(() => {
    document.querySelector('main').style.opacity = '1';
    document.querySelector('main').style.filter = 'none';
  }, 1000);
});
