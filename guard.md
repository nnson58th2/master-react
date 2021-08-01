# Guard

- Nhiệm vuh giúp ngăn chặn người dùng truy cập vào route (page) nếu không được phép. Ví dụ: admin, user hoặc đơn giản hơn là login và chưa login

Ví dụ:

- Chưa đăng nhập: Có thể truy cập trang login, register, home nhưng không thể truy cập vào user => tạo AuthenticatedGuard để bảo vệ cho user
- Đã đăng nhập: Có thể truy cập vào user vào user nhưng không thể truy cập vào login, register trừ khi họ logout => tạo UnauthenticatedGuard để bảo vệ cho login và register
