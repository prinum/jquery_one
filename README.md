jquery_one
==========

[.one()](http://api.jquery.com/one/)

jquery.one()の実験です。
jquery.one()はjqueryに選択された、オブジェクトに一度だけイベントハンドラを登録するというメソッド。

jqueryによって選択されたオブジェクトが複数だった時に
oneでバインドしたイベントが発生した場合、すべてのオブジェクトに指定したハンドラが解除されるかの確認です。

```html:index.html

<body>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</body>

```

```javascript:app.js

$(document).ready(function(){
  $('button').one('click',function(){
    alert($(this).html()+'click!');
  });
});

```

結果として、解除されることはなく、それぞれにoneメソッドで指定したイベントハンドラが実行できる。  