// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("clipboard-hacker-extension is successfully activated.");

	const cut = vscode.commands.registerCommand('cliphack.cut-with-replace', () => {
		vscode.commands.executeCommand(`editor.action.clipboardCutAction`).then(() => {
			hackClipboard();
		});
	});
	const copy = vscode.commands.registerCommand('cliphack.copy-with-replace', () => {
		vscode.commands.executeCommand(`editor.action.clipboardCopyAction`).then(() => {
			hackClipboard();
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