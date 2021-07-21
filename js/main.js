'use strict';

{
  // 画像を配列で定義
  const images = [
    'img/IMG_6118.JPG',
    'img/IMG_2087.JPG',
    'img/IMG_3387.JPG',
    'img/IMG_3399.JPG',
    'img/IMG_4901.JPG',
    'img/IMG_4904.JPG',
    'img/IMG_4930.JPG',
  ];
  // 何番目の画像を表示しているか変数で保持
  let currentIndex = 0;

  // メイン画像の設定
  const mainImage = document.getElementById('main');
  // imagesのcurrentIndex番目の要素を代入
  mainImage.src = images[currentIndex];

  // サムネイル画像の設定
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    // liの子要素としてimgを追加
    const li = document.createElement('li');
    // 0番目のサムネイル画像にcurrentクラスをつける処理
    if (index === currentIndex) {
      li.classList.add('current');
    }
    // サムネイルをクリックしたらメイン画像に反映される処理
    li.addEventListener('click', () => {
      mainImage.src = image;
      // currentクラスの移動
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    // thumbnailsクラスがついたulの子要素としてliを追加
    document.querySelector('.thumbnails').appendChild(li);
  });

  // nextをクリックしたら次の画像に切り替わる処理
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    // サムネイル画像の要素数を超えたらはじめに戻る処理
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  // prevをクリックしたら前の画像に切り替わる処理
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  // playをクリックした時の処理(関数)
  function playSlideshow() {
    setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1500);
  }

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    playSlideshow();
  });
}