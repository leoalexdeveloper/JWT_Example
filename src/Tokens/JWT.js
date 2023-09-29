import jwt from 'jsonwebtoken'

export class Jwt {
	#token = ''
	#webToken = jwt
	#iat = Number(Math.floor(Date.now() / 1000))
	#exp = Math.floor(Date.now() / 1000) + (60 * 60)
	#id = ''
	#name = ''
	#email = ''
	#role = '' 

	constructor(data){
		this.#id = data.id
		this.#name = data.name
		this.#email = data.email
		this.#role = data.role
	}

	createToken(){
		this.#token = this.#webToken.sign({
			iat: this.#iat,
			exp: this.#exp,
			id: this.#id,
			name: this.#name,
			email: this.#email,
			role: this.#role
		},
		process.env.JWT_SECRET)
		return this
	}

	getToken(){
		return this.#token
	}

	static verifyToken(token){
		return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if(!err){
				return decoded
			}
			return new Error('Invalid Token')
		})
	}
}