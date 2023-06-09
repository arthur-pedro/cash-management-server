import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}
	findAll() {
		return this.usersRepository.find()
	}

	findOneByEmail(value: string) {
		return this.usersRepository.findOneBy({ email: value })
	}
}
