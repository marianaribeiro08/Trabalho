import { AppDataSource } from '../data-source';
import { User } from '../entities/user';
import { IUsersRepository } from './IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository = AppDataSource.getRepository(User);

  async create(user: User): Promise<User> {
    const newUser = this.repository.create(user);
    return await this.repository.save(newUser);
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.repository.findOne({ where: { phone } });
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const user = await this.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
  
    Object.assign(user, data);
    return await this.repository.save(user);
  }
  
  async delete(id: string): Promise<void> {
    const user = await this.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
  
    await this.repository.remove(user);
  }
}





