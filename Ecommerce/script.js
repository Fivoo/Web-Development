    // Data and State Management
        const state = {
            currentLanguage: 'en',
            currentCurrency: 'usd',
            currentCountry: 'United Arab Emirates'
        };
        
        const translations = {
            'en': {
                'hello-signin': 'Hello, sign in',
                'account-lists': 'Account & Lists',
                'returns': 'Returns',
                'orders': '& Orders',
                'cart': 'Cart',
                'all': 'All',
                'todays-deals': "Today's Deals",
                'customer-service': 'Customer Service',
                'registry': 'Registry',
                'gift-cards': 'Gift Cards',
                'sell': 'Sell',
                'shop-by-category': 'Shop by Category',
                'electronics': 'Electronics',
                'fashion': 'Fashion',
                'home-kitchen': 'Home & Kitchen',
                'books': 'Books',
                'sports-outdoors': 'Sports & Outdoors',
                'new-arrivals': 'New Arrivals',
                'product-description': 'Short description of the product.',
                'deal-of-the-day': 'Deal of the Day',
                'deal-smartwatch-title': 'Smartwatch with Fitness Tracker',
                'deal-smartwatch-description': 'Track your health with this advanced wearable.',
                'deal-headphones-title': 'Wireless Noise-Cancelling Headphones',
                'deal-headphones-description': 'Immersive audio experience on the go.',
                'deal-speaker-title': 'Portable Bluetooth Speaker',
                'deal-speaker-description': 'Powerful sound in a compact design.',
                'view-deal': 'View Deal',
                'bestsellers': 'Fivoo Bestsellers',
                'bestseller-laptop-stand-title': 'Laptop Stand',
                'bestseller-laptop-stand-desc': 'Ergonomic and portable design.',
                'bestseller-wireless-mouse-title': 'Wireless Mouse',
                'bestseller-wireless-mouse-desc': 'Smooth and responsive tracking.',
                'bestseller-power-bank-title': 'Portable Power Bank',
                'bestseller-power-bank-desc': 'High-capacity for multiple charges.',
                'bestseller-office-chair-title': 'Mesh Office Chair',
                'bestseller-office-chair-desc': 'Comfortable and breathable design.',
                'bestseller-desk-organizer-title': 'Desk Organizer',
                'bestseller-desk-organizer-desc': 'Keep your workspace tidy.',
                'shop-by-department': 'Shop by Department',
                'signin-title': 'Sign In',
                'buyer': 'Buyer',
                'seller': 'Seller',
                'signin-button': 'Sign In',
                'signin-as-seller': 'Sign In as Seller',
                'signin-to-view-orders': 'Sign In to View Your Orders',
                'ratings': '4.5 stars (120 ratings)',
                'quantity': 'Quantity:',
                'add-to-cart': 'Add to Cart',
                'your-shopping-cart': 'Your Shopping Cart',
                'empty-cart-message': 'Your cart is empty.',
                'total': 'Total:',
                'proceed-to-checkout': 'Proceed to Checkout',
                'allow-location-access': 'Allow Location Access',
                'location-message': 'To provide you with the best experience, we need to know your location to show products delivered to your area.',
                'allow-location': 'Allow Location',
                'maybe-later': 'Maybe later'
            },
            'es': {
                'hello-signin': 'Hola, identifícate',
                'account-lists': 'Cuentas y listas',
                'returns': 'Devoluciones',
                'orders': 'y Pedidos',
                'cart': 'Carrito',
                'all': 'Todo',
                'todays-deals': 'Ofertas de hoy',
                'customer-service': 'Servicio al cliente',
                'registry': 'Registro',
                'gift-cards': 'Tarjetas de regalo',
                'sell': 'Vender',
                'shop-by-category': 'Comprar por categoría',
                'electronics': 'Electrónica',
                'fashion': 'Moda',
                'home-kitchen': 'Hogar y cocina',
                'books': 'Libros',
                'sports-outdoors': 'Deportes y aire libre',
                'new-arrivals': 'Nuevas llegadas',
                'product-description': 'Breve descripción del producto.',
                'deal-of-the-day': 'Oferta del día',
                'deal-smartwatch-title': 'Reloj inteligente con monitor de fitness',
                'deal-smartwatch-description': 'Controla tu salud con este dispositivo avanzado.',
                'deal-headphones-title': 'Auriculares inalámbricos con cancelación de ruido',
                'deal-headphones-description': 'Experiencia de audio inmersiva sobre la marcha.',
                'deal-speaker-title': 'Altavoz Bluetooth portátil',
                'deal-speaker-description': 'Sonido potente en un diseño compacto.',
                'view-deal': 'Ver oferta',
                'bestsellers': 'Más vendidos de Fivoo',
                'bestseller-laptop-stand-title': 'Soporte para laptop',
                'bestseller-laptop-stand-desc': 'Diseño ergonómico y portátil.',
                'bestseller-wireless-mouse-title': 'Mouse inalámbrico',
                'bestseller-wireless-mouse-desc': 'Seguimiento suave y receptivo.',
                'bestseller-power-bank-title': 'Batería externa portátil',
                'bestseller-power-bank-desc': 'Alta capacidad para múltiples cargas.',
                'bestseller-office-chair-title': 'Silla de oficina de malla',
                'bestseller-office-chair-desc': 'Diseño cómodo y transpirable.',
                'bestseller-desk-organizer-title': 'Organizador de escritorio',
                'bestseller-desk-organizer-desc': 'Mantén tu espacio de trabajo ordenado.',
                'shop-by-department': 'Comprar por departamento',
                'signin-title': 'Iniciar sesión',
                'buyer': 'Comprador',
                'seller': 'Vendedor',
                'signin-button': 'Iniciar sesión',
                'signin-as-seller': 'Iniciar sesión como vendedor',
                'signin-to-view-orders': 'Inicia sesión para ver tus pedidos',
                'ratings': '4.5 estrellas (120 valoraciones)',
                'quantity': 'Cantidad:',
                'add-to-cart': 'Añadir al carrito',
                'your-shopping-cart': 'Tu carrito de compras',
                'empty-cart-message': 'Tu carrito está vacío.',
                'total': 'Total:',
                'proceed-to-checkout': 'Continuar con el pago',
                'allow-location-access': 'Permitir acceso a la ubicación',
                'location-message': 'Para ofrecerte la mejor experiencia, necesitamos tu ubicación para mostrarte productos que se entregan en tu zona.',
                'allow-location': 'Permitir ubicación',
                'maybe-later': 'Quizás más tarde'
            },
             'tr': {
        'hello-signin': 'Merhaba, giriş yap',
        'account-lists': 'Hesap ve Listeler',
        'returns': 'İadeler',
        'orders': 'Siparişler',
        'cart': 'Sepet',
        'all': 'Tümü',
        'todays-deals': "Bugünün Fırsatları",
        'customer-service': 'Müşteri Hizmetleri',
        'registry': 'Kayıt',
        'gift-cards': 'Hediye Kartları',
        'sell': 'Sat',
        'shop-by-category': 'Kategoriye Göre Alışveriş',
        'electronics': 'Elektronik',
        'fashion': 'Moda',
        'home-kitchen': 'Ev ve Mutfak',
        'books': 'Kitaplar',
        'sports-outdoors': 'Spor ve Açık Hava',
        'new-arrivals': 'Yeni Gelenler',
        'product-description': 'Ürünün kısa açıklaması.',
        'deal-of-the-day': 'Günün Fırsatı',
        'deal-smartwatch-title': 'Fitness Takip Özellikli Akıllı Saat',
        'deal-smartwatch-description': 'Sağlığınızı bu gelişmiş cihazla takip edin.',
        'deal-headphones-title': 'Kablosuz Gürültü Önleyici Kulaklık',
        'deal-headphones-description': 'Her yerde etkileyici ses deneyimi.',
        'deal-speaker-title': 'Taşınabilir Bluetooth Hoparlör',
        'deal-speaker-description': 'Kompakt tasarımda güçlü ses.',
        'view-deal': 'Fırsatı Gör',
        'bestsellers': 'Fivoo Çok Satanlar',
        'bestseller-laptop-stand-title': 'Laptop Standı',
        'bestseller-laptop-stand-desc': 'Ergonomik ve taşınabilir tasarım.',
        'bestseller-wireless-mouse-title': 'Kablosuz Fare',
        'bestseller-wireless-mouse-desc': 'Akıcı ve hassas kullanım.',
        'bestseller-power-bank-title': 'Taşınabilir Powerbank',
        'bestseller-power-bank-desc': 'Birden fazla şarj için yüksek kapasite.',
        'bestseller-office-chair-title': 'Fileli Ofis Sandalyesi',
        'bestseller-office-chair-desc': 'Rahat ve nefes alabilen tasarım.',
        'bestseller-desk-organizer-title': 'Masa Düzenleyici',
        'bestseller-desk-organizer-desc': 'Çalışma alanınızı düzenli tutun.',
        'shop-by-department': 'Bölüme Göre Alışveriş',
        'signin-title': 'Giriş Yap',
        'buyer': 'Alıcı',
        'seller': 'Satıcı',
        'signin-button': 'Giriş Yap',
        'signin-as-seller': 'Satıcı Olarak Giriş Yap',
        'signin-to-view-orders': 'Siparişlerinizi Görmek için Giriş Yapın',
        'ratings': '4.5 yıldız (120 değerlendirme)',
        'quantity': 'Miktar:',
        'add-to-cart': 'Sepete Ekle',
        'your-shopping-cart': 'Alışveriş Sepetiniz',
        'empty-cart-message': 'Sepetiniz boş.',
        'total': 'Toplam:',
        'proceed-to-checkout': 'Satın Almaya Devam Et',
        'allow-location-access': 'Konum Erişimine İzin Ver',
        'location-message': 'Size en iyi deneyimi sunmak için konum bilginize ihtiyacımız var.',
        'allow-location': 'İzin Ver',
        'maybe-later': 'Daha Sonra'
    },

    'ur': {
        'hello-signin': 'ہیلو، سائن ان کریں',
        'account-lists': 'اکاؤنٹ اور فہرستیں',
        'returns': 'واپسی',
        'orders': 'آرڈرز',
        'cart': 'کارٹ',
        'all': 'سب',
        'todays-deals': "آج کی ڈیلز",
        'customer-service': 'کسٹمر سروس',
        'registry': 'رجسٹری',
        'gift-cards': 'گفٹ کارڈز',
        'sell': 'بیچیں',
        'shop-by-category': 'زمرے کے لحاظ سے خریداری',
        'electronics': 'الیکٹرانکس',
        'fashion': 'فیشن',
        'home-kitchen': 'گھر اور کچن',
        'books': 'کتابیں',
        'sports-outdoors': 'کھیل اور آؤٹ ڈور',
        'new-arrivals': 'نئی آمد',
        'product-description': 'پروڈکٹ کی مختصر وضاحت۔',
        'deal-of-the-day': 'آج کی ڈیل',
        'deal-smartwatch-title': 'فٹنس ٹریکر کے ساتھ سمارٹ واچ',
        'deal-smartwatch-description': 'اپنی صحت کو جدید ڈیوائس سے ٹریک کریں۔',
        'deal-headphones-title': 'وائرلیس نائس کینسلنگ ہیڈ فونز',
        'deal-headphones-description': 'ہر جگہ شاندار آواز کا تجربہ۔',
        'deal-speaker-title': 'پورٹیبل بلوٹوتھ اسپیکر',
        'deal-speaker-description': 'طاقتور آواز ایک کمپیکٹ ڈیزائن میں۔',
        'view-deal': 'ڈیل دیکھیں',
        'bestsellers': 'Fivoo بیسٹ سیلرز',
        'bestseller-laptop-stand-title': 'لیپ ٹاپ اسٹینڈ',
        'bestseller-laptop-stand-desc': 'آرام دہ اور پورٹیبل ڈیزائن۔',
        'bestseller-wireless-mouse-title': 'وائرلیس ماؤس',
        'bestseller-wireless-mouse-desc': 'ہموار اور درست استعمال۔',
        'bestseller-power-bank-title': 'پورٹیبل پاور بینک',
        'bestseller-power-bank-desc': 'متعدد چارج کے لیے اعلیٰ صلاحیت۔',
        'bestseller-office-chair-title': 'میـش آفس چیئر',
        'bestseller-office-chair-desc': 'آرام دہ اور سانس لینے والا ڈیزائن۔',
        'bestseller-desk-organizer-title': 'ڈیسک آرگنائزر',
        'bestseller-desk-organizer-desc': 'اپنی ورک اسپیـس کو صاف ستھرا رکھیں۔',
        'shop-by-department': 'محکمے کے لحاظ سے خریداری',
        'signin-title': 'سائن ان',
        'buyer': 'خریدار',
        'seller': 'بیچنے والا',
        'signin-button': 'سائن ان',
        'signin-as-seller': 'بطور بیچنے والا سائن ان کریں',
        'signin-to-view-orders': 'اپنے آرڈرز دیکھنے کے لیے سائن ان کریں',
        'ratings': '4.5 ستارے (120 ریٹنگز)',
        'quantity': 'مقدار:',
        'add-to-cart': 'کارٹ میں شامل کریں',
        'your-shopping-cart': 'آپ کی شاپنگ کارٹ',
        'empty-cart-message': 'آپ کی کارٹ خالی ہے۔',
        'total': 'کل:',
        'proceed-to-checkout': 'چیک آؤٹ پر جائیں',
        'allow-location-access': 'لوکیشن تک رسائی کی اجازت دیں',
        'location-message': 'بہترین تجربے کے لیے ہمیں آپ کی لوکیشن جاننے کی ضرورت ہے۔',
        'allow-location': 'اجازت دیں',
        'maybe-later': 'بعد میں'
    },
            'ar': {
                'hello-signin': 'مرحباً، تسجيل الدخول',
                'account-lists': 'الحساب والقوائم',
                'returns': 'المرتجعات',
                'orders': 'والطلبات',
                'cart': 'السلة',
                'all': 'الكل',
                'todays-deals': 'عروض اليوم',
                'customer-service': 'خدمة العملاء',
                'registry': 'السجل',
                'gift-cards': 'بطاقات الهدايا',
                'sell': 'بيع',
                'shop-by-category': 'تسوق حسب الفئة',
                'electronics': 'إلكترونيات',
                'fashion': 'أزياء',
                'home-kitchen': 'المنزل والمطبخ',
                'books': 'كتب',
                'sports-outdoors': 'رياضة وهواء الطلق',
                'new-arrivals': 'وصول جديد',
                'product-description': 'وصف قصير للمنتج.',
                'deal-of-the-day': 'صفقة اليوم',
                'deal-smartwatch-title': 'ساعة ذكية مع متعقب لياقة',
                'deal-smartwatch-description': 'تتبع صحتك مع هذا الجهاز القابل للارتداء المتقدم.',
                'deal-headphones-title': 'سماعات رأس لاسلكية بخاصية إلغاء الضوضاء',
                'deal-headphones-description': 'تجربة صوتية غامرة أثناء التنقل.',
                'deal-speaker-title': 'سماعة بلوتوث محمولة',
                'deal-speaker-description': 'صوت قوي في تصميم مدمج.',
                'view-deal': 'عرض الصفقة',
                'bestsellers': 'الأكثر مبيعاً من فيفو',
                'bestseller-laptop-stand-title': 'حامل لابتوب',
                'bestseller-laptop-stand-desc': 'تصميم مريح ومحمول.',
                'bestseller-wireless-mouse-title': 'فأرة لاسلكية',
                'bestseller-wireless-mouse-desc': 'تتبع سلس وسريع الاستجابة.',
                'bestseller-power-bank-title': 'بنك طاقة محمول',
                'bestseller-power-bank-desc': 'سعة عالية لشحنات متعددة.',
                'bestseller-office-chair-title': 'كرسي مكتب شبكي',
                'bestseller-office-chair-desc': 'تصميم مريح وجيد التهوية.',
                'bestseller-desk-organizer-title': 'منظم مكتب',
                'bestseller-desk-organizer-desc': 'حافظ على مساحة عملك مرتبة.',
                'shop-by-department': 'تسوق حسب القسم',
                'signin-title': 'تسجيل الدخول',
                'buyer': 'مشتري',
                'seller': 'بائع',
                'signin-button': 'تسجيل الدخول',
                'signin-as-seller': 'تسجيل الدخول كبائع',
                'signin-to-view-orders': 'سجل الدخول لعرض طلباتك',
                'ratings': '4.5 نجوم (120 تقييم)',
                'quantity': 'الكمية:',
                'add-to-cart': 'أضف إلى السلة',
                'your-shopping-cart': 'عربة التسوق الخاصة بك',
                'empty-cart-message': 'عربة التسوق الخاصة بك فارغة.',
                'total': 'الإجمالي:',
                'proceed-to-checkout': 'المتابعة للدفع',
                'allow-location-access': 'السماح بالوصول إلى الموقع',
                'location-message': 'لتوفير أفضل تجربة لك، نحتاج إلى معرفة موقعك لعرض المنتجات التي يتم تسليمها إلى منطقتك.',
                'allow-location': 'السماح بالموقع',
                'maybe-later': 'ربما في وقت لاحق'
            },
            'de': {
                'hello-signin': 'Hallo, anmelden',
                'account-lists': 'Konto & Listen',
                'returns': 'Rücksendungen',
                'orders': ' & Bestellungen',
                'cart': 'Warenkorb',
                'all': 'Alle',
                'todays-deals': 'Heutige Angebote',
                'customer-service': 'Kundenservice',
                'registry': 'Wunschzettel',
                'gift-cards': 'Geschenkkarten',
                'sell': 'Verkaufen',
                'shop-by-category': 'Nach Kategorie einkaufen',
                'electronics': 'Elektronik',
                'fashion': 'Mode',
                'home-kitchen': 'Haus & Küche',
                'books': 'Bücher',
                'sports-outdoors': 'Sport & Outdoor',
                'new-arrivals': 'Neue Ankünfte',
                'product-description': 'Kurze Produktbeschreibung.',
                'deal-of-the-day': 'Angebot des Tages',
                'deal-smartwatch-title': 'Smartwatch mit Fitness-Tracker',
                'deal-smartwatch-description': 'Verfolgen Sie Ihre Gesundheit mit diesem fortschrittlichen Wearable.',
                'deal-headphones-title': 'Kabellose Kopfhörer mit Geräuschunterdrückung',
                'deal-headphones-description': 'Immersives Audioerlebnis für unterwegs.',
                'deal-speaker-title': 'Tragbarer Bluetooth-Lautsprecher',
                'deal-speaker-description': 'Kraftvoller Sound in einem kompakten Design.',
                'view-deal': 'Angebot ansehen',
                'bestsellers': 'Fivoo Bestseller',
                'bestseller-laptop-stand-title': 'Laptop-Ständer',
                'bestseller-laptop-stand-desc': 'Ergonomisches und tragbares Design.',
                'bestseller-wireless-mouse-title': 'Kabellose Maus',
                'bestseller-wireless-mouse-desc': 'Reibungslose und reaktionsschnelle Verfolgung.',
                'bestseller-power-bank-title': 'Tragbare Powerbank',
                'bestseller-power-bank-desc': 'Hohe Kapazität für mehrere Ladungen.',
                'bestseller-office-chair-title': 'Bürostuhl mit Netzrücken',
                'bestseller-office-chair-desc': 'Komfortables und atmungsaktives Design.',
                'bestseller-desk-organizer-title': 'Schreibtisch-Organizer',
                'bestseller-desk-organizer-desc': 'Halten Sie Ihren Arbeitsplatz aufgeräumt.',
                'shop-by-department': 'Nach Abteilung einkaufen',
                'signin-title': 'Anmelden',
                'buyer': 'Käufer',
                'seller': 'Verkäufer',
                'signin-button': 'Anmelden',
                'signin-as-seller': 'Als Verkäufer anmelden',
                'signin-to-view-orders': 'Melden Sie sich an, um Ihre Bestellungen anzuzeigen',
                'ratings': '4.5 Sterne (120 Bewertungen)',
                'quantity': 'Menge:',
                'add-to-cart': 'In den Warenkorb',
                'your-shopping-cart': 'Ihr Warenkorb',
                'empty-cart-message': 'Ihr Warenkorb ist leer.',
                'total': 'Gesamt:',
                'proceed-to-checkout': 'Zur Kasse gehen',
                'allow-location-access': 'Standortzugriff erlauben',
                'location-message': 'Um Ihnen das beste Erlebnis zu bieten, benötigen wir Ihren Standort, um Produkte anzuzeigen, die in Ihre Region geliefert werden.',
                'allow-location': 'Standort erlauben',
                'maybe-later': 'Vielleicht später'
            },
            'fr': {
                'hello-signin': 'Bonjour, identifiez-vous',
                'account-lists': 'Compte et listes',
                'returns': 'Retours',
                'orders': 'et Commandes',
                'cart': 'Panier',
                'all': 'Tout',
                'todays-deals': "Offres du jour",
                'customer-service': 'Service client',
                'registry': 'Liste de cadeaux',
                'gift-cards': 'Cartes-cadeaux',
                'sell': 'Vendre',
                'shop-by-category': 'Acheter par catégorie',
                'electronics': 'Électronique',
                'fashion': 'Mode',
                'home-kitchen': 'Maison & Cuisine',
                'books': 'Livres',
                'sports-outdoors': 'Sports & Plein air',
                'new-arrivals': 'Nouvelles arrivées',
                'product-description': 'Courte description du produit.',
                'deal-of-the-day': 'Offre du jour',
                'deal-smartwatch-title': 'Montre connectée avec tracker de fitness',
                'deal-smartwatch-description': 'Suivez votre santé avec ce wearable avancé.',
                'deal-headphones-title': 'Écouteurs sans fil à réduction de bruit',
                'deal-headphones-description': 'Expérience audio immersive en déplacement.',
                'deal-speaker-title': 'Haut-parleur Bluetooth portable',
                'deal-speaker-description': 'Son puissant dans un design compact.',
                'view-deal': 'Voir l\'offre',
                'bestsellers': 'Meilleures ventes Fivoo',
                'bestseller-laptop-stand-title': 'Support pour ordinateur portable',
                'bestseller-laptop-stand-desc': 'Design ergonomique et portable.',
                'bestseller-wireless-mouse-title': 'Souris sans fil',
                'bestseller-wireless-mouse-desc': 'Suivi fluide et réactif.',
                'bestseller-power-bank-title': 'Batterie externe portable',
                'bestseller-power-bank-desc': 'Grande capacité pour plusieurs charges.',
                'bestseller-office-chair-title': 'Chaise de bureau en maille',
                'bestseller-office-chair-desc': 'Design confortable et respirant.',
                'bestseller-desk-organizer-title': 'Organisateur de bureau',
                'bestseller-desk-organizer-desc': 'Gardez votre espace de travail bien rangé.',
                'shop-by-department': 'Acheter par département',
                'signin-title': 'Connexion',
                'buyer': 'Acheteur',
                'seller': 'Vendeur',
                'signin-button': 'Connexion',
                'signin-as-seller': 'Se connecter en tant que vendeur',
                'signin-to-view-orders': 'Connectez-vous pour voir vos commandes',
                'ratings': '4.5 étoiles (120 évaluations)',
                'quantity': 'Quantité:',
                'add-to-cart': 'Ajouter au panier',
                'your-shopping-cart': 'Votre panier',
                'empty-cart-message': 'Votre panier est vide.',
                'total': 'Total:',
                'proceed-to-checkout': 'Passer à la caisse',
                'allow-location-access': 'Autoriser l\'accès à la localisation',
                'location-message': 'Pour vous offrir la meilleure expérience, nous avons besoin de votre emplacement pour afficher les produits livrés dans votre région.',
                'allow-location': 'Autoriser la localisation',
                'maybe-later': 'Peut-être plus tard'
            },
            'ja': {
                'hello-signin': 'こんにちは、サインイン',
                'account-lists': 'アカウントとリスト',
                'returns': '返品',
                'orders': 'と注文',
                'cart': 'カート',
                'all': 'すべて',
                'todays-deals': '今日のお買い得',
                'customer-service': 'カスタマーサービス',
                'registry': 'レジストリ',
                'gift-cards': 'ギフトカード',
                'sell': '販売',
                'shop-by-category': 'カテゴリーから探す',
                'electronics': 'エレクトロニクス',
                'fashion': 'ファッション',
                'home-kitchen': 'ホーム＆キッチン',
                'books': '本',
                'sports-outdoors': 'スポーツ＆アウトドア',
                'new-arrivals': '新着',
                'product-description': '商品の簡単な説明。',
                'deal-of-the-day': '本日のお買い得',
                'deal-smartwatch-title': 'フィットネストラッカー付きスマートウォッチ',
                'deal-smartwatch-description': 'この高度なウェアラブルで健康を追跡。',
                'deal-headphones-title': 'ワイヤレスノイズキャンセリングヘッドホン',
                'deal-headphones-description': '外出先でも没入型オーディオ体験。',
                'deal-speaker-title': 'ポータブルBluetoothスピーカー',
                'deal-speaker-description': 'コンパクトなデザインでパワフルなサウンド。',
                'view-deal': 'お買い得を見る',
                'bestsellers': 'Fivooベストセラー',
                'bestseller-laptop-stand-title': 'ラップトップスタンド',
                'bestseller-laptop-stand-desc': '人間工学に基づいたポータブルデザイン。',
                'bestseller-wireless-mouse-title': 'ワイヤレスマウス',
                'bestseller-wireless-mouse-desc': 'スムーズで応答性の高いトラッキング。',
                'bestseller-power-bank-title': 'ポータブルパワーバンク',
                'bestseller-power-bank-desc': '複数回充電できる大容量。',
                'bestseller-office-chair-title': 'メッシュオフィスチェア',
                'bestseller-office-chair-desc': '快適で通気性のあるデザイン。',
                'bestseller-desk-organizer-title': 'デスクオーガナイザー',
                'bestseller-desk-organizer-desc': '作業スペースをきれいに保ちます。',
                'shop-by-department': '部門から探す',
                'signin-title': 'サインイン',
                'buyer': '購入者',
                'seller': '販売者',
                'signin-button': 'サインイン',
                'signin-as-seller': '販売者としてサインイン',
                'signin-to-view-orders': 'サインインして注文を見る',
                'ratings': '4.5つ星（120件の評価）',
                'quantity': '数量:',
                'add-to-cart': 'カートに追加',
                'your-shopping-cart': 'ショッピングカート',
                'empty-cart-message': 'カートは空です。',
                'total': '合計:',
                'proceed-to-checkout': 'チェックアウトに進む',
                'allow-location-access': '位置情報へのアクセスを許可',
                'location-message': '最適な体験を提供するため、お客様の地域に配送される商品を表示するために位置情報が必要です。',
                'allow-location': '位置情報を許可',
                'maybe-later': '後で'
            },
            'zh': {
                'hello-signin': '您好，请登录',
                'account-lists': '账户与清单',
                'returns': '退货',
                'orders': '与订单',
                'cart': '购物车',
                'all': '全部',
                'todays-deals': '今日优惠',
                'customer-service': '客户服务',
                'registry': '注册',
                'gift-cards': '礼品卡',
                'sell': '卖出',
                'shop-by-category': '按类别购物',
                'electronics': '电子产品',
                'fashion': '时尚',
                'home-kitchen': '家居与厨房',
                'books': '图书',
                'sports-outdoors': '运动与户外',
                'new-arrivals': '新品上架',
                'product-description': '产品简短描述。',
                'deal-of-the-day': '每日特惠',
                'deal-smartwatch-title': '带健身追踪器的智能手表',
                'deal-smartwatch-description': '使用这款先进的可穿戴设备跟踪您的健康。',
                'deal-headphones-title': '无线降噪耳机',
                'deal-headphones-description': '随时随地享受沉浸式音频体验。',
                'deal-speaker-title': '便携式蓝牙音箱',
                'deal-speaker-description': '紧凑设计中的强劲音效。',
                'view-deal': '查看优惠',
                'bestsellers': 'Fivoo畅销品',
                'bestseller-laptop-stand-title': '笔记本电脑支架',
                'bestseller-laptop-stand-desc': '符合人体工程学的便携式设计。',
                'bestseller-wireless-mouse-title': '无线鼠标',
                'bestseller-wireless-mouse-desc': '流畅且反应迅速的跟踪。',
                'bestseller-power-bank-title': '便携式移动电源',
                'bestseller-power-bank-desc': '高容量，可多次充电。',
                'bestseller-office-chair-title': '网布办公椅',
                'bestseller-office-chair-desc': '舒适透气的设计。',
                'bestseller-desk-organizer-title': '桌面收纳盒',
                'bestseller-desk-organizer-desc': '保持您的工作空间整洁。',
                'shop-by-department': '按部门购物',
                'signin-title': '登录',
                'buyer': '买家',
                'seller': '卖家',
                'signin-button': '登录',
                'signin-as-seller': '作为卖家登录',
                'signin-to-view-orders': '登录以查看您的订单',
                'ratings': '4.5星（120条评分）',
                'quantity': '数量:',
                'add-to-cart': '添加到购物车',
                'your-shopping-cart': '您的购物车',
                'empty-cart-message': '您的购物车是空的。',
                'total': '总计:',
                'proceed-to-checkout': '继续结账',
                'allow-location-access': '允许位置访问',
                'location-message': '为了向您提供最佳体验，我们需要知道您的位置以显示可以交付到您所在区域的产品。',
                'allow-location': '允许位置',
                'maybe-later': '稍后'
            },
            'hi': {
                'hello-signin': 'नमस्ते, साइन इन करें',
                'account-lists': 'खाता और सूचियाँ',
                'returns': 'वापसी',
                'orders': 'और ऑर्डर',
                'cart': 'कार्ट',
                'all': 'सभी',
                'todays-deals': 'आज के सौदे',
                'customer-service': 'ग्राहक सेवा',
                'registry': 'पंजीकरण',
                'gift-cards': 'उपहार कार्ड',
                'sell': 'बेचें',
                'shop-by-category': 'श्रेणी के अनुसार खरीदारी करें',
                'electronics': 'इलेक्ट्रॉनिक्स',
                'fashion': 'फैशन',
                'home-kitchen': 'घर और रसोई',
                'books': 'किताबें',
                'sports-outdoors': 'खेल और आउटडोर',
                'new-arrivals': 'नए आगमन',
                'product-description': 'उत्पाद का संक्षिप्त विवरण।',
                'deal-of-the-day': 'दिन का सौदा',
                'deal-smartwatch-title': 'फिटनेस ट्रैकर के साथ स्मार्टवॉच',
                'deal-smartwatch-description': 'इस उन्नत पहनने योग्य के साथ अपने स्वास्थ्य को ट्रैक करें।',
                'deal-headphones-title': 'वायरलेस नॉइज़-कैंसलिंग हेडफ़ोन',
                'deal-headphones-description': 'चलते-फिरते इमर्सिव ऑडियो अनुभव।',
                'deal-speaker-title': 'पोर्टेबल ब्लूटूथ स्पीकर',
                'deal-speaker-description': 'एक कॉम्पैक्ट डिज़ाइन में शक्तिशाली ध्वनि।',
                'view-deal': 'सौदे देखें',
                'bestsellers': 'Fivoo के बेस्टसेलर',
                'bestseller-laptop-stand-title': 'लैपटॉप स्टैंड',
                'bestseller-laptop-stand-desc': 'एर्गोनोमिक और पोर्टेबल डिज़ाइन।',
                'bestseller-wireless-mouse-title': 'वायरलेस माउस',
                'bestseller-wireless-mouse-desc': 'चिकनी और प्रतिक्रियाशील ट्रैकिंग।',
                'bestseller-power-bank-title': 'पोर्टेबल पावर बैंक',
                'bestseller-power-bank-desc': 'कई चार्ज के लिए उच्च क्षमता।',
                'bestseller-office-chair-title': 'मेष ऑफिस चेयर',
                'bestseller-office-chair-desc': 'आरामदायक और हवादार डिज़ाइन।',
                'bestseller-desk-organizer-title': 'डेस्क ऑर्गनाइज़र',
                'bestseller-desk-organizer-desc': 'अपने कार्यक्षेत्र को साफ-सुथरा रखें।',
                'shop-by-department': 'विभाग के अनुसार खरीदारी करें',
                'signin-title': 'साइन इन करें',
                'buyer': 'खरीदार',
                'seller': 'विक्रेता',
                'signin-button': 'साइन इन करें',
                'signin-as-seller': 'विक्रेता के रूप में साइन इन करें',
                'signin-to-view-orders': 'अपने ऑर्डर देखने के लिए साइन इन करें',
                'ratings': '4.5 सितारे (120 रेटिंग)',
                'quantity': 'मात्रा:',
                'add-to-cart': 'कार्ट में जोड़ें',
                'your-shopping-cart': 'आपकी शॉपिंग कार्ट',
                'empty-cart-message': 'आपकी कार्ट खाली है।',
                'total': 'कुल:',
                'proceed-to-checkout': 'चेकआउट के लिए आगे बढ़ें',
                'allow-location-access': 'स्थान की अनुमति दें',
                'location-message': 'आपको सबसे अच्छा अनुभव प्रदान करने के लिए, हमें आपके स्थान को जानना होगा ताकि हम आपके क्षेत्र में वितरित होने वाले उत्पादों को दिखा सकें।',
                'allow-location': 'स्थान की अनुमति दें',
                'maybe-later': 'शायद बाद में'
            },
        };

        const currencyData = {
            'usd': { symbol: '$', rate: 1.00 },
            'aed': { symbol: 'د.إ', rate: 3.67 },
            'pkr': { symbol: 'Rs', rate: 280.00 },
            'eur': { symbol: '€', rate: 0.92 },
            'try': { symbol: '₺', rate: 32.00 },
            'jpy': { symbol: '¥', rate: 151.00 },
            'cny': { symbol: '¥', rate: 7.23 },
            'inr': { symbol: '₹', rate: 83.00 },
        };

        const countryData = {
            'United States': 'us',
            'United Kingdom': 'gb',
            'Pakistan': 'pk',
            'Turkey': 'tr',
            'Japan': 'jp',
            'France': 'fr',
            'Germany': 'de',
            'India': 'in',
            'China': 'cn',
            'Brazil': 'br',
            'United Arab Emirates': 'ae'
        };

        function updateUI() {
            // Update language-specific text
            const elementsToTranslate = document.querySelectorAll('[data-translate]');
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[state.currentLanguage] && translations[state.currentLanguage][key]) {
                    el.textContent = translations[state.currentLanguage][key];
                }
            });

            // Update product prices
            const productPrices = document.querySelectorAll('.product-price');
            productPrices.forEach(el => {
                let text = el.textContent;
                // Preserve strikethrough price if it exists
                const strikethroughSpan = el.querySelector('.line-through');
                const originalPriceText = text.split(' ')[0]; // Assumes price is first part of string

                let originalPrice = parseFloat(originalPriceText.replace(/[^0-9.]/g, ''));
                let newPrice = originalPrice * currencyData[state.currentCurrency].rate;
                let newPriceText = `${currencyData[state.currentCurrency].symbol}${newPrice.toFixed(2)}`;
                
                if (strikethroughSpan) {
                    let strikethroughPrice = parseFloat(strikethroughSpan.textContent.replace(/[^0-9.]/g, ''));
                    let newStrikethroughPrice = strikethroughPrice * currencyData[state.currentCurrency].rate;
                    let newStrikethroughText = `${currencyData[state.currentCurrency].symbol}${newStrikethroughPrice.toFixed(2)}`;
                    el.innerHTML = `${newPriceText} <span class="text-sm text-gray-500 line-through">${newStrikethroughText}</span>`;
                } else {
                    el.textContent = newPriceText;
                }
            });

            // Update cart prices
            updateCart();

            // Update dropdown displays in the footer
            document.getElementById('current-language-display').textContent = document.querySelector(`[data-lang="${state.currentLanguage}"]`).textContent;
            document.getElementById('current-currency-display').textContent = state.currentCurrency.toUpperCase();
            document.getElementById('current-currency-symbol').textContent = currencyData[state.currentCurrency].symbol;
            document.getElementById('current-country-display').textContent = state.currentCountry;
            document.getElementById('current-flag-display').src = `https://flagcdn.com/w20/${countryData[state.currentCountry]}.png`;
        }

        // Hero Slider functionality
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlides() {
            slides.forEach(slide => slide.classList.remove('opacity-100'));
            slides[slideIndex].classList.add('opacity-100');
            slideIndex = (slideIndex + 1) % totalSlides;
        }
        setInterval(showSlides, 3000);

        // Product Slider functionality
        function scrollSlider(id, scrollAmount) {
            const slider = document.getElementById(id);
            slider.scrollLeft += scrollAmount;
        }

        // Modal and Button references
        const authModal = document.getElementById('auth-modal');
        const signinModal = document.getElementById('signin-modal');
        const cartModal = document.getElementById('cart-modal');
        const productDetailPage = document.getElementById('product-detail-page');
        const locationModal = document.getElementById('location-modal');
        const loginSignupBtn = document.getElementById('login-signup-btn');
        const returnsOrdersBtn = document.getElementById('returns-orders-btn');
        const cartBtn = document.getElementById('cart-btn');
        const allCategoriesBtn = document.getElementById('all-categories-btn');
        const categoriesMenu = document.getElementById('categories-menu');
        const locationBtn = document.getElementById('location-btn');
        const locationText = document.getElementById('location-text');
        const allowLocationBtn = document.getElementById('allow-location-btn');
        const denyLocationBtn = document.getElementById('deny-location-btn');
        const buyerForm = document.getElementById('buyer-form');
        const sellerForm = document.getElementById('seller-form');
        const showBuyerFormBtn = document.getElementById('show-buyer-form');
        const showSellerFormBtn = document.getElementById('show-seller-form');
        const modalOverlays = document.querySelectorAll('.modal-overlay');

        // Cart State and logic
        let cart = [];

        function updateCart() {
            const cartCount = document.getElementById('cart-count');
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotalElement = document.getElementById('cart-total');
            
            cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
            
            if (cart.length === 0) {
                const emptyMessage = translations[state.currentLanguage]['empty-cart-message'] || 'Your cart is empty.';
                cartItemsContainer.innerHTML = `<p class="text-gray-500 text-center">${emptyMessage}</p>`;
            } else {
                cartItemsContainer.innerHTML = cart.map(item => `
                    <div class="flex items-center space-x-4 p-4 border rounded-md">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-md">
                        <div class="flex-grow">
                            <p class="font-semibold">${item.name}</p>
                            <p class="text-sm text-gray-500">${(translations[state.currentLanguage]['total'] || 'Total:')} ${currencyData[state.currentCurrency].symbol}${(item.price * currencyData[state.currentCurrency].rate).toFixed(2)}</p>
                            <p class="text-sm">${(translations[state.currentLanguage]['quantity'] || 'Quantity:')} ${item.quantity}</p>
                        </div>
                        <button onclick="removeFromCart('${item.id}')" class="text-red-500 hover:text-red-700 transition-colors">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                `).join('');
            }
            
            const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            cartTotalElement.textContent = `${currencyData[state.currentCurrency].symbol}${(total * currencyData[state.currentCurrency].rate).toFixed(2)}`;
        }

        function addToCart(product) {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += product.quantity;
            } else {
                cart.push(product);
            }
            updateCart();
            closeModal(productDetailPage);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Reusable function to close any modal
        function closeModal(modal) {
            modal.classList.add('hidden');
        }

        // Event listeners to show modals
        loginSignupBtn.addEventListener('click', () => {
            authModal.classList.remove('hidden');
        });
        returnsOrdersBtn.addEventListener('click', () => {
            signinModal.classList.remove('hidden');
        });
        cartBtn.addEventListener('click', () => {
            updateCart();
            cartModal.classList.remove('hidden');
        });
        locationBtn.addEventListener('click', () => {
            locationModal.classList.remove('hidden');
        });

        // Event listeners to close modals when clicking outside or on the close button
        modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', (event) => {
                if (event.target === overlay) {
                    closeModal(overlay);
                }
            });
        });
        document.querySelectorAll('.close-modal-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const modalId = event.target.closest('.modal-overlay').id;
                closeModal(document.getElementById(modalId));
            });
        });

        // Event listeners to toggle forms in auth modal
        showBuyerFormBtn.addEventListener('click', () => {
            buyerForm.classList.remove('hidden');
            sellerForm.classList.add('hidden');
            showBuyerFormBtn.classList.add('border-orange-500', 'text-orange-500');
            showSellerFormBtn.classList.remove('border-orange-500', 'text-orange-500');
        });
        showSellerFormBtn.addEventListener('click', () => {
            sellerForm.classList.remove('hidden');
            buyerForm.classList.add('hidden');
            showSellerFormBtn.classList.add('border-orange-500', 'text-orange-500');
            showBuyerFormBtn.classList.remove('border-orange-500', 'text-orange-500');
        });

        // Product detail page logic
        function showProductDetails(title, description, price, imageSrc, id) {
            document.getElementById('product-title').textContent = title;
            document.getElementById('product-description').textContent = description;
            document.getElementById('product-price').textContent = `${currencyData[state.currentCurrency].symbol}${(price * currencyData[state.currentCurrency].rate).toFixed(2)}`;
            document.getElementById('product-main-image').src = imageSrc;
            
            const addToCartButton = document.getElementById('add-to-cart-btn');
            const quantityInput = document.getElementById('product-quantity');
            
            // Remove previous event listener to avoid duplicates
            const newButton = addToCartButton.cloneNode(true);
            addToCartButton.parentNode.replaceChild(newButton, addToCartButton);
            
            newButton.addEventListener('click', () => {
                const quantity = parseInt(quantityInput.value);
                if (quantity > 0) {
                    const productToAdd = {
                        id: id,
                        name: title,
                        price: price, // Store base price for easy conversion
                        image: imageSrc,
                        quantity: quantity
                    };
                    addToCart(productToAdd);
                }
            });

            productDetailPage.classList.remove('hidden');
        }
        function hideProductDetails() {
            productDetailPage.classList.add('hidden');
        }

        // Back to top button
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Toggle All Categories Menu
        allCategoriesBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            categoriesMenu.classList.toggle('hidden');
            categoriesMenu.classList.toggle('-translate-x-full');
        });

        // Hide menu if user clicks outside of it
        document.addEventListener('click', (event) => {
            if (!categoriesMenu.contains(event.target) && event.target !== allCategoriesBtn) {
                categoriesMenu.classList.add('hidden');
                categoriesMenu.classList.add('-translate-x-full');
            }
        });

        // Location services functionality
        allowLocationBtn.addEventListener('click', () => {
            getLocation();
            closeModal(locationModal);
        });

        denyLocationBtn.addEventListener('click', () => {
            closeModal(locationModal);
        });

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                locationText.textContent = "Location not supported";
            }
        }

        function showPosition(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // Simulate reverse geocoding with a placeholder location
            locationText.textContent = "Loading...";
            setTimeout(() => {
                locationText.textContent = "Your City";
            }, 1500);
        }

        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    locationText.textContent = "Location denied";
                    break;
                case error.POSITION_UNAVAILABLE:
                    locationText.textContent = "Location unavailable";
                    break;
                case error.TIMEOUT:
                    locationText.textContent = "Location timeout";
                    break;
                default:
                    locationText.textContent = "Location error";
                    break;
            }
        }

        // Footer dropdown functionality
        const languageDropdown = document.getElementById('language-dropdown-footer');
        const currencyDropdown = document.getElementById('currency-dropdown-footer');
        const locationDropdown = document.getElementById('location-dropdown-footer');

        languageDropdown.addEventListener('click', (event) => {
            const selectedLang = event.target.closest('li')?.dataset.lang;
            if (selectedLang) {
                state.currentLanguage = selectedLang;
                updateUI();
            }
        });

        currencyDropdown.addEventListener('click', (event) => {
            const selectedCurrency = event.target.closest('li')?.dataset.currency;
            if (selectedCurrency) {
                state.currentCurrency = selectedCurrency;
                updateUI();
            }
        });

        locationDropdown.addEventListener('click', (event) => {
            const selectedCountry = event.target.closest('li')?.dataset.country;
            if (selectedCountry) {
                state.currentCountry = selectedCountry;
                document.getElementById('location-text').textContent = selectedCountry;
                updateUI();
            }
        });
        
        // Initial UI update on page load
        document.addEventListener('DOMContentLoaded', () => {
            updateUI();
        });
