import {DB} from '../Database/MockDB.js'
import {Jwt} from '../Tokens/JWT.js'

export const Login = (req, res) => {
	const name = req.body.name
	const password = req.body.password

	if((name.length > 0 && password.length > 0)
	&&
	Object.keys(DB.users).includes(name.toLowerCase())
	&&
	Object.keys(DB.users).find(user => DB.users[user].password === password)
	){
		console.log(DB.users[name])
		res.status(200).send('Token: ' + (new Jwt(
			{
				id: DB.users[name].id,
				name: DB.users[name].name, 
				email: DB.users[name].email, 
				role: DB.users[name].role
			}
		)).createToken().getToken())
	}else{
		res.status(401).send('Invalid Name or Password')
	}
}