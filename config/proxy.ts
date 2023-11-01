export default {
  proxy: {
    '/number-worker-api': {
      target: 'https://llz-test.186dt.com',
      changeOrigin: true,
    },
    '/api': {
      target: 'https://llz-test.186dt.com',
      changeOrigin: true,
    },
  },
};
