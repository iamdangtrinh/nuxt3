
### Nếu API trả về chậm, bạn sẽ debug và tối ưu cách nào để cải thiện tốc độ load?
 
 - API trả về chậm thì xử lý backend thêm cache data thay vì từ backend kiểm tra cache có chưa nếu chưa thì sẽ gọi đến API và lưu lại cache.
 - Phân trang API để giới hạn dữ liệu và thời gian response về (Ví dụ: API response trả về 10.000 row thì phân trang).