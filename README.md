# Dashboard Uygulaması - README

Bu proje, kullanıcı listesinin görüntülenmesi, filtrelenmesi, sıralanması ve sayfalanması gibi temel yönetim işlemlerinin yapılabildiği bir React tabanlı dashboard uygulamasıdır. Ek olarak, canlı bildirim akışı ve basit bir süreç akış diyagramı da içermektedir. Uygulama Vite, TailwindCSS, Zustand ve React Flow gibi modern teknolojilerle geliştirilmiştir.

## Kurulum Adımları

1. Bu repoyu klonlayın:

   ```bash
   git clone https://github.com/kullanici-adi/proje-adi.git
   ```
2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```
3. Projeyi başlatın:

   ```bash
   npm run dev
   ```

## Kullanılan Kütüphaneler

* **React**: Kullanıcı arayüzü oluşturmak için temel kütüphane.
* **Vite**: Hızlı geliştirme ortamı.
* **TailwindCSS**: Hızlı ve özelleştirilebilir stil oluşturma.
* **Zustand**: Global state yönetimi için basit ve verimli bir alternatif.
* **React Flow**: Akış şeması ve süreç görselleştirmeleri için.

## Kendi Değerlendirmem

Projede genel olarak kullanıcı listesi bileşeni, filtreleme ve sıralama mantığı kolayca uygulanabilir oldu. Özellikle Zustand kullanımı sayesinde global state yönetimi sade ve okunabilir bir yapıya kavuştu. React Flow ile süreç görselleştirme kısmı başlangıçta biraz karmaşık görünse de, sade bir yapı kurularak dark mode desteğiyle birlikte uyumlu bir sonuç elde edildi. En çok zorlandığım kısım, bildirim sistemini gerçekçi şekilde taklit etmek ve okunmamış-okunmuş mantığını kullanıcı dostu hale getirmekti. Bunun dışında tasarım tarafında dark mode uyumu ve responsivity için birkaç ince ayar yapılması gerekti. Sonuç olarak, istenen tüm özellikleri kapsayan ve okunabilirliği yüksek, fonksiyonel bir dashboard ortaya çıktı.
