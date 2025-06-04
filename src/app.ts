import { PromptService } from './core/prompt/prompt.service'

export class App {
	async run() {
		const res1 = await new PromptService().input('Число:', 'number')
		console.log(res1)
		const res2 = await new PromptService().input('Слово:', 'input')
		console.log(res2)
		const res3 = await new PromptService().input('Пароль:', 'password')
		console.log(res3)
	}
}

const app = new App()
app.run()
