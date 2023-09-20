var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initialValue = value;
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  // console.log("Đang chạy");
  currentTimeEl.innerText = getTime(audio.currentTime);

  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  handleUpdateValue(value);
});

//Xây dựng tính năng karaoke

var karaoke = document.querySelector(".karaoke");
var karaokeInner = karaoke.querySelector(".karaoke-inner");
var karaokeContent = karaoke.querySelector(".karaoke-content");
var closeBtn = karaoke.querySelector(".close");
var karaokePlay = karaoke.querySelector(".play");
var playerWrap = document.querySelector(".player-wrap");

karaokePlay.addEventListener("click", function () {
  karaoke.classList.add("show");
  playerWrap.classList.add("bottom");
});

closeBtn.addEventListener("click", function () {
  karaoke.classList.remove("show");
  playerWrap.classList.remove("bottom");
});
console.log(lyric);

var currentScreen;

//Lắng nghe sự kiện timeupdate của audio
audio.addEventListener("timeupdate", function () {
  var currentTime = Math.floor(audio.currentTime * 1000);

  var index = lyric.findIndex(function (sentence) {
    sentence = sentence.words;
    return (
      currentTime >= sentence[0].startTime &&
      currentTime <= sentence[sentence.length - 1].endTime
    );
  });

  //Hiển thị 2 câu đầu tiên nếu lời trước 5 giây
  var firstTime = lyric[0].words[0].startTime;
  var firstRange = currentTime - firstTime;
  if (firstRange > -5000 && firstRange < 0) {
    index = 0;
  }

  if (index !== -1) {
    handleColor(currentTime);

    var screen = Math.floor(index / 2 + 1);

    if (screen !== currentScreen) {
      var offset = (screen - 1) * 2;

      if (index >= offset && index < offset + 2) {
        var pTag = "";
        for (var i = offset; i < offset + 2; i++) {
          var sentence = lyric[i].words
            .map(function (item) {
              return item.data;
            })
            .join(" ");
          pTag += `<p 
          data-start-time="${lyric[i].words[0].startTime}"
          data-end-time="${lyric[i].words[lyric[i].words.length - 1].endTime}"
          data-words=${JSON.stringify(lyric[i].words)}
          >${sentence}<span>${sentence}</span>
          </p>`;
        }

        karaokeContent.innerHTML = pTag;
      }

      currentScreen = screen;
    }
  }
});

var handleColor = function (currentTime) {
  var sentencesEl = karaokeContent.children;
  Array.from(sentencesEl).forEach(function (sentence) {
    var startTime = sentence.dataset.startTime;
    var endTime = sentence.dataset.endTime;

    if (startTime && endTime && currentTime >= startTime) {
      //So sánh current với startTime của từng từ -> Biết được đang hát tới từ nào trong 1 câu
      var words = JSON.parse(sentence.dataset.words);

      var result = words[0];

      words.forEach(function (item, index) {
        if (index === 0) {
          result = words[0];
        } else if (currentTime > item.endTime && index > 0) {
          result = words[index];
        }
      });

      var endTimeResult = result.endTime;

      //Tính tổng thời gian của cả câu
      var sentenceTime = endTime - startTime;

      //Tính thời gian của từ với thời gian bắt đầu của câu
      var time = endTimeResult - startTime + 12;
      // console.log(endTimeResult, endTime);

      var rate = (time * 100) / sentenceTime;

      sentence.children[0].style.width = `${rate}%`;
      sentence.children[0].style.transition = `width ${
        result.endTime - result.startTime
      }ms linear`;
    }
  });
};

/*
screen 1: index = 0, index = 1
screen 2: index = 2, index = 3
screen 3: index = 4, index = 5

Công thức: screen = index / 2 + 1

index = 1 -> Hiển thị index = 2 thay thế cho 
index=0

index = 2 -> Hiển thị index = 3 thay thế cho index=1
*/
