# Restoran Menü Uygulaması 🍽️

Bu proje, bir restoranın menüsünü dijital ortamda görüntülemek, kategorilere göre filtrelemek ve yemekler hakkında detaylı bilgi almak için geliştirilmiş bir React uygulamasıdır.

## 🚀 Özellikler

- **Kategori Filtreleme**: Yemekleri kategorilerine göre filtreleme
- **Detaylı Yemek Bilgisi**: Her yemek için:
  - Fiyat
  - İçindekiler
  - Kalori bilgisi
  - Hazırlama süresi
  - Alerjen bilgileri
  - Porsiyon bilgisi
- **Fiyat Sıralama**: Yemekleri artan veya azalan fiyata göre sıralama
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarda uyumlu görünüm
- **Modal Detay Görünümü**: Yemekler hakkında detaylı bilgi modalı

## 🛠️ Kullanılan Teknolojiler

- React.js
- Tailwind CSS
- React Hooks (useState, useMemo)

## ⚙️ Kurulum

Projeyi yerel bilgisayarınızda çalıştırmak için:

1. Projeyi klonlayın:

```bash
git clone https://github.com/keremerkengel/restaurant-menu.git
```

2. Proje dizinine gidin:

```bash
cd restaurant-menu
```

3. Gerekli paketleri yükleyin:

```bash
npm install
```

4. Uygulamayı başlatın:

```bash
npm start
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📁 Proje Yapısı

```
restaurant-menu/
├── public/
│   ├── images/
│   │   └── [yemek görselleri]
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MenuCard.js
│   │   ├── MenuFilter.js
│   │   └── MenuModal.js
│   ├── data/
│   │   └── menuData.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── README.md
```

## 💡 Kullanım

1. Ana sayfada tüm menü öğeleri görüntülenir
2. Üst kısımdaki kategori butonları ile yemekleri filtreleyebilirsiniz
3. Sağ üst köşedeki sıralama seçeneği ile fiyata göre sıralama yapabilirsiniz
4. Herhangi bir yemek kartına tıklayarak detaylı bilgilere ulaşabilirsiniz

## 📱 Responsive Tasarım

- Mobil: Tek sütun görünümü
- Tablet: İki sütun görünümü
- Masaüstü: Üç sütun görünümü

## 📫 İletişim

Sorularınız için: keremerkengel@gmail.com
