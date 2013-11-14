---
title: "Konfigurasi Koneksi Database dengan Spring"
kind: article
created_at: 2013-05-27 10:02:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Di Java, ada banyak cara untuk mengakses database, diantaranya:</p>

<ul>
<li><a href="http://docs.oracle.com/javase/tutorial/jdbc/">JDBC polos tanpa framework apapun</a></li>
<li><a href="http://static.springsource.org/spring/docs/3.2.x/spring-framework-reference/html/jdbc.html">JDBC dengan Spring (Spring JDBC)</a></li>
<li>JDBC dengan <a href="http://blog.mybatis.org/">iBatis/MyBatis</a></li>
<li><a href="http://docs.jboss.org/hibernate/orm/4.2/manual/en-US/html/">Hibernate</a></li>
<li><a href="http://www.datanucleus.org/products/datanucleus/jdo/guides/tutorial_rdbms.html">JDO</a></li>
<li><a href="http://docs.oracle.com/javaee/6/tutorial/doc/bnbpz.html">JPA</a></li>
<li><a href="http://www.springsource.org/spring-data/jpa">Spring Data JPA</a></li>
</ul>


<p>Masing-masing memiliki kelebihan dan kekurangan masing-masing yang tidak akan kita bahas di artikel ini.
Kali ini kita hanya akan membahas metode Spring JDBC dan perbandingannya dengan JDBC murni.</p>

<p>Artikel ini merupakan bagian pertama dari rangkaian artikel Spring JDBC, yaitu</p>

<ol>
<li><a href="http://software.endy.muhardin.com/java/konfigurasi-koneksi-database-dengan-spring/">Konfigurasi koneksi database</a></li>
<li><a href="http://software.endy.muhardin.com/java/struktur-aplikasi-java-dengan-spring-dan-maven/">Struktur Aplikasi</a></li>
<li><a href="http://software.endy.muhardin.com/java/insert-update-delete-dengan-spring-jdbc/">Insert, update, dan delete data</a></li>
<li><a href="http://software.endy.muhardin.com/java/query-dengan-spring-jdbc/">Query data</a></li>
<li><a href="http://software.endy.muhardin.com/java/mengetes-akses-database/">Mengetes Akses Database</a></li>
</ol>


<p>Keseluruhan kode program dapat dilihat di <a href="https://github.com/endymuhardin/belajar-akses-database-java">repository belajar-akses-database-java di Github saya</a>, khususnya <a href="https://github.com/endymuhardin/belajar-akses-database-java/tree/spring-jdbc">branch spring-jdbc</a>.</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/konfigurasi-koneksi-database-dengan-spring/">Baca selengkapnya &rarr; Konfigurasi Koneksi Database dengan Spring</a></i>
  </span>
</div>
