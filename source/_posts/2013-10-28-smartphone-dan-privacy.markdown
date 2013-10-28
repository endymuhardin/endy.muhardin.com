---
layout: post
title: "Smartphone dan Privacy"
date: 2013-10-28 14:47
comments: true
categories: 
- teknologi
---

Di jaman sekarang, bisa dibilang semua orang punya smartphone. Sesuai namanya smartphone ini memiliki banyak fitur-fitur canggih seperti misalnya:

* koneksi internet, baik melalui paket data maupun wifi
* chip GPS, sehingga bisa menentukan posisi
* kamera berkualitas baik
* berbagai sensor gerakan, cahaya, kecepatan, dan sebagainya
* chip untuk membaca smartcard

Berbagai fitur canggih tersebut dilengkapi dengan aplikasi yang tidak kalah menarik seperti:

* Facebook
* Twitter
* Instagram
* Foursquare
* Whatsapp
* Line
* Map
* dan sebagainya

Kombinasi fitur dan aplikasi membuat kita sangat gembira mengekspresikan segala aspek dari kehidupan kita. Bangun tidur, update status. Mau sarapan, foto dulu lalu upload ke Instagram. Berangkat ke kantor, pantau rute macet dengan Waze. Tiba di kantor, check-in di Foursquare.

Yang bikin lebih rame, segala ekspresi kita tadi bisa mendapatkan tanggapan dari rekan-rekan kita. Ada yang like, share, favorite, retweet, dan juga berbalas comment.

Di antara segala kemudahan dan kegembiraan ini, ada aspek berbahaya yang sayangnya masih jarang dipahami orang. Melalui artikel ini, saya berharap para pengguna smartphone dan aplikasi social media bisa punya awareness terhadap berbagai konsekuensi dari aktivitas mereka di social media.

Berikut screen capture chat saya dengan salah satu rekan pengguna smartphone.

<!--more-->

{% img /images/uploads/2013/10/smartphone-privacy/chat-01.png 400 %}

Dari percakapan pembuka di atas, jelas bahwa orang yang saya ajak bicara adalah Emak-emak Ber-iPhone (EBI). Ini bisa disimpulkan dari aktivitasnya, memasak dengan bermodalkan Youtube :P Walaupun Anda merasa bukan EBI, jangan senang dulu, bisa jadi sisa pembicaraannya mirip-mirip.

{% img /images/uploads/2013/10/smartphone-privacy/chat-02.png 400 %}

Image yang saya kirim sebetulnya hanya salah satu dari dua screen capture yang saya buat dari Instagram. Semua orang bisa mengakses screen seperti yang saya capture melalui Instagram. Caranya: masuk ke profil orang yang kita follow, lalu klik icon yang mirip seperti pin Google Map. Berikut iconnya.

{% img /images/uploads/2013/10/smartphone-privacy/ig-photomap.png 400 %}

Capture pertama menunjukkan bahwa rekan saya ini sering keliling dunia.

{% img /images/uploads/2013/10/smartphone-privacy/IG-PhotoMap-01.png 400 %}


Kita bisa zoom ke foto-foto yang dibuat di Indonesia saja

{% img /images/uploads/2013/10/smartphone-privacy/IG-PhotoMap-02.png %}

Capture dari screen inilah yang saya kirim ke beliau. Sebenarnya masih bisa dizoom lagi sampai terlihat jalan dan persimpangannya. Seberapa detail dan akurat akan kita jabarkan di bawah. Mari kita lanjutkan pembicaraannya.

{% img /images/uploads/2013/10/smartphone-privacy/chat-03.png 400 %}

Rupanya dia mengenali screen capture tadi adalah foto-fotonya sendiri di Instagram, ditampilkan dalam peta. Saya juga menjelaskan bahwa 

> geotagging adalah menempelkan informasi lokasi (berupa koordinat GPS) ke dalam file foto

Dengan kecanggihan smartphone jaman sekarang, lokasi yang dicatat ke dalam file foto bisa mencapai akurasi radius 5 meter. Bila seseorang berada di dalam rumah kecil sekalipun (tipe 36, luas 36 m2), maka kita bisa menentukan dengan akurat di ruangan mana dia berada.

Nah, kebanyakan orang (termasuk saya :D) tentu menganggap akurasi GPS ini merupakan suatu hal yang _amusing_, menakjubkan. Walaupun demikian, ada konsekuensi yang harus dipertimbangkan.

Foto digital terdiri dari dua bagian : data gambar dan data EXIF. Data gambar memuat warna dan kecerahan masing-masing titik dalam gambar. Data EXIF memuat informasi pengambilan foto, diantaranya:

* merek dan tipe kamera yang digunakan
* waktu pengambilan gambar
* (kalau kameranya support, misalnya smartphone) koordinat GPS tempat foto diambil

Sebagai contoh, coba lihat foto lontong sayur berikut ini

{% img /images/uploads/2013/10/smartphone-privacy/lonsay.jpg %}

Mari kita lihat data EXIF di dalamnya. Buka dulu filenya. Untuk pengguna Windows bisa menggunakan aplikasi gratisan [Opanda](http://opanda.com/en/iexif/). Di Ubuntu, aplikasi bawaan sudah bisa melihat data EXIF, yaitu di menu properties.


{% img /images/uploads/2013/10/smartphone-privacy/exif-01-image-properties.png %}

Klik tab Details. Tab ini akan menampilkan seluruh data EXIF dalam foto.

{% img /images/uploads/2013/10/smartphone-privacy/exif-02-exif-data.png %}

Data EXIF dikelompokkan menjadi beberapa kategori untuk memudahkan kita membacanya. Mari kita buka kategori `Camera`

{% img /images/uploads/2013/10/smartphone-privacy/exif-03-camera-info.png %}

Kita lihat informasi standar dulu, merek dan tipe kamera terbaca Sony Ericsson U20i. Ini adalah smartphone Sony Ericsson XPeria X10 Mini Pro. Selanjutnya, kita lihat waktu pengambilan foto.

{% img /images/uploads/2013/10/smartphone-privacy/exif-04-datetime.png %}

Terlihat bahwa foto diambil pada tanggal 24 Februari 2012 jam 08:10. Dari sini kita bisa ambil kesimpulan bahwa menu lontong sayur ini cocok dikonsumsi sebagai sarapan ;)

Mari kita buka data koordinat GPS

{% img /images/uploads/2013/10/smartphone-privacy/exif-05-gps.png %}

Data koordinat GPS ditampilkan dalam format `degree`. Agar bisa diolah di Google Map, kita perlu konversi dulu menjadi format `decimal`. Bagaimana caranya? [Kita tanya saja pada Google](http://software.endy.muhardin.com/aplikasi/teknik-menggunakan-google/). Gunakan keyword `how to convert gps degree to decimal`. 

Saya mendapatkan [website yang bisa melakukan konversi](http://transition.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html). Cukup kita masukkan data di atas, kemudian klik `Convert to Decimal`. 

{% img /images/uploads/2013/10/smartphone-privacy/exif-06-convert-latlon.png %}

Hasilnya : `6.475608` dan `106.843578`. Karena angka pertama adalah `Selatan (South)` (lihat screenshot EXIF di atas), maka tambahkan tanda minus. Hasil akhirnya adalah `-6.475608`,`106.843578`

Setelah dapat koordinat, tinggal dicari di Google Map. Berikut hasilnya

<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=-6.475608,106.843578&amp;aq=&amp;sll=6.476232,-106.846483&amp;sspn=0.012963,0.018239&amp;ie=UTF8&amp;t=m&amp;ll=-6.475613,106.843586&amp;spn=0.007462,0.00912&amp;z=16&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=-6.475608,106.843578&amp;aq=&amp;sll=6.476232,-106.846483&amp;sspn=0.012963,0.018239&amp;ie=UTF8&amp;t=m&amp;ll=-6.475613,106.843586&amp;spn=0.007462,0.00912&amp;z=16" style="color:#0000FF;text-align:left">View Larger Map</a></small>

Nah, kita sudah mendapatkan lokasi penjual lontong sayur. Bila ingin mencoba sendiri, silahkan [download foto lontong sayur di atas](/images/uploads/2013/10/smartphone-privacy/lonsay.jpg) dan analisa di laptop Anda.

> Ok, saya udah tahu di mana beli lontong sayur. So what gituloh??

Kita lanjutkan chatnya.

{% img /images/uploads/2013/10/smartphone-privacy/chat-04.png 400 %}

Nah, bayangkan EBI yang _trigger-happy_. Pagi-pagi ngantar anaknya sekolah. Anaknya lagi pakai sepatu di teras, jepret. Antar anak ke sekolah, jepret. Selesai sekolah, pergi ke tempat kursus, jepret. Abis kursus lunch di mall, jepret. Lalu main di taman dekat rumah, jepret. Gak cuma jepret tentu, apply filter dan upload ke Instagram. Biar gak repot, account Instagram, Twitter, Flickr, Tumblr, BBM Group, Whatsapp Group, Line, dan Facebook dilink. Sekali upload seluruh social media terima foto.

Kumpulkan data EXIFnya, lakukan sedikit analisa, kita bisa mendapatkan informasi yang menarik: 

1. Di mana tinggalnya
2. Jam berapa berangkat dari rumah
3. Di mana anaknya sekolah
4. Sekolahnya masuk jam berapa pulang jam berapa
5. Makan siang biasanya di mana, menu apa yang digemari
6. Hari apa kursus apa di mana
7. Seringnya main di mana, bahkan perosotan yang mana yang biasa dipakai (dimungkinkan dengan akurasi GPS radius 5 meter) juga bisa diketahui. Gunakan fitur Satellite View di Google Map, mau tau warna perosotannya juga bisa :D

{% img /images/uploads/2013/10/smartphone-privacy/satellite-view.png %}

Untuk pengguna Instagram bahkan tidak perlu repot-repot membaca data EXIF dan melakukan konversi. Sudah disediakan fiturnya berupa `Photo Map` seperti yang saya capture di atas.

Setelah itu, korelasikan dengan Facebook, kita bisa mendapatkan informasi tambahan yang lebih menarik lagi.

1. Siapa suaminya, seperti apa tampangnya?
2. Siapa orang tuanya, seperti apa wajahnya?
3. Siapa teman-temannya? Mana yang sebatas kenal, mana yang akrab, mana yang ketemu tiap hari?
4. Kapan ulang tahunnya, ulang tahun suami, ulang tahun orang tua, ulang tahun semua anak-anaknya?

Dari informasi ini, kita sudah bisa memblokir kartu kredit, rekening bank, nomer handphone, dan sebagainya. Biasanya pertanyaan standar kalau kita ingin melakukan hal tersebut adalah:

* tempat/tanggal lahir
* nama gadis ibu kandung
* warna favorit
* nama suami/istri
* tempat/tanggal lahir ibu kandung atau suami/istri

Semuanya bisa didapat di Facebook. Belum puas, mari kita ke LinkedIn. Kita akan mendapatkan informasi:

* riwayat pekerjaan
* jabatan dan prestasi
* rekan kerja, baik yang sekarang maupun di kantor lama

Dari informasi LinkedIn ini, orang bisa menebak-nebak dengan cukup akurat berapa income per bulan kita. Dikombinasikan dengan informasi restoran dan tempat belanja kita, orang bahkan bisa tahu pemasukan dan pengeluaran bulanan kita. Kalau Anda sering merasa gajinya sepuluh koma (tanggal sepuluh sudah koma ;P), coba hitung dengan teliti. Waktu kita pasang status di Facebook

> Duh, tanggal segini udah bokek aja ya -_-

Jangan heran kalo ada yang komentar begini

> Ya iyalah masbro. Elu kan kerja di PT Maju Mundur, sebagai Account Executive. Paling gajinya 10 juta. Nah elu aja `mayor` di Starbuck Citos. Seminggu sekali ke Sushi Tei sama keluarga, pesan menu jumbo semua. Tiap weekend kalo gak berenang di Snowbay ya The Jungle. Atau kuliner di Ah Poong. Belum lagi dua bulan sekali ganti gadget pake cicilan 0%. Itu mobil cicilan baru setahun. Tiga bulan lalu baru pindah rumah, banyak renov dan belanja furnitur. Ya megap-megap dong kantong ente.

Lho kok bisa komentar gitu? Gampang, kombinasikan aja informasi di LinkedIn, foto aktivitas di Instagram, sama update status di FB. Jaman saya SMU dulu, kami punya istilahnya, `Even a fool can see`.

Karena kita sudah tau informasi suami/istri dan orang tua di Facebook, kita juga bisa mendapatkan informasi karir mereka di LinkedIn. Umumnya orang menggunakan satu alamat email untuk semua account tersebut. Jadi sekali kita tahu emailnya, kita dapat mencari account social media manapun yang kita butuhkan.

Di chat terakhir di atas, saya menyebut-nyebut tentang video. Di luar negeri sudah ada yang menyadari hal ini dan mendemokan cara melakukannya. Silakan kalau ingin menonton. Secara garis besar, caranya sama seperti yang saya jelaskan di atas. Tidak butuh kemampuan teknis yang tinggi dan juga aplikasi yang canggih-canggih.

<iframe width="420" height="315" src="//www.youtube.com/embed/N2vARzvWxwY" frameborder="0" allowfullscreen></iframe>

Ok, sekarang sudah takut? :) Lalu bagaimana solusinya??

Setelah kita tahu apa yang sebenarnya bisa dilakukan oleh smartphone dan apa implikasinya, cara kita menghadapinya tidak sulit.

1. Pastikan kita tahu cara mematikan geotagging. Dengan demikian, kita bisa mengontrol kapan kita ingin menaruh informasi geotag, dan kapan tidak.
2. Geotagging tidak 100% harus dihindari. Fitur ini bermanfaat untuk mengabadikan momen-momen kenangan kita, misalnya piknik ke lokasi yang jarang/sulit kita datangi. Dengan adanya informasi geotag dalam foto, kita bisa menampilkannya di photomap baik di Instagram, Facebook, dan sebagainya. Ini akan terasa manfaatnya beberapa tahun kemudian. Kita jadi bisa mengenang tahun sekian ada di tempat tertentu dan melakukan berbagai aktivitas yang menyenangkan.
3. Untuk lokasi dan rutinitas sehari-hari dan juga informasi pribadi, pastikan kita tahu persis dan bisa mengontrol apa yang kita share ke seluruh dunia.

Mari kita bahas cara mematikan geotagging.

## Disable Geotagging ##

### iPhone ###

Di iPhone, masuk ke menu `Setting`, kemudian `Privacy`.

{% img /images/uploads/2013/10/smartphone-privacy/iphone-1.PNG 400 %}

Selanjutnya, masuk ke `Location Services`

{% img /images/uploads/2013/10/smartphone-privacy/iphone-2.PNG 400 %}

Di sini kita bisa memilih apakah kita mau mematikan 100% fitur GPS, atau memilih aplikasi mana yang boleh menggunakan GPS.

{% img /images/uploads/2013/10/smartphone-privacy/iphone-3.PNG 400 %}

Untuk amannya, saya biasanya cuma memberikan fitur GPS pada aplikasi peta dan navigasi. Untuk aplikasi social media saya matikan semua.


### Android ###

Bagi para pengguna Android, menu `Location Services` ada di `Setting`. Walaupun demikian, tidak bisa diatur per aplikasi.

{% img /images/uploads/2013/10/smartphone-privacy/android-01.png 400 %}

Agar foto yang kita ambil tidak menyimpan informasi GPS, kita bisa matikan melalui menu `Setting` setelah kamera dinyalakan.

{% img /images/uploads/2013/10/smartphone-privacy/android-02.png 400 %}

Tinggal kita ganti menjadi On atau Off

{% img /images/uploads/2013/10/smartphone-privacy/android-03.png 400 %}

Bila kita menyalakan fitur geotagging, maka kita akan mendapatkan peringatan

{% img /images/uploads/2013/10/smartphone-privacy/enable-geotag.png 400 %}

Bila foto kita tidak memiliki geotag, maka tidak akan ditampilkan dalam Photo Map Instagram. Jadi dengan menon-aktifkan Location Services dalam kamera, otomatis Instagram juga tidak bisa menentukan lokasi pengambilan foto.

Selain foto Instagram, posting update status atau chat yang kita lakukan di Facebook juga bisa memberitahukan lokasi kita. Fitur ini biasanya saya matikan. Caranya sudah saya jelaskan di [artikel yang lain](http://software.endy.muhardin.com/aplikasi/mematikan-location-service-di-facebook-android/).

> Jangan lupa, informasi EXIF ini terletak di file foto. Jadi kalau foto tersebut kita kirim melalui email, whatsapp, BBM, dan lainnya, kemungkinan besar informasi ini akan ikut terkirim.

## Kesimpulan ##

Demikianlah sedikit sharing tentang fitur geotagging dan konsekuensi yang ditimbulkannya. Mudah-mudahan setelah membaca artikel ini, kita jadi lebih _aware_ dan berhati-hati dalam berinteraksi dengan aplikasi social media.

    
