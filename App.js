import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { useState } from 'react';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  } 

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View>
      <Navbar title='Todo App'/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={ item } onDelete={deleteTodo}/>
          )}
        />

        {/* <View>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id}/>
          })}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
