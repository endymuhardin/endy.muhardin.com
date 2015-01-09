---
title: "Scope Variabel"
kind: article
created_at: 2014-12-16 08:40:00 UTC
author: Endy Muhardin
layout: planet
categories:
- referensi
---
<p>Masih dari <a href="https://www.facebook.com/groups/ForumJavaIndonesia/10152533869543017">pertanyaan di grup Facebook</a>, berikut kode programnya (saya edit sedikit supaya sesuai)</p>

<h2>Alternatif Pertama</h2>

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
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nf">CobaPertama</span> <span class="o">(){</span>
</span><span class='line'>        <span class="n">String</span> <span class="n">a</span><span class="o">;</span>
</span><span class='line'>        <span class="kd">public</span> <span class="kt">void</span> <span class="nf">coba1</span><span class="o">(){</span>
</span><span class='line'>                <span class="n">a</span> <span class="o">=</span> <span class="s">&quot;ari&quot;</span><span class="o">;</span>
</span><span class='line'>                <span class="n">System</span><span class="o">.</span><span class="na">out</span><span class="o">.</span><span class="na">println</span><span class="o">(</span><span class="n">a</span><span class="o">);</span>
</span><span class='line'>        <span class="o">}</span>
</span><span class='line'>        <span class="kd">public</span> <span class="kt">void</span> <span class="nf">coba2</span><span class="o">(){</span>
</span><span class='line'>                <span class="n">a</span> <span class="o">=</span> <span class="s">&quot;ira&quot;</span><span class="o">;</span>
</span><span class='line'>                <span class="n">System</span><span class="o">.</span><span class="na">out</span><span class="o">.</span><span class="na">println</span><span class="o">(</span><span class="n">a</span><span class="o">);</span>
</span><span class='line'>        <span class="o">}</span>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<h2>Alternatif Kedua</h2>

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
</pre></td><td class='code'><pre><code class='java'><span class='line'><span class="kd">public</span> <span class="kd">class</span> <span class="nf">CobaKedua</span> <span class="o">(){</span>
</span><span class='line'>        <span class="kd">public</span> <span class="kt">void</span> <span class="nf">coba1</span><span class="o">(){</span>
</span><span class='line'>                <span class="n">String</span> <span class="n">a</span> <span class="o">=</span> <span class="s">&quot;ari&quot;</span><span class="o">;</span>
</span><span class='line'>                <span class="n">System</span><span class="o">.</span><span class="na">out</span><span class="o">.</span><span class="na">println</span><span class="o">(</span><span class="n">a</span><span class="o">);</span>
</span><span class='line'>        <span class="o">}</span>
</span><span class='line'>        <span class="kd">public</span> <span class="kt">void</span> <span class="nf">coba2</span><span class="o">(){</span>
</span><span class='line'>                <span class="n">String</span> <span class="n">a</span> <span class="o">=</span> <span class="s">&quot;ira&quot;</span><span class="o">;</span>
</span><span class='line'>                <span class="n">System</span><span class="o">.</span><span class="na">out</span><span class="o">.</span><span class="na">println</span><span class="o">(</span><span class="n">a</span><span class="o">);</span>
</span><span class='line'>        <span class="o">}</span>
</span><span class='line'><span class="o">}</span>
</span></code></pre></td></tr></table></div></figure>


<p>Pertanyaannya sebagai berikut</p>

<blockquote><p>lebih cepatan mana y masta performance aplikasi yg entar kt buat</p></blockquote>


<div class="author">
  <img src="http://www.gravatar.com/avatar/31694bbf42349c6b6adfe893bb1e19d8.png" style="width: 96px; height: 96;">
  <span style="position: absolute; padding: 32px 15px;">
    <i>Ditulis oleh <a href="http://about.me/endy.muhardin">Endy Muhardin</a> 
    <a class="more-link" href="http://software.endy.muhardin.com/java/scope-variabel/">Baca selengkapnya &rarr; Scope Variabel</a></i>
  </span>
</div>
