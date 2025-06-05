import { input, number, password } from '@inquirer/prompts'

export class PromptService {
	public async input(message: string) {
		return await input({ message: message })
	}
	public async number(message: string) {
		const res = await number({ message: message })
		if (typeof res == 'number') {
			return res
		}
		return 0
	}
	public async password(message: string) {
		return await password({ message: message, mask: true })
	}
}
