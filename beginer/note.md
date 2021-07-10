# Life cycle trong React Class

## 1. DOM và Virtual DOM là gì?

---

## 2. JSX trong React

---

## 3. Tìm hiểu ReactDom render

---

## 4. Sự khác nhau giữa Class component và Functional component trong React

---

## 5. Mọi thứ về Life cycle trong React Class

- Mounting: constructor -> render -> React updates DOM and refs -> componentDidMount
- Updating: (New props, setState(), forceUpdate()) -> render -> React updates DOM and refs -> componentDidUpdate
- Unmounting: componentWillUnmount

---

## 6. Tìm hiểu về state và setState trong React

- prevState: trả về một state mới

---

## 7. Tìm hiểu về prop và PropTypes trong React

```javascript
Footer.propTypes = {
  name: PropTypes.object,
  age: PropTypes.number.isRequired
}
```

---

## 7.5. Bonus thêm về những cách sử dụng props phổ biến trong React (\*)

---

## 8. Những cách render element trong React

---

## 9. Tìm hiểu về constructor trong class component React

Nó chỉ chạy một lần khi component của mình tồn tại mà thôi

---

## 10. Tìm hiểu về componentDidMount trong React

- Nó chỉ chạy một lần khi component của mình tồn tại mà thôi
- Tiếp theo render sẽ chạy cập nhập lên trên DOM và chạy componentDidMount sau cùng
- Thường dùng để fetch các API và set lại state

---

## 11. Tìm hiểu về componentWillUnmount trong React

Khi chúng ta hủy component, không cho nó hoạt động nữa

---

## 12. Tìm hiểu về componentDidUpdate trong React

- Khi có thay đổi prop hoặc setState() hoặc forceUpdate() thì render sẽ chạy cập nhập lên trên DOM và chạy componentDidUpdate sau cùng
- Không nên setState trong componentDidUpdate vì nếu setState thì nó sẽ dẫn đến 1 vòng lặp vô hạn -> làm app chậm và đơ

---

## 13. Sơ lược về React Hooks

- Là tính năng mới được thêm vào trong phiên bản 16.8 của React
- Hook chỉ được sử dụng trong Functional component và không sử dụng được trong Class component
- Hook giúp chúng ta sử dụng lại (reuse) code cũ dễ dàng hơn là nhiều
- Xu hướng ngày nay là dùng Hook, nếu bây giờ bạn đang học React thì hãy dùng Hook ngay thay vì Class component
- React không có kế hoạch bỏ đi Class component

---

## 14. Mọi thứ bạn cần biết về useState trong React

- setState trong Hook không thực hiện đồng bộ -> bất đồng bộ
- Sử dụng prev (prevProfile) thì prevProfile luôn luôn trả về một state mới -> fix trường hợp bất đồng bộ

- setState trong React Hook sử dụng replace thay vì merge như bên class
- Hãy setState với một state hoàn toàn mới
- Nếu bạn setState liên tục, hãy truyền callback
- Nếu initial State là function, hãy đưa nó vào callback

---

## 15. Mọi thứ bạn cần biết về useEffect trong React

- useEffect là một hook để thay thế cho các lifecycle bên class component
- useEffect nhận vào 2 tham số: effect function và deps array
- Sẽ có 3 trường hợp: không có deps, deps là [], và deps có item [a, b, ...]
- Effect function sẽ chạy sau khi render xong

---

## 16. Lỗi mutate state, props phổ biến trong React (\*)

---

## 17. Các yếu tố ảnh hưởng đến việc render của component trong React

- Component cha render => component con bị render
- State bị thay đổi
- Props bị thay đổi
- Ép render

---

## 18. Higher Order Component (HOC) trong React

- Higher order component (HOC) là kỹ thuật nâng cao của React nhằm dùng lại logic của component
- HOC là một function nhận vào một component và return một component mới
- Thường được dùng trong các thư viện bên thứ 3 như Redux

---

## 19. Mọi thứ bạn cần biết về React.memo (\*)

- React.memo là một HOC giúp ngăn chặn việc re-render không cần thiết, Ví dụ như conpoment cha render => component con render hay props không thay đổi
- React.memo mặc định sử dụng shallow comparison cho props
- Bạn phải đánh đổi giữa tốn bộ nhớ (Ram) thay cho việc cải thiện hiệu suất

---

## 20. Mọi thứ bạn cần biết về useMemo trong React

- Nhận vào 1 function, return 1 cái biến mà chúng ta muốn gán chúng và tham số cuối cùng là 1 deps

---

## 21. Mọi thứ bạn cần biết về useCallback trong React

- Nhận vào 1 function mà chúng ta muốn gán chúng và tham số cuối cùng là 1 deps

---

## 22. Sự khác nhau giữa ref, createRef, useRef, forwardRef trong React

- ref là một thuộc tính của một element tham chiếu đến element đó
- ref nhận vào 1 biến hoặc 1 function
- ref thường được dùng để truy vấn DOM nodes
- userRef cũng dùng để lưu 1 biến có thể mutate

- Với Functional Component thì sử dụng useRef()
- Với Class Component thì sử dụng createRef()

- Sử dụng useRef để ngăn chặn rerender component
- Muốn dùng ref với một component thì chúng ta sử dụng forwardRef

---

## 23. Custom Hook trong React, thử tạo useInputNumber và usePreviou

- Custom Hook dùng để sử dụng lại logic của một function
- usePreviou
  Lần 1: value = ''
  - return ref.curren (tức là undefined)
  - effect function trong useEffect chạy và update ref.current = ''
    Lần 2: value = 1
  - return current.current (tức là '')
  - effect function trong useEffect chạy và update ref.current = 1
    ... Tương tự với các lần tiếp theo

---

## 24. Mọi thứ bạn cần biết về useContext trong React

---

## 25. Tìm hiểu về useReducer trong React

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return [
        ...state,
        {
          id: new Date().toISOString()
          value: action.payload
        }
      ]
    case 'delete':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

const [state, dispatch] = useReducer(reducer, [])

dispatch({ type: 'submit', payload: value })
```

- Khi nào thì nên dùng. Khi chung ta có một state phức tạp hoặc khi mà cái state tiếp theo phụ thuộc vào state phía trước hoặc logic xử lý state ra khỏi component

---

## 26. Sử dụng React Dev Tool để debug React app

---

## 27. Vấn đề global CSS của các SPA ngày nay

---

## 28. CSS, SCSS trong React

- Install sass: yarn add node-sass or npm install node-sass --save

---

## 29. Atomic CSS trong React

- Sử dụng tailwindcss
- Install tailwindcss: npm install tailwindcss

---

## 30. CSS Module trong React

---

## 31. CSS in JS trong React

- styled components: https://styled-components.com/

```javascript
#with npm
npm install --save styled-components

#with yarn
yarn add styled-components
```

---

## 32. Project Student Management: Tạo nhanh UI bằng bootstrap

---

## 33. Project Student Management: Thêm logic state

---

## 34. Project Student Management: Chia component Input và Student

---

## 35. Project Student Management: Thêm chức năng cập nhật và xóa student

---

## 36. Project Validate Form: Tạo UI trang Register

---

## 37. Project Validate Form: Validate dễ dàng với React Hook Form

---
