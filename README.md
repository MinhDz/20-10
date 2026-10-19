# 🌸 Trang Web Chúc Mừng 20/10 - Ngày Phụ Nữ Việt Nam

Một trang web tĩnh nhẹ nhàng, thanh lịch và ấm áp dành tặng những người phụ nữ Việt Nam nhân ngày **20/10**, sẵn sàng triển khai (deploy) miễn phí lên **GitHub Pages**.

---

## ✨ Điểm nổi bật & Tính năng mới

### 1. 🌸 Vườn Lời Chúc (Tab 1)
- **Tông màu mộc mạc, dịu dàng (Warm Vintage & Soft Floral):**
  - Sắc kem giấy ấm (`#FAF7F2`), hồng phấn phớt nhẹ (`#C87A80`), xanh lá xô thơm (`#7D8F7B`) và nâu ấm dịu mắt.
  - **Không** dùng gradient neon AI hay màu sắc chói mắt.
- **Lời chúc gần gũi & chân thành:**
  - Tuyển chọn lời chúc dung dị, ấm áp phân theo từng nhóm: *Cho Mẹ*, *Cho Người thương*, *Cho Chị em & Bạn bè*, *Đồng nghiệp*, và *Cho chính mình*.
- **Rút quẻ may mắn & Bưu thiếp tự thiết kế:**
  - Bốc ngẫu nhiên lời chúc bất ngờ.
  - Tự điền tên người nhận, lời chúc, ký tên và bấm **Tải ảnh thiệp PNG** (độ nét cao 800x1000) để gửi qua Zalo/Messenger/Story.
- **Cá nhân hóa liên kết (URL params):**
  - Gửi kèm link: `?to=Mẹ+Yêu&from=Con+Gái` để trang web tự động hiện đích danh tên người nhận.

### 2. 🎵 Giai Điệu & Lời Ca Đồng Bộ (Tab 2 - Thiết kế theo bản phác thảo)
- **Bố cục 2 cột trực quan chuẩn phác thảo:**
  - **Cột Trái (Player Box & Điều khiển):**
    - Đĩa CD/Vinyl xoay tròn bên trái với rãnh đĩa và nhãn hoa ở tâm.
    - Khung viền chữ nhật bao quanh **Tên bài hát** và **Nghệ sĩ**.
    - Thanh tua thời gian (Seekbar) tương tác mượt mà.
    - 3 nút điều khiển lớn: `⮜` (Bài trước), `▶ / ❚❚` (Phát/Dừng), `⮞` (Bài kế tiếp).
    - Danh sách chọn nhanh 5 bài hát 20/10.
  - **Cột Phải (Khung Lời bài hát ZingMP3):**
    - Tiêu đề **Tên bài** ở giữa trên cùng.
    - Lời bài hát chạy đồng bộ từng giây theo thời gian thực (Real-time Synced Lyrics).
    - **Hiệu ứng ZingMP3:** Dòng đang hát được phóng to, in đậm, phát sáng theo màu chủ đề của bài hát; các dòng trước/sau làm mờ tinh tế; tự động cuộn mượt (auto-scroll) giữ câu hát ở giữa màn hình.
    - **Click-to-seek:** Chạm vào bất kỳ câu hát nào để nghe ngay từ đoạn đó.
- **Nền mờ nghệ thuật đồng bộ với ảnh và chủ đề bài hát:**
  - Toàn bộ khung nghe nhạc có lớp nền ambient glow đổi màu theo từng bài hát (Ước Mơ Của Mẹ, Mẹ Yêu, Là Con Gái Thật Tuyệt, Nàng Thơ, Bao Tiền Một Mớ Bình Yên).
- **Phát nhạc đa năng (Hybrid Audio Engine):**
  - Sẵn sàng phát các tệp nhạc `.mp3` đặt trong thư mục `assets/music/`.
  - Nếu chưa có tệp MP3 (hoặc mở offline), hệ thống **tự động chuyển sang bộ giai điệu Acoustic/Piano Web Audio êm dịu** tích hợp sẵn, giúp trang web **luôn luôn phát nhạc và đồng bộ lời 100% không lo lỗi thiếu file**.

---

## 📁 Cấu trúc thư mục

```text
├── index.html        # Giao diện chính, điều hướng 2 Tab & khung phát nhạc
├── style.css         # Phong cách màu sắc, hiệu ứng đĩa xoay, ZingMP3 lyric
├── script.js         # Xử lý tương tác, 5 bài hát, karaoke sync & xuất ảnh thiệp
├── assets/
│   └── music/        # Thư mục đặt các bài hát .mp3 (song1.mp3 -> song5.mp3)
│       └── README.txt
└── README.md         # Hướng dẫn triển khai & sử dụng
```

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (3 Bước)

### Bước 1: Khởi tạo Git & Đẩy lên GitHub
```bash
git add .
git commit -m "Them tab giai dieu 20/10 dong bo loi ZingMP3"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
git push -u origin main
```

### Bước 2: Kích hoạt GitHub Pages
1. Vào repository trên GitHub > Chọn tab **Settings** > Chọn mục **Pages** ở menu bên trái.
2. Tại mục **Build and deployment**:
   - **Branch:** Chọn `main`, thư mục để mặc định là `/(root)`
3. Bấm **Save**.

### Bước 3: Nhận link trang web
Sau 1–2 phút, trang web của bạn sẽ hoạt động tại:
```
https://<tai-khoan-cua-ban>.github.io/<ten-repo>/
```

Chúc bạn và những người phụ nữ yêu thương có một ngày **20/10** thật dịu dàng, bình yên và ngập tràn hạnh phúc! 🌸
