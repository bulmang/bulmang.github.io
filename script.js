// script.js 파일

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("testButton");

  button.addEventListener("click", function() {
    alert("Button clicked!");
    console.log('버튼이 눌렸습니다.');
  });
});
