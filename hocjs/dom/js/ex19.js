//JSON = JavaScript Object Notation
/*
- Là chuỗi
- Dùng để mô tả dữ liệu 1 cách chính xác nhất
- Tác dụng: Giao tiếp dữ liệu giữa các nền tảng

Ví dụ: 
Web F8  <-> App F8

Tình huống: App F8 đọc được tất cả dữ liệu của web F8

-> Chuyển về 1 kiểu dữ liệu chung mà tất cả các ngôn ngữ đều đọc được (Nhưng phải đảm bảo tính toàn vẹn của dữ liệu)

+ xml
+ json

Học JSON là học gì? 
- Cách chuyển giữa các kiểu dữ liệu của ngôn ngữ lập trình tương ứng -> JSON
- Cách chuyển giữa JSON về kiểu dữ liệu tương ứng theo ngôn ngữ lập trình đang sử dụng

Trong JS có 2 hàm xử lý: 
JSON.stringify() => Chuyển kiểu dữ liệu về JSON
JSON.parse() => Chuyển JSON về kiểu dữ liệu
*/

var users = [
  {
    id: 1,
    name: "Hoàng An",
  },
  {
    id: 2,
    name: "Dương Nguyễn",
  },
];
var json = JSON.stringify(users);
console.log(json);
var users = JSON.parse(json);
console.log(users);

var lyric = `{"err":0,"msg":"Success","data":{"sentences":[{"words":[{"startTime":18009,"endTime":18199,"data":"Giờ"},{"startTime":18249,"endTime":18530,"data":"anh"},{"startTime":18530,"endTime":18859,"data":"sẽ"},{"startTime":18859,"endTime":19109,"data":"không"}]},{"words":[{"startTime":19529,"endTime":20009,"data":"Níu"},{"startTime":20019,"endTime":20329,"data":"tay"},{"startTime":20339,"endTime":20619,"data":"em"},{"startTime":20619,"endTime":21059,"data":"lại"}]},{"words":[{"startTime":21540,"endTime":21730,"data":"Để"},{"startTime":21730,"endTime":22059,"data":"yêu"},{"startTime":22059,"endTime":22239,"data":"thương"},{"startTime":22330,"endTime":22720,"data":"ấy"}]},{"words":[{"startTime":22989,"endTime":23199,"data":"Dần"},{"startTime":23449,"endTime":23859,"data":"dần"},{"startTime":23859,"endTime":24079,"data":"phôi"},{"startTime":24079,"endTime":24109,"data":"phai"}]},{"words":[{"startTime":24959,"endTime":25249,"data":"Chúc"},{"startTime":25279,"endTime":25569,"data":"em"},{"startTime":25569,"endTime":25869,"data":"ngày"},{"startTime":25869,"endTime":26199,"data":"mai"}]},{"words":[{"startTime":26479,"endTime":26929,"data":"Hạnh"},{"startTime":26929,"endTime":27209,"data":"phúc"},{"startTime":27209,"endTime":27679,"data":"bên"},{"startTime":28410,"endTime":29130,"data":"ai"}]},{"words":[{"startTime":29109,"endTime":29279,"data":"Đừng"},{"startTime":29309,"endTime":29529,"data":"giống"},{"startTime":29559,"endTime":29879,"data":"như"},{"startTime":29889,"endTime":30129,"data":"anh"}]},{"words":[{"startTime":30249,"endTime":30840,"data":"Với"},{"startTime":30849,"endTime":31330,"data":"em"},{"startTime":32780,"endTime":32810,"data":"hiện"},{"startTime":32810,"endTime":32859,"data":"tại"}]},{"words":[{"startTime":62069,"endTime":62099,"data":"Một"},{"startTime":62099,"endTime":62119,"data":"nụ"},{"startTime":62119,"endTime":62149,"data":"hôn"},{"startTime":62379,"endTime":62639,"data":"cuối"}]},{"words":[{"startTime":63400,"endTime":65210,"data":"Rồi tạm biệt nhau"}]},{"words":[{"startTime":65210,"endTime":66900,"data":"Ngày mai mình sẽ "}]},{"words":[{"startTime":66900,"endTime":68580,"data":"Mất nhau thật rồi"}]},{"words":[{"startTime":68580,"endTime":70330,"data":"Mỗi người mỗi nơi "}]},{"words":[{"startTime":70159,"endTime":70389,"data":"Tìm"},{"startTime":70389,"endTime":70659,"data":"hạnh"},{"startTime":70659,"endTime":71049,"data":"phúc"},{"startTime":71049,"endTime":71269,"data":"mới"}]},{"words":[{"startTime":71920,"endTime":72080,"data":"Để"},{"startTime":72289,"endTime":72369,"data":"không"},{"startTime":72369,"endTime":72379,"data":"ai"},{"startTime":72379,"endTime":72409,"data":"phải"}]},{"words":[{"startTime":73789,"endTime":73919,"data":"Phiền"},{"startTime":74069,"endTime":74169,"data":"lụy"},{"startTime":74169,"endTime":74199,"data":"đến"},{"startTime":74739,"endTime":75189,"data":"ai"}]},{"words":[{"startTime":75949,"endTime":75969,"data":"Dù"},{"startTime":75969,"endTime":75989,"data":"cho"},{"startTime":75989,"endTime":76039,"data":"ngày"},{"startTime":76319,"endTime":76539,"data":"mai"}]},{"words":[{"startTime":77399,"endTime":77549,"data":"Nỗi"},{"startTime":77549,"endTime":77929,"data":"đau"},{"startTime":77929,"endTime":78209,"data":"còn"},{"startTime":78209,"endTime":78239,"data":"dài"}]},{"words":[{"startTime":79049,"endTime":79069,"data":"Và"},{"startTime":79329,"endTime":79519,"data":"yêu"},{"startTime":79889,"endTime":79919,"data":"thương"},{"startTime":79919,"endTime":79979,"data":"ấy"}]},{"words":[{"startTime":80549,"endTime":80769,"data":"Sẽ"},{"startTime":82489,"endTime":82519,"data":"không"},{"startTime":82519,"endTime":82549,"data":"tồn"},{"startTime":82549,"endTime":82579,"data":"tại"}]},{"words":[{"startTime":82599,"endTime":82790,"data":"Ai"},{"startTime":83620,"endTime":83650,"data":"cũng"},{"startTime":83650,"endTime":83670,"data":"sẽ"},{"startTime":83670,"endTime":83729,"data":"phải"}]},{"words":[{"startTime":84319,"endTime":84610,"data":"Hướng"},{"startTime":84610,"endTime":84860,"data":"đến"},{"startTime":84980,"endTime":85400,"data":"tương"},{"startTime":85430,"endTime":85870,"data":"lai"}]},{"words":[{"startTime":86180,"endTime":87860,"data":"Để kiếm cho mình"}]},{"words":[{"startTime":87769,"endTime":88129,"data":"Một"},{"startTime":88129,"endTime":88339,"data":"người"},{"startTime":88339,"endTime":88369,"data":"thế"},{"startTime":88369,"endTime":88399,"data":"vai"}]},{"words":[{"startTime":90920,"endTime":91499,"data":"Nếu"},{"startTime":91499,"endTime":91699,"data":"như"},{"startTime":91699,"endTime":91879,"data":"ngày"},{"startTime":91879,"endTime":92159,"data":"xưa"}]},{"words":[{"startTime":92519,"endTime":92659,"data":"Chúng"},{"startTime":92779,"endTime":93079,"data":"ta"},{"startTime":93609,"endTime":93639,"data":"không"},{"startTime":93639,"endTime":93669,"data":"vội"},{"startTime":93669,"endTime":93699,"data":"vàng"}]},{"words":[{"startTime":94549,"endTime":94699,"data":"Yêu"},{"startTime":94729,"endTime":95119,"data":"nhau"},{"startTime":95119,"endTime":95139,"data":"để"},{"startTime":95419,"endTime":95629,"data":"rồi"}]},{"words":[{"startTime":96020,"endTime":96380,"data":"Bây"},{"startTime":96689,"endTime":96709,"data":"giờ"},{"startTime":96709,"endTime":96729,"data":"lìa"},{"startTime":97129,"endTime":97309,"data":"tan"}]},{"words":[{"startTime":98570,"endTime":98589,"data":"Thì"},{"startTime":98589,"endTime":98619,"data":"chắc"},{"startTime":98619,"endTime":98749,"data":"có"},{"startTime":98809,"endTime":99129,"data":"lẽ"}]},{"words":[{"startTime":99679,"endTime":99839,"data":"Sẽ"},{"startTime":99959,"endTime":100249,"data":"không"},{"startTime":100249,"endTime":100379,"data":"đau"},{"startTime":100809,"endTime":100879,"data":"khổ"}]},{"words":[{"startTime":101529,"endTime":101679,"data":"Yêu"},{"startTime":101699,"endTime":101999,"data":"thương"},{"startTime":101999,"endTime":102119,"data":"vụn"},{"startTime":102119,"endTime":102139,"data":"vỡ"}]},{"words":[{"startTime":102979,"endTime":103430,"data":"Thêm"},{"startTime":103430,"endTime":103639,"data":"một"},{"startTime":103839,"endTime":104029,"data":"lần"},{"startTime":104029,"endTime":104069,"data":"nữa"}]},{"words":[{"startTime":104640,"endTime":104659,"data":"Giờ"},{"startTime":105179,"endTime":105439,"data":"anh"},{"startTime":105439,"endTime":105599,"data":"sẽ"},{"startTime":105839,"endTime":106099,"data":"không"}]},{"words":[{"startTime":106570,"endTime":108560,"data":"Níu tay em lại "}]},{"words":[{"startTime":108439,"endTime":108569,"data":"Để"},{"startTime":108699,"endTime":108949,"data":"yêu"},{"startTime":109109,"endTime":109169,"data":"thương"},{"startTime":109319,"endTime":109559,"data":"ấy"}]},{"words":[{"startTime":110000,"endTime":112000,"data":"Dần dần phôi phai"}]},{"words":[{"startTime":111870,"endTime":112060,"data":"Chúc"},{"startTime":112110,"endTime":112410,"data":"em"},{"startTime":112410,"endTime":112780,"data":"ngày"},{"startTime":112780,"endTime":113060,"data":"mai"}]},{"words":[{"startTime":113399,"endTime":113489,"data":"Hạnh"},{"startTime":113849,"endTime":113979,"data":"phúc"},{"startTime":114139,"endTime":114529,"data":"bên"},{"startTime":114859,"endTime":115129,"data":"ai"}]},{"words":[{"startTime":116020,"endTime":116200,"data":"đừng"},{"startTime":116209,"endTime":116699,"data":"giống"},{"startTime":116699,"endTime":116719,"data":"như"},{"startTime":116729,"endTime":116979,"data":"anh"}]},{"words":[{"startTime":117139,"endTime":117680,"data":"Với"},{"startTime":118160,"endTime":118180,"data":"em"},{"startTime":118180,"endTime":118229,"data":"hiện"},{"startTime":118229,"endTime":118269,"data":"tại"}]},{"words":[{"startTime":148790,"endTime":150350,"data":"Một nụ hôn cuối "}]},{"words":[{"startTime":150350,"endTime":152100,"data":"Rồi tạm biệt nhau"}]},{"words":[{"startTime":152160,"endTime":152220,"data":"Ngày"},{"startTime":152220,"endTime":152379,"data":"mai"},{"startTime":152379,"endTime":152629,"data":"mình"},{"startTime":152759,"endTime":152889,"data":"sẽ"}]},{"words":[{"startTime":153620,"endTime":153780,"data":"Mất"},{"startTime":153919,"endTime":154129,"data":"nhau"},{"startTime":154129,"endTime":154239,"data":"thật"},{"startTime":154239,"endTime":154269,"data":"rồi"}]},{"words":[{"startTime":155530,"endTime":157340,"data":"Mỗi người mỗi nơi "}]},{"words":[{"startTime":157159,"endTime":157339,"data":"Tìm"},{"startTime":157339,"endTime":157619,"data":"hạnh"},{"startTime":157619,"endTime":157979,"data":"phúc"},{"startTime":157979,"endTime":158229,"data":"mới"}]},{"words":[{"startTime":158849,"endTime":158979,"data":"Để"},{"startTime":159099,"endTime":159399,"data":"không"},{"startTime":159399,"endTime":159409,"data":"ai"},{"startTime":159409,"endTime":159439,"data":"phải"}]},{"words":[{"startTime":160589,"endTime":160870,"data":"Phiền"},{"startTime":161690,"endTime":161720,"data":"lụy"},{"startTime":161720,"endTime":161750,"data":"đến"},{"startTime":161750,"endTime":162240,"data":"ai"}]},{"words":[{"startTime":162190,"endTime":162210,"data":"Dù"},{"startTime":162250,"endTime":162469,"data":"cho"},{"startTime":163009,"endTime":163119,"data":"ngày"},{"startTime":163119,"endTime":163299,"data":"mai"}]},{"words":[{"startTime":164339,"endTime":164519,"data":"Nỗi"},{"startTime":164519,"endTime":164819,"data":"đau"},{"startTime":164819,"endTime":165190,"data":"còn"},{"startTime":165190,"endTime":165220,"data":"dài"}]},{"words":[{"startTime":166140,"endTime":167760,"data":"Và yêu thương ấy "}]},{"words":[{"startTime":167510,"endTime":167790,"data":"Sẽ"},{"startTime":168000,"endTime":168230,"data":"không"},{"startTime":168450,"endTime":168680,"data":"tồn"},{"startTime":168680,"endTime":168710,"data":"tại"}]},{"words":[{"startTime":169589,"endTime":169999,"data":"Ai"},{"startTime":169999,"endTime":170029,"data":"cũng"},{"startTime":170139,"endTime":170439,"data":"sẽ"},{"startTime":170619,"endTime":170649,"data":"phải"}]},{"words":[{"startTime":171239,"endTime":171539,"data":"Hướng"},{"startTime":171539,"endTime":171839,"data":"đến"},{"startTime":171839,"endTime":171869,"data":"tương"},{"startTime":172369,"endTime":172439,"data":"lai"}]},{"words":[{"startTime":173120,"endTime":174870,"data":"Để kiếm cho mình"}]},{"words":[{"startTime":174740,"endTime":174999,"data":"Một"},{"startTime":174999,"endTime":175269,"data":"người"},{"startTime":176819,"endTime":176839,"data":"thế"},{"startTime":176839,"endTime":176869,"data":"vai"}]},{"words":[{"startTime":177850,"endTime":178340,"data":"Nếu"},{"startTime":178350,"endTime":178610,"data":"như"},{"startTime":178610,"endTime":179010,"data":"ngày"},{"startTime":179010,"endTime":179160,"data":"xưa"}]},{"words":[{"startTime":179469,"endTime":179609,"data":"Chúng"},{"startTime":179749,"endTime":180019,"data":"ta"},{"startTime":180019,"endTime":180049,"data":"không"},{"startTime":180049,"endTime":180079,"data":"vội"},{"startTime":180079,"endTime":180149,"data":"vàng"}]},{"words":[{"startTime":181529,"endTime":181609,"data":"Yêu"},{"startTime":181689,"endTime":182109,"data":"nhau"},{"startTime":182109,"endTime":182139,"data":"để"},{"startTime":182139,"endTime":182169,"data":"rồi"}]},{"words":[{"startTime":182980,"endTime":183400,"data":"Bây"},{"startTime":183400,"endTime":183650,"data":"giờ"},{"startTime":183650,"endTime":183670,"data":"lìa"},{"startTime":183670,"endTime":183699,"data":"tan"}]},{"words":[{"startTime":184729,"endTime":184749,"data":"Thì"},{"startTime":185160,"endTime":185279,"data":"chắc"},{"startTime":185499,"endTime":185669,"data":"có"},{"startTime":185779,"endTime":186119,"data":"lẽ"}]},{"words":[{"startTime":186730,"endTime":188540,"data":"Sẽ không đau khổ"}]},{"words":[{"startTime":188479,"endTime":188540,"data":"Yêu"},{"startTime":188619,"endTime":188959,"data":"thương"},{"startTime":189329,"endTime":189439,"data":"vụn"},{"startTime":189439,"endTime":189569,"data":"vỡ"}]},{"words":[{"startTime":189929,"endTime":190289,"data":"Thêm"},{"startTime":190289,"endTime":190609,"data":"một"},{"startTime":190609,"endTime":191010,"data":"lần"},{"startTime":191010,"endTime":191100,"data":"nữa"}]},{"words":[{"startTime":191600,"endTime":191619,"data":"Giờ"},{"startTime":192119,"endTime":192400,"data":"anh"},{"startTime":192400,"endTime":192559,"data":"sẽ"},{"startTime":192679,"endTime":193020,"data":"không"}]},{"words":[{"startTime":193400,"endTime":193529,"data":"Níu"},{"startTime":193849,"endTime":194119,"data":"tay"},{"startTime":194129,"endTime":194499,"data":"em"},{"startTime":194499,"endTime":194579,"data":"lại"}]},{"words":[{"startTime":195619,"endTime":195639,"data":"Để"},{"startTime":195639,"endTime":195869,"data":"yêu"},{"startTime":195869,"endTime":195899,"data":"thương"},{"startTime":196259,"endTime":196519,"data":"ấy"}]},{"words":[{"startTime":196799,"endTime":197309,"data":"Dần"},{"startTime":197309,"endTime":197630,"data":"dần"},{"startTime":198519,"endTime":198549,"data":"phôi"},{"startTime":198549,"endTime":198579,"data":"phai"}]},{"words":[{"startTime":198819,"endTime":198979,"data":"Chúc"},{"startTime":199049,"endTime":199349,"data":"em"},{"startTime":199349,"endTime":199719,"data":"ngày"},{"startTime":199719,"endTime":200000,"data":"mai"}]},{"words":[{"startTime":200460,"endTime":203140,"data":"Hạnh phúc bên ai "}]},{"words":[{"startTime":202980,"endTime":203149,"data":"đừng"},{"startTime":203149,"endTime":203509,"data":"giống"},{"startTime":203509,"endTime":203669,"data":"như"},{"startTime":203669,"endTime":203929,"data":"anh"}]},{"words":[{"startTime":204079,"endTime":204500,"data":"Với"},{"startTime":204799,"endTime":205130,"data":"em"},{"startTime":205130,"endTime":205299,"data":"hiện"},{"startTime":205299,"endTime":205329,"data":"tại"}]},{"words":[{"startTime":207660,"endTime":209160,"data":"Nếu như ngày xưa "}]},{"words":[{"startTime":209160,"endTime":211220,"data":"Chúng ta không vội vàng"}]},{"words":[{"startTime":211220,"endTime":212720,"data":"Yêu nhau để rồi "}]},{"words":[{"startTime":212560,"endTime":212849,"data":"Bây"},{"startTime":213200,"endTime":213259,"data":"giờ"},{"startTime":213470,"endTime":213599,"data":"lìa"},{"startTime":213649,"endTime":213869,"data":"tan"}]},{"words":[{"startTime":214780,"endTime":216340,"data":"Thì chắc có lẽ "}]},{"words":[{"startTime":216340,"endTime":218150,"data":"Sẽ không đau khổ"}]},{"words":[{"startTime":217720,"endTime":217739,"data":"Yêu"},{"startTime":218199,"endTime":218679,"data":"thương"},{"startTime":218679,"endTime":218709,"data":"vụn"},{"startTime":218709,"endTime":218729,"data":"vỡ"}]},{"words":[{"startTime":219430,"endTime":219810,"data":"Thêm"},{"startTime":221390,"endTime":221419,"data":"một"},{"startTime":221419,"endTime":221449,"data":"lần"},{"startTime":221449,"endTime":221469,"data":"nữa"}]},{"words":[{"startTime":221159,"endTime":221179,"data":"Giờ"},{"startTime":221629,"endTime":221939,"data":"anh"},{"startTime":221939,"endTime":222239,"data":"sẽ"},{"startTime":222239,"endTime":222469,"data":"không"}]},{"words":[{"startTime":222949,"endTime":223139,"data":"Níu"},{"startTime":223439,"endTime":223719,"data":"tay"},{"startTime":223729,"endTime":223959,"data":"em"},{"startTime":223959,"endTime":223989,"data":"lại"}]},{"words":[{"startTime":225140,"endTime":226570,"data":"Để yêu thương ấy "}]},{"words":[{"startTime":226570,"endTime":228510,"data":"Dần dần phôi phai"}]},{"words":[{"startTime":228380,"endTime":228549,"data":"Chúc"},{"startTime":228609,"endTime":228919,"data":"em"},{"startTime":228919,"endTime":229289,"data":"ngày"},{"startTime":229289,"endTime":229549,"data":"mai"}]},{"words":[{"startTime":230070,"endTime":232620,"data":"Hạnh phúc bên ai "}]},{"words":[{"startTime":232559,"endTime":232689,"data":"đừng"},{"startTime":232699,"endTime":233019,"data":"giống"},{"startTime":233019,"endTime":233120,"data":"như"},{"startTime":233340,"endTime":233490,"data":"anh"}]},{"words":[{"startTime":233659,"endTime":234050,"data":"Với"},{"startTime":234660,"endTime":234680,"data":"em"},{"startTime":234680,"endTime":234739,"data":"hiện"},{"startTime":234739,"endTime":234769,"data":"tại"}]}],"file":"https://static-zmp3.zmdcdn.me/lyrics/2017/12/23/593086fad8fca55affe3dc3e4aae1a82_1075787607.lrc","beat":"https://mcloud-bf-s9-audio-zmp3.zmdcdn.me/jE33-d8vHUk/6de299a336ecdfb286fd/c6f88a16d950300e6941/96/accompaniment.m4a?authen=exp=1694702481~acl=/jE33-d8vHUk/*~hmac=032999dd905f0e8997c8290e5ec75696","enabledVideoBG":true,"defaultIBGUrls":["https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/b/b/4/fbb427fb8805db0d8496397859093c4b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/7/a/b/37abb280adf7eda5877d761efdada306.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/6/1/3c619552081b33894c0e5f2e9804b87f.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/3/8/7/73877fede889c1126627c8b1631a85f3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/2/1/1/2211e6603b17d661728bf288d43cb0c4.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/8/a/0/68a0b6eb520b7b8290cdd3d78475d2ce.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/a/6/7/da67a7c58dc222eacbae1c3de59cb4f5.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/d/a/f/8daf5f9f00e3a904adc9e1f4beb5c5ee.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/e/b/12ebdadf05ce58d674132cb4cea80c4b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/9/7/7/39777aabef1ba43386517d313fdbead3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/1/3/c51391ad109193902e2aedfa12328104.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/2/c/1/c2c13e16cf824e9c6b75faf1e231ab0d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/f/9/5/af95abad5940762f2bec6b50a5f5650e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/2/f/6/c2f62be5c05d7920c3c82e362385756f.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/f/f/d/0ffdc6042d1472fb17c054396eab4f97.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/8/b/b/38bb6b533593c5d9caee374f7f578890.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/8/1/518129e075badb819febd93d12c7f10c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/1/6/f/c16f6186cf06c2ad94e94db9327f735f.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/f/1/7/5f17b2dff74f36e245040ae4b4b1682b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/3/c/1/a3c123e67c3f3b64b6d554a8c94d8f35.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/f/8/7/0f87b68894d95091d89d4d6b32b3bd5c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/0/a/1/30a14f0d4b6b7fe11a7bb896b87d32a8.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/8/f/1/68f1761450d12f7031d3bd463ad075e8.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/0/7/c/b07c6b26f3e8b3ed7dad4af4b98053ed.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/5/f/c55fd99d4d93021e06dcb3d554118a48.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/a/7/5/fa755ec265775e415321af432be64401.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/7/5/2/27523204ab97a463470aa381f9e52f25.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/6/7/4/c67451b2ce9270d135d6e365bef519ad.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/1/5/d/215dc084e216abf99ea4bb395276d483.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/2/0/b/520b0e12b1a40a099e98c76a79286a64.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/a/1/b/5a1b41185b496be76e8a5cff11f7bbad.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/5/c/b/a5cb1a7fd522f44a3d311a0e75fa6f1f.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/c/8/d/ac8db188a0f3255559bec9357be6d5e3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/2/6/9/c26968b7b312146aa117d0351a61770d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/f/7/5/9f75b6e7a67b449e5f892cb8b8a3c36b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/0/4/1c04d52ec14a2d2070b4518d7101c122.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/6/4/0/36407ce0a143cb7cf077f9bd91aa88a3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/6/6/1/9661baa08775c1b1034dc4546b6067b4.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/b/9/14b99e65838424fb6acfc0cdee2fb9d3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/b/a/e/abae897a1cfb5229d01296adb0d853cf.jpg"],"BGMode":0},"timestamp":1694531584596}`;

lyric = JSON.parse(lyric);

console.log(lyric);
