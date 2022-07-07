import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CounterState from './CounterState'
import CounterReduce from './CounterReduce'
import TodoList from './TodoList'

export default function Home() {
  return (
    <div className={styles.container}>
      <CounterState/>
      <CounterReduce/>
      <TodoList/>
    </div>
  )
}
