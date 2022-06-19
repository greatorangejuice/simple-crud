import { User } from './models/model'

export class DB {
    users: User[] = []

    async getAllUsers() {
        return this.users
    }

    async findUserById(id: string) {
        return this.users.find((user) => {
            return user.id === id
        })
    }

    async addUser(user: User) {
        this.users.push(user)
    }

    async updateUser(updatedUser: User) {
        const index = this.users.findIndex((user) => {
            return user.id === updatedUser.id
        })
        this.users[index] = updatedUser
    }

    async deleteUser(deletedUser: User) {
        this.users = this.users.filter((user) => {
            return user.id !== deletedUser.id
        })
    }
}
