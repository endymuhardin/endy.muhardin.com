---
title: "Mengobati OOM"
kind: article
created_at: 2013-06-08 15:25:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Beberapa waktu belakangan ini, di milis mulai banyak bermunculan pertanyaan yang berkaitan dengan Out Of Memory Error (OOM).
Error ini biasanya terjadi bila data dalam aplikasi sudah besar (melebihi 2 GB), dan umumnya terjadi pada saat membuat report PDF/XLS/CSV, dsb.</p>

<p>Biasanya juga, <em>obat yang dikonsumsi</em> oleh penderita OOM ini ada dua:</p>

<ul>
<li>Mengatur alokasi memori dengan opsi <code>Xms</code> dan <code>Xmx</code></li>
<li>Menggunakan perintah <code>System.gc()</code></li>
</ul>


<p>Sayangnya, kedua <em>obat</em> ini tidak akan menyelesaikan masalah. Analoginya seperti kita kena infeksi otak, lalu minum Panadol. Sakit kepalanya mungkin akan hilang sementara waktu, tapi tidak lama kemudian justru akibatnya lebih fatal.</p>

<p>Lalu bagaimana solusinya?</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/mengobati-oom/">Baca selengkapnya &rarr; Mengobati OOM</a></i>
  </span>
</div>
