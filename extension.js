// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.jaws.has-flows-from', () => {
		const panel = vscode.window.createWebviewPanel(
			"sample",
			"JAWS as flows from sample",
			vscode.ViewColumn.One,
			{
				retainContextWhenHidden: true
			}
		);
		panel.webview.html = `
		<!doctype html>
		<html>
			<head><title>JAWS has flows from sample</title></head>
			<body>
			<h1>Test</h1>
			<button>tabbable</button>
			</body>
		</html>
		`;
		// When navigating the content of this webview, JAWS reads:
		// heading level 1 Test
		// Has Flows From 
		// tabbable
		// Button Has Flows From 

	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
