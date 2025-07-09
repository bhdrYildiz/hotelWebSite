// app/data/tours.ts

export type Tour = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  program: { title: string; description: string }[];
  included: string[];
  excluded: string[];
  gallery: string[];
};

export const tours: Tour[] = [
  {
    id: "ballon-tour",
    title: "Kapadokya Balon Turu",
    description:
      "Kapadokya’da Balon Turu , 80’li yıllardan bu yana dünyanın dört bir yanından ziyaretçilerin büyük bir heyecan içinde katıldıkları, onlarca fotoğraf çektikleri, sevdikleriyle anılarına çok daha güzel anılar kattıkları en özel ve güzel aktivitelerden birisi olarak bilinir.80’li yılların sonlarına doğru bölgenin yatırımcıları tarafından başlatılan ve sonralarda hızla artan balon firmalarının sayısı günümüzde hala artmaya devam etmektedir.",
    price: "€100.00",
    image: "/images/turlar/tur5.jpg",
    gallery: [
      "/images/turlar/balon5.jpg",
      "/images/turlar/balon6.jpg",
      "/images/turlar/balon3.jpg",
      "/images/turlar/balon4.jpg",
      "/images/turlar/tur29.jpg",
      "/images/turlar/tur7.jpg",
      "/images/turlar/balon1.jpg",
      "/images/turlar/balon2.jpg",
    ],
    program: [
      {
        title: "Balon Turu Detayları",
        description:
          "Öncelerde, bölgenin milyonlarca yılda oluşan eşsiz yapısını ve binlerce yıllık yaşam izlerini keşfetmek ve tecrübe etmek için Kapadokya’ya gelen yerli ve yabancı turistlerin ikinci sırada tercih ettikleri aktivite olan balon turları son yıllarda artık birinci sıraya yerleşmiştir ve ziyaretçilerin gelme amaçları neredeyse sadece balon turu olmuştur.Çin’den, Hindistan’dan, Avrupa ülkelerinden veya Amerika’dan milyonlarca insan artık Kapadokya’ya sadece balon turu için geliyor. Sosyal medyanın ve reklamların da etkisiyle artık insanlar balon turundan arta kalan zamanda Kapadokya’yı gezmek için zaman ayırabiliyorlar.",
      },
      {
        title: "Hangi Durumlarda Uçar ?",
        description:
          "Hava şartlarının iyi olduğu zamanlarda yılın her günü uçuyor diyebiliriz. Biraz daha açacak olursak yağmur , kar ve sis yoğunluğunun olmadığı ayrıca rüzgar hızının saatte 13 Km’den az olduğu zamanlarda sivil havacılık tarafından onay verildiği taktirde uçuşlar yapılabilmektedir.Bunların aksi durumlar yaşandığında sivil havacılık uçuşları yasaklar ve hiçbir balon firması o sabah uçamaz.",
      },
      {
        title: "Ne Zamanlarda Uçar ?",
        description:
          "Balonlar yıl boyunca her zaman gün doğumunda uçar. Bunun amacı ise rüzgar sabah saatlerinde çok sakin olur ayrıca gün doğumunun izlenmesinin balonda olması hedeflenir.Kışın ve yazın gün doğumunun saatlerine göre balona binecek kişileri önceden verdiğimiz saatlere göre otellerinden alırız, balon uçuşları ortalama olarak 05.45 de başlar ve 07.00 de bitmiş olur. Ve misafirlerimizi tekrar otellerine bırakırız.Bu saatler gün dönümüne göre değişim gösterecektir.Normal olarak sivil havacılık sabah 1. sorti dediğimiz uçuş zamanında en fazla 100 adet balonun uçuşuna izin verir fakat sezonun çok yoğun olduğu tarihlerde 2.sorti dediğimiz daha geç uçuşlar da yapılır. 2. sorti ise 1.sortideki uçuşların bittiği zamanlara denk gelir.Taleplerin çok daha fazla olduğu zamanlarda ise hava durumuna göre öğlen uçuşları düzenlenir. Ortalama olarak 11.00 gibi başlatılan balon uçuşları 12.30 gibi misafirlerin otellerine bırakılması ile sonlanır.",
      },
    ],
    included: [
      "Kaldığınız Otellerden Alış ve Bırakış",
      "Uçuş Sonrası Adınıza Özel Uçuş Sertifikası",
      "1 Saatlik Uçuş",
    ],
    excluded: ["Uçuş Sırasında Çekilen Video ve Fotoğraflar"],
  },
  {
    id: "red-tour",
    title: "Kapadokya Bölge Turu",
    description: `Kapadokya'ya ziyaret edenlerin ilk olarak tercih ettikleri, en popüler olarak gösterilen ve bölgede kısa zamanı olanların kesinlikle tercih etmeleri gereken tur olarak göz atmanızı tavsiye ederiz !`,
    price: "€42.00",
    image: "/images/turlar/tur22.jpg",
    gallery: [
      "/images/turlar/tur24.jpg",
      "/images/turlar/tur27.jpg",
      "/images/turlar/red1.jpg",
      "/images/turlar/red2.jpg",
      "/images/turlar/red3.jpg",
      "/images/turlar/tur28.jpg",
    ],
    program: [
      {
        title: "1. Devrent Vadisi",
        description:
          "Devrent Vadisiyle başladığımız turumuzda volkanik kaya oluşumlarının farklı şekillerde aşındığı bölge olan bu vadide fotoğraf molası ile turumuz başlayacaktır. Kayaların farklı şekillere ve hayvan figürlerine benzerdiği bu noktamızda eğlenceli bir başlangıç yapmış olacağız.",
      },
      {
        title: "2. Avanos Çanak Çömlek Atölyesi & Öğle Yemeği",
        description:
          "Siz henüz gördüklerinizin büyüsündeyken sıradaki durağımız Hititlilere de ev sahipliği yapmış , beyaz ve kırmızı kilden yapılan çanak-çömleğin Türkiye’deki merkezi Avanos’u görmek olacaktır. İstediğiniz takdirde deneyebileceğiniz bu farklı deneyimden sonra Avanos’tan ayrılmadan güzel bir öğle yemeği sizleri bekliyor olacak.",
      },
      {
        title: "3. Zelve Açık Hava Müzesi",
        description:
          "Sonrasında ise Hıristiyanlık için büyük bir önem teşkil eden, kiliseleriyle, yemekhanesiyle, yurtlarıyla, şapelleriyle tıpkı bir üniversiteyi andıran Zelve Açık Hava Müzesi’ ni birlikte gezeceğiz.",
      },
      {
        title: "4. Paşabağları",
        description:
          "Bir sonraki durağımız ise bölgenin en yüksek ve 2-3 şapkalı peribacalarının bulunduğu, ayrıca Keşişler Vadisi olarak da bilinen Paşabağları Ören Yeri ziyareti olacaktır.",
      },
      {
        title: "5. Aşk Vadisi",
        description:
          "Yoğun kültürün ve güzelliğin içinde kendinizi ararken Aşk Vadisi’nde yani Göreme kasabasını ve birçok vadiyi yukarıdan panoramik bir şekilde görebileceğiniz muhteşem bir noktada bulacaksınız.",
      },
      {
        title: "6. Uçhisar Kalesi (Panoramik)",
        description:
          "Burada sosyal medyada keyifle paylaşacağınız fotoğraflarınızı çektikten sonra ise zamanında Perslere, Roma’ya , Bizans’a ve birçok başka millete ev sahipliği yapmış Kapadokya’nın en yükseklerinden doğal kalesi Uçhisar Kalesi sıradaki durağımız olacaktır.",
      },
    ],
    included: [
      "Kaldığınız Otelden Alış ve Bırakış",
      "Turdaki Öğle Yemeği",
      "Müze Biletleri",
      "Profesyonel Rehberlik Hizmeti",
      "Güvenli Turizm Sertifikalı Araçlarda Taşıma Hizmeti",
    ],
    excluded: ["Öğle Yemeğinde Alacağınız İçecekler", "Kişisel Harcamalar"],
  },
  {
    id: "atv-tour",
    title: "Kapadokya Atv Turu",
    description:
      "Kendinizi genç ve enerjik hissediyorsanız Kapadokya’yı Atv ile karış karış etmek istiyorsanız bu tura katıldıktan sonra macera seviyeniz artacaktır. Ayrıca Kapadokya’ya arkadaş grubunuz ile geldiğinizde birlikte katılmanız gereken turların başında geleceğini düşünüyoruz ! Son zamanlarda trend aktiviterlerin başında gelen Atv Turu , genelde balayı çiftleri , arkadaş grupları tarafından tercih edilmekte olup günün her saatinde yapılabilmektedir.",
    price: "€20.00",
    image: "/images/turlar/atv1.jpg",
    gallery: [
      "/images/turlar/atv4.jpg",
      "/images/turlar/atv2.jpg",
      "/images/turlar/tur11.jpg",
      "/images/turlar/tur7.jpg",
      "/images/turlar/atv5.jpg",
      "/images/turlar/atv6.jpg",
    ],
    program: [
      {
        title: "Atv Turu",
        description:
          "Atv Turunu günün herhangi bir saatinde yapabilirsiniz. Fakat bizim önerimiz gün doğumu yada gün batımı turu olacaktır. Öğle saatlerinde hava şartları yazları çok sıcak, kışları da çok soğuk olduğu için gün doğumunda yada gün batımında yapmanız sizin için daha iyi olacaktır. Bunun yanı sıra güneşin doğarken yada batarken verdiği görüntü muhteşem bir tur geçirmenizi sağlayacaktır.",
      },
      {
        title: "Tur Planı ve Rotası",
        description:
          "Rezervasyonda gerekli saat ayarlandıktan sonra turunuzdan 1 yada 1 buçuk saat önce otelinizden alınırsınız. Sonrasında araç sizi parkura götürür. Orada gerekli güvenlik önlemleri ve uyarıları aldıktan sonra rehberiniz eşliğinde 2 saatlik turunuza başlarsınız. Tur süresince Kapadokya’daki birçok vadiyi görürsünüz. Bunlardan bazıları ; Kılıçlar Vadisi, Kızıl Vadi, Aşk Vadisi , Zemi Vadisi…Bazı vadilerde kısa molalar vererek fotoğraf çekimi yaparsınız.",
      },
      {
        title: "Tur Bitimi",
        description:
          "Gün batımı yada gün doğumunda ise güneşin hareketine göre çeşitli vadilere gidilir ve fotoğraf çekimi için uygun zamanlamaya dikkat edilir.Turunuz bittikten sonra ise yine rehberiniz eşliğinde tur başlangıç yerine geri dönülür. Temizlik işlemlerinden sonra otelinize tekrar dönüşünüz sağlanır.",
      },
    ],
    included: [
      "Kaldığınız Otellerden Alış ve Bırakış Hizmeti",
      "Kask Maske ve Bone gibi Tur Malzemeleri",
      "Profesyonel Tur Rehberi",
    ],
    excluded: ["Tur Sırasında Yapacağınız Kişisel Harcamalar"],
  },
  {
    id: "green-tour",
    title: "Kapadokya Yeşil Tur",
    description:
      "Kapadokya Yeşil Tur (Ihlara Vadisi & Kaymaklı Yeraltı Şehri) ile birlikte ; Bölgenin en yeşil vadisi olan Ihlara Vadisi’nin muhteşem atmosferine tanık olurken,rehberinizin anlatımlarıyla süslenecek olan yürüyüşünüz de size keyif verecektir. Ihlara Vadisi Nevşehir’in ilçelerine yaklaşık olarak 1.5 saatlik uzaklıktadır. ",
    price: "€42.00",
    image: "/images/turlar/tur32.jpg",
    gallery: [
      "/images/turlar/green1.jpg",
      "/images/turlar/green2.jpg",
      "/images/turlar/green3.jpg",
      "/images/turlar/tur34.jpg",
      "/images/turlar/green4.jpg",
      "/images/turlar/green5.jpg",
    ],
    program: [
      {
        title: "1. Kaymaklı Yeraltı Şehri",
        description:
          "Sabah kahvaltınızın ardından saat 9’da otelinizden alındıktan sonra ilk durağımız için Aksaray ili sınırına doğru yola çıkılır. Yol üzerinde Kapadokya’nın en büyük ve en derin yer altı şehri olan Kaymaklı Yer Altı Şehri ilk durağımız olur. Hititliler zamanında kazılan ve Roma İmparatorluğu zamanında da aktif olarak kullanılan, zamanında içerisinde binlerce insanın yaşadığı yerlerin hikâyesini rehberiniz size anlatırken çok şaşıracaksınız.",
      },
      {
        title: "2. Ihlara Vadisi'nde Doğa Yürüyüşü & Öğle Yemeği",
        description:
          "Yer Altı Şehri gezimiz bittikten sonra ise Ihlara Vadisi için tekrar yola çıkarız. Vadinin yürüme noktasından yürüyüşe başlayıp rota boyunca yürürüz. Ortalama 45 dakikalık yürüyüşümüzün ardından vadinin ortasına yaklaştığımızda Belisırma Köyü’ne ulaşırız. Burada Melendiz Nehri’nin üzerinde güzel bir restoranda öğle yemeğimizi yeriz.",
      },
      {
        title: "3. Güvercinlik Vadisi",
        description:
          "Bu durağımızdan sonra da son durağımız için Nevşehir’e bağlı Uçhisar ilçesine dönülür. Güvercinlik Vadisi’ni ziyaret ettikten ve kısa bir fotoğraf molası verdikten sonra otellere dönüşünüz sağlanacaktır.",
      },
      {
        title: "4. Kapadokya El Sanatları Merkezi",
        description:
          "Son durak olarak Kapadokya'nın volkanik yapısını yakından tanıyacağınız ve çıkarılıp işlenilen volkanik taşların benzersiz örneklerini görebileceğiniz ve alışveriş yapabileceğiniz Kapadokya El Sanatları Merkezi'ne uğranılır. Buradaki anlatımlar gösteriler ziyaret sonrasında ise sizi otelinize bırakırız.",
      },
      {
        title: "5.Göreme Panorama Noktası",
        description:
          "Göreme ile Uçhisar arasında bulunan nokta bölgenin en yüksek noktalarından biridir. Burada ortalama olarak 15 dakika mola verilecektir ve Kapadokya'nın güzel manzarası eşliğinde fotoğraflar çekilecektir.",
      },
    ],
    included: [
      "Kokartlı Profesyonel Turist Rehberi",
      "Müze Giriş Biletleri",
      "Öğle yemeği",
      "Güvenli Turizm Setifikalı Araçlarla Taşıma Hizmeti",
      "Otelden Alış ve Bırakış Hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Öğle Yemeğinde Alacağınız İçecekler"],
  },
  {
    id: "at-tour",
    title: "Kapadokya At Turu",
    description:
      "At Turu ; Kapadokya’nın tarihine baktığımız zaman Atlar çok önemli bir yer kaplamaktadır. Persler zamanında bölgede yetiştirilen ve ticaret insanlarına satılan atlar, bölgeyi ünlü kılmış ve zamanında Pers dilinde Güzel Atlar Diyarı anlamına gelen Kapadokya’ya isim vermekte öncü olmuştur.",
    price: "€25.00",
    image: "/images/at1.jpg",
    gallery: [
      "/images/turlar/at1.jpg",
      "/images/turlar/at9.jpg",
      "/images/turlar/at8.jpg",
      "/images/turlar/at4.jpg",
      "/images/turlar/at2.jpg",
      "/images/turlar/at5.jpg",
    ],
    program: [
      {
        title: "Tur Açıklaması",
        description:
          "At Turunu da Atv Turu gibi günün istediğiniz saatinde yapabilirsiniz. Fakat size önerimiz gün doğumunda yada gün batımında katılmanız yönünde olacaktır. Hava sıcaklığı, atmosfer ve fotoğraf açısından günün en verimli zamanlarıdır.",
      },
      {
        title: "At Turu Detayları",
        description:
          "Rezervasyonda gerekli saat ayarlandıktan sonra turunuzdan 1 yada 1 buçuk saat önce otelinizden alınırsınız. Sonrasında araç sizi parkura götürür. Orada gerekli güvenlik önlemleri ve uyarıları aldıktan sonra rehberiniz eşliğinde 1-2 saatlik turunuza başlarsınız. Tur süresince Kapadokya’daki birçok vadiyi görürsünüz. Bunlardan bazıları ; Kılıçlar Vadisi, Kızıl Vadi, Aşk Vadisi , Zemi Vadisi…Bazı vadilerde kısa molalar vererek fotoğraf çekimi yaparsınız.",
      },
      {
        title: "Tur Bitimi",
        description:
          "Gün batımı yada gün doğumunda ise güneşin hareketine göre çeşitli vadilere gidilir ve fotoğraf çekimi için uygun zamanlamaya dikkat edilir.Turunuz bittikten sonra ise yine rehberiniz eşliğinde tur başlangıç yerine geri dönülür. Temizlik işlemlerinden sonra otelinize tekrar dönüşünüz sağlanır.",
      },
    ],
    included: [
      "Otelden Alış ve Bırakış",
      "1 Saatlik At Turu",
      "Profesyonel Rehber",
      "Tur için Gerekli Olan Güvenlik Malzemeleri",
    ],
    excluded: ["Kişisel harcamalar"],
  },
  {
    id: "safari-tour",
    title: "Kapadokya Jeep Safari Turu",
    description:
      "Kapadokya'da Jeep Safari turu , eğlenceyi ve adrenalini seven ziyaretçilerimizin en çok tercih ettiği turlar arasında gelir. Kapadokya'da yapabileceğiniz aktiviteler arasında en hareketli aktivite olarak sayabileceğimiz Jeep Safari turu hem heyecan seviyenizi yukarıya taşıyacak hem de Kapadokya'yı yakından tanımanızı sağlayacaktır.",
    price: "€60.00",
    image: "/images/atv.jpg",
    gallery: [
      "/images/turlar/safari1.jpg",
      "/images/turlar/tur21.jpg",
      "/images/turlar/safari2.jpg",
      "/images/turlar/safari3.jpg",
      "/images/turlar/tur18.jpg",
      "/images/turlar/safari6.jpg",
    ],
    program: [
      {
        title: "Tur Programı",
        description:
          "Tüm aktivitelerde olduğu gibi belirlediğimiz saatte otelden transfer ile başlayacak olan turumuzda Kapadokya'nın gizli kalmış vadilerinde 2 Saatlik ( tavsiye ettiğimiz ) turunuzu yaptıktan sonra tekrar otele transferiniz gerçekleşiyor. ",
      },
      {
        title: "Tur İçeriği ve Detaylar",
        description:
          "Turda süresince uğrayacağınız her alan Kapadokya tarihi için önemli yerleşim yerleri olarak bilindiğinden dolayı her noktada 10-15 dakika kadar fotoğraf molası verilecektir.Tur bitiminde ise sembolik bir kutlama için şampanya patlatılacaktır. Size ikramımız olacaktır.Turda göreceğiniz yerler ; • Göreme Görçeli Vadisi • Güvercinlik Vadisi (Nazar Ağacı) • Hospital Manastırı • Ortahisar Panorama • Güllü Dere Vadisi Panorama",
      },
    ],
    included: [
      "Otelden Alış ve Bırakış",
      "2 Saatlik Jeep Safari Turu",
      "Profesyonel Jeep Şoförlük Hizmeti",
      "Tur Bitiminde Şampanya İkramı",
    ],
    excluded: ["Kişisel harcamalar"],
  },
];

export const getTourById = (id: string) => tours.find((tour) => tour.id === id);
