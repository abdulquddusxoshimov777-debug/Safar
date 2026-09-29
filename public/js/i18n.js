/**
 * Saffar i18n — Multi-language Engine (UZ, RU, EN)
 * Complete, unified and robust translations across all pages and widgets.
 */
(function () {
  const TRANSLATIONS = {
    uz: {
      // Header & Navigation
      nav_home: "Bosh sahifa",
      nav_places: "Joylar",
      nav_homes: "Uylar",
      nav_foods: "Taomlar",
      nav_crafts: "Hunarmandchilik",
      nav_services: "Xizmatlar",
      nav_about: "Biz haqimizda",
      nav_contact: "Bog'lanish",
      nav_login: "Kirish",
      nav_signup: "Ro'yxatdan o'tish",
      nav_profile: "Profilim",
      nav_cabinet: "Kabinet",
      nav_logout: "Chiqish",
      nav_add: "+ Joylash",

      // Drawer (Mobile Menu)
      drawer_home: "Asosiy",
      drawer_places: "Diqqatga sazovor joylar",
      drawer_homes: "Uylar va Mehmonxonalar",
      drawer_foods: "Milliy taomlar",
      drawer_crafts: "Hunarmandchilik",
      drawer_saved: "Sevimlilar ro'yxati",
      drawer_add: "Yangi e'lon joylash",
      drawer_lang: "🌐 Til / Language",
      drawer_profile: "👤 Profil kabineti",

      // Hero
      hero_title: 'O\'zbekistonni <span style="color:var(--clay);">kashf</span> eting',
      hero_tag: "Qadimiy Ipak yo'lida",
      hero_h1a: "O'zbekistonning",
      hero_h1b: "buyuk",
      hero_h1c: " tarixini his qiling",

      // Curated Gallery Section (Index)
      gallery_eyebrow: "Fotogalereya & Sayohat Maskonlari",
      gallery_title: "O'zbekistonning har bir burchagidan tanlab olingan rasmlar",
      gallery_viewall: "Barcha joylarni ko'rish →",

      // About us (Index & About page)
      about_eyebrow: "Biz haqimizda",
      about_h2: "O'zbekistonni qanday ekanligini kashf qiling!",
      about_title: "O'zbekistonni qanday ekanligini kashf qiling!",
      about_subtitle: "Saffar — sayohatchilarni O'zbekistonning eng qadimiy shaharlari, samimiy mezbonlari, mazali milliy taomlari va asl hunarmandchiligi bilan to'g'ridan-to'g'ri bog'lovchi ochiq turizm platformasi.",
      about_p1: "Saffar — qadimiy Ipak yo'li bo'ylab sayohat qiluvchilar, mahalliy samimiy mezbonlar, milliy hunarmandlar va mohir oshpazlarni vositachisiz birlashtiruvchi zamonaviy ochiq sayyohlik platformasi.",
      about_p2: "Biz har bir mehmonga o'zbek xalqining haqiqiy mehmondo'stligini his qildirish, madaniy merosimizni butun jahonga tanitish niyatida ishlaymiz.",
      about_btn_more: "Batafsil biz haqimizda →",
      about_btn_explore: "Joylar bilan tanishish →",
      about_btn_contact: "Biz bilan bog'lanish",
      about_stat_regions: "Viloyat va Hududlar",
      about_stat_places: "Tarixiy Maskonlar",
      about_stat_tourists: "Mamnun Sayyohlar",
      about_stat_exp: "Asl Milliy Tajriba",

      // Stats Banner (Index)
      stats_tag: "📊 O'zbekiston Statistikasi & Tahlillar",
      stats_title: "O'zbekiston Turizm va Milliy Statistikasi",
      stats_desc: "Yillar kesimida O'zbekistonga kelgan sayyohlar oqimi, davlatlar bo'yicha turistlar reytingi, viloyatlar taqsimoti va barcha rasmiy jadvallar bir joyda.",
      stats_btn: "Barcha Statistikalarni Ko'rish (Jadvallar) →",

      // Metro Banner (Index)
      metro_tag: "🚇 YANGI IMKONIYAT",
      metro_title: "Toshkent Metropoliteni Interaktiv Xaritasi",
      metro_desc: "Chilonzor, O'zbekiston, Yunusobod va yangi Yerusti Halqa yo'li bekatlari bo'yicha eng qulay yo'nalish va sayohat vaqtini aniqlang.",
      metro_btn: "🗺️ Metro xaritasini ochish →",

      // Weather Widget (Index)
      weather_eyebrow: "Ob-havo ma'lumotlari",
      weather_title: "O'zbekiston viloyatlari bo'yicha jonli ob-havo",
      weather_sub: "Sayohatingizni rejalashtirish uchun 14 ta hududdagi ayni paytdagi havo harorati va holati.",
      weather_search_ph: "Viloyatni qidirish...",
      weather_toggle_all: "Batafsil barchasi (14 ta viloyat) ↓",
      weather_toggle_collapse: "Qisqartirish (Faqat 3 ta viloyat) ↑",
      weather_humidity: "Namlik",
      weather_wind_unit: "km/soat",
      weather_sunny: "Quyoshli / Musaffo",
      weather_partly_cloudy: "Qisman bulutli",
      weather_foggy: "Tumanli",
      weather_rainy: "Yomg'irli",
      weather_snowy: "Qorli",
      weather_stormy: "Jala / Bo'ron",
      weather_clear_warm: "Iliq va ochiq",

      // Reviews
      rev_eyebrow: "Sayohatchilar sharhlari",
      rev_h2: "Haqiqiy sayohatlardan haqiqiy hikoyalar",
      rev_btn: "Tajribangizni ulashing",
      rev_empty: "Hozircha sharhlar yo'q. Birinchi bo'lib sharh qoldiring!",
      rev_show_all: "Barchasini ko'rish ↓",
      rev_collapse: "Yig'ish ↑",

      // Review Modal
      modal_title: "Tajribangizni ulashing",
      modal_signin_msg: "Sharh qoldirish uchun tizimga kiring.",
      modal_signin_btn: "Kirish",
      modal_signup_btn: "Ro'yxatdan o'tish",
      modal_stay: "Uy / Joylashuv",
      modal_rating: "Baho",
      modal_text: "Sharhingiz",
      modal_text_ph: "Boshqalarga tajribangiz haqida aytib bering…",
      modal_media: "Rasmlar (Max 5MB / rasm)",
      modal_media_hint: "Rasm yuklash uchun bosing yoki torting",
      modal_submit: "Sharh joylash",

      // Search & Filters
      search_location: "Joylashuv",
      search_where: "Qayerga?",
      search_checkin: "Kelish sanasi",
      search_checkout: "Ketish sanasi",
      search_guests: "Mehmonlar",
      filter_all: "Barchasi",
      filter_all_types: "🌐 Barcha turlar",
      filter_region_title: "📍 Viloyat / Shahar bo'yicha saralash:",
      filter_all_regions: "🌐 Barcha viloyatlar",

      // Places Page (places.html)
      places_eyebrow: "Ipak yo'lining mashhur maskonlari",
      places_count_label: "diqqatga sazovor joylar",
      dest_h2: "Ipak yo'lining betakror rang va jozibaga ega afsonaviy shaharlarini kashf eting.",
      filter_place_type_title: "🎯 Joy turi bo'yicha saralash:",
      place_cat_monuments: "🏛 Tarixiy obidalar",
      place_cat_parks: "🌳 Bog'lar & Parklar",
      place_cat_bazaars: "🛍 Bozorlar",
      place_cat_nature: "⛰ Tabiat & Tog'lar",
      place_cat_museums: "🎨 Muzey va San'at",
      place_cat_restaurants: "🍇 Restoranlar",
      no_places_found: "Ushbu mezon bo'yicha joylar topilmadi",

      // Stays Page (stays.html)
      stays_eyebrow: "Ipak yo'li bo'ylab turar joylar",
      stays_h2: "O'zbekistondagi turar joylar va mehmonxonalar",
      stays_count_label: "uylar va turar joylar",
      filter_stay_type_title: "🏡 Uy turi bo'yicha saralash:",
      tag_hotel: "Mehmonxona",
      tag_home_hotel: "Uy mehmonxonasi",
      tag_hostel: "Hostel",
      tag_dacha: "Dacha",
      tag_yurt: "Chodir / O'tov",
      tag_historic: "Tarixiy maskon",
      msg_empty_stays: "Ushbu mezon bo'yicha turar joy topilmadi.",
      stays_empty_sub: "Boshqa shahar yoki filtrni tanlab ko'ring.",
      per_guest: "/ kishi boshiga",

      // Foods Page (foods.html)
      foods_eyebrow: "Ipak yo'lining mashhur milliy taomlari",
      foods_h2: "O'zbek Milliy Taomlari & Pazandachilik Xaritasi",
      foods_sub: "O'zbekistonning betakror ta'mlarini his qiling va har bir milliy taomning kelib chiqish tarixini bilib oling.",
      filter_food_type_title: "🍲 Taom turi bo'yicha saralash:",
      filter_all_foods: "✨ Barcha taomlar",
      tag_liquid_dishes: "Suyuq taomlar",
      tag_main_dishes: "Quyuq taomlar",
      tag_dough_foods: "Xamir ovqatlar va pishiriqlar",
      tag_meat_dishes: "Go'shtli taomlar va kaboblar",
      tag_salads: "Salatlar va sovuq gazaklar",
      tag_sweets: "Shirinliklar va milliy qandolat",
      no_foods_found: "Ushbu mezon bo'yicha taomlar topilmadi",
      foods_count_label: "taomlar",
      price_label_food: "narxi",

      // Crafts Page (crafts.html)
      crafts_eyebrow: "Ipak yo'lining an'anaviy hunarmandchiligi",
      crafts_h2: "An'anaviy Buyumlar & Hunarmandchilik",
      crafts_sub: "O'zbekiston usta va hunarmandlarining qo'l mehnati mahsulotlari va milliy esdalik sovg'alari.",
      filter_craft_type_title: "🏺 Hunarmandchilik turi bo'yicha saralash:",
      filter_all_crafts: "✨ Barcha buyumlar",
      tag_craft_pottery: "🏺 Sopolchilik (Kulolchilik)",
      tag_craft_textile: "🧵 Atlas & Adras (Ipak)",
      tag_craft_embroidery: "👑 Zardo'zlik & So'zana",
      tag_craft_knives: "🗡 Chust Pichoqlari",
      tag_craft_paper: "📜 Samarqand Ipak Qog'ozi",
      tag_craft_wood: "🪵 Yog'och o'ymakorligi",
      no_crafts_found: "Ushbu kategoriyada buyumlar topilmadi",
      crafts_count_label: "buyumlar",
      price_label_craft: "bahosi",

      // Saved Page (saved.html)
      saved_eyebrow: "Sevimlilar to'plami",
      saved_title: "Saqlangan uylar, taomlar va joylar",
      saved_sub: "Siz yurakcha tugmasi orqali belgilagan barcha sevimli e'lonlaringiz shu yerda saqlanadi.",
      saved_empty_title: "Hozircha saqlanganlar yo'q",
      saved_empty_sub: "Uylar, taomlar yoki joylar sahifasidagi yurakcha (♡) tugmasini bosing!",
      saved_btn_stays: "Uylarga o'tish",
      saved_btn_foods: "Taomlarga o'tish",
      saved_btn_crafts: "Buyumlarga o'tish",

      // Common Buttons & Actions
      btn_details: "🔍 Batafsil",
      btn_maps: "📍 Xarita",
      btn_clear_filters: "Filtrlarni tozalash",
      btn_back: "← Orqaga qaytish",
      btn_edit: "✏️ Tahrirlash",
      btn_delete: "🗑 O'chirish",

      // Detail Page (detail.html)
      detail_desc_title: "Tavsif va ma'lumotlar",
      detail_amenities_title: "Qulayliklar va Imkoniyatlar",
      detail_reviews_title: "Sayohatchilar sharhlari",
      detail_reviews_count: "ta sharh",
      detail_no_reviews: "Hozircha ushbu joy haqida sharhlar yo'q.",
      detail_leave_review: "Sharh qoldirish",
      detail_host_info: "Mezbon haqida",
      detail_not_found: "Ma'lumot topilmadi",
      detail_back_home: "Bosh sahifaga qaytish",

      // Account Page (account.html)
      acc_signout: "Chiqish",
      acc_delete: "🗑 Akkauntni o'chirish",
      acc_quick_title: "⚡ Qulayliklar va Tezkor Amallar",
      acc_quick_sub: "E'lon joylash, saqlangan sevimlilarni ko'rish va til sozlamalarini boshqaring.",
      acc_quick_add: "Yangi e'lon joylash",
      acc_quick_add_sub: "Uy, joy, taom yoki buyum",
      acc_quick_saved: "Sevimlilar ro'yxati",
      acc_quick_saved_sub: "Saqlab qo'yilgan joylar",
      acc_quick_lang: "🌐 Tilni tanlash",
      acc_listings_title: "📋 Mening joylagan e'lonlarim",
      acc_listings_sub: "Ushbu akkauntingiz orqali e'lon qilingan barcha joylar ro'yxati.",
      acc_btn_add: "+ Yangi e'lon qo'shish",
      acc_bio_title: "✍️ Men haqimda (Bio)",
      acc_bio_sub: "Ushbu ma'lumot saytdagi ochiq profilingizda boshqa foydalanuvchilarga ko'rinadi.",
      acc_bio_save: "💾 Bio'ni saqlash",

      // Contact Page (contact.html)
      contact_eyebrow: "Bog'lanish",
      contact_title: "Biz bilan aloqaga chiqing",
      contact_subtitle: "Savollaringiz, takliflaringiz yoki hamkorlik bo'yicha murojaatlaringiz bo'lsa, quyidagi forma orqali xabar qoldiring.",

      // Services Page (services.html)
      services_eyebrow: "Xizmatlar va Mahsulotlar",
      services_title: "Saffar bilan O'zbekistonning barcha imkoniyatlari",
      services_subtitle: "Sayohatingizni unutilmas va qulay qilish uchun zarur bo'lgan barcha xizmatlar bir joyda jamlangan.",

      // Footer
      footer_desc: "O'zbekiston bo'ylab noyob turar joylar, milliy taomlar va an'anaviy hunarmandchilik.",
      footer_col_explore: "Kashf qiling",
      footer_places: "Mashhur joylar",
      footer_stays: "Uylar va mehmonxonalar",
      footer_foods: "Milliy taomlar",
      footer_crafts: "Hunarmandchilik",
      footer_services: "Xizmatlar va mahsulotlar",
      footer_saved: "Sevimlilar ro'yxati",
      footer_col_company: "Kompaniya",
      footer_about: "Saffar haqida",
      footer_our_services: "Bizning xizmatlar",
      footer_contact: "Biz bilan bog'lanish",
      footer_help: "Savol-javob va yordam",
      footer_col_hosting: "Mezbonlik",
      footer_host_home: "Uyingizni joylashtiring",
      footer_host_food: "Taom tajribasini ulashing",
      footer_host_resp: "Mas'uliyatli mezbonlik",
      footer_support: "Qo'llab-quvvatlash markazi",
      footer_copy: "© 2026 Saffar. O'zbekistonni kashf eting.",
      footer_privacy: "Maxfiylik",
      footer_terms: "Foydalanish shartlari",

      // Cities
      city_tashkent: "Toshkent",
      city_samarkand: "Samarqand",
      city_bukhara: "Buxoro",
      city_andijan: "Andijon",
      city_jizzakh: "Jizzax",
      city_kashkadarya: "Qashqadaryo",
      city_navoiy: "Navoiy",
      city_namangan: "Namangan",
      city_surkhandarya: "Surxondaryo",
      city_sirdarya: "Sirdaryo",
      city_fergana: "Farg`ona",
      city_khorazm: "Xorazm",
      city_karakalpakstan: "Qoraqalpog'iston",

      // Messages
      msg_rev_write: "Iltimos, sharhingizni yozing.",
      msg_rev_success: "Sharhingiz muvaffaqiyatli joylandi!",
      msg_err_server: "Server bilan bog'lanib bo'lmadi.",
      msg_login_required: "Tizimga kirish talab qilinadi.",

      // Auth (Login & Signup)
      auth_login_eyebrow: "Qaytganingizdan xursandmiz",
      auth_login_title: "Saffar tizimiga kirish",
      auth_login_sub: "O'zbekiston bo'ylab sayohatingizni davom ettirish uchun email va parolingizni kiriting.",
      auth_email: "Email manzili",
      auth_password: "Parol",
      auth_btn_login: "Kirish",
      auth_no_account: "Akkauntingiz yo'qmi?",
      auth_create_account: "Ro'yxatdan o'tish",
      auth_caption_eyebrow: "Qadimiy Ipak yo'li bo'ylab",
      auth_caption_title: "Oltita shahar. Yagona sayohat.",
      auth_caption_sub: "Saqlangan joylar, kelgusi marshrutlar va mezbonlar bilan muloqotni davom ettiring.",
      auth_signup_eyebrow: "Saffarga qo'shiling",
      auth_signup_title: "Yangi akkaunt yaratish",
      auth_signup_sub: "Ismingiz, emailingiz va xavfsiz parolni kiriting.",
      auth_fullname: "To'liq ism",
      auth_confirm_pass: "Parolni tasdiqlang",
      auth_role_label: "Akkaunt turi / Siz kimsiz?",
      auth_role_tourist: "✈️ Sayohatchi / Turist",
      auth_role_host: "🏠 Joy beruvchi / Mezbon",
      auth_btn_signup: "Ro'yxatdan o'tish",
      auth_have_account: "Allaqachon akkauntingiz bormi?",

      // Account Extra
      acc_eyebrow: "Shaxsiy kabinet",
      acc_welcome: "Xush kelibsiz",
      acc_fullname: "To'liq ism",
      acc_email: "Email manzili",
      acc_role_label: "Akkaunt turi (Rol)",
      acc_role_admin: "👑 Bosh Administrator (Admin)",
      acc_role_host: "🏠 Joy beruvchi / Mezbon (Host)",
      acc_role_tourist: "✈️ Sayohatchi / Turist (Tourist)",
      acc_role_toggle: "🔄 Rolni almashtirish (Mezbon ↔ Turist)",
      acc_member_since: "A'zolik sanasi",
      acc_account_id: "Akkaunt ID",
      acc_no_listings: "Hozircha siz e'lon joylamagansiz",
      acc_no_listings_sub: "Yuqoridagi '+ Joylash' yoki '+ Yangi e'lon qo'shish' tugmasi orqali e'loningizni joylang.",
      acc_bio_ph: "O'zingiz haqingizda qisqacha ma'lumot yozing...",

      // Detail Extra
      detail_back: "← Orqaga qaytish",
      detail_map_title: "📍 Joylashuv xaritasi",
      detail_leave_review_title: "Ushbu joy bo'yicha sharh qoldirish",
      detail_rating_label: "BAHO",
      detail_review_ph: "Ushbu mehmoxona/joy haqida o'z tajribangizni yozing...",
      detail_submit_review: "Sharhni joylash",
      detail_reviews_header: "Mijozlar sharhlari (Fikr-mulohazalar)",
      detail_contact_title: "Bog'lanish va Bron qilish",
      detail_owner_label: "Egasi / Mas'ul:",
      detail_phone_label: "Telefon raqami:",
      detail_price_suffix: "/ bahosi",
      detail_open_maps: "📍 Google Maps / Yandex Maps da ochish",
      detail_edit_btn: "✏️ E'lonni tahrirlash",
      detail_delete_btn: "🗑 Ushbu e'lonni o'chirish",
      detail_admin_edit_btn: "✏️ Admin: E'lonni tahrirlash",
      detail_admin_delete_btn: "🗑 Admin sifatida e'lonni o'chirish",

      // Profile Page (profile.html)
      profile_back: "← Orqaga",
      profile_since: "A'zo bo'lgan:",
      profile_stat_listings: "E'lonlar",
      profile_stat_reviews: "Sharhlar",
      profile_eyebrow: "Muallif e'lonlari",
      profile_listings_title: "Joylashtirilgan barcha e'lonlar",
      profile_not_found: "Foydalanuvchi topilmadi",

      // Contact Extra
      contact_form_title: "Xabar qoldiring",
      contact_name_label: "Ismingiz *",
      contact_email_label: "Email manzilingiz *",
      contact_phone_label: "Telefon raqamingiz",
      contact_subject_label: "Mavzu",
      contact_msg_label: "Xabaringiz matni *",
      contact_send_btn: "Xabarni jo'natish",
      contact_sub_general: "Umumiy savol",
      contact_sub_hosting: "Mezbonlik / Joy qo'shish",
      contact_sub_partner: "Hamkorlik taklifi",
      contact_sub_support: "Texnik yordam",
      contact_sub_feedback: "Fikr va mulohaza",
      contact_info_office: "Bosh ofis",
      contact_info_phone: "Telefon",
      contact_info_hours: "Ish vaqti",

      // About Extra
      about_story_eyebrow: "Qanday boshlangan?",
      about_story_h2: "Oddiy algoritmlar emas, balki qalb bilan tanlangan sayohat",
      about_story_p1: "O'zbekiston — ming yillik madaniyat, moviy gumbazlar, qadimiy devorlar va eng asosiysi samimiy insonlar yurti. Biz Saffar loyihasini oddiy bron qilish sayti sifatida emas, balki har bir mehmonga o'zbek xalqining mehmondo'stligini his qildirish niyatida yaratdik.",
      about_story_p2: "Samarqandning Registon maydonidan Buxoroning qadimiy ko'chalarigacha, Xivaning Ichan Qal'asidan Zomin tog'larigacha bo'lgan har bir burchakda sizni kutilmagan mo''jizalar kutmoqda.",
      about_values_eyebrow: "Bizning qadriyatlarimiz",
      about_values_title: "Nima uchun minglab sayyohlar aynan Saffar platformasini tanlaydi?",
      about_pillar1_title: "Tasdiqlangan Mezbonlar",
      about_pillar1_desc: "Har bir e'lon va joy mezboni tekshiriladi. Siz ko'rgan sharoit va rasmlar aynan haqiqiy hayotdagi kabi bo'lishiga kafolat beramiz.",
      about_pillar2_title: "Asl Milliy Oshxona",
      about_pillar2_desc: "Faqat sayyohlik restoranlari emas, balki mahalliy aholi sevib iste'mol qiladigan eng mazali o'choq palovlari va tandir somsalar tavsiya etiladi.",
      about_pillar3_title: "Asl Hunarmandlar",
      about_pillar3_desc: "Rishton kulollari, Marg'ilon atlas to'quvchilari va Buxoro zardo'zlari bilan bevosita aloqa o'rnatib, asl san'at asarlarini xarid qiling.",
      about_cta_title: "O'zbekiston bo'ylab o'z Saffaringizni boshlang",
      about_cta_sub: "Yuzlab qulay xonadonlar, mashhur tarixiy obidalar va betakror taomlar sizni kutmoqda.",
      about_cta_btn: "Barcha xizmatlarni ko'rish →",

      // Services Extra
      serv_badge_stays: "Homes & Stays",
      serv_title_stays: "Milliy Hovlilar va Mehmonxonalar",
      serv_desc_stays: "Buxoro va Xivadagi qadimiy naqshinkor milliy uylar, zamonaviy mehmonxonalar, Zomin tog' kottejlari hamda Qizilqum cho'lidagi o'tov lagerlari.",
      serv_link_stays: "Joy tanlash va bron qilish →",
      serv_badge_places: "Places & Culture",
      serv_title_places: "Diqqatga Sazovor Qadamjolar",
      serv_desc_places: "Registon, Ichan Qal'a, Shohi Zinda, Ark qal'asi va O'zbekistonning 14 ta hududidagi afsonaviy maskonlarning interaktiv xaritasi.",
      serv_link_places: "Maskanlarni xaritada ko'rish →",
      serv_badge_foods: "Traditional Foods",
      serv_title_foods: "O'zbek Milliy Oshxonasi",
      serv_desc_foods: "Samarqandcha ziq palov, Toshkent to'y oshi, Jizzax somsasi, G'ijduvon shashligi va Tandir go'sht tayyorlanadigan eng mashhur choyxonalar.",
      serv_link_foods: "Taomlar va oshpazlar katalogi →",
      serv_badge_crafts: "Artisan Crafts",
      serv_title_crafts: "Asl Hunarmandchilik Buyumlari",
      serv_desc_crafts: "Rishton moviy kulolchiligi, Marg'ilon tabiiy shoyi va atlasi, Chust pichoqlari hamda qo'lda tikilgan milliy do'ppilar va esdalik sovg'alari.",
      serv_link_crafts: "Hunarmand buyumlarini tanlash →",
      serv_badge_saved: "Smart Trip",
      serv_title_saved: "Shaxsiy Sayohat Marshruti",
      serv_desc_saved: "O'zingizga yoqqan turar joylar, maskanlar va taomlarni saralab (Sevimlilar ro'yxati), bir tugma bilan individual marshrut tuzing.",
      serv_link_saved: "Sevimlilar ro'yxatiga o'tish →",
      serv_badge_hosting: "Host & Earn",
      serv_title_hosting: "Mezbonlik Qilish (Host Bo'lish)",
      serv_desc_hosting: "O'z mehmon uyingiz, oshxonangiz yoki hunarmandchilik ustaxonangiz bormi? E'loningizni platformaga bepul qo'shing va sayyohlarni kutib oling.",
      serv_link_hosting: "+ E'lon joylashtirish →",
      serv_how_eyebrow: "Qulaylik",
      serv_how_title: "Saffar orqali sayohat qilish tartibi",
      serv_step1_title: "Joyni tanlang",
      serv_step1_desc: "Viloyat, shahar va toifa bo'yicha saralang",
      serv_step2_title: "Batafsil tanishing",
      serv_step2_desc: "Sharhlar, fotosuratlar va qulayliklarni ko'ring",
      serv_step3_title: "To'g'ridan-to'g'ri bog'laning",
      serv_step3_desc: "Mezbon bilan vositachisiz aloqaga chiqing",
      serv_step4_title: "Sayohatdan zavqlaning",
      serv_step4_desc: "Haqiqiy o'zbek mehmondo'stligini his eting",

      // Metro & Stats
      metro_page_back: "← Bosh sahifaga qaytish",
      metro_page_eyebrow: "Toshkent Metropoliteni",
      metro_page_title: "Interaktiv Metro Xaritasi & Yo'nalish Rejalashtirgich",
      metro_page_hint: "👉 Xaritadan istalgan bekatni tanlang (Qayerdan ➔ Qayerga) yoki quyidan qidiring",
      stats_page_back: "← Bosh sahifaga qaytish",
      stats_page_eyebrow: "Rasmiy Ma'lumotlar & Tahlillar",
      stats_page_title: "O'zbekiston Turizm Statistikasi va Dinamikasi",
      stats_page_sub: "2017–2024 yillar kesimida xorijiy sayyohlar oqimi, davlatlar bo'yicha tahlillar va viloyatlar ko'rsatkichlari."
    },
    ru: {
      // Header & Navigation
      nav_home: "Главная",
      nav_places: "Места",
      nav_homes: "Жильё",
      nav_foods: "Блюда",
      nav_crafts: "Ремесла",
      nav_services: "Услуги",
      nav_about: "О нас",
      nav_contact: "Контакты",
      nav_login: "Войти",
      nav_signup: "Регистрация",
      nav_profile: "Мой профиль",
      nav_cabinet: "Кабинет",
      nav_logout: "Выйти",
      nav_add: "+ Добавить",

      // Drawer (Mobile Menu)
      drawer_home: "Главная",
      drawer_places: "Достопримечательности",
      drawer_homes: "Жильё и отели",
      drawer_foods: "Национальные блюда",
      drawer_crafts: "Ремесла и сувениры",
      drawer_saved: "Список избранного",
      drawer_add: "Разместить объявление",
      drawer_lang: "🌐 Язык / Language",
      drawer_profile: "👤 Личный кабинет",

      // Hero
      hero_title: '<span style="color:var(--clay);">Откройте</span> для себя Узбекистан',
      hero_tag: "По древнему Шёлковому пути",
      hero_h1a: "Почувствуйте",
      hero_h1b: "великую",
      hero_h1c: " историю Узбекистана",

      // Curated Gallery Section (Index)
      gallery_eyebrow: "Фотогалерея и места для путешествий",
      gallery_title: "Избранные фотографии из каждого уголка Узбекистана",
      gallery_viewall: "Посмотреть все места →",

      // About us (Index & About page)
      about_eyebrow: "О нас",
      about_h2: "Откройте для себя настоящий Узбекистан!",
      about_title: "Откройте для себя настоящий Узбекистан!",
      about_subtitle: "Saffar — открытая туристическая платформа, напрямую соединяющая путешественников с древними городами, радушными хозяевами, национальными блюдами и ремёслами Узбекистана.",
      about_p1: "Saffar — современная туристическая платформа, напрямую объединяющая путешественников по Шёлковому пути, гостеприимных хозяев, ремесленников и поваров.",
      about_p2: "Мы стремимся подарить каждому гостю теплоту узбекского гостеприимства и открыть наше культурное наследие всему миру.",
      about_btn_more: "Подробнее о нас →",
      about_btn_explore: "Исследовать места →",
      about_btn_contact: "Связаться с нами",
      about_stat_regions: "Регионы и области",
      about_stat_places: "Исторические места",
      about_stat_tourists: "Довольные туристы",
      about_stat_exp: "Настоящий колорит",

      // Stats Banner (Index)
      stats_tag: "📊 Статистика и аналитика Узбекистана",
      stats_title: "Туризм и национальная статистика Узбекистана",
      stats_desc: "Поток туристов в Узбекистан по годам, рейтинги стран, распределение по регионам и все официальные данные в одном месте.",
      stats_btn: "Смотреть всю статистику (Таблицы) →",

      // Metro Banner (Index)
      metro_tag: "🚇 НОВАЯ ВОЗМОЖНОСТЬ",
      metro_title: "Интерактивная карта Ташкентского метрополитена",
      metro_desc: "Удобный расчет маршрута и времени поездки по линиям: Чиланзарская, Узбекистанская, Юнусабадская и Кольцевая надземная.",
      metro_btn: "🗺️ Открыть карту метро →",

      // Weather Widget (Index)
      weather_eyebrow: "Прогноз погоды",
      weather_title: "Погода по регионам Узбекистана",
      weather_sub: "Текущая температура и погода в 14 регионах для планирования вашего путешествия.",
      weather_search_ph: "Поиск региона...",
      weather_toggle_all: "Все 14 регионов ↓",
      weather_toggle_collapse: "Свернуть (Только 3 региона) ↑",
      weather_humidity: "Влажность",
      weather_wind_unit: "км/ч",
      weather_sunny: "Солнечно / Ясно",
      weather_partly_cloudy: "Переменная облачность",
      weather_foggy: "Туманно",
      weather_rainy: "Дождливо",
      weather_snowy: "Снежно",
      weather_stormy: "Ливень / Гроза",
      weather_clear_warm: "Тепло и ясно",

      // Reviews
      rev_eyebrow: "Отзывы путешественников",
      rev_h2: "Настоящие истории из реальных путешествий",
      rev_btn: "Поделиться опытом",
      rev_empty: "Отзывов пока нет. Будьте первым, кто оставит отзыв!",
      rev_show_all: "Показать все ↓",
      rev_collapse: "Свернуть ↑",

      // Review Modal
      modal_title: "Поделитесь своим опытом",
      modal_signin_msg: "Войдите в систему, чтобы оставить отзыв.",
      modal_signin_btn: "Войти",
      modal_signup_btn: "Регистрация",
      modal_stay: "Место / Объект",
      modal_rating: "Оценка",
      modal_text: "Ваш отзыв",
      modal_text_ph: "Расскажите о своих впечатлениях другим…",
      modal_media: "Фотографии (макс. 5МБ)",
      modal_media_hint: "Нажмите или перетащите фото для загрузки",
      modal_submit: "Опубликовать отзыв",

      // Search & Filters
      search_location: "Местоположение",
      search_where: "Куда едем?",
      search_checkin: "Дата заезда",
      search_checkout: "Дата выезда",
      search_guests: "Гости",
      filter_all: "Все",
      filter_all_types: "🌐 Все типы",
      filter_region_title: "📍 Фильтр по регионам и городам:",
      filter_all_regions: "🌐 Все регионы",

      // Places Page (places.html)
      places_eyebrow: "Достопримечательности Шёлкового пути",
      places_count_label: "достопримечательностей",
      dest_h2: "Исследуйте легендарные города Шёлкового пути с их неповторимым колоритом и историей.",
      filter_place_type_title: "🎯 Категории мест:",
      place_cat_monuments: "🏛 Памятники истории",
      place_cat_parks: "🌳 Сады и парки",
      place_cat_bazaars: "🛍 Восточные базары",
      place_cat_nature: "⛰ Природа и горы",
      place_cat_museums: "🎨 Музеи и искусство",
      place_cat_restaurants: "🍇 Рестораны",
      no_places_found: "По вашему запросу мест не найдено",

      // Stays Page (stays.html)
      stays_eyebrow: "Жильё вдоль Шёлкового пути",
      stays_h2: "Жильё и отели в Узбекистане",
      stays_count_label: "вариантов жилья",
      filter_stay_type_title: "🏡 Тип жилья:",
      tag_hotel: "Отель",
      tag_home_hotel: "Гостевой дом",
      tag_hostel: "Хостел",
      tag_dacha: "Дача",
      tag_yurt: "Юрта / Кемпинг",
      tag_historic: "Исторический дом",
      msg_empty_stays: "Жильё по заданным критериям не найдено.",
      stays_empty_sub: "Попробуйте выбрать другой город или сбросить фильтры.",
      per_guest: "/ за человека",

      // Foods Page (foods.html)
      foods_eyebrow: "Знаменитые блюда Шёлкового пути",
      foods_h2: "Узбекская кухня и кулинарная карта",
      foods_sub: "Попробуйте аутентичные вкусы Узбекистана и узнайте родину каждого традиционного блюда.",
      filter_food_type_title: "🍲 Категория блюд:",
      filter_all_foods: "✨ Все блюда",
      tag_liquid_dishes: "Первые блюда (супы)",
      tag_main_dishes: "Вторые блюда",
      tag_dough_foods: "Мучные блюда и выпечка",
      tag_meat_dishes: "Мясные блюда и шашлыки",
      tag_salads: "Салаты и холодные закуски",
      tag_sweets: "Сладости и десерты",
      no_foods_found: "По вашему запросу блюд не найдено",
      foods_count_label: "блюд",
      price_label_food: "цена",

      // Crafts Page (crafts.html)
      crafts_eyebrow: "Традиционные ремёсла Шёлкового пути",
      crafts_h2: "Традиционные ремёсла и сувениры",
      crafts_sub: "Изделия ручной работы мастеров Узбекистана и национальные сувениры.",
      filter_craft_type_title: "🏺 Вид ремесла:",
      filter_all_crafts: "✨ Все изделия",
      tag_craft_pottery: "🏺 Керамика и гончарство",
      tag_craft_textile: "🧵 Атлас и адрас (Шёлк)",
      tag_craft_embroidery: "👑 Золотое шитье и сюзане",
      tag_craft_knives: "🗡 Чустские ножи",
      tag_craft_paper: "📜 Самаркандская бумага",
      tag_craft_wood: "🪵 Резьба по дереву",
      no_crafts_found: "В этой категории изделий не найдено",
      crafts_count_label: "изделий",
      price_label_craft: "стоимость",

      // Saved Page (saved.html)
      saved_eyebrow: "Коллекция избранного",
      saved_title: "Сохранённое жильё, блюда и места",
      saved_sub: "Все понравившиеся объявления, отмеченные сердечком, сохранены здесь.",
      saved_empty_title: "В избранном пока ничего нет",
      saved_empty_sub: "Нажмите на значок сердечка (♡) на странице жилья, блюд или мест!",
      saved_btn_stays: "Перейти к жилью",
      saved_btn_foods: "Перейти к блюдам",
      saved_btn_crafts: "Перейти к ремеслам",

      // Common Buttons & Actions
      btn_details: "🔍 Подробнее",
      btn_maps: "📍 Карта",
      btn_clear_filters: "Сбросить фильтры",
      btn_back: "← Назад",
      btn_edit: "✏️ Редактировать",
      btn_delete: "🗑 Удалить",

      // Detail Page (detail.html)
      detail_desc_title: "Описание и детали",
      detail_amenities_title: "Удобства и особенности",
      detail_reviews_title: "Отзывы путешественников",
      detail_reviews_count: "отзывов",
      detail_no_reviews: "Об этом месте пока нет отзывов.",
      detail_leave_review: "Оставить отзыв",
      detail_host_info: "Информация о хозяине",
      detail_not_found: "Информация не найдена",
      detail_back_home: "Вернуться на главную",

      // Account Page (account.html)
      acc_signout: "Выйти",
      acc_delete: "🗑 Удалить аккаунт",
      acc_quick_title: "⚡ Быстрые действия",
      acc_quick_sub: "Управляйте объявлениями, избранным и языковыми настройками.",
      acc_quick_add: "Разместить объявление",
      acc_quick_add_sub: "Жильё, место, блюдо или сувенир",
      acc_quick_saved: "Список избранного",
      acc_quick_saved_sub: "Сохранённые объекты",
      acc_quick_lang: "🌐 Выбор языка",
      acc_listings_title: "📋 Мои опубликованные объявления",
      acc_listings_sub: "Список всех объектов, опубликованных с вашего аккаунта.",
      acc_btn_add: "+ Добавить объявление",
      acc_bio_title: "✍️ Обо мне (Био)",
      acc_bio_sub: "Эта информация будет видна другим пользователям в вашем публичном профиле.",
      acc_bio_save: "💾 Сохранить био",

      // Contact Page (contact.html)
      contact_eyebrow: "Контакты",
      contact_title: "Свяжитесь с нами",
      contact_subtitle: "Если у вас есть вопросы, предложения или идеи сотрудничества, оставьте сообщение через форму ниже.",

      // Services Page (services.html)
      services_eyebrow: "Услуги и сервисы",
      services_title: "Все возможности Узбекистана вместе с Saffar",
      services_subtitle: "Все необходимые услуги для комфортного и незабываемого путешествия собраны в одном месте.",

      // Footer
      footer_desc: "Уникальное жильё, национальная кухня и традиционные ремёсла по всему Узбекистану.",
      footer_col_explore: "Исследуйте",
      footer_places: "Популярные места",
      footer_stays: "Жильё и отели",
      footer_foods: "Узбекская кухня",
      footer_crafts: "Традиционные ремёсла",
      footer_services: "Услуги и сервисы",
      footer_saved: "Избранное",
      footer_col_company: "Компания",
      footer_about: "О Saffar",
      footer_our_services: "Наши услуги",
      footer_contact: "Связаться с нами",
      footer_help: "Частые вопросы и помощь",
      footer_col_hosting: "Приём гостей",
      footer_host_home: "Сдать жильё",
      footer_host_food: "Предложить кулинарный тур",
      footer_host_resp: "Ответственный приём гостей",
      footer_support: "Центр поддержки",
      footer_copy: "© 2026 Saffar. Откройте Узбекистан.",
      footer_privacy: "Конфиденциальность",
      footer_terms: "Условия",

      // Cities
      city_tashkent: "Ташкент",
      city_samarkand: "Самарканд",
      city_bukhara: "Бухара",
      city_andijan: "Андижан",
      city_jizzakh: "Джизак",
      city_kashkadarya: "Кашкадарья",
      city_navoiy: "Навои",
      city_namangan: "Наманган",
      city_surkhandarya: "Сурхандарья",
      city_sirdarya: "Сырдарья",
      city_fergana: "Фергана",
      city_khorazm: "Хорезм",
      city_karakalpakstan: "Каракалпакстан",

      // Messages
      msg_rev_write: "Пожалуйста, напишите ваш отзыв.",
      msg_rev_success: "Отзыв успешно опубликован!",
      msg_err_server: "Не удалось связаться с сервером.",
      msg_login_required: "Пожалуйста, войдите в систему.",

      // Auth (Login & Signup)
      auth_login_eyebrow: "С возвращением",
      auth_login_title: "Вход в Saffar",
      auth_login_sub: "Введите адрес электронной почты и пароль, чтобы войти в аккаунт и продолжить путешествие.",
      auth_email: "Адрес электронной почты",
      auth_password: "Пароль",
      auth_btn_login: "Войти",
      auth_no_account: "Нет аккаунта?",
      auth_create_account: "Создать аккаунт",
      auth_caption_eyebrow: "Вдоль древнего Шёлкового пути",
      auth_caption_title: "Шесть городов. Одно путешествие.",
      auth_caption_sub: "Войдите, чтобы продолжить с того места, где вы остановились — сохранённое жильё и поездки.",
      auth_signup_eyebrow: "Присоединяйтесь к Saffar",
      auth_signup_title: "Создать новый аккаунт",
      auth_signup_sub: "Укажите ваше имя, email и придумайте надежный пароль.",
      auth_fullname: "Полное имя",
      auth_confirm_pass: "Подтвердите пароль",
      auth_role_label: "Тип аккаунта / Кто вы?",
      auth_role_tourist: "✈️ Путешественник / Турист",
      auth_role_host: "🏠 Хозяин / Владелец жилья",
      auth_btn_signup: "Создать аккаунт",
      auth_have_account: "Уже есть аккаунт?",

      // Account Extra
      acc_eyebrow: "Личный кабинет",
      acc_welcome: "Добро пожаловать",
      acc_fullname: "Полное имя",
      acc_email: "Электронная почта",
      acc_role_label: "Тип аккаунта (Роль)",
      acc_role_admin: "👑 Главный Администратор (Admin)",
      acc_role_host: "🏠 Хозяин / Владелец жилья (Host)",
      acc_role_tourist: "✈️ Путешественник / Турист (Tourist)",
      acc_role_toggle: "🔄 Сменить роль (Хозяин ↔ Турист)",
      acc_member_since: "Дата регистрации",
      acc_account_id: "ID аккаунта",
      acc_no_listings: "У вас пока нет объявлений",
      acc_no_listings_sub: "Используйте кнопку '+ Добавить' или '+ Добавить объявление', чтобы опубликовать жильё, блюдо или сувенир.",
      acc_bio_ph: "Напишите кратко о себе (например: гид в Самарканде, люблю путешествия)...",

      // Detail Extra
      detail_back: "← Назад",
      detail_map_title: "📍 Карта расположения",
      detail_leave_review_title: "Оставить отзыв об этом объекте",
      detail_rating_label: "ОЦЕНКА",
      detail_review_ph: "Поделитесь вашим впечатлением об этом месте/отеле...",
      detail_submit_review: "Опубликовать отзыв",
      detail_reviews_header: "Отзывы гостей и путешественников",
      detail_contact_title: "Контакты и бронирование",
      detail_owner_label: "Владелец / Ответственный:",
      detail_phone_label: "Номер телефона:",
      detail_price_suffix: "/ стоимость",
      detail_open_maps: "📍 Открыть в Google Maps / Yandex Maps",
      detail_edit_btn: "✏️ Редактировать объявление",
      detail_delete_btn: "🗑 Удалить это объявление",
      detail_admin_edit_btn: "✏️ Админ: Редактировать объявление",
      detail_admin_delete_btn: "🗑 Удалить как администратор",

      // Profile Page (profile.html)
      profile_back: "← Назад",
      profile_since: "Дата регистрации:",
      profile_stat_listings: "Объявления",
      profile_stat_reviews: "Отзывы",
      profile_eyebrow: "Объявления автора",
      profile_listings_title: "Все опубликованные объявления",
      profile_not_found: "Пользователь не найден",

      // Contact Extra
      contact_form_title: "Оставьте сообщение",
      contact_name_label: "Ваше имя *",
      contact_email_label: "Ваш Email *",
      contact_phone_label: "Номер телефона",
      contact_subject_label: "Тема",
      contact_msg_label: "Текст сообщения *",
      contact_send_btn: "Отправить сообщение",
      contact_sub_general: "Общий вопрос",
      contact_sub_hosting: "Приём гостей / Размещение жилья",
      contact_sub_partner: "Предложение о сотрудничестве",
      contact_sub_support: "Техническая поддержка",
      contact_sub_feedback: "Отзывы и предложения",
      contact_info_office: "Главный офис",
      contact_info_phone: "Телефон",
      contact_info_hours: "График работы",

      // About Extra
      about_story_eyebrow: "Как все начиналось?",
      about_story_h2: "Путешествие, выбранное не алгоритмами, а сердцем",
      about_story_p1: "Узбекистан — земля тысячелетней культуры, бирюзовых куполов, древних крепостей и, главное, душевных людей. Мы создали Saffar не просто как сервис бронирования, а как мост к настоящему узбекскому гостеприимству.",
      about_story_p2: "От площади Регистан в Самарканде до старинных улочек Бухары, от Ичан-Калы в Хиве до гор Заамина — каждый уголок таит в себе удивительные открытия.",
      about_values_eyebrow: "Наши ценности",
      about_values_title: "Почему тысячи путешественников выбирают именно Saffar?",
      about_pillar1_title: "Проверенные хозяева",
      about_pillar1_desc: "Каждое объявление и хозяин жилья проходят проверку. Мы гарантируем соответствие фотографий и реальных условий.",
      about_pillar2_title: "Аутентичная кухня",
      about_pillar2_desc: "Не только туристические рестораны, но и любимые местными жителями чайханы со знаменитым пловом и тандырной самсой.",
      about_pillar3_title: "Мастера ремесел",
      about_pillar3_desc: "Прямой контакт с риштанскими гончарами, маргиланскими ткачами и бухарскими золотошвеями для покупки подлинных изделий.",
      about_cta_title: "Начните свое путешествие по Узбекистану",
      about_cta_sub: "Сотни уютных домов, знаменитые исторические памятники и уникальные блюда ждут вас.",
      about_cta_btn: "Смотреть все сервисы →",

      // Services Extra
      serv_badge_stays: "Homes & Stays",
      serv_title_stays: "Национальные дома и отели",
      serv_desc_stays: "Аутентичные дома в Бухаре и Хиве, современные отели, горные коттеджи в Заамине и юртовые лагеря в пустыне Кызылкум.",
      serv_link_stays: "Выбрать и забронировать жильё →",
      serv_badge_places: "Places & Culture",
      serv_title_places: "Достопримечательности и святыни",
      serv_desc_places: "Регистан, Ичан-Кала, Шахи-Зинда, крепость Арк и интерактивная карта легендарных мест в 14 регионах Узбекистана.",
      serv_link_places: "Смотреть места на карте →",
      serv_badge_foods: "Traditional Foods",
      serv_title_foods: "Узбекская национальная кухня",
      serv_desc_foods: "Самаркандский плов, ташкентский праздничный ош, джизакская самса, гиждуванский шашлык и лучшие чайханы.",
      serv_link_foods: "Каталог блюд и заведений →",
      serv_badge_crafts: "Artisan Crafts",
      serv_title_crafts: "Подлинные изделия ремесленников",
      serv_desc_crafts: "Риштанская лазурная керамика, натуральный маргиланский шелк и атлас, чустские ножи и тюбетейки ручной работы.",
      serv_link_crafts: "Выбрать изделия мастеров →",
      serv_badge_saved: "Smart Trip",
      serv_title_saved: "Индивидуальный маршрут",
      serv_desc_saved: "Сохраняйте понравившееся жилье, достопримечательности и блюда в избранное и составляйте свой идеальный маршрут.",
      serv_link_saved: "Перейти в избранное →",
      serv_badge_hosting: "Host & Earn",
      serv_title_hosting: "Стать хозяином (Приём гостей)",
      serv_desc_hosting: "У вас есть гостевой дом, национальное кафе или мастерская? Разместите объявление бесплатно и принимайте гостей со всего мира.",
      serv_link_hosting: "+ Разместить объявление →",
      serv_how_eyebrow: "Удобство",
      serv_how_title: "Как путешествовать с Saffar",
      serv_step1_title: "Выберите место",
      serv_step1_desc: "Фильтруйте по региону, городу и категории",
      serv_step2_title: "Изучите детали",
      serv_step2_desc: "Ознакомьтесь с фото, отзывами и удобствами",
      serv_step3_title: "Свяжитесь напрямую",
      serv_step3_desc: "Общайтесь с хозяином напрямую без посредников",
      serv_step4_title: "Наслаждайтесь поездкой",
      serv_step4_desc: "Ощутите теплоту узбекского гостеприимства",

      // Metro & Stats
      metro_page_back: "← Вернуться на главную",
      metro_page_eyebrow: "Ташкентский Метрополитен",
      metro_page_title: "Интерактивная карта метро и расчет маршрута",
      metro_page_hint: "👉 Выберите станцию на карте (Откуда ➔ Куда) или найдите в поиске ниже",
      stats_page_back: "← Вернуться на главную",
      stats_page_eyebrow: "Официальные данные и аналитика",
      stats_page_title: "Статистика и динамика туризма Узбекистана",
      stats_page_sub: "Поток иностранных туристов в 2017–2024 гг., анализ по странам и показатели регионов."
    },
    en: {
      // Header & Navigation
      nav_home: "Home",
      nav_places: "Places",
      nav_homes: "Homes",
      nav_foods: "Foods",
      nav_crafts: "Crafts",
      nav_services: "Services",
      nav_about: "About Us",
      nav_contact: "Contact",
      nav_login: "Log in",
      nav_signup: "Sign up",
      nav_profile: "My Profile",
      nav_cabinet: "Account",
      nav_logout: "Sign out",
      nav_add: "+ Add",

      // Drawer (Mobile Menu)
      drawer_home: "Home",
      drawer_places: "Places to Visit",
      drawer_homes: "Homes & Stays",
      drawer_foods: "National Foods",
      drawer_crafts: "Traditional Crafts",
      drawer_saved: "Saved Items",
      drawer_add: "Post New Listing",
      drawer_lang: "🌐 Language",
      drawer_profile: "👤 Profile Account",

      // Hero
      hero_title: '<span style="color:var(--clay);">Discover</span> Uzbekistan',
      hero_tag: "Along the ancient Silk Road",
      hero_h1a: "Experience the",
      hero_h1b: "great",
      hero_h1c: " history of Uzbekistan",

      // Curated Gallery Section (Index)
      gallery_eyebrow: "Photo Gallery & Travel Destinations",
      gallery_title: "Curated photos from every corner of Uzbekistan",
      gallery_viewall: "View all places →",

      // About us (Index & About page)
      about_eyebrow: "About Us",
      about_h2: "Discover the true spirit and hospitality of Uzbekistan",
      about_title: "Discover the true spirit and hospitality of Uzbekistan",
      about_subtitle: "Saffar is an open tourism platform directly connecting travelers with historic Silk Road cities, hospitable hosts, authentic dishes, and traditional crafts.",
      about_p1: "Saffar is an open travel platform connecting Silk Road travelers directly with hospitable hosts, local artisans, and master chefs across Uzbekistan.",
      about_p2: "We aim to help every guest experience genuine Uzbek hospitality and share our rich cultural heritage with the world.",
      about_btn_more: "More about us →",
      about_btn_explore: "Explore Places →",
      about_btn_contact: "Contact Us",
      about_stat_regions: "Regions & Provinces",
      about_stat_places: "Historic Places",
      about_stat_tourists: "Happy Travelers",
      about_stat_exp: "Authentic Experience",

      // Stats Banner (Index)
      stats_tag: "📊 Uzbekistan Statistics & Analytics",
      stats_title: "Uzbekistan Tourism & National Statistics",
      stats_desc: "Tourist arrivals by year, visitor rankings by country, regional distribution, and official tables all in one place.",
      stats_btn: "View All Statistics (Tables) →",

      // Metro Banner (Index)
      metro_tag: "🚇 NEW FEATURE",
      metro_title: "Interactive Tashkent Metro Map",
      metro_desc: "Find optimal routes and travel times across Chilanzar, Uzbekistan, Yunusabad, and the Circle elevated metro lines.",
      metro_btn: "🗺️ Open Metro Map →",

      // Weather Widget (Index)
      weather_eyebrow: "Weather Forecast",
      weather_title: "Live Weather Across Uzbekistan Regions",
      weather_sub: "Current temperature and conditions across 14 regions to plan your journey.",
      weather_search_ph: "Search region...",
      weather_toggle_all: "All 14 regions ↓",
      weather_toggle_collapse: "Collapse (Only 3 regions) ↑",
      weather_humidity: "Humidity",
      weather_wind_unit: "km/h",
      weather_sunny: "Sunny / Clear",
      weather_partly_cloudy: "Partly Cloudy",
      weather_foggy: "Foggy",
      weather_rainy: "Rainy",
      weather_snowy: "Snowy",
      weather_stormy: "Heavy Rain / Storm",
      weather_clear_warm: "Warm and Clear",

      // Reviews
      rev_eyebrow: "Traveller Reviews",
      rev_h2: "Real stories from real journeys",
      rev_btn: "Share your experience",
      rev_empty: "No reviews yet. Be the first to share your experience!",
      rev_show_all: "Show all reviews ↓",
      rev_collapse: "Collapse ↑",

      // Review Modal
      modal_title: "Share your experience",
      modal_signin_msg: "Please sign in to leave a review.",
      modal_signin_btn: "Sign in",
      modal_signup_btn: "Sign up",
      modal_stay: "Place / Location",
      modal_rating: "Rating",
      modal_text: "Your Review",
      modal_text_ph: "Tell others about your experience…",
      modal_media: "Photos (Max 5MB each)",
      modal_media_hint: "Click or drag photos to upload",
      modal_submit: "Post Review",

      // Search & Filters
      search_location: "Location",
      search_where: "Where to?",
      search_checkin: "Check-in",
      search_checkout: "Check-out",
      search_guests: "Guests",
      filter_all: "All types",
      filter_all_types: "🌐 All types",
      filter_region_title: "📍 Filter by Region / City:",
      filter_all_regions: "🌐 All regions",

      // Places Page (places.html)
      places_eyebrow: "Legendary Destinations along the Silk Road",
      places_count_label: "destinations",
      dest_h2: "Explore the legendary cities of the Silk Road, each with its own colour and character.",
      filter_place_type_title: "🎯 Category of Places:",
      place_cat_monuments: "🏛 Historic Monuments",
      place_cat_parks: "🌳 Parks & Gardens",
      place_cat_bazaars: "🛍 Bazaars & Markets",
      place_cat_nature: "⛰ Nature & Mountains",
      place_cat_museums: "🎨 Museums & Art",
      place_cat_restaurants: "🍇 Restaurants",
      no_places_found: "No places found matching your criteria",

      // Stays Page (stays.html)
      stays_eyebrow: "Homes along the Silk Road",
      stays_h2: "Stays in Uzbekistan",
      stays_count_label: "homes along the Silk Road",
      filter_stay_type_title: "🏡 Stay Type:",
      tag_hotel: "Hotel",
      tag_home_hotel: "Home Hotel",
      tag_hostel: "Hostel",
      tag_dacha: "Mountain Cabin / Dacha",
      tag_yurt: "Yurt / Tent",
      tag_historic: "Historical Stay",
      msg_empty_stays: "No stays found matching your criteria.",
      stays_empty_sub: "Try searching for a different city or clearing your filters.",
      per_guest: "/ per guest",

      // Foods Page (foods.html)
      foods_eyebrow: "Iconic Dishes along the Silk Road",
      foods_h2: "Uzbek Cuisine & Culinary Map",
      foods_sub: "Taste the authentic flavours of Uzbekistan and discover where each traditional dish originates.",
      filter_food_type_title: "🍲 Food Category:",
      filter_all_foods: "✨ All dishes",
      tag_liquid_dishes: "Liquid Dishes (Soups)",
      tag_main_dishes: "Main Dishes",
      tag_dough_foods: "Dough-Based Foods & Pastries",
      tag_meat_dishes: "Meat Dishes & Kebabs",
      tag_salads: "Salads & Cold Appetizers",
      tag_sweets: "Sweets & Desserts",
      no_foods_found: "No dishes found matching your criteria",
      foods_count_label: "dishes",
      price_label_food: "price",

      // Crafts Page (crafts.html)
      crafts_eyebrow: "Iconic Crafts along the Silk Road",
      crafts_h2: "Traditional Crafts & Souvenirs",
      crafts_sub: "Handmade products by master artisans and traditional souvenirs across Uzbekistan.",
      filter_craft_type_title: "🏺 Craft Type:",
      filter_all_crafts: "✨ All crafts",
      tag_craft_pottery: "🏺 Pottery & Ceramics",
      tag_craft_textile: "🧵 Atlas & Adras Textiles",
      tag_craft_embroidery: "👑 Gold Embroidery & Suzani",
      tag_craft_knives: "🗡 Traditional Handmade Knives",
      tag_craft_paper: "📜 Samarkand Silk Paper",
      tag_craft_wood: "🪵 Wood Carving",
      no_crafts_found: "No crafts found in this category",
      crafts_count_label: "crafts",
      price_label_craft: "price",

      // Saved Page (saved.html)
      saved_eyebrow: "Saved Collection",
      saved_title: "Saved Homes, Foods & Places",
      saved_sub: "All listings you marked with a heart are saved here for quick access.",
      saved_empty_title: "No saved items yet",
      saved_empty_sub: "Tap the heart (♡) button on any stay, dish, or place to save it!",
      saved_btn_stays: "Explore Stays",
      saved_btn_foods: "Explore Foods",
      saved_btn_crafts: "Explore Crafts",

      // Common Buttons & Actions
      btn_details: "🔍 Details",
      btn_maps: "📍 Map",
      btn_clear_filters: "Clear filters",
      btn_back: "← Back",
      btn_edit: "✏️ Edit",
      btn_delete: "🗑 Delete",

      // Detail Page (detail.html)
      detail_desc_title: "Description & Details",
      detail_amenities_title: "Amenities & Highlights",
      detail_reviews_title: "Traveller Reviews",
      detail_reviews_count: "reviews",
      detail_no_reviews: "No reviews for this listing yet.",
      detail_leave_review: "Leave a review",
      detail_host_info: "Host Information",
      detail_not_found: "Listing not found",
      detail_back_home: "Return to Home",

      // Account Page (account.html)
      acc_signout: "Sign out",
      acc_delete: "🗑 Delete account",
      acc_quick_title: "⚡ Quick Actions",
      acc_quick_sub: "Post listings, view saved favorites, and manage language preferences.",
      acc_quick_add: "Post new listing",
      acc_quick_add_sub: "Stay, place, food or craft",
      acc_quick_saved: "Saved favorites",
      acc_quick_saved_sub: "Saved listings",
      acc_quick_lang: "🌐 Choose language",
      acc_listings_title: "📋 My Published Listings",
      acc_listings_sub: "List of all items published through your account.",
      acc_btn_add: "+ Add new listing",
      acc_bio_title: "✍️ About Me (Bio)",
      acc_bio_sub: "This information will be visible to others on your public profile.",
      acc_bio_save: "💾 Save bio",

      // Contact Page (contact.html)
      contact_eyebrow: "Contact Us",
      contact_title: "Get in touch with us",
      contact_subtitle: "Have questions, suggestions, or partnership inquiries? Send us a message using the form below.",

      // Services Page (services.html)
      services_eyebrow: "Services & Products",
      services_title: "All opportunities of Uzbekistan with Saffar",
      services_subtitle: "All services needed to make your trip comfortable and unforgettable gathered in one place.",

      // Footer
      footer_desc: "Unique places to stay, local foods and traditional crafts across Uzbekistan.",
      footer_col_explore: "Explore",
      footer_places: "Popular Places",
      footer_stays: "Homes & Stays",
      footer_foods: "Uzbek Foods",
      footer_crafts: "Traditional Crafts",
      footer_services: "Services & Products",
      footer_saved: "Saved Items",
      footer_col_company: "Company",
      footer_about: "About Saffar",
      footer_our_services: "Our Services",
      footer_contact: "Contact Us",
      footer_help: "FAQs & Help",
      footer_col_hosting: "Hosting",
      footer_host_home: "Host your home",
      footer_host_food: "Host food experience",
      footer_host_resp: "Responsible hosting",
      footer_support: "Support center",
      footer_copy: "© 2026 Saffar. Explore Uzbekistan.",
      footer_privacy: "Privacy",
      footer_terms: "Terms",

      // Cities
      city_tashkent: "Tashkent",
      city_samarkand: "Samarkand",
      city_bukhara: "Bukhara",
      city_andijan: "Andijan",
      city_jizzakh: "Jizzakh",
      city_kashkadarya: "Kashkadarya",
      city_navoiy: "Navoi",
      city_namangan: "Namangan",
      city_surkhandarya: "Surkhandarya",
      city_sirdarya: "Sirdaryo",
      city_fergana: "Fergana",
      city_khorazm: "Khorezm",
      city_karakalpakstan: "Karakalpakstan",

      // Messages
      msg_rev_write: "Please write your review.",
      msg_rev_success: "Review posted successfully!",
      msg_err_server: "Could not connect to server.",
      msg_login_required: "Please sign in to continue.",

      // Auth (Login & Signup)
      auth_login_eyebrow: "Welcome back",
      auth_login_title: "Sign in to Saffar",
      auth_login_sub: "Enter your email and password to see your account and continue your journey across Uzbekistan.",
      auth_email: "Email address",
      auth_password: "Password",
      auth_btn_login: "Sign in",
      auth_no_account: "Don't have an account?",
      auth_create_account: "Create account",
      auth_caption_eyebrow: "Along the ancient Silk Road",
      auth_caption_title: "Six cities. One journey.",
      auth_caption_sub: "Sign in to pick up where you left off — saved stays, upcoming trips, and messages from your hosts across Uzbekistan.",
      auth_signup_eyebrow: "Join Saffar",
      auth_signup_title: "Create your account",
      auth_signup_sub: "Tell us your name and email, and choose a secure password.",
      auth_fullname: "Full name",
      auth_confirm_pass: "Confirm password",
      auth_role_label: "Account role / Who are you?",
      auth_role_tourist: "✈️ Traveler / Tourist",
      auth_role_host: "🏠 Host / Property Owner",
      auth_btn_signup: "Create account",
      auth_have_account: "Already have an account?",

      // Account Extra
      acc_eyebrow: "Your account",
      acc_welcome: "Welcome",
      acc_fullname: "Full name",
      acc_email: "Email address",
      acc_role_label: "Account role",
      acc_role_admin: "👑 Chief Administrator (Admin)",
      acc_role_host: "🏠 Host / Property Owner",
      acc_role_tourist: "✈️ Traveler / Tourist",
      acc_role_toggle: "🔄 Toggle role (Host ↔ Tourist)",
      acc_member_since: "Member since",
      acc_account_id: "Account ID",
      acc_no_listings: "You have not posted any listings yet",
      acc_no_listings_sub: "Use the '+ Add' or '+ Add new listing' button above to post your stay, food, or craft listing.",
      acc_bio_ph: "Write a short bio about yourself (e.g. guide from Samarkand, lover of traditional crafts)...",

      // Detail Extra
      detail_back: "← Back",
      detail_map_title: "📍 Location Map",
      detail_leave_review_title: "Leave a review for this place",
      detail_rating_label: "RATING",
      detail_review_ph: "Share your experience about this stay or place...",
      detail_submit_review: "Post Review",
      detail_reviews_header: "Customer Reviews",
      detail_contact_title: "Contact & Booking",
      detail_owner_label: "Owner / Host:",
      detail_phone_label: "Phone number:",
      detail_price_suffix: "/ price",
      detail_open_maps: "📍 Open in Google Maps / Yandex Maps",
      detail_edit_btn: "✏️ Edit listing",
      detail_delete_btn: "🗑 Delete listing",
      detail_admin_edit_btn: "✏️ Admin: Edit listing",
      detail_admin_delete_btn: "🗑 Delete as Admin",

      // Profile Page (profile.html)
      profile_back: "← Back",
      profile_since: "Member since:",
      profile_stat_listings: "Listings",
      profile_stat_reviews: "Reviews",
      profile_eyebrow: "Author Listings",
      profile_listings_title: "All Published Listings",
      profile_not_found: "User not found",

      // Contact Extra
      contact_form_title: "Leave a message",
      contact_name_label: "Your name *",
      contact_email_label: "Your email *",
      contact_phone_label: "Phone number",
      contact_subject_label: "Subject",
      contact_msg_label: "Message text *",
      contact_send_btn: "Send message",
      contact_sub_general: "General inquiry",
      contact_sub_hosting: "Hosting / List a property",
      contact_sub_partner: "Partnership proposal",
      contact_sub_support: "Technical support",
      contact_sub_feedback: "Feedback and comments",
      contact_info_office: "Headquarters",
      contact_info_phone: "Phone",
      contact_info_hours: "Working hours",

      // About Extra
      about_story_eyebrow: "How it started",
      about_story_h2: "A journey chosen by heart, not by plain algorithms",
      about_story_p1: "Uzbekistan is a land of millennial culture, turquoise domes, ancient city walls, and above all, warm-hearted people. We created Saffar not merely as a booking directory, but to help every visitor feel genuine Uzbek hospitality.",
      about_story_p2: "From Samarkand's Registan Square to Bukhara's ancient lanes, and from Khiva's Ichan Kala to Zaamin's mountains, unforgettable wonders await you at every step.",
      about_values_eyebrow: "Our Values",
      about_values_title: "Why thousands of travelers choose Saffar",
      about_pillar1_title: "Verified Hosts",
      about_pillar1_desc: "Every listing and host is verified. We ensure that what you see in photos matches real life.",
      about_pillar2_title: "Authentic Local Cuisine",
      about_pillar2_desc: "Not just tourist eateries, but authentic local teahouses with renowned pilaf and tandoor samosas loved by locals.",
      about_pillar3_title: "Master Artisans",
      about_pillar3_desc: "Direct connection with Rishtan potters, Margilan silk weavers, and Bukhara gold-embroiderers for authentic handicrafts.",
      about_cta_title: "Begin your Saffar journey across Uzbekistan",
      about_cta_sub: "Hundreds of cozy stays, famous historical landmarks, and exquisite culinary dishes await you.",
      about_cta_btn: "View all services →",

      // Services Extra
      serv_badge_stays: "Homes & Stays",
      serv_title_stays: "Traditional Courtyards & Hotels",
      serv_desc_stays: "Historic courtyard homes in Bukhara and Khiva, modern hotels, Zaamin mountain chalets, and desert yurt camps.",
      serv_link_stays: "Choose and book a stay →",
      serv_badge_places: "Places & Culture",
      serv_title_places: "Iconic Heritage & Sacred Sites",
      serv_desc_places: "Registan, Ichan Kala, Shah-i Zinda, Ark fortress, and interactive maps of legendary landmarks across all 14 regions.",
      serv_link_places: "View places on map →",
      serv_badge_foods: "Traditional Foods",
      serv_title_foods: "Uzbek National Cuisine",
      serv_desc_foods: "Samarkand pilaf, Tashkent wedding plov, Jizzakh somsa, Gijduvan kebabs, and top authentic teahouses.",
      serv_link_foods: "Dishes and culinary catalog →",
      serv_badge_crafts: "Artisan Crafts",
      serv_title_crafts: "Authentic Artisan Handicrafts",
      serv_desc_crafts: "Rishtan blue ceramics, Margilan handmade silk, Chust traditional knives, and hand-embroidered skullcaps.",
      serv_link_crafts: "Browse master handicrafts →",
      serv_badge_saved: "Smart Trip",
      serv_title_saved: "Personalized Travel Itinerary",
      serv_desc_saved: "Bookmark your favorite stays, attractions, and dishes into saved collections to build your custom trip.",
      serv_link_saved: "Go to saved collection →",
      serv_badge_hosting: "Host & Earn",
      serv_title_hosting: "Become a Host",
      serv_desc_hosting: "Do you own a guest house, traditional cafe, or artisan workshop? List for free and welcome guests from around the world.",
      serv_link_hosting: "+ Post a listing →",
      serv_how_eyebrow: "Convenience",
      serv_how_title: "How to travel with Saffar",
      serv_step1_title: "Choose your destination",
      serv_step1_desc: "Filter by region, city, and category",
      serv_step2_title: "Explore the details",
      serv_step2_desc: "Check photos, reviews, and amenities",
      serv_step3_title: "Connect directly",
      serv_step3_desc: "Reach out to the host without middlemen",
      serv_step4_title: "Enjoy your journey",
      serv_step4_desc: "Experience authentic Uzbek hospitality",

      // Metro & Stats
      metro_page_back: "← Back to Home",
      metro_page_eyebrow: "Tashkent Metro",
      metro_page_title: "Interactive Metro Map & Route Planner",
      metro_page_hint: "👉 Select any station on the map (From ➔ To) or search below",
      stats_page_back: "← Back to Home",
      stats_page_eyebrow: "Official Data & Analytics",
      stats_page_title: "Uzbekistan Tourism Statistics & Dynamics",
      stats_page_sub: "Foreign tourist arrivals in 2017–2024, country breakdowns, and regional performance indicators."
    }
  };

  const LANG_KEY = "Saffar_lang";

  function getCurrentLang() {
    let l = localStorage.getItem(LANG_KEY);
    if (!l || !TRANSLATIONS[l]) l = "uz";
    return l;
  }

  function hasKey(key) {
    return (TRANSLATIONS.uz && key in TRANSLATIONS.uz) ||
           (TRANSLATIONS.ru && key in TRANSLATIONS.ru) ||
           (TRANSLATIONS.en && key in TRANSLATIONS.en);
  }

  function t(key) {
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;
    if (dict && dict[key] !== undefined) return dict[key];
    if (TRANSLATIONS.uz && TRANSLATIONS.uz[key] !== undefined) return TRANSLATIONS.uz[key];
    if (TRANSLATIONS.en && TRANSLATIONS.en[key] !== undefined) return TRANSLATIONS.en[key];
    return key;
  }

  function applyI18n() {
    const lang = getCurrentLang();
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);

    // Synchronize Desktop and Mobile Lang Labels
    const siteLangLabel = document.getElementById("siteLangLabel");
    if (siteLangLabel) siteLangLabel.textContent = lang.toUpperCase();

    // Synchronize all option buttons (desktop dropdown, mobile drawer, account page)
    document.querySelectorAll(".lang-option").forEach(btn => {
      const isTarget = btn.dataset.lang === lang;
      btn.classList.toggle("active", isTarget);
      if (isTarget) {
        btn.style.fontWeight = "800";
      } else {
        btn.style.fontWeight = "500";
      }
    });

    // Translate all [data-i18n] text nodes (supports HTML spans)
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key || !hasKey(key)) return;
      const val = t(key);
      if (val !== undefined && val !== null) {
        if (typeof val === "string" && val.includes("<")) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Translate all [data-i18n-placeholder] inputs
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key || !hasKey(key)) return;
      const val = t(key);
      if (val !== undefined && val !== null) {
        el.placeholder = val;
      }
    });

    // Translate all [data-i18n-title] attributes
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      if (!key || !hasKey(key)) return;
      const val = t(key);
      if (val !== undefined && val !== null) {
        el.title = val;
      }
    });

    // Dispatch event so custom widgets can respond if needed
    window.dispatchEvent(new CustomEvent("Saffar_lang_changed", { detail: { lang } }));
  }

  window.Saffar_t = t;
  window.applyI18n = applyI18n;

  // Run on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyI18n);
  } else {
    applyI18n();
  }
})();
