import { formatJSONResponse } from '../utils'
import { IResponse, QueryParameters, User } from '../models/model'
import { v4 as uuid, validate as validateUuid } from 'uuid'

let state: User[] = [
    {
        id: '123',
        name: 'Jamie',
        age: 25,
        hobby: ['football'],
    },
    {
        id: '111',
        name: 'Sam',
        age: 30,
        hobby: ['football, basketball'],
    },
]

const findUserById = (id: string) => {
    if (id) {
        return state.find((user) => {
            return user.id === id
        })
    }
}

export const getUsers = async (
    params?: QueryParameters
): Promise<IResponse> => {
    if (params && params.id) {
        const user = findUserById(params.id)
        if (user) {
            return formatJSONResponse({ users: user }, 200)
        } else {
            return formatJSONResponse({ message: 'User not found' }, 400)
        }
    } else {
        return formatJSONResponse({ users: state }, 200)
    }
}

export const createUser = async (
    data: Omit<User, 'id'>
): Promise<IResponse> => {
    if (data) {
        const id = uuid()
        const { name, age, hobby } = data
        const user = new User(name, age, hobby, id)
        for (const key in user) {
            // @ts-ignore
            if (user[key] === undefined && key !== 'id') {
                return formatJSONResponse(
                    {
                        message: `The field ${key} is required`,
                    },
                    400
                )
            }
        }

        user.id = id
        state.push(user)
        return formatJSONResponse(
            { message: 'User created successfully', users: user },
            201
        )
    } else {
        return formatJSONResponse({ message: 'Not contain something' }, 400)
    }
}

export const updateUser = async (
    params: QueryParameters,
    data: Omit<User, 'id'>
) => {
    const { id } = params
    if (!validateUuid(<string>id)) {
        return formatJSONResponse({ message: 'UserId is not valid' }, 400)
    }
    if (id) {
        const currentUser = findUserById(id)
        if (currentUser) {
            const { name, age, hobby } = data
            const user = new User(name, age, hobby, id)
            for (const key in user) {
                // @ts-ignore
                if (user[key] === undefined && key !== 'id') {
                    return formatJSONResponse(
                        {
                            message: `The field ${key} is required`,
                        },
                        400
                    )
                }
            }
            const index = state.findIndex((user) => {
                return user.id === id
            })
            state[index] = user
            return formatJSONResponse(
                { message: 'User successfully updated', users: user },
                200
            )
        } else {
            return formatJSONResponse({ message: 'User not found' }, 404)
        }
    }
}
export const deleteUser = async (params: QueryParameters) => {
    const { id } = params
    if (!validateUuid(<string>id)) {
        return formatJSONResponse({ message: 'UserId is not valid' }, 400)
    }
    if (id) {
        const user = findUserById(id)
        if (user) {
            state = state.filter((user) => {
                return user.id !== id
            })
            return formatJSONResponse(
                { message: 'User successfully deleted' },
                204
            )
        } else {
            return formatJSONResponse({ message: 'User not found' }, 404)
        }
    }
}
