import {Server} from './Server/index.js'

new Server()
	.loadSettings()
	.loadRoutes()
	.startServer()