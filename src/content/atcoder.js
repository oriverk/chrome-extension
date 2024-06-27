// [Rust で競技プログラミング用のテストマクロと AtCoder のテストコード生成ツールを作る｜TechRacho by BPS株式会社](https://techracho.bpsinc.jp/jhonda/2019_08_05/78537)
const main = () => {
  const samplePairs = getSamplePairs();
  if (samplePairs.length < 1) {
    return;
  }
  // 日本語と英語それぞれに同じサンプル要素があるので半分だけ使う
  const halfSamplePairs = samplePairs.slice(0, samplePairs.length / 2);
  const testCodeText = toCodeFromSamplePairs(halfSamplePairs);
  generateElements(testCodeText);
};

// 入出力サンプルペア要素を [[inputElement, outputElement], ...] の形で取得
const getSamplePairs = () => {
  const samplePairs = [];
  const sampleElms = document.querySelectorAll(
    "#task-statement pre[id^='pre-sample']"
  );

  sampleElms.forEach((elm, index) => {
    const text = elm.textContent.trim();
    if (index % 2 === 0) {
      // input
      samplePairs.push([text]);
    } else {
      // output
      samplePairs[Math.floor(index / 2)].push(text);
    }
  });

  return samplePairs;
};

// 入出力サンプルペアをテストコードに変換
const toCodeFromSamplePair = (samplePair) => {
  const [input, output] = samplePair;
  return `r#"${input}"# => "${output}"`;
};

// 入出力サンプルペアのリストからテストコードに変換
const toCodeFromSamplePairs = (samplePairs) => {
  return samplePairs.map(toCodeFromSamplePair).join(",\n");
};

// コピーボタンとコピー内容(テストコード)の要素を生成する
const generateElements = (testCodeText) => {
  const button = document.createElement("button");
  button.innerText = "Copy sample test code";
  button.addEventListener("click", () => {
    document.getSelection().selectAllChildren(testCodeElement);
    document.execCommand("copy");
    const p = document.createElement("p");
    p.innerText = "Copied!!!";
    p.style = "color: blue;";
    wrapper.appendChild(p);
  });

  const testCodeElement = document.createElement("pre");
  testCodeElement.innerText = testCodeText;

  const wrapper = document.createElement("div");
  wrapper.appendChild(button);
  wrapper.appendChild(testCodeElement);

  const root = document.getElementById("task-statement");
  root.appendChild(wrapper);
};

main();
