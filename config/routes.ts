export default [
  {
    name: '不展示全局布局',
    layout: false,
    routes: [
      { path: '/*', component: '@/pages/StatusPages/404.tsx' },
      { path: '/500', component: '@/pages/StatusPages/500.tsx' },
    ],
  }
];
