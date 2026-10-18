/**
 * ===================================================================
 * NGÀY PHỤ NỮ VIỆT NAM 20/10 - DỊU DÀNG & ẤM ÁP
 * Logic tương tác, Hộp nhạc Web Audio, Cánh hoa rơi & Xuất ảnh thiệp
 * ===================================================================
 */

(function () {
    'use strict';

    // -------------------------------------------------------------------
    // 1. DỮ LIỆU CÁC LỜI CHÚC (Được tuyển chọn tự nhiên, sâu lắng, mộc mạc)
    // -------------------------------------------------------------------
    const WISH_DATA = [
        // Dành cho Mẹ
        {
            id: 'mom-1',
            category: 'mom',
            flower: '🌸',
            title: 'Gửi Mẹ kính yêu',
            tag: 'Cho Mẹ',
            tagBg: '#F7E9EA',
            tagColor: '#C87A80',
            quote: 'Con chẳng mong mỏi gì lớn lao, chỉ mong mẹ mỗi ngày trôi qua đều thảnh thơi, ít lo âu và thật nhiều sức khỏe. Cảm ơn mẹ vì đôi bàn tay tảo tần luôn là chốn bình yên nhất để con trở về.',
            author: 'Lời nhắn gửi từ trái tim'
        },
        {
            id: 'mom-2',
            category: 'mom',
            flower: '🪷',
            title: 'Mong Mẹ luôn bình an',
            tag: 'Cho Mẹ',
            tagBg: '#F7E9EA',
            tagColor: '#C87A80',
            quote: 'Cả một đời mẹ luôn dành những điều tốt nhất cho gia đình mà quên mất việc yêu thương chính mình. Hôm nay 20/10, mong mẹ của con hãy nghỉ tay một chút, thưởng thức tách trà thơm và mỉm cười thật tươi mẹ nhé!',
            author: 'Gửi người phụ nữ tần tảo'
        },

        // Dành cho "Người ấy" / Bạn gái / Vợ
        {
            id: 'lover-1',
            category: 'lover',
            flower: '🌹',
            title: 'Gửi bông hoa của anh',
            tag: 'Người thương',
            tagBg: '#FAEAEB',
            tagColor: '#BD4A4F',
            quote: 'Cảm ơn em vì đã đến và làm cho mỗi ngày bình thường đều trở nên dịu dàng, ấm áp hơn. 20/10 chúc em luôn tìm thấy niềm vui trong từng điều nhỏ xíu, và nhớ rằng luôn có anh ở đây đồng hành cùng em.',
            author: 'Dành cho một nửa yêu thương'
        },
        {
            id: 'lover-2',
            category: 'lover',
            flower: '🌷',
            title: 'Dịu dàng như em',
            tag: 'Người thương',
            tagBg: '#FAEAEB',
            tagColor: '#BD4A4F',
            quote: 'Em không cần phải cố gắng làm một người phụ nữ hoàn hảo hay mạnh mẽ mỗi ngày. Cứ an tâm làm chính mình, tươi tắn và đón nhận tất cả những điều ngọt ngào nhất mà em xứng đáng có được.',
            author: 'Lời thì thầm ấm áp'
        },

        // Dành cho Chị / Em gái / Bạn bè
        {
            id: 'friends-1',
            category: 'friends',
            flower: '🌷',
            title: 'Mãi rạng ngời bạn nhé',
            tag: 'Chị em & Bạn bè',
            tagBg: '#EBF0EA',
            tagColor: '#7D8F7B',
            quote: 'Chúc bạn/chị một ngày 20/10 ngập tràn hoa tươi, quà xinh và những tiếng cười giòn giã. Mong bạn luôn giữ vững niềm tin, kiên định với ước mơ và luôn là một phiên bản độc nhất vô nhị!',
            author: 'Một nhành hoa tươi thắm'
        },
        {
            id: 'friends-2',
            category: 'friends',
            flower: '🌼',
            title: 'Bình yên & Vô tư',
            tag: 'Chị em & Bạn bè',
            tagBg: '#EBF0EA',
            tagColor: '#7D8F7B',
            quote: 'Mong cho những ngày tháng của bạn luôn trôi qua êm ả như nắng mùa thu. Dẫu ngoài kia có bao nhiêu bão giông, mong bạn vẫn luôn giữ được sự hồn nhiên, ấm áp trong ánh mắt và nụ cười.',
            author: 'Dành tặng bạn'
        },

        // Dành cho Đồng nghiệp nữ
        {
            id: 'colleague-1',
            category: 'colleague',
            flower: '🌼',
            title: 'Chúc chị em đồng nghiệp',
            tag: 'Đồng nghiệp',
            tagBg: '#FAF2E8',
            tagColor: '#C29A64',
            quote: 'Chúc các chị em công ty/phòng ban một ngày 20/10 thật rực rỡ! Chúc công việc bớt deadline, tan làm đúng giờ, sếp tâm lý và ví tiền lúc nào cũng rủng rỉnh niềm vui!',
            author: 'Gửi team nữ đáng mến'
        },
        {
            id: 'colleague-2',
            category: 'colleague',
            flower: '🌻',
            title: 'Tự tin & Thành công',
            tag: 'Đồng nghiệp',
            tagBg: '#FAF2E8',
            tagColor: '#C29A64',
            quote: 'Cảm ơn bạn vì sự chỉn chu, nhiệt tình và nguồn năng lượng tích cực bạn luôn mang lại cho văn phòng. Chúc bạn một ngày 20/10 thật trọn vẹn và nhiều bước tiến rực rỡ trong sự nghiệp!',
            author: 'Đồng nghiệp bàn bên'
        },

        // Dành cho Chính mình (Self-Love)
        {
            id: 'self-1',
            category: 'self',
            flower: '🌻',
            title: 'Gửi chính mình dịu dàng',
            tag: 'Yêu bản thân',
            tagBg: '#F3ECE2',
            tagColor: '#8C7461',
            quote: 'Cảm ơn bản thân vì đã luôn kiên cường, nỗ lực và không từ bỏ dù có những ngày mệt mỏi. Hôm nay, hãy tự thưởng cho mình một ly cà phê ấm, một chiếc bánh ngọt và tận hưởng một ngày thật thảnh thơi nhé!',
            author: 'Lời nhắn gửi chính tôi'
        },
        {
            id: 'self-2',
            category: 'self',
            flower: '🌸',
            title: 'Bạn là duy nhất',
            tag: 'Yêu bản thân',
            tagBg: '#F3ECE2',
            tagColor: '#8C7461',
            quote: 'Đừng so sánh đóa hoa của mình với bất kỳ khu vườn nào khác. Mỗi loài hoa đều có thời điểm nở rộ riêng biệt. Bạn luôn xinh đẹp, quý giá và xứng đáng được yêu thương vô điều kiện.',
            author: 'Bình yên nơi tâm hồn'
        }
    ];

    // -------------------------------------------------------------------
    // 2. AUDIO SYNTHESIZER (Tạo âm thanh mộc mạc, không lo mất file mp3)
    // -------------------------------------------------------------------
    let audioCtx = null;
    let isMusicPlaying = false;
    let musicInterval = null;

    function getAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) audioCtx = new AudioContextClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    // Tiếng chuông ngân thanh thoát khi chạm hoa / mở thiệp
    function playChimeSound() {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const now = ctx.currentTime;
            // Hợp âm ngũ cung dịu dàng F Major 7 (F4, A4, C5, E5, G5)
            const notes = [349.23, 440.0, 523.25, 659.25, 783.99];

            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);

                gain.gain.setValueAtTime(0, now + idx * 0.08);
                gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 1.3);
            });
        } catch (e) {
            console.warn('Audio not allowed yet:', e);
        }
    }

    // Nhạc nền Hộp nhạc (Music Box Melodic Sequence)
    const MUSIC_BOX_NOTES = [
        // Nốt nhạc dịu dàng ru êm
        523.25, 659.25, 783.99, 1046.50, 783.99, 659.25,
        587.33, 698.46, 880.00, 698.46, 587.33,
        523.25, 659.25, 783.99, 987.77, 783.99, 659.25,
        440.00, 523.25, 659.25, 523.25, 440.00
    ];
    let noteStep = 0;

    function playMusicBoxNote() {
        if (!isMusicPlaying) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        const freq = MUSIC_BOX_NOTES[noteStep % MUSIC_BOX_NOTES.length];
        noteStep++;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Âm sắc music box trong veo
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.7);
    }

    function toggleBackgroundMusic() {
        const btn = document.getElementById('btn-music');
        if (!isMusicPlaying) {
            getAudioContext();
            isMusicPlaying = true;
            if (btn) btn.classList.add('active');
            musicInterval = setInterval(playMusicBoxNote, 600);
            playMusicBoxNote();
            showToast('Đang phát giai điệu hộp nhạc êm đềm ♫');
        } else {
            isMusicPlaying = false;
            if (btn) btn.classList.remove('active');
            if (musicInterval) {
                clearInterval(musicInterval);
                musicInterval = null;
            }
            showToast('Đã dừng âm nhạc');
        }
    }

    // -------------------------------------------------------------------
    // 3. CANVAS HIỆU ỨNG CÁNH HOA RƠI (Petal Particles Simulation)
    // -------------------------------------------------------------------
    const canvas = document.getElementById('petal-canvas');
    let ctx = null;
    let petals = [];
    let width = 0;
    let height = 0;
    let wind = 0;

    class Petal {
        constructor(isInitial = false) {
            this.reset(isInitial);
        }

        reset(isInitial = false) {
            this.x = Math.random() * width;
            this.y = isInitial ? Math.random() * height : -20 - Math.random() * 50;
            this.size = 10 + Math.random() * 12;
            this.speedY = 1.0 + Math.random() * 1.5;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.angle = Math.random() * Math.PI * 2;
            this.angularSpeed = (Math.random() - 0.5) * 0.03;
            this.flip = Math.random() * Math.PI;
            this.flipSpeed = 0.02 + Math.random() * 0.03;
            this.opacity = 0.4 + Math.random() * 0.45;
            
            // Màu sắc cánh hoa dịu mắt: Hồng phớt, đào nhạt, vàng kem
            const colors = [
                'rgba(242, 185, 196, ', // Hồng phấn dịu
                'rgba(247, 210, 216, ', // Hồng kem nhạt
                'rgba(255, 235, 238, ', // Trắng phớt hồng
                'rgba(250, 226, 212, '  // Đào ấm
            ];
            this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX + wind;
            this.angle += this.angularSpeed;
            this.flip += this.flipSpeed;

            if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
                this.reset(false);
            }
        }

        draw(c) {
            c.save();
            c.translate(this.x, this.y);
            c.rotate(this.angle);
            c.scale(1, Math.cos(this.flip));

            c.beginPath();
            // Vẽ cánh hoa hình giọt nước mềm mại
            c.moveTo(0, 0);
            c.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 2, 0, this.size);
            c.bezierCurveTo(this.size, this.size / 2, this.size / 2, -this.size / 2, 0, 0);

            c.fillStyle = this.colorBase + this.opacity + ')';
            c.fill();
            c.restore();
        }
    }

    function initPetals() {
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        resizeCanvas();

        const count = window.innerWidth < 640 ? 25 : 45;
        petals = [];
        for (let i = 0; i < count; i++) {
            petals.push(new Petal(true));
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        requestAnimationFrame(renderLoop);
    }

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    let lastMouseX = null;
    function handleMouseMove(e) {
        if (lastMouseX !== null) {
            const delta = (e.clientX - lastMouseX) * 0.015;
            wind = Math.max(-1.5, Math.min(1.5, wind + delta));
        }
        lastMouseX = e.clientX;
    }

    function handleTouchMove(e) {
        if (e.touches && e.touches[0]) {
            handleMouseMove(e.touches[0]);
        }
    }

    function renderLoop() {
        ctx.clearRect(0, 0, width, height);
        wind *= 0.98; // Giảm dần lực gió

        for (let i = 0; i < petals.length; i++) {
            petals[i].update();
            petals[i].draw(ctx);
        }

        requestAnimationFrame(renderLoop);
    }

    // Hiệu ứng "Gieo hoa" khi bấm nút Bloom
    function triggerBloomBurst() {
        playChimeSound();
        const burstCount = 20;
        for (let i = 0; i < burstCount; i++) {
            const p = new Petal(false);
            p.x = width / 2 + (Math.random() - 0.5) * 200;
            p.y = height * 0.3 + (Math.random() - 0.5) * 100;
            p.speedY = 2 + Math.random() * 3;
            p.speedX = (Math.random() - 0.5) * 4;
            petals.push(p);
        }
        showToast('Những cánh hoa tươi thắm đang rơi tặng bạn 🌸');
    }

    // -------------------------------------------------------------------
    // 4. PARSE URL PARAMETERS (Tự động điền tên người nhận & người gửi)
    // -------------------------------------------------------------------
    let customRecipient = '';
    let customSender = '';
    let customWish = '';

    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        customRecipient = params.get('to') || '';
        customSender = params.get('from') || '';
        customWish = params.get('wish') || '';

        if (customRecipient) {
            const introRecipientText = document.getElementById('intro-recipient-text');
            const mainGreetingTitle = document.getElementById('main-greeting-title');
            const mainPersonalizedNote = document.getElementById('main-personalized-note');

            if (introRecipientText) {
                introRecipientText.textContent = `Thân gửi ${customRecipient}`;
            }
            if (mainGreetingTitle) {
                mainGreetingTitle.textContent = `Thân Gửi ${customRecipient} Nhân Ngày 20/10 🌸`;
            }
            if (mainPersonalizedNote && customSender) {
                mainPersonalizedNote.textContent = `Một món quà nhỏ và những lời chúc bình an nhất được gửi trao từ ${customSender}.`;
            }
        }
    }

    // -------------------------------------------------------------------
    // 5. RENDER CARDS GRID & FILTERING
    // -------------------------------------------------------------------
    function renderCards(filter = 'all') {
        const container = document.getElementById('cards-container');
        if (!container) return;

        container.innerHTML = '';
        const filtered = filter === 'all' 
            ? WISH_DATA 
            : WISH_DATA.filter(item => item.category === filter);

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'wish-card';
            card.style.setProperty('--card-accent', item.tagColor);

            card.innerHTML = `
                <div>
                    <div class="card-top">
                        <span class="card-icon">${item.flower}</span>
                        <span class="card-tag" style="background:${item.tagBg}; color:${item.tagColor};">${item.tag}</span>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-snippet">${item.quote}</p>
                </div>
                <div class="card-footer">
                    <span class="read-hint">Mở xem chi tiết →</span>
                    <span>✿</span>
                </div>
            `;

            card.addEventListener('click', () => {
                openWishModal(item);
            });

            container.appendChild(card);
        });
    }

    function setupCategoryTabs() {
        const pills = document.querySelectorAll('.cat-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                const cat = pill.getAttribute('data-category');
                renderCards(cat);
                playChimeSound();
            });
        });
    }

    // -------------------------------------------------------------------
    // 6. MODAL XEM CHI TIẾT LỜI CHÚC
    // -------------------------------------------------------------------
    let currentModalItem = null;

    function openWishModal(item) {
        currentModalItem = item;
        playChimeSound();

        const modal = document.getElementById('wish-modal');
        const modalFlower = document.getElementById('modal-flower');
        const modalBadge = document.getElementById('modal-badge');
        const modalTitle = document.getElementById('modal-title');
        const modalQuote = document.getElementById('modal-quote');

        if (modalFlower) modalFlower.textContent = item.flower;
        if (modalBadge) {
            modalBadge.textContent = item.tag;
            modalBadge.style.backgroundColor = item.tagBg;
            modalBadge.style.color = item.tagColor;
        }
        if (modalTitle) modalTitle.textContent = item.title;
        if (modalQuote) modalQuote.textContent = `"${item.quote}"`;

        if (modal) {
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeWishModal() {
        const modal = document.getElementById('wish-modal');
        if (modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    // -------------------------------------------------------------------
    // 7. RÚT QUẺ THÔNG ĐIỆP BẤT NGỜ (Random Wish Generator)
    // -------------------------------------------------------------------
    function handleRandomWish() {
        const randomIndex = Math.floor(Math.random() * WISH_DATA.length);
        const item = WISH_DATA[randomIndex];
        openWishModal(item);
        showToast('Bạn vừa rút được một lời chúc may mắn! ✨');
    }

    // -------------------------------------------------------------------
    // 8. TỰ TẠO THIỆP & XUẤT ẢNH PNG (Card Creator)
    // -------------------------------------------------------------------
    function openCreatorModal(presetWish = '') {
        playChimeSound();
        const modal = document.getElementById('creator-modal');
        const inputWish = document.getElementById('input-wish');
        const inputRecipient = document.getElementById('input-recipient');
        const inputSender = document.getElementById('input-sender');

        if (customRecipient && !inputRecipient.value) {
            inputRecipient.value = customRecipient;
        }
        if (customSender && !inputSender.value) {
            inputSender.value = customSender;
        }
        if (presetWish) {
            inputWish.value = presetWish;
        }

        updateCardPreview();

        if (modal) {
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeCreatorModal() {
        const modal = document.getElementById('creator-modal');
        if (modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    function updateCardPreview() {
        const recipient = document.getElementById('input-recipient').value.trim() || 'Người Phụ Nữ Tuyệt Vời';
        const wish = document.getElementById('input-wish').value.trim() || 'Chúc bạn ngày 20/10 ngập tràn niềm vui, an yên và vạn sự như ý.';
        const sender = document.getElementById('input-sender').value.trim() || 'Gửi trọn yêu thương';
        
        const selectedFlowerEl = document.querySelector('input[name="flower-theme"]:checked');
        const flower = selectedFlowerEl ? selectedFlowerEl.value : '🌸';

        document.getElementById('prev-to').textContent = `Thân gửi ${recipient},`;
        document.getElementById('prev-msg').textContent = wish;
        document.getElementById('prev-from').textContent = `— ${sender} —`;
        document.getElementById('prev-flower').textContent = flower;
    }

    // Xuất bưu thiếp ra ảnh PNG chuẩn đẹp bằng Canvas
    function downloadPostcardImage() {
        const recipient = document.getElementById('input-recipient').value.trim() || 'Người Phụ Nữ Dịu Dàng';
        const wish = document.getElementById('input-wish').value.trim() || 'Chúc bạn ngày 20/10 ngập tràn niềm vui, an yên và vạn sự như ý.';
        const sender = document.getElementById('input-sender').value.trim() || 'Người thương mến';
        
        const selectedFlowerEl = document.querySelector('input[name="flower-theme"]:checked');
        const flower = selectedFlowerEl ? selectedFlowerEl.value : '🌸';

        const exportCanvas = document.getElementById('export-canvas');
        if (!exportCanvas) return;

        const c = exportCanvas.getContext('2d');
        const W = 800;
        const H = 1000;
        exportCanvas.width = W;
        exportCanvas.height = H;

        // 1. Nền giấy kem cổ điển
        c.fillStyle = '#FAF6F0';
        c.fillRect(0, 0, W, H);

        // 2. Viền trang trí bưu thiếp đôi (Double Paper Border)
        c.lineWidth = 2;
        c.strokeStyle = '#E0D2C3';
        c.strokeRect(36, 36, W - 72, H - 72);

        c.lineWidth = 1;
        c.setLineDash([6, 6]);
        c.strokeStyle = '#D1BFAD';
        c.strokeRect(48, 48, W - 96, H - 96);
        c.setLineDash([]); // Reset dash

        // 3. Con dấu ngày 20.10 ở góc trên phải
        c.fillStyle = '#C29A64';
        c.font = 'bold 20px "Quicksand", sans-serif';
        c.textAlign = 'right';
        c.fillText('✦ 20 • 10 • VIETNAM ✦', W - 70, 90);

        // 4. Biểu tượng hoa lớn ở chính giữa phía trên
        c.font = '72px serif';
        c.textAlign = 'center';
        c.fillText(flower, W / 2, 190);

        // 5. Header Tên người nhận
        c.fillStyle = '#3B3332';
        c.font = 'bold 36px "Lora", Georgia, serif';
        c.fillText(`Thân gửi ${recipient},`, W / 2, 280);

        // 6. Dòng kẻ hoa văn nhỏ
        c.strokeStyle = '#C87A80';
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(W / 2 - 80, 320);
        c.lineTo(W / 2 + 80, 320);
        c.stroke();

        // 7. Nội dung lời chúc (Tự động ngắt dòng thông minh)
        c.fillStyle = '#554746';
        c.font = 'italic 26px "Lora", Georgia, serif';
        const maxWidth = W - 180;
        const lineHeight = 44;
        const words = wish.split(' ');
        let line = '';
        let startY = 400;

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = c.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
                c.fillText(line, W / 2, startY);
                line = words[n] + ' ';
                startY += lineHeight;
            } else {
                line = testLine;
            }
        }
        c.fillText(line, W / 2, startY);

        // 8. Chữ ký người gửi phong cách chữ viết tay
        c.fillStyle = '#BD4A4F';
        c.font = '36px "Caveat", cursive, sans-serif';
        c.fillText(`— ${sender} —`, W / 2, Math.max(startY + 90, 720));

        // 9. Dấu watermark vintage ở dưới cùng
        c.fillStyle = '#A39290';
        c.font = '16px "Quicksand", sans-serif';
        c.fillText('NGÀY PHỤ NỮ VIỆT NAM • CHÚC BẠN LUÔN BÌNH YÊN & RẠNG RỠ', W / 2, H - 75);

        // 10. Tải ảnh xuống máy
        try {
            const link = document.createElement('a');
            const safeName = recipient.replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ]/g, '_');
            link.download = `thiep-20-10-tang-${safeName}.png`;
            link.href = exportCanvas.toDataURL('image/png');
            link.click();
            showToast('Đã tải ảnh thiệp về máy thành công! 🖼️');
        } catch (e) {
            console.error('Không thể xuất ảnh:', e);
            showToast('Lỗi khi xuất ảnh, bạn vui lòng chụp màn hình nhé!');
        }
    }

    // Tạo link chia sẻ có param gửi người nhận
    function copyShareLink() {
        const recipient = document.getElementById('input-recipient').value.trim();
        const sender = document.getElementById('input-sender').value.trim();
        
        let url = window.location.origin + window.location.pathname;
        const params = new URLSearchParams();
        if (recipient) params.set('to', recipient);
        if (sender) params.set('from', sender);

        const finalUrl = params.toString() ? `${url}?${params.toString()}` : url;

        navigator.clipboard.writeText(finalUrl).then(() => {
            showToast('Đã sao chép liên kết thiệp cá nhân hóa! 🔗');
        }).catch(() => {
            prompt('Sao chép liên kết tại đây:', finalUrl);
        });
    }

    // -------------------------------------------------------------------
    // 9. TOAST NOTIFICATION HELPER
    // -------------------------------------------------------------------
    let toastTimeout = null;
    function showToast(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = msg;
        toast.classList.add('show');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }

    // -------------------------------------------------------------------
    // 10. KHỞI TẠO TẤT CẢ TƯƠNG TÁC KHI TẢI TRANG
    // -------------------------------------------------------------------
    function init() {
        // Kiểm tra URL parameters
        checkUrlParams();

        // Khởi động Canvas cánh hoa rơi
        initPetals();

        // Mở phong bì tương tác
        const envelopeTrigger = document.getElementById('envelope-trigger');
        const introOverlay = document.getElementById('intro-overlay');
        const mainContent = document.getElementById('main-content');

        if (envelopeTrigger) {
            envelopeTrigger.addEventListener('click', () => {
                const envelope = envelopeTrigger.querySelector('.envelope');
                if (envelope) envelope.classList.add('open');
                playChimeSound();

                // Tự động bật nhạc nhẹ nếu chưa bật
                if (!isMusicPlaying) {
                    toggleBackgroundMusic();
                }

                setTimeout(() => {
                    if (introOverlay) introOverlay.classList.add('hide');
                    if (mainContent) {
                        mainContent.style.display = 'block';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    // Bùng nổ thêm một đợt hoa chúc mừng
                    triggerBloomBurst();
                }, 800);
            });
        }

        // Render danh sách lời chúc ban đầu
        renderCards('all');
        setupCategoryTabs();

        // Nút top nav
        const btnMusic = document.getElementById('btn-music');
        if (btnMusic) btnMusic.addEventListener('click', toggleBackgroundMusic);

        const btnBloom = document.getElementById('btn-bloom');
        if (btnBloom) btnBloom.addEventListener('click', triggerBloomBurst);

        // Nút Rút quẻ & Tạo thiệp
        const btnRandomWish = document.getElementById('btn-random-wish');
        if (btnRandomWish) btnRandomWish.addEventListener('click', handleRandomWish);

        const btnOpenCreator = document.getElementById('btn-open-creator');
        if (btnOpenCreator) btnOpenCreator.addEventListener('click', () => openCreatorModal());

        // Modal xem chi tiết
        const modalCloseBtn = document.getElementById('modal-close-btn');
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeWishModal);

        const wishModal = document.getElementById('wish-modal');
        if (wishModal) {
            wishModal.addEventListener('click', (e) => {
                if (e.target === wishModal) closeWishModal();
            });
        }

        const modalCopyBtn = document.getElementById('modal-copy-btn');
        if (modalCopyBtn) {
            modalCopyBtn.addEventListener('click', () => {
                if (currentModalItem) {
                    navigator.clipboard.writeText(currentModalItem.quote).then(() => {
                        showToast('Đã sao chép lời chúc vào khay nhớ tạm! 📋');
                    });
                }
            });
        }

        const modalShareBtn = document.getElementById('modal-share-btn');
        if (modalShareBtn) {
            modalShareBtn.addEventListener('click', () => {
                const quote = currentModalItem ? currentModalItem.quote : '';
                closeWishModal();
                openCreatorModal(quote);
            });
        }

        // Modal Tạo thiệp
        const creatorCloseBtn = document.getElementById('creator-close-btn');
        if (creatorCloseBtn) creatorCloseBtn.addEventListener('click', closeCreatorModal);

        const creatorModal = document.getElementById('creator-modal');
        if (creatorModal) {
            creatorModal.addEventListener('click', (e) => {
                if (e.target === creatorModal) closeCreatorModal();
            });
        }

        // Lắng nghe thay đổi form tạo thiệp
        ['input-recipient', 'input-wish', 'input-sender'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', updateCardPreview);
        });

        document.querySelectorAll('input[name="flower-theme"]').forEach(radio => {
            radio.addEventListener('change', updateCardPreview);
        });

        document.querySelectorAll('.quick-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const text = chip.getAttribute('data-text');
                const wishInput = document.getElementById('input-wish');
                if (wishInput && text) {
                    wishInput.value = text;
                    updateCardPreview();
                }
            });
        });

        // Nút Tải ảnh & Nút Copy Link
        const btnDownloadCard = document.getElementById('btn-download-card');
        if (btnDownloadCard) btnDownloadCard.addEventListener('click', downloadPostcardImage);

        const btnCopyShareLink = document.getElementById('btn-copy-share-link');
        if (btnCopyShareLink) btnCopyShareLink.addEventListener('click', copyShareLink);

        // Phím ESC đóng modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeWishModal();
                closeCreatorModal();
            }
        });
    }

    // Đợi DOM sẵn sàng
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

