Trang web theo dõi Thời tiết (Weather web)
Một trang web đơn giản và thanh lịch để kiểm tra thông tin thời tiết hiện tại của bất kỳ thành phố nào trên thế giới. Project này được xây dựng nhằm thực hành kỹ năng gọi và xử lý dữ liệu từ API bên ngoài.


✨ Các tính năng
Tìm kiếm theo thành phố: Nhận dữ liệu thời tiết chi tiết chỉ bằng cách nhập tên thành phố.

Thông tin toàn diện: Hiển thị các thông số quan trọng:

Nhiệt độ hiện tại, nhiệt độ cảm nhận thực tế.

Nhiệt độ cao nhất và thấp nhất trong ngày.

Mô tả tình trạng thời tiết (mây, mưa, nắng,...).

Độ ẩm, tốc độ gió, áp suất khí quyển, và độ che phủ mây.

Thời gian mặt trời mọc và lặn.

Giao diện Dark Mode: Thiết kế hiện đại, dễ nhìn, tập trung vào thông tin.

Xử lý lỗi thông minh: Hiển thị thông báo thân thiện khi không tìm thấy thành phố hoặc có lỗi xảy ra.

🛠️ Công nghệ sử dụng
HTML5: Cung cấp cấu trúc cơ bản cho trang web.

Tailwind CSS: Một framework CSS hiện đại được sử dụng để nhanh chóng xây dựng giao diện người dùng.

JavaScript (ES6+): Xử lý toàn bộ logic, bao gồm:

Gọi API bằng fetch và async/await.

Thao tác với DOM để hiển thị dữ liệu.

Xử lý sự kiện người dùng.

OpenWeatherMap API: Nguồn cung cấp dữ liệu thời tiết.

🚀 Hướng dẫn cài đặt và chạy project
Để chạy ứng dụng này trên máy của bạn, hãy làm theo các bước sau:

1. Clone Repository
Sao chép repository này về máy tính của bạn:

git clone [https://github.com/ten-cua-ban/ten-repository.git](https://github.com/ten-cua-ban/ten-repository.git)
cd ten-repository

(Hãy thay thế URL trên bằng URL repository của chính bạn)

2. Lấy API Key
Ứng dụng này cần một API key từ OpenWeatherMap để hoạt động.

Truy cập OpenWeatherMap và đăng ký một tài khoản miễn phí.

Sau khi đăng nhập, vào mục "API keys" và sao chép key của bạn.

3. Tạo file cấu hình
Trong thư mục gốc của project, tạo một file mới tên là config.js.

Thêm dòng sau vào file config.js, thay thế YOUR_API_KEY bằng key bạn vừa lấy:

const API_KEY = 'YOUR_API_KEY';

Quan trọng: File config.js đã được thêm vào .gitignore, vì vậy API key của bạn sẽ luôn được bảo mật và không bị đẩy lên GitHub.

4. Chạy ứng dụng
Mở file index.html bằng trình duyệt web của bạn. Mọi thứ đã sẵn sàng để sử dụng!

