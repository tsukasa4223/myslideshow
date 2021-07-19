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
}