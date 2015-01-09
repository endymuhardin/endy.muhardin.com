---
title: "Mengapa kita membuat class"
kind: article
created_at: 2014-12-16 08:26:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Ada <a href="https://www.facebook.com/groups/ForumJavaIndonesia/10152533869543017">pertanyaan di grup Facebook</a> yang cukup menarik untuk kita bahas di sini. Sample code yang ditanyakan saya modifikasi sedikit supaya lebih cocok.</p>

<h2>Class Mahasiswa</h2>

<figure class='code'><figcaption><span></span></figcaption><div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
<span class='line-number'>6</span>
<span class='line-number'>7</span>
<span class='line-number'>8</span>
<span class='line-number'>9</span>
<span class='line-number'>10</span>
<span class='line-number'>11</span>
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nc">Mahasiswa</span> <span class="o">{</span>
</span><span class='line'>    <span class="kd">private</span> <span class="n">String</span> <span class="n">nama</span><span class="o">;</span>
</span><span class='line'>    <span class="kd">private</span> <span class="n">Date</span> <span class="n">tanggalLahir</span><span class="o">;</span>
</span><span class='line'>    <span class="kd">private</span> <span class="n">JenisKelamin</span> <span class="n">jenisKelamin</span><span class="o">;</span>
</span><span class='line'>
</span><span class='line'>    <span class="c1">// getter setter</span>
</span><span class='line'><span class="o">}</span>
</span><span class='line'>
</span><span class='line'><span class="kd">public</span> <span class="kd">enum</span> <span class="n">JenisKelamin</span><span class="o">{</span>
</span><span class='line'>    <span class="n">PRIA</span><span class="o">,</span> <span class="n">WANITA</span>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<h2>Class SimpanMahasiswaServlet</h2>

<figure class='code'><figcaption><span></span></figcaption><div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
<span class='line-number'>6</span>
<span class='line-number'>7</span>
<span class='line-number'>8</span>
<span class='line-number'>9</span>
<span class='line-number'>10</span>
<span class='line-number'>11</span>
<span class='line-number'>12</span>
<span class='line-number'>13</span>
<span class='line-number'>14</span>
<span class='line-number'>15</span>
<span class='line-number'>16</span>
<span class='line-number'>17</span>
<span class='line-number'>18</span>
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nc">SimpanMahasiswaServlet</span> <span class="kd">extends</span> <span class="n">HttpServlet</span> <span class="o">{</span>
</span><span class='line'>
</span><span class='line'>    <span class="kd">private</span> <span class="n">MahasiswaDao</span> <span class="n">md</span> <span class="o">=</span> <span class="k">new</span> <span class="n">MahasiswaDao</span><span class="o">();</span>
</span><span class='line'>
</span><span class='line'>    <span class="kd">public</span> <span class="kt">void</span> <span class="nf">doPost</span><span class="o">(</span><span class="n">HttpServletRequest</span> <span class="n">req</span><span class="o">,</span> <span class="n">HttpServletResponse</span> <span class="n">resp</span><span class="o">){</span>
</span><span class='line'>        <span class="n">Mahasiswa</span> <span class="n">m</span> <span class="o">=</span> <span class="k">new</span> <span class="n">Mahasiswa</span><span class="o">();</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">m</span><span class="o">.</span><span class="na">setNama</span><span class="o">(</span><span class="n">req</span><span class="o">.</span><span class="na">getParameter</span><span class="o">(</span><span class="s">&quot;nama&quot;</span><span class="o">));</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">SimpleDateFormat</span> <span class="n">formatTanggal</span> <span class="o">=</span> <span class="k">new</span> <span class="n">SimpleDateFormat</span><span class="o">(</span><span class="s">&quot;yyyy-MM-dd&quot;</span><span class="o">);</span>
</span><span class='line'>        <span class="n">m</span><span class="o">.</span><span class="na">setTanggalLahir</span><span class="o">(</span><span class="n">formatTanggal</span><span class="o">.</span><span class="na">parse</span><span class="o">(</span><span class="n">req</span><span class="o">.</span><span class="na">getParameter</span><span class="o">(</span><span class="s">&quot;tanggal&quot;</span><span class="o">)));</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">m</span><span class="o">.</span><span class="na">setJenisKelamin</span><span class="o">(</span><span class="n">JenisKelamin</span><span class="o">.</span><span class="na">valueOf</span><span class="o">(</span><span class="n">req</span><span class="o">.</span><span class="na">getParameter</span><span class="o">(</span><span class="s">&quot;jenis&quot;</span><span class="o">)));</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">md</span><span class="o">.</span><span class="na">simpan</span><span class="o">(</span><span class="n">m</span><span class="o">);</span>
</span><span class='line'>    <span class="o">}</span>
</span><span class='line'>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<h2>Class MahasiswaDao</h2>

<figure class='code'><figcaption><span></span></figcaption><div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
<span class='line-number'>6</span>
<span class='line-number'>7</span>
<span class='line-number'>8</span>
<span class='line-number'>9</span>
<span class='line-number'>10</span>
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nc">MahasiswaDao</span> <span class="o">{</span>
</span><span class='line'>    <span class="kd">public</span> <span class="kt">void</span> <span class="nf">simpan</span><span class="o">(</span><span class="n">Mahasiswa</span> <span class="n">m</span><span class="o">){</span>
</span><span class='line'>        <span class="n">String</span> <span class="n">sql</span> <span class="o">=</span> <span class="s">&quot;INSERT INTO mahasiswa values (?,?,?)&quot;</span><span class="o">;</span>
</span><span class='line'>        <span class="n">PreparedStatement</span> <span class="n">ps</span> <span class="o">=</span> <span class="n">koneksi</span><span class="o">.</span><span class="na">prepareStatement</span><span class="o">(</span><span class="n">sql</span><span class="o">);</span>
</span><span class='line'>        <span class="n">ps</span><span class="o">.</span><span class="na">setString</span><span class="o">(</span><span class="mi">1</span><span class="o">,</span> <span class="n">m</span><span class="o">.</span><span class="na">getNama</span><span class="o">());</span>
</span><span class='line'>        <span class="n">ps</span><span class="o">.</span><span class="na">setDate</span><span class="o">(</span><span class="mi">2</span><span class="o">,</span> <span class="k">new</span> <span class="n">java</span><span class="o">.</span><span class="na">sql</span><span class="o">.</span><span class="na">Date</span><span class="o">(</span><span class="n">m</span><span class="o">.</span><span class="na">getTanggalLahir</span><span class="o">().</span><span class="na">getTime</span><span class="o">()));</span>
</span><span class='line'>        <span class="n">ps</span><span class="o">.</span><span class="na">setString</span><span class="o">(</span><span class="mi">3</span><span class="o">,</span> <span class="n">m</span><span class="o">.</span><span class="na">getJenisKelamin</span><span class="o">().</span><span class="na">name</span><span class="o">());</span>
</span><span class='line'>        <span class="n">ps</span><span class="o">.</span><span class="na">executeUpdate</span><span class="o">();</span>
</span><span class='line'>    <span class="o">}</span>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<blockquote><p>Pertanyaan : Lebih kenceng mana contoh kode di atas (menggunakan class Mahasiswa) dibandingkan langsung saja pakai Map/Array ?</p></blockquote>

<p>Supaya lebih jelas, berikut contoh yang pakai array.</p>

<figure class='code'><figcaption><span></span></figcaption><div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
<span class='line-number'>6</span>
<span class='line-number'>7</span>
<span class='line-number'>8</span>
<span class='line-number'>9</span>
<span class='line-number'>10</span>
<span class='line-number'>11</span>
<span class='line-number'>12</span>
<span class='line-number'>13</span>
<span class='line-number'>14</span>
<span class='line-number'>15</span>
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nc">SimpanMahasiswaServlet</span> <span class="kd">extends</span> <span class="n">HttpServlet</span> <span class="o">{</span>
</span><span class='line'>
</span><span class='line'>    <span class="kd">private</span> <span class="n">MahasiswaDao</span> <span class="n">md</span> <span class="o">=</span> <span class="k">new</span> <span class="n">MahasiswaDao</span><span class="o">();</span>
</span><span class='line'>
</span><span class='line'>    <span class="kd">public</span> <span class="kt">void</span> <span class="nf">doPost</span><span class="o">(</span><span class="n">HttpServletRequest</span> <span class="n">req</span><span class="o">,</span> <span class="n">HttpServletResponse</span> <span class="n">resp</span><span class="o">){</span>
</span><span class='line'>        <span class="n">String</span><span class="o">[]</span> <span class="n">m</span> <span class="o">=</span> <span class="k">new</span> <span class="n">String</span><span class="o">[</span><span class="mi">3</span><span class="o">];</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">m</span><span class="o">[</span><span class="mi">0</span><span class="o">]</span> <span class="o">=</span> <span class="n">req</span><span class="o">.</span><span class="na">getParameter</span><span class="o">(</span><span class="s">&quot;nama&quot;</span><span class="o">);</span>
</span><span class='line'>        <span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">]</span> <span class="o">=</span> <span class="n">req</span><span class="o">.</span><span class="na">getParameter</span><span class="o">(</span><span class="s">&quot;tanggal&quot;</span><span class="o">);</span>
</span><span class='line'>        <span class="n">m</span><span class="o">[</span><span class="mi">2</span><span class="o">]</span> <span class="o">=</span> <span class="n">req</span><span class="o">.</span><span class="na">getParameter</span><span class="o">(</span><span class="s">&quot;jenis&quot;</span><span class="o">);</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">md</span><span class="o">.</span><span class="na">simpan</span><span class="o">(</span><span class="n">m</span><span class="o">);</span>
</span><span class='line'>    <span class="o">}</span>
</span><span class='line'>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<h2>Class MahasiswaDao</h2>

<figure class='code'><figcaption><span></span></figcaption><div class="highlight"><table><tr><td class="gutter"><pre class="line-numbers"><span class='line-number'>1</span>
<span class='line-number'>2</span>
<span class='line-number'>3</span>
<span class='line-number'>4</span>
<span class='line-number'>5</span>
<span class='line-number'>6</span>
<span class='line-number'>7</span>
<span class='line-number'>8</span>
<span class='line-number'>9</span>
<span class='line-number'>10</span>
<span class='line-number'>11</span>
<span class='line-number'>12</span>
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nc">MahasiswaDao</span> <span class="o">{</span>
</span><span class='line'>    <span class="kd">public</span> <span class="kt">void</span> <span class="nf">simpan</span><span class="o">(</span><span class="n">String</span><span class="o">[]</span> <span class="n">m</span><span class="o">){</span>
</span><span class='line'>        <span class="n">String</span> <span class="n">sql</span> <span class="o">=</span> <span class="s">&quot;INSERT INTO mahasiswa values (?,?,?)&quot;</span><span class="o">;</span>
</span><span class='line'>        <span class="n">PreparedStatement</span> <span class="n">ps</span> <span class="o">=</span> <span class="n">koneksi</span><span class="o">.</span><span class="na">prepareStatement</span><span class="o">(</span><span class="n">sql</span><span class="o">);</span>
</span><span class='line'>
</span><span class='line'>        <span class="k">for</span><span class="o">(</span><span class="kt">int</span> <span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="o">;</span> <span class="n">i</span><span class="o">&lt;</span><span class="n">m</span><span class="o">.</span><span class="na">length</span><span class="o">;</span> <span class="n">m</span><span class="o">++){</span>
</span><span class='line'>            <span class="n">ps</span><span class="o">.</span><span class="na">setString</span><span class="o">(</span><span class="n">i</span><span class="o">,</span> <span class="n">m</span><span class="o">[</span><span class="n">i</span><span class="o">]);</span>
</span><span class='line'>        <span class="o">}</span>
</span><span class='line'>
</span><span class='line'>        <span class="n">ps</span><span class="o">.</span><span class="na">executeUpdate</span><span class="o">();</span>
</span><span class='line'>    <span class="o">}</span>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<p>Pembuatan class <code>Mahasiswa</code> di atas merupakan salah satu implementasi prinsip <code>encapsulation</code> dalam OOP. Class <code>Mahasiswa</code> disebut dengan istilah domain class, yaitu class yang dibuat untuk memodelkan kasus yang akan dibuat.</p>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/mengapa-kita-membuat-class/">Baca selengkapnya &rarr; Mengapa kita membuat class</a></i>
  </span>
</div>
