// 移动端导航切换
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // 页脚年份
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // 联系表单（演示：仅本地提示，未接后端）
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("感谢留言！我们会在社团邮箱收到后尽快回复。（演示表单，尚未接入后端）");
      form.reset();
    });
  }
});
