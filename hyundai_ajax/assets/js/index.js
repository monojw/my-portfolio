const header = document.querySelector('.header');
const headerHidden = document.querySelector('.header-hidden');
const searchHidden = document.querySelector('.search-hidden');

// 회사소개 메뉴에 마우스가 올라갔을 때, 이벤트
document.querySelector('#company').addEventListener('mouseover', (e) => {
  header.classList.add('over');
  headerHidden.classList.add('show');
});

// 닫기 버튼을 눌렀을 때, 이벤트
document.querySelector('.close').addEventListener('click', (e) => {
  e.preventDefault();
  header.classList.remove('over');
  headerHidden.classList.remove('show');
});

// 검색 버튼을 눌렀을 때, 이벤트
document.querySelector('.search').addEventListener('click', (e) => {
  e.preventDefault();
  searchHidden.classList.add('show');
});

// search-hidden의 닫기 버튼을 눌렀을 때, 이벤트
document
  .querySelector('.search-hidden .close')
  .addEventListener('click', (e) => {
    e.preventDefault();
    searchHidden.classList.remove('show');
  });
