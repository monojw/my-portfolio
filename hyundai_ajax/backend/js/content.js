(async () => {
  let json = null;

  try {
    json = await ajaxPromiseHelper(`backend/content.json`);
  } catch (e) {
    console.error(e);
    return;
  }

  if (json != null) {
    /* MAINHERO */
    const mainHero = document.querySelector('#main-hero');
    const heroCategory = mainHero.querySelectorAll('#category');
    const heroSubject = mainHero.querySelectorAll('p');
    const heroImg = mainHero.querySelectorAll('.img-area img');

    /* MAIN */
    const main = document.querySelector('#main');

    let colWraps;
    let col;

    json.content.forEach((v, i) => {
      if (i == 0 || i == 1) {
        heroCategory[i].innerHTML = v.category;
        heroSubject[i].innerHTML = v.subject;
        heroImg[i].setAttribute('src', `${v.url}`);
      } else {
        // colWraps안에는 3개의 col이 추가된다.
        if ((i - 2) % 3 == 0) {
          // colWraps를 만든다.
          colWraps = makeColWraps();

          // col을 만든다.
          col = makeCol(v);

          // colWraps 노드에 col을 추가한다.
          colWraps.appendChild(col);
        } else {
          // col을 만든다.
          col = makeCol(v);

          // colWraps 노드에 col을 추가한다.
          colWraps.appendChild(col);
        }

        main.appendChild(colWraps);
      }
    });
  }
})();

/* .col-wraps를 만드는 함수 */
function makeColWraps() {
  colWraps = document.createElement('div');
  colWraps.classList.add('cols-wraps');

  return colWraps;
}

/* .col-N을 만드는 함수 */
function makeCol(v) {
  /* .col */
  col = document.createElement('div');
  col.classList.add('col');

  /* a */
  const a = document.createElement('a');
  a.setAttribute('href', `#`);

  /* .img-area */
  const imgArea = document.createElement('div');
  imgArea.classList.add('img-area');
  const img = document.createElement('img');
  img.setAttribute('src', `${v.url}`);

  /* .col-title */
  const colTitle = document.createElement('div');
  colTitle.classList.add('col-title');

  /* .category */
  const category = document.createElement('span');
  category.classList.add('category');
  category.innerHTML = v.category;

  /* .title */
  const title = document.createElement('span');
  title.classList.add('title');
  title.innerHTML = v.subject;

  /* 노드 추가 */
  imgArea.appendChild(img);
  colTitle.appendChild(category);
  colTitle.appendChild(title);
  a.appendChild(imgArea);
  a.appendChild(colTitle);
  col.appendChild(a);

  return col;
}
