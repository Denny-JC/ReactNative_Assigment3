import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addTask } from './actions/task';

const TaskForm = ({ navigation }) => {

  const [task, setTask] = useState('')

  const dispatch = useDispatch();

  const submitTask = (task) => dispatch(addTask(task))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>Enter the task</Text>
      <TextInput
        value={task}
        placeholder='Task'
        style={styles.taskInput}
        onChangeText={(task) => setTask(task)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitTask(task)
          setTask('')
        }}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: "bold", borderWidth: 2,
    borderColor: 'black', padding: 5, width: '80%', borderRadius: 10, backgroundColor: 'honeydew'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('TaskList')}>
        <Text style={{ fontSize: 22, color: 'black', fontWeight: "bold", borderWidth: 2,
    borderColor: 'black', padding: 5, width: '80%', borderRadius: 10, backgroundColor: 'honeydew' }}>Task Manager</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `cornsilk`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 16,
    color: 'black'
  },
  taskInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'cornsilk'
  },
  image: {
    width: 100,
    height: 100,
    borderColor: 'gold',
    borderWidth: 5,
    borderRadius: 100,
  }
});

export default TaskForm;