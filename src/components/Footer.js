import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { Loader } from '../assets/styles'

Amplify.configure(awsExports);

export default () => {
    
    async function fetchTodos() {
        try {
          const todoData = await API.graphql(graphqlOperation(listTodos))
          const todos = todoData.data.listTodos.items
          setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    async function addTodo() {
        try {
            if (!formState.name || !formState.description) return
            const todo = { ...formState }
            setTodos([...todos, todo])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createTodo, {input: todo}))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (
        <div className='h-64 bg-blue-900 w-full'>
            {/* <Loader /> */}
        </div>
    )
}