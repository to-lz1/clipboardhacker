import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log("clipboard-hacker-extension is successfully activated.");

	const cut = vscode.commands.registerCommand('cliphack.cut-with-replace', () => {
		vscode.commands.executeCommand(`editor.action.clipboardCutAction`).then(() => {
			// fixme: executeCommandをawaitするだけではvscode.env.clipboardから読み取れることが保証されないため、あえて待つ
			setTimeout(hackClipboard, 75);
		});
	});
	const copy = vscode.commands.registerCommand('cliphack.copy-with-replace', () => {
		vscode.commands.executeCommand(`editor.action.clipboardCopyAction`).then(() => {
			setTimeout(hackClipboard, 75);
		});
	});

	context.subscriptions.push(cut, copy);
}

function hackClipboard() {
	const config = vscode.workspace.getConfiguration('cliphack');
	const dictionary = config.get<Array<any>>("dictionary") || [];

	vscode.env.clipboard.readText().then( str => {
		let s = str;
		dictionary.forEach(elem => {
			s = s.replace(new RegExp(elem.from, 'g'), elem.to);
		});
		vscode.env.clipboard.writeText(s);
	});
}