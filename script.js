/**
 * ===================================================================
 * NGÀY PHỤ NỮ VIỆT NAM 20/10 - DỊU DÀNG & ẤM ÁP
 * Vườn Lời Chúc, Cánh Hoa Rơi, Bưu Thiếp Cá Nhân Hóa &
 * Trình Phát Nhạc 2 Cột Đồng Bộ Lời Bài Hát (ZingMP3 Style)
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
    // 2. DỮ LIỆU 5 BÀI HÁT & LỜI ĐỒNG BỘ (20/10 PLAYLIST & SYNCED LYRICS)
    // -------------------------------------------------------------------
    const PLAYLIST_DATA = [
        {
            id: 0,
            title: 'Ước Mơ Của Mẹ',
            artist: 'Văn Mai Hương x Hứa Kim Tuyền',
            genreTag: '✦ Tri ân Mẹ kính yêu',
            flower: '🪷',
            color: '#C87A80',
            subColor: '#FAF2E8',
            lightBg: '#F7E9EA',
            audioSrc: 'assets/music/song1.mp3',
            duration: 210,
            melody: [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, 587.33, 698.46, 880.00],
            lyrics: [
                { time: 0, text: "♫ Giai điệu nhẹ nhàng và sâu lắng mở đầu bài hát..." },
                { time: 8, text: "Lời ru ngày xưa mẹ hát con nghe từng đêm hè" },
                { time: 16, text: "Con vô tư hỏi: 'Ước mơ của mẹ là gì hỡi mẹ ơi?'" },
                { time: 24, text: "Mẹ chỉ cười, xoa đầu con và dịu dàng nói rằng:" },
                { time: 32, text: "'Ước mơ của mẹ là thấy con lớn khôn từng ngày.'" },
                { time: 42, text: "Mẹ cũng có những ước mơ của riêng mình thời son trẻ" },
                { time: 52, text: "Nhưng vì con, mẹ gác lại tất cả hoài bão phía sau lưng" },
                { time: 62, text: "Con lớn lên mang theo cả thanh xuân và nụ cười của mẹ" },
                { time: 72, text: "Tóc mẹ thêm sợi bạc, bàn tay thêm những vết chai sần" },
                { time: 82, text: "Giờ đây con chỉ ước mẹ mãi an yên và khỏe mạnh" },
                { time: 94, text: "Nụ cười mẹ hiền luôn là bến đỗ bình yên nhất trần gian" },
                { time: 106, text: "Cảm ơn mẹ vì tất cả những hy sinh thầm lặng chở che" },
                { time: 120, text: "Chúc mẹ ngày 20/10 ngập tràn niềm vui và bình an 🪷" }
            ]
        },
        {
            id: 1,
            title: 'Mẹ Yêu',
            artist: 'Phương Uyên',
            genreTag: '✦ Tình mẫu tử thiêng liêng',
            flower: '🌸',
            color: '#BD4A4F',
            subColor: '#FDF3F4',
            lightBg: '#FAEAEB',
            audioSrc: 'assets/music/song2.mp3',
            duration: 190,
            melody: [440.00, 523.25, 659.25, 880.00, 659.25, 523.25, 587.33, 698.46],
            lyrics: [
                { time: 0, text: "♫ Tiếng dương cầm êm dịu ngân vang..." },
                { time: 7, text: "Sinh con ra trong bao nhiêu khó nhọc, nhọc nhằn của mẹ" },
                { time: 15, text: "Mẹ ru con yêu qua bao tháng ngày gió mưa" },
                { time: 23, text: "Dù gian nan mẹ vẫn luôn mỉm cười hiền dịu" },
                { time: 31, text: "Vì con là cả thế giới bao la của mẹ" },
                { time: 40, text: "Ánh mắt mẹ hiền ấm áp như vầng dương soi tỏ" },
                { time: 50, text: "Dìu dắt bước chân con qua những nẻo gập ghềnh" },
                { time: 60, text: "Mẹ ơi con yêu mẹ nhiều lắm, ngàn lời khó nói hết" },
                { time: 72, text: "Nguyện cầu mẹ luôn bình an, mạnh khỏe mãi bên con" },
                { time: 85, text: "Dẫu đi cùng trời cuối đất, không đâu ấm bằng lòng mẹ 🌸" }
            ]
        },
        {
            id: 2,
            title: 'Là Con Gái Thật Tuyệt',
            artist: 'Lê Cát Trọng Lý',
            genreTag: '✦ Tươi vui & Rạng rỡ',
            flower: '🌼',
            color: '#5E8B7E',
            subColor: '#F0F7F4',
            lightBg: '#EBF0EA',
            audioSrc: 'assets/music/song3.mp3',
            duration: 180,
            melody: [587.33, 698.46, 880.00, 1046.50, 880.00, 698.46, 783.99, 659.25],
            lyrics: [
                { time: 0, text: "♫ Giai điệu trong trẻo, rộn ràng đón nắng mai..." },
                { time: 8, text: "Ngày tạo hóa ban cho em đôi mắt biết cười và nụ cười xinh" },
                { time: 16, text: "Mái tóc mây bồng bềnh tung bay trong gió sớm" },
                { time: 25, text: "Là con gái thật tuyệt, nhẹ nhàng, tự tin và kiêu hãnh" },
                { time: 34, text: "Tự do bước đi trên con đường của riêng mình chọn" },
                { time: 44, text: "Biết yêu thương bản thân, mỉm cười với mọi điều bình dị" },
                { time: 54, text: "Tỏa sáng theo cách tự nhiên và duyên dáng nhất của em" },
                { time: 64, text: "Dẫu mưa hay nắng vẫn giữ nguyên nét thuần khiết trong ngần" },
                { time: 76, text: "Bởi vì em là đóa hoa rực rỡ nhất giữa cuộc đời này 🌼" }
            ]
        },
        {
            id: 3,
            title: 'Nàng Thơ',
            artist: 'Hoàng Dũng',
            genreTag: '✦ Ngọt ngào tặng người thương',
            flower: '🌷',
            color: '#8A6B8F',
            subColor: '#F8F3FA',
            lightBg: '#F3EDF7',
            audioSrc: 'assets/music/song4.mp3',
            duration: 215,
            melody: [523.25, 659.25, 783.99, 987.77, 783.99, 659.25, 587.33, 698.46],
            lyrics: [
                { time: 0, text: "♫ Tiếng guitar mộc mạc và da diết..." },
                { time: 8, text: "Em, ngày em đánh rơi nụ cười vào mắt anh" },
                { time: 17, text: "Có nghe mùa thu dịu dàng rụng rơi những chiếc lá vàng?" },
                { time: 26, text: "Em từng là nàng thơ của những giấc mơ thanh xuân" },
                { time: 35, text: "Dịu dàng như cơn gió đầu mùa ghé qua hiên nhà" },
                { time: 45, text: "Cảm ơn em vì đã mang đến những ấm áp ngọt lành" },
                { time: 56, text: "Cho trái tim này biết rung động và biết chở che" },
                { time: 68, text: "Chúc nàng thơ của anh ngày 20/10 ngập tràn hạnh phúc" },
                { time: 80, text: "Mãi mãi là nụ cười đẹp nhất trong ánh mắt anh 🌷" }
            ]
        },
        {
            id: 4,
            title: 'Bao Tiền Một Mớ Bình Yên',
            artist: '14 Casper & Bon',
            genreTag: '✦ Bình yên & Chữa lành',
            flower: '🌻',
            color: '#D48C46',
            subColor: '#FDF5EC',
            lightBg: '#FAF2E8',
            audioSrc: 'assets/music/song5.mp3',
            duration: 195,
            melody: [392.00, 440.00, 523.25, 659.25, 523.25, 440.00, 493.88, 587.33],
            lyrics: [
                { time: 0, text: "♫ Tiếng suối reo và phím đàn lofi êm ả..." },
                { time: 7, text: "Bao tiền một mớ bình yên giữa phố thị tấp nập?" },
                { time: 15, text: "Để mua cho những ngày lòng chênh vênh gió giông" },
                { time: 24, text: "Mong em hôm nay tạm gác lại mọi âu lo, bộn bề" },
                { time: 33, text: "Pha một ấm trà thơm, ngắm hoàng hôn nhẹ buông" },
                { time: 43, text: "Thế giới này dẫu có vội vã và nhiều áp lực đến đâu" },
                { time: 54, text: "Xin em hãy luôn dành cho mình khoảng lặng an yên" },
                { time: 65, text: "Bình yên chẳng ở đâu xa xôi ngoài tầm với" },
                { time: 76, text: "Bình yên là khi em biết yêu thương và trân trọng chính mình 🌻" }
            ]
        }
    ];

    // -------------------------------------------------------------------
    // 3. AUDIO SYNTHESIZER & WEB AUDIO ENGINE (Hoạt động offline 100%)
    // -------------------------------------------------------------------
    let audioCtx = null;
    let isSynthPlaying = false;
    let synthInterval = null;
    let synthStep = 0;

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

    // Tiếng chuông ngân thanh thoát khi tương tác
    function playChimeSound() {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const now = ctx.currentTime;
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

    // Phát nốt nhạc mô phỏng cho bài hát khi offline hoặc chưa có file mp3
    function playSynthMelodyNote(song) {
        if (!isPlayerPlaying) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        const melody = song.melody || [523.25, 659.25, 783.99];
        const freq = melody[synthStep % melody.length];
        synthStep++;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

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

    // -------------------------------------------------------------------
    // 4. TRÌNH PHÁT NHẠC STUDIO & ĐỒNG BỘ LYRIC (ZINGMP3 STYLE ENGINE)
    // -------------------------------------------------------------------
    let currentSongIndex = 0;
    let isPlayerPlaying = false;
    let currentPlaybackTime = 0;
    let fallbackTimer = null;
    let activeLyricIndex = -1;
    let audioElement = null;
    let isUsingFallbackSynth = false;

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function initMusicStudio() {
        audioElement = document.getElementById('main-audio-player');
        
        // Render danh sách chọn bài (Mini Playlist)
        renderPlaylistChips();

        // Tải bài hát đầu tiên
        loadSong(currentSongIndex, false);

        // Lắng nghe sự kiện audio element
        if (audioElement) {
            audioElement.addEventListener('timeupdate', () => {
                if (!isUsingFallbackSynth) {
                    currentPlaybackTime = audioElement.currentTime;
                    updateTimelineUI();
                    syncLyrics(currentPlaybackTime);
                }
            });

            audioElement.addEventListener('ended', () => {
                nextSong();
            });

            audioElement.addEventListener('error', () => {
                // Nếu không tìm thấy file MP3 cục bộ, tự động chuyển sang chế độ nhạc mô phỏng du dương
                console.info('Sử dụng bộ phát giai điệu Web Audio êm dịu cho bài hát hiện tại.');
                isUsingFallbackSynth = true;
            });
        }

        // Bắt sự kiện 3 nút điều khiển lớn (< [ ] >)
        const btnPrev = document.getElementById('btn-song-prev');
        const btnNext = document.getElementById('btn-song-next');
        const btnPlayToggle = document.getElementById('btn-song-play-toggle');

        if (btnPrev) btnPrev.addEventListener('click', prevSong);
        if (btnNext) btnNext.addEventListener('click', nextSong);
        if (btnPlayToggle) btnPlayToggle.addEventListener('click', togglePlayPause);

        // Bắt sự kiện thanh timeline (Seekbar)
        const timeTrack = document.getElementById('time-track');
        if (timeTrack) {
            timeTrack.addEventListener('click', (e) => {
                const rect = timeTrack.getBoundingClientRect();
                const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const song = PLAYLIST_DATA[currentSongIndex];
                const totalDur = (audioElement && audioElement.duration && !isNaN(audioElement.duration)) 
                    ? audioElement.duration 
                    : song.duration;
                seekTo(clickPos * totalDur);
            });
        }

        // Phím tắt bàn phím tiện lợi (Space: Play/Pause, Mũi tên: Next/Prev)
        window.addEventListener('keydown', (e) => {
            // Không can thiệp nếu đang gõ chữ trong form
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.code === 'Space') {
                e.preventDefault();
                togglePlayPause();
            } else if (e.code === 'ArrowRight') {
                nextSong();
            } else if (e.code === 'ArrowLeft') {
                prevSong();
            }
        });
    }

    // Tải thông tin và giao diện bài hát
    function loadSong(index, shouldAutoPlay = false) {
        currentSongIndex = (index + PLAYLIST_DATA.length) % PLAYLIST_DATA.length;
        const song = PLAYLIST_DATA[currentSongIndex];

        currentPlaybackTime = 0;
        activeLyricIndex = -1;
        isUsingFallbackSynth = false;

        // Cập nhật Cột Trái (Player Box & Disc)
        const disc = document.getElementById('vinyl-disc');
        const discSymbol = document.getElementById('disc-symbol');
        const songTitle = document.getElementById('active-song-title');
        const songArtist = document.getElementById('active-artist');
        const songGenreTag = document.getElementById('song-genre-tag');
        const plCount = document.getElementById('pl-count');

        if (discSymbol) discSymbol.textContent = song.flower;
        if (songTitle) songTitle.textContent = song.title;
        if (songArtist) songArtist.textContent = song.artist;
        if (songGenreTag) songGenreTag.textContent = song.genreTag;
        if (plCount) plCount.textContent = `Bài ${currentSongIndex + 1} / ${PLAYLIST_DATA.length}`;

        // Cập nhật Cột Phải (Lyrics Header)
        const lyricsTitle = document.getElementById('lyrics-display-title');
        const lyricsArtist = document.getElementById('lyrics-display-artist');
        if (lyricsTitle) lyricsTitle.textContent = song.title;
        if (lyricsArtist) lyricsArtist.textContent = song.artist;

        // Cập nhật màu sắc chủ đề và nền mờ nghệ thuật (ảnh thì lấy nền của ảnh)
        const playerSection = document.getElementById('music-player-section');
        if (playerSection) {
            playerSection.style.setProperty('--song-color', song.color);
            playerSection.style.setProperty('--song-sub-color', song.subColor);
            playerSection.style.setProperty('--song-light-bg', song.lightBg);
            playerSection.style.setProperty('--song-center-bg', song.lightBg);
        }

        // Cập nhật thời gian
        document.getElementById('current-time-txt').textContent = '00:00';
        document.getElementById('total-time-txt').textContent = formatTime(song.duration);
        document.getElementById('time-fill').style.width = '0%';
        document.getElementById('time-thumb').style.left = '0%';

        // Render toàn bộ lời bài hát vào khung nhìn ZingMP3
        renderLyrics(song.lyrics);

        // Đánh dấu bài active trong playlist
        updatePlaylistChipsActiveState();

        // Thiết lập audio element
        if (audioElement) {
            audioElement.src = song.audioSrc;
            audioElement.currentTime = 0;
            audioElement.load();
        }

        if (shouldAutoPlay) {
            playSong();
        } else {
            pauseSong();
        }
    }

    // Render danh sách chọn bài (Mini Playlist)
    function renderPlaylistChips() {
        const container = document.getElementById('playlist-chips');
        if (!container) return;

        container.innerHTML = '';
        PLAYLIST_DATA.forEach((song, idx) => {
            const btn = document.createElement('button');
            btn.className = `pl-item-btn ${idx === currentSongIndex ? 'active' : ''}`;
            btn.setAttribute('data-index', idx);
            btn.innerHTML = `
                <div class="pl-item-left">
                    <span class="pl-item-icon">${song.flower}</span>
                    <div>
                        <div class="pl-item-title">${song.title}</div>
                        <div class="pl-item-artist">${song.artist}</div>
                    </div>
                </div>
                <span class="pl-playing-indicator">${idx === currentSongIndex ? '♫' : ''}</span>
            `;

            btn.addEventListener('click', () => {
                loadSong(idx, true);
                playChimeSound();
            });

            container.appendChild(btn);
        });
    }

    function updatePlaylistChipsActiveState() {
        const items = document.querySelectorAll('.pl-item-btn');
        items.forEach((item, idx) => {
            const indicator = item.querySelector('.pl-playing-indicator');
            if (idx === currentSongIndex) {
                item.classList.add('active');
                if (indicator) indicator.textContent = isPlayerPlaying ? '▶' : '♫';
            } else {
                item.classList.remove('active');
                if (indicator) indicator.textContent = '';
            }
        });
    }

    // Render các dòng lời bài hát (ZingMP3-Style)
    function renderLyrics(lyrics) {
        const stream = document.getElementById('lyrics-stream');
        if (!stream) return;

        stream.innerHTML = '';
        lyrics.forEach((line, idx) => {
            const div = document.createElement('div');
            div.className = `lyric-line ${idx === 0 ? 'near-active' : ''}`;
            div.setAttribute('data-index', idx);
            div.setAttribute('data-time', line.time);
            div.textContent = line.text;

            // Click vào câu hát bất kỳ -> Nhảy ngay đến đoạn đó
            div.addEventListener('click', () => {
                seekTo(line.time);
                if (!isPlayerPlaying) playSong();
            });

            stream.appendChild(div);
        });

        // Cuộn về đầu danh sách lời
        const scrollArea = document.getElementById('lyrics-scroll-area');
        if (scrollArea) scrollArea.scrollTop = 0;
    }

    // Đồng bộ lời bài hát chạy mượt theo thời gian thực (ZingMP3 Smooth Karaoke Effect)
    function syncLyrics(time) {
        const song = PLAYLIST_DATA[currentSongIndex];
        const lyrics = song.lyrics;
        if (!lyrics || lyrics.length === 0) return;

        let currentIndex = -1;
        for (let i = 0; i < lyrics.length; i++) {
            if (time >= lyrics[i].time) {
                currentIndex = i;
            } else {
                break;
            }
        }

        if (currentIndex !== activeLyricIndex && currentIndex !== -1) {
            activeLyricIndex = currentIndex;
            const lines = document.querySelectorAll('.lyric-line');

            lines.forEach((lineEl, idx) => {
                lineEl.classList.remove('active', 'near-active');

                if (idx === activeLyricIndex) {
                    lineEl.classList.add('active');

                    // Tự động cuộn mượt đưa dòng đang hát vào đúng vị trí trung tâm (ZingMP3 Auto-scroll)
                    const scrollArea = document.getElementById('lyrics-scroll-area');
                    if (scrollArea) {
                        const targetY = lineEl.offsetTop - (scrollArea.clientHeight / 2) + (lineEl.clientHeight / 2);
                        scrollArea.scrollTo({
                            top: Math.max(0, targetY),
                            behavior: 'smooth'
                        });
                    }
                } else if (idx === activeLyricIndex - 1 || idx === activeLyricIndex + 1) {
                    lineEl.classList.add('near-active');
                }
            });
        }
    }

    function updateTimelineUI() {
        const song = PLAYLIST_DATA[currentSongIndex];
        const totalDur = (audioElement && audioElement.duration && !isNaN(audioElement.duration)) 
            ? audioElement.duration 
            : song.duration;

        const percent = Math.min(100, Math.max(0, (currentPlaybackTime / totalDur) * 100));

        const timeFill = document.getElementById('time-fill');
        const timeThumb = document.getElementById('time-thumb');
        const currTxt = document.getElementById('current-time-txt');
        const totalTxt = document.getElementById('total-time-txt');

        if (timeFill) timeFill.style.width = `${percent}%`;
        if (timeThumb) timeThumb.style.left = `${percent}%`;
        if (currTxt) currTxt.textContent = formatTime(currentPlaybackTime);
        if (totalTxt) totalTxt.textContent = formatTime(totalDur);
    }

    function playSong() {
        isPlayerPlaying = true;
        const song = PLAYLIST_DATA[currentSongIndex];

        // Xoay đĩa CD
        const disc = document.getElementById('vinyl-disc');
        if (disc) {
            disc.classList.add('spinning');
            disc.classList.remove('paused');
        }

        // Đổi nút Play sang Pause
        const playBtn = document.getElementById('btn-song-play-toggle');
        const playIcon = document.getElementById('play-state-icon');
        if (playBtn) playBtn.classList.add('playing');
        if (playIcon) playIcon.textContent = '❚❚';

        // Cập nhật nút âm nhạc ở góc trên cùng
        const topMusicBtn = document.getElementById('btn-music');
        const topMusicLabel = document.getElementById('top-music-label');
        if (topMusicBtn) topMusicBtn.classList.add('active');
        if (topMusicLabel) topMusicLabel.textContent = 'Đang phát ♫';

        updatePlaylistChipsActiveState();

        // Phát file âm thanh hoặc fallback synthesizer
        if (audioElement && !isUsingFallbackSynth) {
            const playPromise = audioElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Trình duyệt chặn autoplay hoặc file không tồn tại
                    startFallbackPlayback();
                });
            }
        } else {
            startFallbackPlayback();
        }
    }

    function pauseSong() {
        isPlayerPlaying = false;

        // Dừng đĩa CD xoay
        const disc = document.getElementById('vinyl-disc');
        if (disc) {
            disc.classList.add('paused');
        }

        // Đổi nút Pause sang Play
        const playBtn = document.getElementById('btn-song-play-toggle');
        const playIcon = document.getElementById('play-state-icon');
        if (playBtn) playBtn.classList.remove('playing');
        if (playIcon) playIcon.textContent = '▶';

        // Cập nhật nút âm nhạc ở góc trên cùng
        const topMusicBtn = document.getElementById('btn-music');
        const topMusicLabel = document.getElementById('top-music-label');
        if (topMusicBtn) topMusicBtn.classList.remove('active');
        if (topMusicLabel) topMusicLabel.textContent = 'Âm nhạc';

        updatePlaylistChipsActiveState();

        if (audioElement && !isUsingFallbackSynth) {
            audioElement.pause();
        }

        stopFallbackPlayback();
    }

    function togglePlayPause() {
        if (isPlayerPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }

    function nextSong() {
        loadSong(currentSongIndex + 1, true);
        playChimeSound();
    }

    function prevSong() {
        loadSong(currentSongIndex - 1, true);
        playChimeSound();
    }

    function seekTo(seconds) {
        const song = PLAYLIST_DATA[currentSongIndex];
        const totalDur = (audioElement && audioElement.duration && !isNaN(audioElement.duration)) 
            ? audioElement.duration 
            : song.duration;

        currentPlaybackTime = Math.max(0, Math.min(totalDur, seconds));

        if (audioElement && !isUsingFallbackSynth) {
            audioElement.currentTime = currentPlaybackTime;
        }

        updateTimelineUI();
        syncLyrics(currentPlaybackTime);
    }

    // Chế độ phát âm thanh mô phỏng khi chưa có file MP3 (Đảm bảo 100% hoạt động mượt mà)
    function startFallbackPlayback() {
        isUsingFallbackSynth = true;
        stopFallbackPlayback();

        const song = PLAYLIST_DATA[currentSongIndex];
        playSynthMelodyNote(song);

        fallbackTimer = setInterval(() => {
            if (!isPlayerPlaying) return;

            currentPlaybackTime += 0.25;
            updateTimelineUI();
            syncLyrics(currentPlaybackTime);

            // Mỗi 1.2s phát 1 nốt nhạc mộc
            if (Math.floor(currentPlaybackTime * 4) % 5 === 0) {
                playSynthMelodyNote(song);
            }

            if (currentPlaybackTime >= song.duration) {
                nextSong();
            }
        }, 250);
    }

    function stopFallbackPlayback() {
        if (fallbackTimer) {
            clearInterval(fallbackTimer);
            fallbackTimer = null;
        }
    }

    // -------------------------------------------------------------------
    // 5. THANH ĐIỀU HƯỚNG TAB CHÍNH (VƯỜN LỜI CHÚC | GIAI ĐIỆU)
    // -------------------------------------------------------------------
    function initMainTabs() {
        const tabWishesBtn = document.getElementById('tab-btn-wishes');
        const tabMusicBtn = document.getElementById('tab-btn-music');
        const paneWishes = document.getElementById('pane-wishes');
        const paneMusic = document.getElementById('pane-music');

        function switchTab(tabName) {
            if (tabName === 'wishes') {
                if (tabWishesBtn) tabWishesBtn.classList.add('active');
                if (tabMusicBtn) tabMusicBtn.classList.remove('active');
                if (paneWishes) paneWishes.style.display = 'block';
                if (paneMusic) paneMusic.style.display = 'none';
            } else if (tabName === 'music') {
                if (tabMusicBtn) tabMusicBtn.classList.add('active');
                if (tabWishesBtn) tabWishesBtn.classList.remove('active');
                if (paneMusic) paneMusic.style.display = 'block';
                if (paneWishes) paneWishes.style.display = 'none';

                // Tự động căn chỉnh lời bài hát
                setTimeout(() => {
                    syncLyrics(currentPlaybackTime);
                }, 100);
            }
            playChimeSound();
        }

        if (tabWishesBtn) {
            tabWishesBtn.addEventListener('click', () => switchTab('wishes'));
        }

        if (tabMusicBtn) {
            tabMusicBtn.addEventListener('click', () => switchTab('music'));
        }

        // Nút top nav "Âm nhạc": Mở Tab Nhạc và phát bài hát
        const topMusicBtn = document.getElementById('btn-music');
        if (topMusicBtn) {
            topMusicBtn.addEventListener('click', () => {
                switchTab('music');
                if (!isPlayerPlaying) {
                    playSong();
                } else {
                    pauseSong();
                }
            });
        }
    }

    // -------------------------------------------------------------------
    // 6. CANVAS HIỆU ỨNG CÁNH HOA RƠI (Petal Particles Simulation)
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
            
            const colors = [
                'rgba(242, 185, 196, ', 
                'rgba(247, 210, 216, ', 
                'rgba(255, 235, 238, ', 
                'rgba(250, 226, 212, '  
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
        wind *= 0.98;

        for (let i = 0; i < petals.length; i++) {
            petals[i].update();
            petals[i].draw(ctx);
        }

        requestAnimationFrame(renderLoop);
    }

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
    // 7. PARSE URL PARAMETERS (Cá nhân hóa lời chào)
    // -------------------------------------------------------------------
    let customRecipient = '';
    let customSender = '';

    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        customRecipient = params.get('to') || '';
        customSender = params.get('from') || '';

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
                mainPersonalizedNote.textContent = `Một món quà nhỏ, giai điệu ngọt ngào và những lời chúc bình an nhất từ ${customSender}.`;
            }
        }
    }

    // -------------------------------------------------------------------
    // 8. RENDER THẺ LỜI CHÚC & FILTER TABS
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
    // 9. MODAL CHI TIẾT LỜI CHÚC & RÚT QUẺ
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

    function handleRandomWish() {
        const randomIndex = Math.floor(Math.random() * WISH_DATA.length);
        const item = WISH_DATA[randomIndex];
        openWishModal(item);
        showToast('Bạn vừa rút được một lời chúc may mắn! ✨');
    }

    // -------------------------------------------------------------------
    // 10. TỰ TẠO THIỆP & XUẤT ẢNH PNG
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

        c.fillStyle = '#FAF6F0';
        c.fillRect(0, 0, W, H);

        c.lineWidth = 2;
        c.strokeStyle = '#E0D2C3';
        c.strokeRect(36, 36, W - 72, H - 72);

        c.lineWidth = 1;
        c.setLineDash([6, 6]);
        c.strokeStyle = '#D1BFAD';
        c.strokeRect(48, 48, W - 96, H - 96);
        c.setLineDash([]);

        c.fillStyle = '#C29A64';
        c.font = 'bold 20px "Quicksand", sans-serif';
        c.textAlign = 'right';
        c.fillText('✦ 20 • 10 • VIETNAM ✦', W - 70, 90);

        c.font = '72px serif';
        c.textAlign = 'center';
        c.fillText(flower, W / 2, 190);

        c.fillStyle = '#3B3332';
        c.font = 'bold 36px "Lora", Georgia, serif';
        c.fillText(`Thân gửi ${recipient},`, W / 2, 280);

        c.strokeStyle = '#C87A80';
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(W / 2 - 80, 320);
        c.lineTo(W / 2 + 80, 320);
        c.stroke();

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

        c.fillStyle = '#BD4A4F';
        c.font = '36px "Caveat", cursive, sans-serif';
        c.fillText(`— ${sender} —`, W / 2, Math.max(startY + 90, 720));

        c.fillStyle = '#A39290';
        c.font = '16px "Quicksand", sans-serif';
        c.fillText('NGÀY PHỤ NỮ VIỆT NAM • CHÚC BẠN LUÔN BÌNH YÊN & RẠNG RỠ', W / 2, H - 75);

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

    // Toast thông báo
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
    // 11. KHỞI TẠO TẤT CẢ TƯƠNG TÁC
    // -------------------------------------------------------------------
    function init() {
        checkUrlParams();
        initPetals();

        // Mở phong bì thư
        const envelopeTrigger = document.getElementById('envelope-trigger');
        const introOverlay = document.getElementById('intro-overlay');
        const mainContent = document.getElementById('main-content');

        if (envelopeTrigger) {
            envelopeTrigger.addEventListener('click', () => {
                const envelope = envelopeTrigger.querySelector('.envelope');
                if (envelope) envelope.classList.add('open');
                playChimeSound();

                // Tự động phát bài hát đầu tiên
                setTimeout(() => {
                    if (introOverlay) introOverlay.classList.add('hide');
                    if (mainContent) {
                        mainContent.style.display = 'block';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    triggerBloomBurst();
                    playSong();
                }, 800);
            });
        }

        // Khởi tạo tab chính (Vườn Lời Chúc & Giai Điệu)
        initMainTabs();

        // Khởi tạo Trình phát nhạc & Đồng bộ Lyric
        initMusicStudio();

        // Render Vườn Lời Chúc
        renderCards('all');
        setupCategoryTabs();

        // Nút Gieo hoa
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

        const btnDownloadCard = document.getElementById('btn-download-card');
        if (btnDownloadCard) btnDownloadCard.addEventListener('click', downloadPostcardImage);

        const btnCopyShareLink = document.getElementById('btn-copy-share-link');
        if (btnCopyShareLink) btnCopyShareLink.addEventListener('click', copyShareLink);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeWishModal();
                closeCreatorModal();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
