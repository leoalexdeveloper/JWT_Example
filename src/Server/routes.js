import {ValidateUser} from '../Middlewares/ValidateUser.js'
import {Login} from '../Login/index.js'
import {Main} from '../Main/index.js'
export const routes = [
	{
		path: '/login',
		method: 'post',
		middleware: [],
		action: [Login]
	},
	{
		path: '/check',
		method: 'post',
		middleware: [ValidateUser],
		action: [Main]
	}
]