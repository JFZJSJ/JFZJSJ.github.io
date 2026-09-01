/* ============================================================
   鸡分拯救世界 · 小脚本
   ============================================================ */

// 1. 页脚年份自动更新（所有带 data-year 的元素）
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});

// 2. 文章页阅读时长估算（中文约 400 字/分钟）
var reading = document.getElementById('reading-time');
var prose = document.getElementById('prose');
if (reading && prose) {
  var chars = prose.textContent.trim().length;
  var minutes = Math.max(1, Math.round(chars / 400));
  reading.textContent = '约 ' + minutes + ' 分钟';
}
