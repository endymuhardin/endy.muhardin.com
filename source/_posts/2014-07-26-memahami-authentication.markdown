---
title: "Memahami Authentication"
kind: article
created_at: 2014-07-26 16:49:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Menjelang penghujung bulan Ramadhan, ada yang <a href="https://groups.yahoo.com/neo/groups/jug-indonesia/conversations/messages/92685">bertanya di milis JUG</a>. Alhamdulillah, ada kesempatan bersedekah di detik-detik terakhir bulan puasa ;) Karena pertanyaannya membutuhkan jawaban yang cukup panjang, baiklah kita jawab di blog saja.</p>

<p>Berikut pertanyaannya.</p>

<blockquote><p>Saya pernah menggunakan Spring Security Framework. Tapi kalau cuma pakai, tanpa ngerti konsep dasar dan cara kerjanya dasarnya sakit kepala juga akhirnya kalau semua terjadi secara automagically.</p>

<p>Jadi kalau murni tanpa menggunakan Framework apapun :</p>

<ul>
<li>Bagaimana membuat proses loginnya? dari beberapa artikel yang saya baca (saya baru tahu) katanya login username dan passwordnya dimasukan kedalam HTTP Header.</li>
</ul>


<p>Contohnya :</p>

<p><code>Authorization:Basic c2VzdWF0dUB5YWhvby5jb206YmlzbWlsbGFo</code></p>

<p>dimana <code>c2VzdWF0dUB5YWhvby5jb206YmlzbWlsbGFo</code> adalah Base64 encoding dari <code>sesuatu@yahoo.com:bismillah</code> (username:password)</p>

<p>benarkah begitu?</p>

<ul>
<li><p>Bagaimana server mengenali client jika kita menggunakan method GET? (ini pertanyaan konsep sangat mendasar sekali). Mungkin jawabannya ya dengan token.</p></li>
<li><p>Tapi ditaruh dimana? apakah dengan saya tempelkan saja di URL? misal</p></li>
</ul>


<p><code>GET /thewebapp/category/324?token=abcde1234</code></p>

<p>atau saya masukkan dalam HTTP header? tapi dengan header apa?</p></blockquote>

<p>Dan berikut jawaban saya</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/memahami-authentication/">Baca selengkapnya &rarr; Memahami Authentication</a></i>
  </span>
</div>
