---
title: "Memasang Sertifikat SSL"
kind: article
created_at: 2013-07-12 07:14:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Setelah kita menjalankan semua prosedur untuk mendapatkan digital certificate, tiba saatnya kita memasangnya di webserver supaya bisa melayani request https. Pada artikel ini, kita akan membahas konfigurasi https pada webserver yang sering digunakan. Karena banyaknya merek webserver yang beredar di pasaran, kita akan ambil dua sebagai perwakilan, yaitu Tomcat mewakili webserver Java, dan Nginx mewakili non-Java. Webserver Java merek lain seperti JBoss, Jetty, Glassfish, dan rekan-rekannya memiliki cara konfigurasi yang mirip dengan Tomcat. Demikian juga Apache HTTPD, Lighttpd, Mongrel, dan sejawatnya memiliki cara konfigurasi yang mirip dengan Nginx.</p>

<p>Artikel ini adalah bagian terakhir dari 4 artikel, yaitu:</p>

<ol>
<li><a href="http://software.endy.muhardin.com/aplikasi/apa-itu-ssl/">Apa itu SSL</a></li>
<li><a href="http://software.endy.muhardin.com/aplikasi/membuat-self-signed-certificate/">Membuat self-signed certificate</a></li>
<li><a href="http://software.endy.muhardin.com/aplikasi/membeli-sertifikat-ssl/">Membeli sertifikat SSL</a></li>
<li><a href="http://software.endy.muhardin.com/aplikasi/memasang-sertifikat-ssl/">Memasang sertifikat SSL</a></li>
</ol>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://twitter.com/endymuhardin">Endy Muhardin</a> <br> 
    Artikel selengkapnya : <a href="http://software.endy.muhardin.com/aplikasi/memasang-sertifikat-ssl/">Memasang Sertifikat SSL</a></i>
  </span>
</div>
