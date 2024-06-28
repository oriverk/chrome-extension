<!-- markdownlint-disable no-inline-html -->
# chrome-extension

for myself

## Change X to

change X icon to the blue bird

- [oriverk/twitter_icon_x_to_bird | GitHub](https://github.com/oriverk/twitter_icon_x_to_bird)
- [クビになった青い鳥のイラスト | いらすとや](https://www.irasutoya.com/2023/07/blog-post.html)

## Atcoder

generate atcoder test code text

- [AtCoder：競技プログラミングコンテストを開催する国内最大のサイト](https://atcoder.jp/home)
- [Rust で競技プログラミング用のテストマクロと AtCoder のテストコード生成ツールを作る｜TechRacho by BPS株式会社](https://techracho.bpsinc.jp/jhonda/2019_08_05/78537)

<p align="center">
  <img src="/images/atcoder.webp" alt="browser extension for atcoder to create test code text" width="350">
</p>

## From Bookmarklet

- [js ブックマークレットのメモ書き | oriverk.dev](https://oriverk.dev/blog/20221107-bookmarklet/)
- [Bookmarkletを作ろう(準備編） #JavaScript - Qiita](https://qiita.com/kanaxx/items/63debe502aacd73c3cb8)
- [Closure Compiler Service](https://closure-compiler.appspot.com/home)

### Copy site title and url

```js
javascript: 'use strict'; (function(){const a=`[${document.title.trim()}](${location.href})`;navigator.clipboard.writeText(a).then(()=>{alert(`Successfully copied ${a}`)},()=>{alert("Unfortunately failed to copy..")})})();
```

```
[title](https://example.com)
```

### Detect CSS Overflow Elements

- [横スクロールの原因を調べる](https://codepen.io/tak-dcxi/pen/ZEJJWxE)

```js
javascript:(function(){var b=document.documentElement.clientWidth;Array.from(document.getElementsByTagName("*")).forEach(function(a){a.style.outline="1px solid tomato";b<a.clientWidth&&console.log(a)})})();
```

<p align="center">
  <img src="/images/cssOverflowElements.webp" alt="browser extension to detect css overflow elements" width="350">
</p>
