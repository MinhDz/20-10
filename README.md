# 🌸 Trang Web Chúc Mừng 20/10 - Ngày Phụ Nữ Việt Nam

Một trang web tĩnh nhẹ nhàng, thanh lịch và ấm áp dành tặng những người phụ nữ Việt Nam nhân ngày **20/10**, sẵn sàng để triển khai (deploy) miễn phí lên **GitHub Pages**.

---

## ✨ Điểm nổi bật & Phong cách thiết kế

- **Tông màu mộc mạc, dịu dàng (Warm Minimalist & Vintage Paper):**
  - Sử dụng sắc kem giấy ấm, hồng phấn phớt nhẹ, xanh lá xô thơm (sage green) và nâu cà phê ấm cúng.
  - **Không** sử dụng các dải màu gradient tím/hồng neon sặc sỡ hay hiệu ứng kính mờ (glassmorphism) rập khuôn thường thấy ở các giao diện AI tự động.
- **Lời chúc tự nhiên, dung dị và giàu cảm xúc:**
  - Tuyển chọn các câu chúc gần gũi, đời thường, không sáo rỗng hay gượng gạo.
  - Phân nhóm rõ ràng: *Cho Mẹ*, *Cho Người thương*, *Cho Chị em & Bạn bè*, *Đồng nghiệp*, và *Lời nhắn gửi chính mình*.
- **Trải nghiệm tương tác tinh tế:**
  - **Phong thư mở đầu:** Chạm nhẹ để bóc tem sáp và mở thiệp chúc.
  - **Cánh hoa rơi bồng bềnh:** Canvas 2D mô phỏng cánh hoa bay lãng đãng theo làn gió, tương tác khi di chuột hoặc lướt ngón tay.
  - **Hộp nhạc Web Audio API:** Giai điệu chuông ru êm trong trẻo (không phụ thuộc vào file nhạc ngoài, 100% không lo lỗi 404 hay bản quyền).
  - **Tự tạo bưu thiếp & Tải ảnh PNG:** Người dùng có thể điền tên người nhận, người gửi, chọn nhành hoa yêu thích và bấm **Tải ảnh thiệp PNG** để gửi qua Zalo, Messenger hoặc đăng Story.
  - **Cá nhân hóa liên kết (URL params):** Gửi link kèm tên người nhận, ví dụ:  
    `https://<username>.github.io/<tên-repo>/?to=Mẹ+Yêu&from=Con+Gái`  
    Trang web sẽ tự động hiển thị lời chào trân trọng dành riêng cho người đó!

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (3 Bước)

Trang web được viết hoàn toàn bằng **HTML, CSS, JavaScript thuần**, không cần cài đặt Node.js hay build công cụ phức tạp.

### Bước 1: Khởi tạo Git và đẩy mã nguồn lên GitHub

Mở Terminal hoặc PowerShell tại thư mục này và chạy các lệnh:

```bash
git init
git add .
git commit -m "Khoi tao trang web 20/10 diu dang"
git branch -M main
```

Tạo một Repository mới trên tài khoản GitHub của bạn (ví dụ đặt tên là `20-10` hoặc `chuc-mung-20-10`), sau đó liên kết và đẩy code lên:

```bash
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
git push -u origin main
```

*(Thay `<tai-khoan-cua-ban>` và `<ten-repo>` bằng thông tin GitHub của bạn).*

---

### Bước 2: Bật tính năng GitHub Pages

1. Truy cập vào Repository của bạn trên GitHub.
2. Vào tab **Settings** (Cài đặt) > Mục **Pages** ở danh mục bên trái.
3. Ở phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`
   - **Branch:** Chọn `main`, thư mục để mặc định là `/(root)`
4. Nhấn **Save**.

---

### Bước 3: Nhận đường dẫn trang web

Sau khoảng 1 - 2 phút, GitHub sẽ hoàn tất triển khai. Bạn sẽ nhận được đường dẫn trang web có dạng:

```
https://<tai-khoan-cua-ban>.github.io/<ten-repo>/
```

### 💡 Mẹo gửi link cá nhân hóa đến từng người:
Bạn có thể thêm đuôi `?to=...&from=...` vào sau link để tạo sự bất ngờ:
- Gửi cho Mẹ: `.../?to=Mẹ+Yêu&from=Con`
- Gửi cho Bạn gái/Vợ: `.../?to=Em+Yêu&from=Anh`
- Gửi cho Đồng nghiệp: `.../?to=Chị+Hương&from=Team+Marketing`

---

## 📁 Cấu trúc thư mục

```text
├── index.html        # Giao diện chính & cấu trúc trang web
├── style.css         # Bảng màu, typography và bố cục phản hồi (responsive)
├── script.js         # Xử lý hiệu ứng cánh hoa, âm thanh Web Audio, tạo thiệp & xuất ảnh
└── README.md         # Tài liệu hướng dẫn sử dụng & triển khai
```

Chúc bạn và những người phụ nữ bạn yêu thương có một ngày **20/10** thật bình yên, rạng rỡ và ngập tràn hạnh phúc! 🌸

