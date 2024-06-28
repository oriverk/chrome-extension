export function copyMdTitleAndUrl() {
	const title = document.title;
	const url = window.location.href;
	const text = `[${title}](${url})`;
	const listener = (e) => {
		e.clipboardData.setData("text/plain", text);
		e.preventDefault();
	};
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
	if (text) {
		console.log("text", text);
		alert(`Successfully copied: ${text}`);
	}
}

export function detectOverflowElements() {
	const windowWidth = document.documentElement.clientWidth;
	for (const elm of Array.from(document.getElementsByTagName("*"))) {
		elm.style.outline = "1px solid tomato";
		if (windowWidth < elm.clientWidth) {
			console.log(elm);
		}
	}
}
