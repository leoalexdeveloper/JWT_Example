import express from 'express'
export function config(keyName){
	
	const config = {
		settings: [
			express.urlencoded({extended:true}),
			express.json()
		],
		port: 3000,
		serverMsg: 'Server are running.'
	}
	return config[keyName]
}