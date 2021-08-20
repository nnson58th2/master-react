### Clone Shopee trang đăng ký, đăng nhập

1. Khởi tạo Project, Setup Prettier, ESLint, jsconfig
2. Cài đặt một số package cần thiết. Setup CSS global và fonts.

- Material để dùng 1 vài component nhỏ: `@material-ui/core, @material-ui/lab`
- Redux để quản lý state: `@reduxjs/toolkit, react-redux`
- Axios để fetch API: `axios`
- classnames hỗ trợ set class cho component: `classnames`
- date-fns để quản lý ngày giờ: `date-fns`
- dompurify để render HTML an toàn, hạn chế tấn công XSS: `dompurify`
- lodash để dùng 1 số function hay: `lodash`
- node-sass để dùng scss cho CRA: `node-sass`
  Lưu ý nếu bị báo lỗi dạng `Node Sass version 6.0.0 is incompatible width ^4.0.0 || ^5.0.0.` nghĩa là do Node Sass bản mới không tương thích, phải hạ bản node sass xuống.

```bash
yarn remove node-sass
yarn add node-sass@5.0.0
```

- normalize.css để phục vụ reset CSS: `normalize.css`
- react-router-dom để xử lý router: `react-router-dom`
- prop-types để check type prop: `prop-types`
- query-string để xử lý query params trên URL: `query-string`
- react-hook-form để xử lý Form: `react-hool-form`
- react-toastify để hiển thị thông báo dạn toast: `react-toastify`
- styled-components để CSS cho react: `styled-components`

```bash
yarn add @material-ui/core @material-ui/lab @reduxjs/toolkit react-router-dom react-redux axios classnames date-fns dompurify lodash node-sass normalize.css prop-types query-string react-hook-form react-toastify styled-components
```

3. Setup Redux và Router
4. Code giao diện RegisterLayout
5. Code giao diện Register Page
6. Uncontrolled Component là gì
7. Code validate Register Page
8. Code Http class
9. Code auth.slice cho register, hoàn thiện apply API vào Register
10. Cấu hình postman để test API
11. Code UI trang Login
12. Apply API cho trang Login

# Lưu ý làm việc với Redux - Redux Toolkit

- Các data dùng chung ở nhiều component khác nhau, nhiều page khác nhau thì nên lưu ở redux
- Các data chỉ dùng ở 1 chổ thì nên lưu ở component

- Khi get api thì nên thông qua `createAsyncThunk` để có được những action như `.../fulfilled` hoặc `.../rejected` để dễ dàng tracking sử dụng sau này cho các tính năng như loading
- Không cần thiết phải xử lý mọi action mà `createAsyncThunk` trả về, chỉ xử lý những cái cần dùng. Cũng như không cần thiết phải lưu hết mọi thứ vào redux

### Clone Shopee trang danh sách sản phẩm

1. Code UI MainLayout
2. Code UI Navbar, cập nhập login handleAuthFulfilled
3. Tách Popver Component
4. Code UI Header
5. UnauthenticatedGuard
6. Logout

### Clone Shopee trang chi tiết sản phẩm

1. Tạo UI trang ProductDetail
2. Tạo UI ProductQuantityController
3. Code chức năng slider
4. Code logic cho ProductQuantityController
5. render HTML (rich text - WYSIWYG) an toàn trong React
6. Thêm sản phẩm vào giỏ hàng
7. Xử lý lỗi khi token hết hạn

### Clone Shopee trang giỏ hàng

1. Get sản phẩm trên popup giỏ hàng
2. Tạo HeaderCart và CartLayout
3. Tạo Checkbox component
4. Tạo trang Cart
5. Code logic

### Clone Shopee trang thông tin user

1. Code UI Sidebar User
2. Nested Route cho User Page, trick hay cho khi báo path
3. Code UI trang Profile
