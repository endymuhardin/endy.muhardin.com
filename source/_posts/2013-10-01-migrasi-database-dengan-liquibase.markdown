---
title: "Migrasi Database dengan Liquibase"
kind: article
created_at: 2013-10-01 14:22:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Salah satu kepuasan kita sebagai programmer adalah pada waktu aplikasi yang kita buat digunakan banyak user dan menghasilkan banyak manfaat bagi mereka. Sebagai konsekuensinya, akan banyak permintaan tambahan dari user untuk menambah fitur ataupun mengubah fitur yang sudah ada supaya makin nyaman digunakan.</p>

<p>Seringkali terjadi, perubahan yang diminta ini akan menyebabkan berubahnya skema database. Ini merupakan hal yang wajar dan umum terjadi, sehingga kita perlu menyiapkan mental untuk menerima kondisi ini sebagai sesuatu yang lumrah dan tidak mengerikan.</p>

<p>Tools yang sering saya gunakan untuk mengurus perubahan (evolusi) skema database adalah <a href="http://www.liquibase.org">Liquibase</a>. Pada <a href="http://software.endy.muhardin.com/java/membuat-changelog-liquibase/">artikel terdahulu</a>, kita sudah membahas cara menggunakan Liquibase untuk mengkonversi skema database menjadi XML supaya bisa dikelola di version control. Kali ini, kita akan menggunakan Liquibase untuk melakukan migrasi dari skema database antar versi aplikasi.</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/migrasi-database-dengan-liquibase/">Baca selengkapnya &rarr; Migrasi Database dengan Liquibase</a></i>
  </span>
</div>
