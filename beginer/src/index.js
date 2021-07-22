import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'

// Phương thức chạy 1 lần duy nhất
// Và thường được implement 1 lần
// Nhiệm vụ là render React Element lên DOM thật

// ReactDOM.render control các container truyền vào
// Nếu có bất kỳ sự thay đổi nào trong container
// nó sẽ dùng thuật toán diffing so sánh
// và cập nhập những element cần thiết vào DOM

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
