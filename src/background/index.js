import { copyMdTitleAndUrl, detectOverflowElements } from "./lib.js";

chrome.runtime.onInstalled.addListener((details) => {
	const menuParent = chrome.contextMenus.create({
		id: "chromeTools",
		title: "Chrome Tools",
		contexts: ["all"],
	});

	chrome.contextMenus.create({
		parentId: menuParent,
		id: "copyMdTitle",
		title: "copy [title](url)",
		contexts: ["all"],
	});

	chrome.contextMenus.create({
		parentId: menuParent,
		id: "detectOverflowElements",
		title: "はみ出し確認",
		contexts: ["all"],
	});
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "copyMdTitle") {
		if (tab && tab.id !== undefined) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: copyMdTitleAndUrl,
			});
		}
	} else if (info.menuItemId === "detectOverflowElements") {
		if (tab && tab.id !== undefined) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: detectOverflowElements,
			});
		}
	}
});
