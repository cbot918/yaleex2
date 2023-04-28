
const vscode = require('vscode');
const axios = require('axios')
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	
	const url = "https://raw.githubusercontent.com/cbot918/cbot918/main/README.md"
	const res = await axios.get(url) 
	console.log(res.data)

	let data = [{"name":"yale", "job":"cook","link":"https://google.com"},{"name":"node", "job":"coder","link":"https://github.com"}]
	console.log(data)

	let users = data.map(	user=>{
		return {
			label: user.name,
			detail: user.job,
			link: user.link
		}
	})

	console.log(users)

	let disposable = vscode.commands.registerCommand('yaleex2.test', async function () {
		
		const user = await vscode.window.showQuickPick(users, {
			matchOnDetail : true
		})
		console.log("hihihihi")
		console.log(user)

		vscode.env.openExternal(user.link)
		vscode.window.showInformationMessage('Search from yaleEx2!');
	});

	context.subscriptions.push(disposable);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
