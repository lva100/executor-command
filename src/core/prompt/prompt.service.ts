import { input, number, password } from '@inquirer/prompts'
import { DataType, PromptType } from './prompt.types'

export class PromptService {
	public async input(message: string, type: PromptType) {
		let data: DataType
		switch (type) {
			case 'input':
				data = await input({ message: message })
				break
			case 'number':
				data = await number({ message: message })
				break
			case 'password':
				data = await password({ message: message, mask: true })
				break
			default:
				console.log('Введите корректный тип input')
		}
		return data
	}
}
