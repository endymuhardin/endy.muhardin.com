---
title: "Mendebug Aplikasi AJAX"
kind: article
created_at: 2013-05-22 09:46:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Di jaman modern ini, penggunaan AJAX sudah sangat mendunia, sehingga jarang sekali kita temui aplikasi yang tidak menggunakan AJAX. Demikian juga dengan template aplikasi standar yang digunakan di ArtiVisi, yaitu <a href="https://github.com/endymuhardin/belajar-restful">Belajar RESTful</a>.</p>

<p>Bagi yang baru mendengar atau sering dengar tapi belum paham, berikut penjelasan singkat mengenai AJAX.</p>

<ul>
<li>AJAX adalah salah satu teknik pemrograman web</li>
<li>AJAX bukanlah nama library atau framework, dia adalah cara membuat aplikasi</li>
<li><p>Pada aplikasi non-AJAX, siklusnya sebagai berikut :</p>

<ol>
<li>Ketik URL</li>
<li>Tampil HTML</li>
<li>Lakukan sesuatu (isi form + tekan submit)</li>
<li>Browser mengirim data</li>
<li>Server mengembalikan HTML full satu halaman</li>
</ol>
</li>
<li><p>Pada aplikasi AJAX, request ke server dilakukan oleh javascript, bukan oleh form submit.</p></li>
<li>Response dari server biasanya hanya berupa data dalam format XML atau JSON, bukan data + tampilan seperti HTML</li>
<li>Data yang dikirim server digunakan javascript hanya untuk mengubah sebagian halaman tampilan, bukan seluruh halaman seperti aplikasi non-AJAX.</li>
</ul>


<p>Karena perbedaan cara kerja aplikasi AJAX, maka cara debug errornya juga berbeda. Untuk mendebug aplikasi AJAX, kita perlu melengkapi browser yang kita gunakan supaya bisa memantau request dan response yang dilakukan aplikasi.</p>

<p>Pada artikel ini, kita akan membahas bagaimana cara mendebug aplikasi AJAX. Sebagai contoh kasus, kita akan gunakan aplikasi <a href="https://github.com/endymuhardin/belajar-restful">Belajar RESTful</a>.</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/mendebug-aplikasi-ajax/">Baca selengkapnya &rarr; Mendebug Aplikasi AJAX</a></i>
  </span>
</div>
