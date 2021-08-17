# Phân tích thuật toán

## State của cart

- `purchases = []`
- Mỗi purchase ngoài việc nắm giữ thông tin từ api trả về, chúng ta còn nắm giữ thuộc tính `disabled` và `checked`
- Ví thế mình sẽ tạo một state mới là `localPurchases` với các `purchase` được add thuộc tính `disabled` và `checked` vào. Và mình sẽ dùng `createNextState` (tương tự `produce` của `immer`) để thực hiện để tránh mutate state `purchases`

## BaseInputNumber

- Nhận thấy khi out focus khỏi input thì sẽ gọi 1 sự kiện => thêm prop `onBlur` vào

## ProductQuantityController

- Nhận thấy rằng chỉ gọi api khi out focus khỏi input hoặc nhất button tăng / giảm
- Nếu chỉ dùng `onChange` thì mỗi khi gõ phím sẽ thực hiện gọi api => không nên
  => Không dùng prop `onChange` được trong trường hợp này
  => Đổi thành `onInput, onIncrease, onDecrease, onBlur`
- Khi gõ phím thì sẽ gọi `onInput` và `onInput` của
