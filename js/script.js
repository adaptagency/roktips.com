/**
 * RokTips Landing Page – Vanilla JS
 * Sticky CTA, video embed, scroll reveals
 */

(function () {
  'use strict';

  // --- Language toggle (VN default, EN optional) ---
  var LANG_STORAGE_KEY = 'roktips_lang';
  var langToggle = document.getElementById('lang-toggle');

  // Minimal i18n hooks: any element with these attributes will be updated.
  // - data-i18n: sets textContent
  // - data-i18n-html: sets innerHTML (use sparingly, e.g. line breaks)
  // - data-i18n-placeholder: sets placeholder
  // - data-i18n-aria: sets aria-label
  // - data-i18n-title: sets title
  var I18N = {
    vi: {
      // Document
      'doc.title': 'RokTips – Ngón tay khỏe hơn cho người chơi guitar & nhạc cụ dây',
      'doc.description':
        'RokTips – Dành cho người chơi guitar và các nhạc cụ dây muốn ngón tay khỏe hơn, nhanh hơn. Luyện chai tay, sức mạnh và độ linh hoạt ở mọi nơi để chơi lâu hơn, ít đau hơn.',

      // Language toggle
      'lang.aria': 'Chọn ngôn ngữ',
      'lang.toggleAria': 'Chuyển đổi ngôn ngữ',
      'lang.vnTitle': 'Tiếng Việt',
      'lang.enTitle': 'English',

      // Banner
      'banner.badge': 'Ưu đãi',
      'banner.text': 'Miễn phí vận chuyển cho mọi đơn RokTips',

      // Hero
      'hero.brand': 'Dành cho người chơi guitar điện, acoustic & bass<br>(và các nhạc cụ dây khác)',
      'hero.headline': 'Chơi Lâu Hơn, Mạnh Hơn.',
      'hero.subheadline':
        'Luôn gắn bó với nhạc cụ của bạn ở bất cứ đâu với dụng cụ luyện đầu ngón tay nhỏ gọn giúp tăng sức mạnh, chai tay và khả năng kiểm soát.',
      'hero.urgency': 'Miễn phí vận chuyển cho mọi đơn RokTips — giao tận nơi.',
      'hero.feature1': 'Người mới tập chai tay nhanh hơn',
      'hero.feature2': 'Luyện sức mạnh mà không cần guitar',
      'hero.feature3': 'Khởi động nhanh trước khi chơi',

      // Social proof
      'stickyBuy.aria': 'Mua nhanh',
      'socialProof.aria': 'Bằng chứng xã hội',
      'socialProof.text':
        'Được tin dùng bởi người chơi guitar (và nhạc cụ dây) trong đời sống hằng ngày — ở nhà, ở nơi làm việc, và khi di chuyển',
      'socialProof.count': '4.8&nbsp;&nbsp;2.400+ người chơi',

      // Demo
      'demo.title': 'Xem RokTips Hoạt Động',
      'demo.subtitle':
        'Xem cách người chơi guitar sử dụng RokTips để khởi động, tạo chai tay và tranh thủ luyện tập ở mọi nơi.',

      // Benefits
      'benefits.title': 'Vì Sao Người Chơi Guitar Chọn RokTips',
      'benefits.subtitle':
        'Thiết kế ưu tiên cho guitar và được người chơi nhạc cụ dây khắp nơi sử dụng. 4 cách RokTips giúp bạn chơi nhiều hơn, bớt đau, và hay hơn.',
      'benefits.card1.title': 'Tăng lực bấm thật sự',
      'benefits.card1.text':
        'Tập đúng nhóm cơ khi bấm phím đàn để hợp âm vang rõ và những buổi luyện tập dài trở nên nhẹ nhàng hơn.',
      'benefits.card2.title': 'Tạo chai tay chắc hơn',
      'benefits.card2.text':
        'Tạo lớp chai bảo vệ đầu ngón tay mà không cần dây đàn, để bạn tập đàn nhiều hơn và bớt nhức rát.',
      'benefits.card3.title': 'Cải thiện kiểm soát ngón',
      'benefits.card3.text':
        'Luyện sự độc lập và phối hợp ngón tay để chuyển hợp âm mượt hơn và câu riff sạch hơn.',
      'benefits.card4.title': 'Luyện ở mọi nơi',
      'benefits.card4.text':
        'Không cần mang đàn—dùng RokTips tại bàn làm việc, ở nhà, hay khi di chuyển để lên đàn là sẵn sàng.',

      // How it works
      'how.title': 'Cách Dùng Cho Người Chơi Nhạc Cụ Dây',
      'how.subtitle':
        'Ba bước đơn giản bạn có thể thêm vào bất kỳ lịch luyện tập nào—dù bạn chơi guitar, bass hay nhạc cụ dây khác.',
      'how.step1.title': 'Đeo RokTips vào tay bấm/dàn dây',
      'how.step1.text':
        'Luồn RokTips vào những ngón bạn dùng nhiều nhất trên cần đàn. Cảm giác ôm vừa vặn và thoải mái, không cần dây đeo hay lắp đặt.',
      'how.step2.title': 'Tập bài siết‑nhả ngắn',
      'how.step2.text':
        'Siết và thả từng ngón trong vài hiệp ngắn. RokTips mô phỏng lực dây để bạn luyện sức mạnh và chai tay mà không cần mang đàn.',
      'how.step3.title': 'Cầm đàn lên và cảm nhận khác biệt',
      'how.step3.text':
        'Chuyển lợi ích thẳng vào bài bạn thích—ít đau đầu ngón, nốt sạch hơn và luyện tập lâu hơn, thoải mái hơn.',

      // Comparison
      'comparison.title': 'Không RokTips vs Có RokTips',
      'comparison.subtitle': 'Luyện tập của bạn (guitar/nhạc cụ dây) trước và sau, đặt cạnh nhau.',
      'comparison.colWithout': 'Không có RokTips',
      'comparison.colWith': 'Có RokTips',
      'comparison.row1.label': 'Sức mạnh ngón',
      'comparison.row1.without': 'Tăng chậm và chỉ khi bạn cầm đàn trên tay',
      'comparison.row1.with': 'Luyện tập tay bấm có mục tiêu khi làm việc, di chuyển hoặc xem TV',
      'comparison.row2.label': 'Chai tay',
      'comparison.row2.without': 'Mất nhiều tuần và thường rát đau đầu ngón',
      'comparison.row2.with': 'Chai tay nhanh hơn để chơi bài bạn thích bớt đau hơn',
      'comparison.row3.label': 'Thời gian luyện',
      'comparison.row3.without': 'Bị giới hạn khi bạn ở gần đàn và thiết bị',
      'comparison.row3.with': 'Luyện sức mạnh theo guitar ở mọi nơi, không cần mang đàn',
      'comparison.row4.label': 'Đều đặn',
      'comparison.row4.without': 'Dễ bỏ lỡ khi cuộc sống bận rộn',
      'comparison.row4.with': 'Những buổi luyện nhanh phù hợp với công việc, gia đình và lịch diễn',

      // Testimonials
      'testimonials.title': 'Được Người Chơi Guitar Yêu Thích',
      'testimonials.subtitle':
        'Tham gia cùng 2.400+ người chơi guitar và nhạc cụ dây dùng RokTips để luyện tập dễ chịu hơn và nghe hay hơn.',
      'testimonials.card1.quote':
        'Cách rất hay để tăng lực ngón khi tôi không thể mang đàn theo. Tôi dùng lúc nghỉ trưa và thấy khác biệt rõ khi cắm đàn buổi tối.',
      'testimonials.card1.cite': 'Sam · Chơi guitar tại nhà',
      'testimonials.card2.quote':
        'Tôi dùng RokTips để khởi động nhanh trước khi tập scale và solo. Ngón tay vào “form” nhanh hơn và tôi chơi lâu hơn mà ít mỏi.',
      'testimonials.card2.cite': 'Mia · Người chơi giải trí',
      'testimonials.card3.quote':
        'Tôi là người mới và đầu ngón tay từng rát như bỏng. RokTips giúp tôi tạo chai tay để có thể kiên trì học hợp âm.',
      'testimonials.card3.cite': 'Alex · Người mới tập guitar',

      // Final CTA
      'cta.urgency': 'Miễn phí vận chuyển cho mọi đơn RokTips',
      'cta.headline': 'Ngón Tay Khỏe Hơn. Bắt Đầu Ngay.',
      'cta.text':
        'Tham gia cùng hàng ngàn người chơi guitar và nhạc cụ dây đang luyện tập với RokTips. Không cần mang đàn—chỉ vài phút mỗi lần. Đặt ngay và nhận miễn phí vận chuyển, mọi đơn.',

      // Video modals
      'videoModal.closeAria': 'Đóng video',
      'videoModal.youtubeAria': 'Video demo RokTips',
      'videoModal.youtubeTitle': 'Video demo RokTips',
      'videoModal.localAria': 'Video RokTips',
      'videoModal.noSupport': 'Trình duyệt của bạn không hỗ trợ phát video nhúng.',

      // Interest modal
      'interest.closeAria': 'Đóng biểu mẫu đăng ký',
      'interest.title': 'Đăng ký nhận thông tin RokTips',
      'interest.subtitle': 'Sắp ra mắt. Hãy để lại thông tin, chúng tôi sẽ báo ngay khi RokTips mở bán.',
      'interest.firstNameLabel': 'Tên',
      'interest.firstNamePlaceholder': 'An',
      'interest.emailLabel': 'Email',
      'interest.emailPlaceholder': 'ban@example.com',
      'interest.channelLegend': 'Ứng dụng nhận tin nhắn',
      'interest.phonePlaceholder': '+84 7123 456 789',
      'interest.success': 'Cảm ơn bạn! Chúng tôi sẽ thông báo khi RokTips sẵn sàng.',
      'interest.submit': 'Báo tôi khi RokTips ra mắt',
      'interest.privacyHtml':
        'Chúng tôi chỉ dùng thông tin của bạn để thông báo về RokTips và ưu đãi liên quan. Xem <a class="legal-link" href="privacy.html">Chính sách quyền riêng tư</a> và <a class="legal-link" href="terms.html">Điều khoản sử dụng</a>.',

      // Legal pages
      'legal.back': '← Về trang chủ',
      'legal.updated': 'Cập nhật lần cuối: 2026-03-18',
      'privacy.metaTitle': 'Chính sách quyền riêng tư – RokTips',
      'privacy.metaDescription': 'Chính sách quyền riêng tư của RokTips.',
      'privacy.title': 'Chính sách quyền riêng tư',
      'privacy.introTitle': 'Phạm vi chính sách',
      'privacy.introText': 'Chính sách này giải thích thông tin chúng tôi thu thập, lý do thu thập và cách sử dụng.',
      'privacy.collectTitle': 'Thông tin chúng tôi thu thập',
      'privacy.collect1': 'Thông tin liên hệ bạn cung cấp (ví dụ: tên, email, số điện thoại).',
      'privacy.collect2': 'Ứng dụng nhắn tin (WhatsApp hoặc Zalo) nếu bạn chọn nhận cập nhật qua điện thoại.',
      'privacy.collect3': 'Một số dữ liệu kỹ thuật cơ bản (ví dụ: user agent, URL trang) để chống spam và chẩn đoán lỗi.',
      'privacy.useTitle': 'Cách chúng tôi sử dụng thông tin',
      'privacy.use1': 'Liên hệ về ngày ra mắt RokTips, tình trạng mở bán và ưu đãi liên quan.',
      'privacy.use2': 'Phản hồi yêu cầu và câu hỏi của bạn.',
      'privacy.use3': 'Cải thiện hoạt động marketing và trải nghiệm website.',
      'privacy.purchaseTitle': 'Mua hàng',
      'privacy.purchaseText': 'Việc mua hàng được thực hiện trên nền tảng bên thứ ba (ví dụ Shopify hoặc TikTok Shop). Website này không xử lý thông tin thanh toán.',
      'privacy.sharingTitle': 'Chia sẻ dữ liệu',
      'privacy.sharingText':
        'Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi có thể chia sẻ với nhà cung cấp dịch vụ giúp thu thập/lưu trữ lead (ví dụ: công cụ biểu mẫu/bảng tính) chỉ cho các mục đích nêu trên.',
      'privacy.retentionTitle': 'Lưu trữ',
      'privacy.retentionText': 'Chúng tôi lưu trữ thông tin chỉ trong thời gian cần thiết cho truyền thông ra mắt/marketing hoặc theo yêu cầu pháp luật.',
      'privacy.rightsTitle': 'Quyền lựa chọn của bạn',
      'privacy.rightsText': 'Bạn có thể yêu cầu truy cập, chỉnh sửa, xóa dữ liệu hoặc hủy nhận thông tin marketing bất cứ lúc nào.',
      'privacy.contactTitle': 'Liên hệ',
      'privacy.contactText':
        'Để yêu cầu liên quan đến quyền riêng tư, hãy liên hệ <a class="legal__link" href="mailto:anthony@roktips.com">anthony@roktips.com</a>.',

      'terms.metaTitle': 'Điều khoản sử dụng – RokTips',
      'terms.metaDescription': 'Điều khoản sử dụng của RokTips.',
      'terms.title': 'Điều khoản sử dụng',
      'terms.acceptTitle': 'Chấp nhận điều khoản',
      'terms.acceptText': 'Khi sử dụng website này, bạn đồng ý với các Điều khoản sử dụng.',
      'terms.infoTitle': 'Chỉ mang tính thông tin',
      'terms.infoText': 'Nội dung trên website nhằm mục đích thông tin và marketing. Đây không phải là lời khuyên y tế.',
      'terms.eligibilityTitle': 'Điều kiện sử dụng',
      'terms.eligibilityText': 'Bạn cần có khả năng giao kết hợp đồng theo quy định pháp luật để sử dụng website.',
      'terms.purchasesTitle': 'Mua hàng',
      'terms.purchasesText':
        'Việc mua hàng được thực hiện trên nền tảng bên thứ ba (ví dụ Shopify hoặc TikTok Shop). Điều khoản và chính sách của họ sẽ được áp dụng.',
      'terms.linksTitle': 'Liên kết bên thứ ba',
      'terms.linksText': 'Website có thể liên kết đến trang bên thứ ba. Chúng tôi không chịu trách nhiệm về nội dung hay hoạt động của các trang đó.',
      'terms.ipTitle': 'Quyền sở hữu trí tuệ',
      'terms.ipText': 'Mọi nội dung trên website thuộc RokTips hoặc bên cấp phép và không được sao chép khi chưa được cho phép.',
      'terms.disclaimerTitle': 'Tuyên bố miễn trừ',
      'terms.disclaimerText': 'Website được cung cấp “nguyên trạng” và không bảo đảm dưới mọi hình thức trong phạm vi pháp luật cho phép.',
      'terms.liabilityTitle': 'Giới hạn trách nhiệm',
      'terms.liabilityText': 'RokTips không chịu trách nhiệm cho các thiệt hại gián tiếp/phát sinh từ việc bạn sử dụng website.',
      'terms.changesTitle': 'Thay đổi điều khoản',
      'terms.changesText': 'Chúng tôi có thể cập nhật điều khoản theo thời gian bằng cách đăng phiên bản mới trên trang này.',
      'terms.contactTitle': 'Liên hệ',
      'terms.contactText':
        'Có câu hỏi về điều khoản? Email <a class="legal__link" href="mailto:anthony@roktips.com">anthony@roktips.com</a>.',

      // Footer
      'footer.copy': '© roktips.com. Bảo lưu mọi quyền.',
      'footer.b2b': 'Khách mua sỉ (B2B)?',
      'footer.privacy': 'Quyền riêng tư',
      'footer.terms': 'Điều khoản',
      'footer.linksAria': 'Liên kết chân trang',
      'footer.backToTopAria': 'Lên đầu trang',

      // Common
      'common.watchVideo': 'Xem video',
      'common.buyShopify': 'Mua trên Shopify',
      'common.buyTiktok': 'Mua trên TikTok',

      // Interest modal (only the pieces used by JS for now)
      'modal.error.contactRequired': 'Vui lòng nhập ít nhất email hoặc số điện thoại.',
      'modal.error.chooseChannel': 'Vui lòng chọn WhatsApp hoặc Zalo nếu bạn muốn nhận cập nhật qua điện thoại.',
      'modal.error.saveFailed': 'Đã xảy ra lỗi khi lưu thông tin. Vui lòng thử lại sau.'
    },
    en: {
      // Document
      'doc.title': 'RokTips – Stronger Fingers for Guitarists & String Players',
      'doc.description':
        'RokTips – For guitarists and other string players who want stronger fingers, faster. Build calluses, strength, and dexterity anywhere so you can play longer with less pain.',

      // Language toggle
      'lang.aria': 'Language selector',
      'lang.toggleAria': 'Toggle language',
      'lang.vnTitle': 'Tiếng Việt',
      'lang.enTitle': 'English',

      // Banner
      'banner.badge': 'Offer',
      'banner.text': 'Free shipping on every RokTips order',

      // Hero
      'hero.brand': 'For electric, acoustic & bass guitarists<br>(and other string players)',
      'hero.headline': 'Play Longer, Stronger.',
      'hero.subheadline':
        'Stay connected to your instrument anywhere with a pocket‑sized fingertip trainer that builds strength, calluses, and control.',
      'hero.urgency': 'Free shipping on every RokTips order — delivered straight to your door.',
      'hero.feature1': 'Beginners build calluses faster',
      'hero.feature2': 'Practice strength drills without a guitar',
      'hero.feature3': 'Quick warm‑ups before you play',

      // Social proof
      'stickyBuy.aria': 'Quick purchase',
      'socialProof.aria': 'Social proof',
      'socialProof.text':
        'Trusted by everyday guitarists (and other string players) at home, at work, and on the road',
      'socialProof.count': '4.8&nbsp;&nbsp;2,400+ players',

      // Demo
      'demo.title': 'See RokTips in Action',
      'demo.subtitle':
        'Watch how real guitarists use RokTips to warm up, build calluses, and squeeze in extra practice anywhere.',

      // Benefits
      'benefits.title': 'Why Guitarists Choose RokTips',
      'benefits.subtitle':
        'Designed for guitarists first, and used by string players everywhere. Four ways RokTips helps you play more, hurt less, and sound better.',
      'benefits.card1.title': 'Build real fretting strength',
      'benefits.card1.text':
        'Target the same muscles you use on the fretboard so chords ring out clearly and long practice sessions feel easier.',
      'benefits.card2.title': 'Develop solid calluses',
      'benefits.card2.text':
        "Build protective fingertip calluses away from the strings, so you can spend more time actually playing and less time nursing sore fingers.",
      'benefits.card3.title': 'Improve finger control',
      'benefits.card3.text':
        'Train independent finger movement and coordination so your chord changes get smoother and your riffs get cleaner.',
      'benefits.card4.title': 'Practise guitar skills anywhere',
      'benefits.card4.text':
        'No guitar needed—use RokTips at your desk, on the sofa, or during your commute and show up to the fretboard already warmed up.',

      // How it works
      'how.title': 'How It Works for String Players',
      'how.subtitle':
        'Three simple steps you can add to any practice routine—whether you play guitar, bass, or other string instruments.',
      'how.step1.title': 'Slip RokTips on your fretting/playing hand',
      'how.step1.text':
        'Slide RokTips onto the fingers you use most on the fretboard or fingerboard. They feel snug but comfortable, with no setup or straps.',
      'how.step2.title': 'Do short squeeze‑and‑release drills',
      'how.step2.text':
        'Squeeze and release each finger for a short set. RokTips simulate string resistance so you can train strength and calluses without your instrument.',
      'how.step3.title': 'Pick up your guitar (or other string instrument) and feel the difference',
      'how.step3.text':
        'Transfer your gains straight to your favourite songs or pieces—less fingertip pain, cleaner notes, and longer, more enjoyable practice sessions.',

      // Comparison
      'comparison.title': 'Without vs With RokTips',
      'comparison.subtitle': 'What your practice looks like as a guitarist or string player, side‑by‑side.',
      'comparison.colWithout': 'Without RokTips',
      'comparison.colWith': 'With RokTips',
      'comparison.row1.label': 'Finger strength',
      'comparison.row1.without': 'Builds slowly, only while you have a guitar in your hands',
      'comparison.row1.with': 'Targeted fretting‑hand training while you work, commute, or watch TV',
      'comparison.row2.label': 'Calluses',
      'comparison.row2.without': 'Take weeks to develop, with sore, stinging fingertips',
      'comparison.row2.with': 'Calluses develop faster so playing your favourite songs hurts less',
      'comparison.row3.label': 'Practice time',
      'comparison.row3.without': "Limited to when you're near your guitar and amp",
      'comparison.row3.with': 'Practise guitar‑specific strength drills anywhere, no guitar needed',
      'comparison.row4.label': 'Consistency',
      'comparison.row4.without': "Easy to skip days when life gets busy",
      'comparison.row4.with': 'Quick sessions that fit around work, family, and gigs',

      // Testimonials
      'testimonials.title': 'Loved by Everyday Guitarists',
      'testimonials.subtitle':
        'Join 2,400+ guitarists and other string players using RokTips to make practice feel better and sound better.',
      'testimonials.card1.quote':
        "Great way to build finger strength when I can't take my guitar with me. I use it on my lunch break and notice the difference when I plug in at night.",
      'testimonials.card1.cite': 'Sam · Bedroom guitarist',
      'testimonials.card2.quote':
        'I use RokTips for a quick warm‑up before I practise scales and solos. My fingers feel ready way quicker and I can go longer without fatigue.',
      'testimonials.card2.cite': 'Mia · Hobby player',
      'testimonials.card3.quote':
        "I'm a total beginner and my fingertips used to be on fire after 10 minutes. RokTips helped me build calluses so I could actually stick with learning chords.",
      'testimonials.card3.cite': 'Alex · New guitarist',

      // Final CTA
      'cta.urgency': 'Free shipping on every RokTips order',
      'cta.headline': 'Get Stronger Fingers. Start Today.',
      'cta.text':
        'Join thousands of guitar players and other string musicians training with RokTips. No instrument needed—just a few minutes a day. Order now and get free shipping, every time.',

      // Video modals
      'videoModal.closeAria': 'Close video',
      'videoModal.youtubeAria': 'RokTips demo video',
      'videoModal.youtubeTitle': 'RokTips demo video',
      'videoModal.localAria': 'RokTips video',
      'videoModal.noSupport': 'Sorry, your browser doesn’t support embedded videos.',

      // Interest modal
      'interest.closeAria': 'Close registration form',
      'interest.title': 'Register your interest in RokTips',
      'interest.subtitle':
        "Launching soon. Leave your details and we'll let you know the moment RokTips goes live.",
      'interest.firstNameLabel': 'First name',
      'interest.firstNamePlaceholder': 'Alex',
      'interest.emailLabel': 'Email',
      'interest.emailPlaceholder': 'you@example.com',
      'interest.channelLegend': 'Preferred app for messages',
      'interest.phonePlaceholder': '+84 7123 456 789',
      'interest.success': "Thanks for your interest! We'll notify you when RokTips is available.",
      'interest.submit': 'Notify me when RokTips launches',
      'interest.privacyHtml':
        'We’ll only use your details to let you know about the RokTips launch and related offers. See <a class="legal-link" href="privacy.html">Privacy Policy</a> and <a class="legal-link" href="terms.html">Terms of Use</a>.',

      // Legal pages
      'legal.back': '← Back to home',
      'legal.updated': 'Last updated: 2026-03-18',
      'privacy.metaTitle': 'Privacy Policy – RokTips',
      'privacy.metaDescription': 'Privacy Policy for RokTips.',
      'privacy.title': 'Privacy Policy',
      'privacy.introTitle': 'What This Policy Covers',
      'privacy.introText': 'This policy explains what information we collect, why we collect it, and how we use it.',
      'privacy.collectTitle': 'Information We Collect',
      'privacy.collect1': 'Contact details you provide (such as name, email, and phone number).',
      'privacy.collect2': 'Preferred messaging app (WhatsApp or Zalo) if you opt in to phone updates.',
      'privacy.collect3':
        'Basic technical data sent by your browser (such as user agent and the page URL) to help us prevent spam and diagnose issues.',
      'privacy.useTitle': 'How We Use Your Information',
      'privacy.use1': 'To contact you about the RokTips launch, availability, and related offers.',
      'privacy.use2': 'To respond to your requests and questions.',
      'privacy.use3': 'To improve our marketing and website experience.',
      'privacy.purchaseTitle': 'Purchases',
      'privacy.purchaseText':
        'Purchases are completed on third‑party platforms (for example Shopify or TikTok Shop). We don’t process payment details on this website.',
      'privacy.sharingTitle': 'Sharing Your Information',
      'privacy.sharingText':
        'We do not sell your personal information. We may share it with service providers who help us collect and store leads (for example, form and spreadsheet tools), only for the purposes described above.',
      'privacy.retentionTitle': 'Retention',
      'privacy.retentionText':
        'We keep your information only as long as needed for marketing and launch communications, or as required by law.',
      'privacy.rightsTitle': 'Your Choices',
      'privacy.rightsText':
        'You can request access, correction, or deletion of your information, or opt out of marketing messages at any time.',
      'privacy.contactTitle': 'Contact',
      'privacy.contactText':
        'To make a privacy request, contact us at <a class="legal__link" href="mailto:anthony@roktips.com">anthony@roktips.com</a>.',

      'terms.metaTitle': 'Terms of Use – RokTips',
      'terms.metaDescription': 'Terms of Use for RokTips.',
      'terms.title': 'Terms of Use',
      'terms.acceptTitle': 'Acceptance',
      'terms.acceptText': 'By using this website, you agree to these Terms of Use.',
      'terms.infoTitle': 'Information Only',
      'terms.infoText':
        'Content on this website is provided for general information and marketing purposes. It is not medical advice.',
      'terms.eligibilityTitle': 'Eligibility',
      'terms.eligibilityText': 'You must be able to form a legally binding contract to use this website.',
      'terms.purchasesTitle': 'Purchases',
      'terms.purchasesText':
        'Purchases are completed on third‑party platforms (for example Shopify or TikTok Shop). Their terms and policies apply.',
      'terms.linksTitle': 'Third‑Party Links',
      'terms.linksText':
        'This website may link to third‑party sites. We are not responsible for their content or practices.',
      'terms.ipTitle': 'Intellectual Property',
      'terms.ipText':
        'All content on this website is owned by RokTips or its licensors and may not be copied without permission.',
      'terms.disclaimerTitle': 'Disclaimer',
      'terms.disclaimerText': 'This website is provided “as is” without warranties of any kind, to the fullest extent permitted by law.',
      'terms.liabilityTitle': 'Limitation of Liability',
      'terms.liabilityText':
        'RokTips will not be liable for any indirect or consequential damages arising from your use of this website.',
      'terms.changesTitle': 'Changes',
      'terms.changesText': 'We may update these terms from time to time by posting a new version on this page.',
      'terms.contactTitle': 'Contact',
      'terms.contactText':
        'Questions about these terms? Email <a class="legal__link" href="mailto:anthony@roktips.com">anthony@roktips.com</a>.',

      // Footer
      'footer.copy': '© roktips.com. All rights reserved.',
      'footer.b2b': 'B2B Buyer?',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.linksAria': 'Footer links',
      'footer.backToTopAria': 'Back to top',

      // Common
      'common.watchVideo': 'Watch Video',
      'common.buyShopify': 'Buy on Shopify',
      'common.buyTiktok': 'Buy on TikTok',

      // Interest modal (only the pieces used by JS for now)
      'modal.error.contactRequired': 'Please provide at least an email address or phone number.',
      'modal.error.chooseChannel': 'Please choose WhatsApp or Zalo as your preferred app for phone updates.',
      'modal.error.saveFailed': 'Something went wrong saving your details. Please try again in a moment.'
    }
  };

  function getStoredLang() {
    try {
      var v = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (v === 'en' || v === 'vi') return v;
    } catch (e) {}
    return 'vi';
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {}
  }

  function t(lang, key) {
    var dict = I18N[lang] || I18N.vi;
    return dict[key] || (I18N.vi && I18N.vi[key]) || key;
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    // Sync toggle UI if present (e.g., navigating between pages)
    if (langToggle) {
      langToggle.checked = lang === 'en';
    }

    // Update any tagged content in the DOM (we'll tag the whole page next).
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(lang, key);
    });
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      if (!key) return;
      el.setAttribute('content', t(lang, key));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = t(lang, key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', t(lang, key));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', t(lang, key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (!key) return;
      el.setAttribute('title', t(lang, key));
    });
  }

  // Initialize toggle state + apply immediately on load (fixes “needs another toggle”)
  var initialLang = getStoredLang();
  if (langToggle) {
    langToggle.checked = initialLang === 'en';
    langToggle.addEventListener('change', function () {
      var lang = langToggle.checked ? 'en' : 'vi';
      storeLang(lang);
      applyLanguage(lang);
    });
  }
  applyLanguage(initialLang);

  // --- Launch banner ---
  var launchBanner = document.getElementById('launch-banner');

  if (launchBanner) {
    document.body.classList.add('has-banner');
  }

  // --- Sticky buy bar ---
  var stickyBuy = document.getElementById('sticky-buy');
  var hero = document.getElementById('hero');

  if (stickyBuy && hero) {
    var heroHeight = hero.offsetHeight;
    var threshold = Math.min(heroHeight * 0.5, 380);

    function updateStickyBuy() {
      if (window.scrollY > threshold) {
        stickyBuy.classList.add('is-visible');
      } else {
        stickyBuy.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', updateStickyBuy, { passive: true });
    updateStickyBuy();
  }

  // --- Video: open YouTube embed in modal ---
  var videoModal = document.getElementById('video-modal');
  var videoIframe = document.getElementById('video-iframe');
  var videoOpenButtons = document.querySelectorAll('.js-open-video');
  var videoCloseSelectors = '[data-video-close]';
  var YOUTUBE_VIDEO_ID = 'Y_FrEuYZ6Yo';

  function openVideoModal() {
    // If running from file://, YouTube embed may fail (Error 153). Fallback to new tab.
    if (window.location.protocol === 'file:') {
      window.open('https://www.youtube.com/watch?v=' + YOUTUBE_VIDEO_ID, '_blank', 'noopener');
      return;
    }
    if (!videoModal || !videoIframe) return;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    var originParam = encodeURIComponent(window.location.origin);
    var src =
      'https://www.youtube.com/embed/' +
      YOUTUBE_VIDEO_ID +
      '?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=' +
      originParam;
    videoIframe.src = src;
  }

  function closeVideoModal() {
    if (!videoModal || !videoIframe) return;
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    videoIframe.src = '';
  }

  if (videoModal && videoOpenButtons.length) {
    videoOpenButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openVideoModal();
      });
    });

    videoModal.querySelectorAll(videoCloseSelectors).forEach(function (el) {
      el.addEventListener('click', function () {
        closeVideoModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    });
  }

  // --- Local MP4 video in modal ---
  var localVideoModal = document.getElementById('local-video-modal');
  var localVideo = document.getElementById('local-video');
  var localVideoOpenButtons = document.querySelectorAll('.js-open-local-video');
  var localVideoCloseSelectors = '[data-local-video-close]';

  function openLocalVideoModal() {
    if (!localVideoModal || !localVideo) return;
    localVideoModal.classList.add('is-open');
    localVideoModal.setAttribute('aria-hidden', 'false');
    try {
      localVideo.currentTime = 0;
      var playPromise = localVideo.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    } catch (e) {}
  }

  function closeLocalVideoModal() {
    if (!localVideoModal || !localVideo) return;
    localVideoModal.classList.remove('is-open');
    localVideoModal.setAttribute('aria-hidden', 'true');
    try {
      localVideo.pause();
      localVideo.currentTime = 0;
    } catch (e) {}
  }

  if (localVideoModal && localVideoOpenButtons.length) {
    localVideoOpenButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openLocalVideoModal();
      });
    });

    localVideoModal.querySelectorAll(localVideoCloseSelectors).forEach(function (el) {
      el.addEventListener('click', function () {
        closeLocalVideoModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLocalVideoModal();
      }
    });
  }

  // --- Scroll reveal ---
  var revealSelector = '.reveal';
  var revealElements = document.querySelectorAll(revealSelector);

  if (revealElements.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // --- Interest registration modal ---
  var modal = document.getElementById('interest-modal');
  var openButtons = document.querySelectorAll('.js-open-register');
  var openB2BButtons = document.querySelectorAll('.js-open-b2b');
  var closeSelectors = '[data-modal-close]';
  var interestType = 'consumer';

  function openModal() {
    if (!modal) return;
    interestType = 'consumer';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function openB2BModal() {
    if (!modal) return;
    interestType = 'b2b';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    interestType = 'consumer';
  }

  if (modal && openButtons.length) {
    openButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    modal.querySelectorAll(closeSelectors).forEach(function (el) {
      el.addEventListener('click', function () {
        closeModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    var form = document.getElementById('interest-form');
    var errorEl = document.getElementById('interest-error');
    var successEl = document.getElementById('interest-success');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var firstName = document.getElementById('interest-first-name');
        var email = document.getElementById('interest-email');
        var phone = document.getElementById('interest-phone');
        var channelInputs = form.querySelectorAll('input[name="channel"]');

        var firstNameVal = firstName ? firstName.value.trim() : '';
        var emailVal = email ? email.value.trim() : '';
        var phoneRawVal = phone ? phone.value.trim() : '';

        // Treat the default "+84" (or any bare country code like "+1") as "no phone provided".
        // This avoids forcing a channel selection when the user only enters name + email.
        var phoneIsOnlyCountryCode = /^\+\d{1,4}\s*$/.test(phoneRawVal);
        var phoneHasDigits = /\d/.test(phoneRawVal) && !phoneIsOnlyCountryCode;
        var hasContact = emailVal !== '' || phoneHasDigits;

        if (!hasContact) {
          if (errorEl) {
            errorEl.textContent = t(getStoredLang(), 'modal.error.contactRequired');
            errorEl.hidden = false;
          }
          if (successEl) successEl.hidden = true;
          return;
        }

        if (phoneHasDigits) {
          var channelSelected = false;
          channelInputs.forEach(function (input) {
            if (input.checked) channelSelected = true;
          });
          if (!channelSelected) {
            if (errorEl) {
              errorEl.textContent = t(getStoredLang(), 'modal.error.chooseChannel');
              errorEl.hidden = false;
            }
            if (successEl) successEl.hidden = true;
            return;
          }
        }

        if (errorEl) errorEl.hidden = true;

        var channelVal = '';
        channelInputs.forEach(function (input) {
          if (input.checked) channelVal = input.value;
        });

        // Parse phone input:
        // - If user enters a full international number (starts with +), extract country code.
        // - Otherwise assume Vietnam +84 and treat the input as local/national number.
        var DEFAULT_COUNTRY_CODE = '+84';
        var phoneCountryVal = '';
        var phoneVal = '';
        if (phoneHasDigits) {
          phoneCountryVal = DEFAULT_COUNTRY_CODE;
          var raw = phoneRawVal.replace(/\s+/g, ' ').trim();
          if (raw.charAt(0) === '+') {
            var match = raw.match(/^(\+\d{1,4})\s*(.*)$/);
            if (match) {
              phoneCountryVal = match[1];
              phoneVal = (match[2] || '').trim();
            } else {
              phoneVal = raw;
            }
          } else {
            phoneVal = raw;
          }
        }

        // Send to Google Apps Script endpoint (form-encoded to avoid CORS preflight)
        var SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzoZHSHwnk2Q_9ik8Jb5d1XF3PYtHEoN7oBDLPzSP6XlRxe9JsNy4tXBd0EzR6zg_gK/exec';

        var formData = new URLSearchParams();
        formData.append('first_name', firstNameVal);
        formData.append('email', emailVal);
        if (phoneHasDigits) {
          formData.append('phone_country', phoneCountryVal);
          formData.append('phone', phoneVal);
        }
        formData.append('channel', channelVal);
        formData.append('message', interestType === 'b2b' ? 'B2B' : 'B2C');
        formData.append('user_agent', navigator.userAgent);
        formData.append('page', window.location.href);

        fetch(SHEET_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formData.toString()
        })
          .then(function (res) {
            try {
              return res.json();
            } catch (e) {
              return { ok: res.ok };
            }
          })
          .then(function (data) {
            if (!data || data.ok === false) {
              throw new Error((data && data.error) || 'Error saving');
            }
            if (successEl) {
              successEl.hidden = false;
            }
            // Close modal shortly after success and reset form
            setTimeout(function () {
              form.reset();
              closeModal();
              if (successEl) successEl.hidden = true;
            }, 1800);
          })
          .catch(function () {
            if (errorEl) {
              errorEl.textContent = t(getStoredLang(), 'modal.error.saveFailed');
              errorEl.hidden = false;
            }
            if (successEl) successEl.hidden = true;
          });
      });
    }
  }

  if (modal && openB2BButtons.length) {
    openB2BButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openB2BModal();
      });
    });
  }
})();
