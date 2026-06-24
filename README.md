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

GitHub Actions (`.github/workflows/hugo.yml`) membangun `hugo --minify` dan menerbitkan ke GitHub Pages pada setiap push ke `main`. Domain kustom `endy.muhardin.com` di-set lewat `static/CNAME` (disalin Hugo ke `public/CNAME`).

DNS apex untuk GitHub Pages — A record ke `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (opsional AAAA ke `2606:50c0:8000::153` dst.).
