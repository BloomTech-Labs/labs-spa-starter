Object.defineProperty(window, 'backingStorePixelRatio', {
  value: () => ({
    getPropertyValue: prop => {
      return '';
    },
  }),
});
