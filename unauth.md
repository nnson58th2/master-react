# Xử lý unauthorized

1. Khi token hết hạn hoặc không gửi token => Server trả về status 401
2. Chúng ta sẽ tracking mỗi status server trả về.
   Nếu là 401 thì sẽ dispatch một action unauthorize
3. Chúng ta cần tìm một component để tracking status này, nơi component luôn tồn tại xuyên suốt app của chúng ta => App component
