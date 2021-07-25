### Clone Shopee trang đăng ký

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
9. auth.slice

### Clone shopee trang đăng nhập

### Clone Shopee trang danh sách sản phẩm
