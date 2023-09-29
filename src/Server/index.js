import express from 'express'
import {config} from './config.js'
import {routes} from './routes.js'

export class Server {
	#app = ''
	constructor(){
		this.app = express()
	}

	loadSettings() {
		config('settings').forEach(set => {
			this.app.use(set)
		})
		return this
	}

	loadRoutes() {
		routes.forEach(route => {
			this.app[route.method](route.path, [...route.middleware], [...route.action])
		})
		return this
	}

	startServer() {
		this.app.listen(config('port'), () => {
			console.log('MSG', config('serverMsg'))
		})
	}
}