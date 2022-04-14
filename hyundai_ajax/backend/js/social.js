(async () => {
  let json = null;

  try {
    json = await ajaxPromiseHelper(`backend/social.json`);
  } catch (e) {
    console.error(e);
    return;
  }

  if (json != null) {
    const social = document.querySelector('#main-social');
    const ul = social.querySelector('.sns-area');

    json.social.forEach((v, i) => {
      const li = document.createElement('li');
      li.classList.add('sns-col');
      li.style.backgroundImage = `url(${v.img})`;
      ul.appendChild(li);

      const a = document.createElement('a');
      a.setAttribute('href', `${v.url}`);
      li.appendChild(a);

      const span1 = document.createElement('span');
      span1.classList.add('sns-txt');
      span1.innerHTML = v.text;
      a.appendChild(span1);

      const span2 = document.createElement('span');
      span2.classList.add('icon-instagram');
      span1.appendChild(span2);
    });
  }
})();
