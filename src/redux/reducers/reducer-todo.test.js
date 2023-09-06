import {toDoReducer,initialState} from './reducer-todo'
import * as types from '../actions/action-todo'

describe('todos reducer', () => {

    it('should handle ADD_TO_DO', () => {
        
        expect(
            toDoReducer({
                todos: [],
            }, {
                type: types.ADD_TO_DO,
                payload: {
                    id: 123,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app',
                }
            })
        ).toEqual({
            todos: [{
                id: 123,
                data: '06.09.2023',
                isCompleted: false,
                text: 'to test the app',
            }],
        })

        expect(
            toDoReducer({
                todos: [{
                    id: 123,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app',
                }],
            }, {
                type: types.ADD_TO_DO,
                payload: {
                    id: 1234,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app-2',
                }
            })
        ).toEqual({
            todos: [{
                    id: 123,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app',
                },
                {
                    id: 1234,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app-2',
                },
            ],
        })
    })

    it('should handle COMPLETE_TO_DO', () => {
        expect(
            toDoReducer({
                todos: [{
                    id: 123,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app',
                }],
            }, {
                type: types.COMPLETE_TO_DO,
                payload: '123'
            })
        ).toEqual({
            todos: [{
                id: 123,
                data: '06.09.2023',
                isCompleted: true,
                text: 'to test the app',
            }, ],
        })
        expect(
            toDoReducer({
                todos: [{
                    id: 123,
                    data: '06.09.2023',
                    isCompleted: true,
                    text: 'to test the app',
                }],
            }, {
                type: types.COMPLETE_TO_DO,
                payload: '123'
            })
        ).toEqual({
            todos: [{
                id: 123,
                data: '06.09.2023',
                isCompleted: false,
                text: 'to test the app',
            }, ],
        })
    })

    it('should handle DELETE_COMPLETED', () => {
        expect(
            toDoReducer({
                todos: [{
                        id: 123,
                        data: '06.09.2023',
                        isCompleted: false,
                        text: 'to test the app',
                    },
                    {
                        id: 1234,
                        data: '06.09.2023',
                        isCompleted: true,
                        text: 'to test the app-2',
                    }
                ],
            }, {
                type: types.DELETE_COMPLETED,
            })
        ).toEqual({
            todos: [{
                id: 123,
                data: '06.09.2023',
                isCompleted: false,
                text: 'to test the app',
            }, ],
        })
        expect(
            toDoReducer({
                todos: [{
                        id: 123,
                        data: '06.09.2023',
                        isCompleted: false,
                        text: 'to test the app',
                    },
                    {
                        id: 1234,
                        data: '06.09.2023',
                        isCompleted: false,
                        text: 'to test the app-2',
                    }
                ],
            }, {
                type: types.DELETE_COMPLETED,
            })
        ).toEqual({
            todos: [{
                    id: 123,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app',
                },
                {
                    id: 1234,
                    data: '06.09.2023',
                    isCompleted: false,
                    text: 'to test the app-2',
                }
            ],
        })
    })


})