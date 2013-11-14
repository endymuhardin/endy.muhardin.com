---
title: "Membuat Self Signed Certificate"
kind: article
created_at: 2013-07-09 06:41:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Idealnya, sertifikat SSL disetujui (signed) oleh Certificate Authority (CA).
Proses persetujuan ini biasanya dikenakan biaya, walaupun ada juga yang <a href="http://www.startssl.com/?app=1">gratisan</a>.
Sertifikat yang disetujui CA memiliki batas waktu pemakaian. Setelah waktu tersebut habis, maka sertifikat tidak bisa digunakan dan kita harus mengurus perpanjangannya.</p>

<p>Kondisi ini tentu kurang menyenangkan pada waktu kita ada di fase development. Untuk itu kita ingin membuat sertifikat sendiri, dan kemudian menyetujuinya sendiri juga. Ini disebut dengan istilah <code>self-signed certificate</code>. Bila diakses di browser, <code>self-signed certificate</code> ini akan menimbulkan peringatan seperti screenshot dibawah.</p>

<p><img src="http://software.endy.muhardin.com/images/uploads/2013/07/ssl/01-ssl-warning.png" title="Halaman Warning" ></p>

<p>Agar bisa mengakses halaman tersebut, kita perlu menambahkan exception. Kita akan dikonfirmasi seperti pada layar berikut</p>

<p><img src="http://software.endy.muhardin.com/images/uploads/2013/07/ssl/02-add-exception.png" title="Add Exception" ></p>

<p>Tapi tidak masalah, karena pada fase development yang pakai aplikasi/website ini hanya kita sendiri, bukan end-user. Nantinya sebelum dipublish untuk umum, belilah sertifikat yang benar.</p>

<p>Artikel ini adalah bagian kedua dari 4 artikel, yaitu:</p>

<ol>
<li><a href="http://software.endy.muhardin.com/aplikasi/apa-itu-ssl/">Apa itu SSL</a></li>
<li><a href="http://software.endy.muhardin.com/aplikasi/membuat-self-signed-certificate/">Membuat self-signed certificate</a></li>
<li><a href="http://software.endy.muhardin.com/aplikasi/membeli-sertifikat-ssl/">Membeli sertifikat SSL</a></li>
<li><a href="http://software.endy.muhardin.com/aplikasi/memasang-sertifikat-ssl/">Memasang sertifikat SSL</a></li>
</ol>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/aplikasi/membuat-self-signed-certificate/">Baca selengkapnya &rarr; Membuat Self Signed Certificate</a></i>
  </span>
</div>
