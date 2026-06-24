# endy.muhardin.com

Profil akademik dan profesional Endy Muhardin. Mengumpulkan bukti Tri Dharma (publikasi, presentasi, pengajaran, pengabdian) sebagai satu halaman kanonik — terpisah dari blog teknis (`software.endy.muhardin.com`) dan situs komersial ArtiVisi.

## Stack

Hugo statis, tanpa Hugo Modules dan tanpa npm — satu binary Go, nol dependensi runtime. Layout dan CSS ditulis tangan di `layouts/` dan `static/css/style.css`.

## Menjalankan lokal

```sh
hugo serve -D
```

## Menambah entri

```sh
hugo new publikasi/judul-paper.md
hugo new presentasi/judul-presentasi.md
hugo new pengajaran/nama-mata-kuliah.md
hugo new pengabdian/judul-kegiatan.md
```

Frontmatter yang dikenali: `title`, `date`, `venue`, `authors` (list), `link`, `summary`.

## Deploy

Host: Cloudflare Workers (static assets), domain `endy.muhardin.com`. Repo di GitHub hanya sebagai source.

```sh
hugo --minify        # build ke public/
wrangler deploy      # upload assets + custom_domain
```

`wrangler.jsonc` mendeklarasikan `routes: [{ pattern: "endy.muhardin.com", custom_domain: true }]` — Cloudflare otomatis membuat record DNS di zone `muhardin.com`. Pola sama dengan `garasi.muhardin.com`. Token API CLI tidak punya izin `dns_records`, jadi record dibuat lewat mekanisme custom_domain saat deploy, bukan API DNS langsung.
