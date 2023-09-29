import {Jwt} from '../Tokens/JWT.js'

export const Main = (req, res) => {
	const payload = Jwt.verifyToken(req.headers.token)
	return res.send(`Welcome ${payload.name.toUpperCase()}. Private area accessed as ${payload.role.toUpperCase()}, with a valid token: ${req.headers.token}`)
}