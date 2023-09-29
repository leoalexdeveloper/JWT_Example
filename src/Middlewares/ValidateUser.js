import {DB} from '../Database/MockDB.js'
import {Jwt} from '../Tokens/JWT.js'

export const ValidateUser = (req, res, next) => {
	const reqToken = req.headers.token
	const vaildateToken = reqToken && Jwt.verifyToken(reqToken)
	
	if(!(vaildateToken instanceof Error)){
		const isUser = DB.users[vaildateToken.name.toLowerCase()].id === vaildateToken.id
		if(!isUser){
			return res.send('Invalid Id')
		}
		next()
		return 
	}
	return res.send('Invalid Token')
}