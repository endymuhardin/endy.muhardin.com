---
title: "Desain Skema Database"
kind: article
created_at: 2014-05-06 03:42:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Pada <a href="http://software.endy.muhardin.com/manajemen/tahapan-membuat-aplikasi/">artikel sebelumnya</a>, kita telah belajar bagaimana memulai membuat aplikasi, yaitu dengan cara:</p>

<ul>
<li>membuat daftar fitur</li>
<li>membuat UI Mockup</li>
</ul>


<p>Kedua langkah di atas membantu kita untuk memvisualisasikan apa yang ada di imajinasi kita menjadi bentuk yang bisa dilihat oleh banyak orang. Ada beberapa keuntungan dari proses visualisasi ini, yaitu:</p>

<ul>
<li>mengurangi kepusingan, karena apa yang sebelumnya cuma dibayangkan, sekarang terlihat bentuknya</li>
<li>menunjukkan kekurangan dalam imajinasi kita. Seringkali saya mendapati ada informasi yang kurang sehingga harus ditanyakan lagi ke user. Kali lain, saya mendapati ternyata perpindahan antar screen tidak sistematis sehingga membingungkan user. Atau saya terlalu kompleks mendesain tampilan yang seharusnya bisa lebih sederhana.</li>
<li>menjadi bahan diskusi dengan user, menghindarkan kita dari membuat sesuatu yang tidak dibutuhkan user.</li>
<li>sebagai pedoman kita untuk merancang skema database</li>
</ul>


<p>Poin terakhir tersebut akan menjadi bahasan kita pada artikel kali ini.</p>

<p>Saya tidak akan membahas tentang teori normal form. Seharusnya para mahasiswa informatika sudah mempelajarinya di mata kuliah Basis Data yang biasanya diberikan di semester 3. Silahkan ambil lagi mata kuliah tersebut di tahun/semester depan kalau ternyata Anda ketiduran waktu dosennya menerangkan. Sedangkan pembaca yang tidak kuliah di informatika (seperti saya), bisa baca-baca <a href="http://en.wikipedia.org/wiki/Database_normalization">referensi dari Wikipedia</a> atau <a href="http://www.bkent.net/Doc/simple5.htm">tutorial di sini</a>.</p>

<p>Artikel ini ditulis dengan asumsi pembaca sudah paham apa itu normal form. Silahkan belajar dulu kalau belum paham, baru kembali lagi ke sini.</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/desain-skema-database/">Baca selengkapnya &rarr; Desain Skema Database</a></i>
  </span>
</div>
