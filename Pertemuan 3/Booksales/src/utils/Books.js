import hansel from "../assets/Buku/Hansel and Gretel Book Cover.jpg";
import dragon from "../assets/Buku/Dragon Treasure.jpg";
import uglyDuck from "../assets/Buku/Ugly Duck.jpg";
import jack from "../assets/Buku/Jack and Bean.jpg";
import ruby from "../assets/Buku/Ruby.jpg";
import babi from "../assets/Buku/Babi.jpg";
import bear from "../assets/Buku/Bear.jpg";
import robin from "../assets/Buku/Robin.jpg";
import wizard from "../assets/Buku/Wizard.jpg";

const Books = [
  {
    id: 1,
    title: "Hansel and Gretel",
    author: "Grimm Brothers",
    year: 2026,
    sinopsis: "Mengisahkan tentang dua bersaudara yang ditelantarkan di dalam hutan karena kemiskinan keluarga mereka. Saat tersesat, mereka menemukan rumah permen milik penyihir jahat yang kemudian mengurung Hansel untuk digemukkan dan dimakan. Namun, berkat kecerdikan Gretel, mereka berhasil mendorong penyihir itu ke dalam oven dan pulang membawa harta karun.",
    description:
      "Petualangan menegangkan kakak beradik yang tersesat di hutan dan menemukan rumah permen misterius milik seorang penyihir.",
    image: hansel,
  },
  {
    id: 2,
    title: "The Dragon's Treasure",
    author: "Kevin Soeria Jaya",
    year: 2026,
    description:
      "Petualangan seorang pangeran muda untuk menemukan harta karun yang dijaga oleh seekor naga.",
    image: dragon,
  },
  {
    id: 3,
    title: "The Ugly Duckling",
    author: "Hans Christian Andersen",
    year: 2026,
    description:
      "Seekor anak itik malang yang diejek karena buruk rupa, hingga akhirnya ia tumbuh dewasa menjadi seekor angsa yang sangat cantik.",
    image: uglyDuck,
  },
  {
    id: 4,
    title: "Jack and the Beanstalk",
    author: "Benjamin Tabart",
    year: 2026,
    description:
      "Anak laki-laki yang menemukan benih ajaib yang mana benih itu memberi jalan untuk ke tempat raksasa.",
    image: jack,
  },
  {
    id: 5,
    title: "Little Red Riding Hood",
    author: "Charles Perrault",
    year: 2026,
    description:
      "Seorang gadis kecil berjubah merah yang dalam perjalanan ke rumah neneknya bertemu dengan serigala licik yang menyamar sebagai neneknya.",
    image: ruby,
  },
  {
    id: 6,
    title: "The Three Little Pigs",
    author: "Joseph Jacobs",
    year: 2026,
    description:
      "Tiga babi bersaudara membangun rumah dari bahan berbeda — jerami, kayu, dan batu — untuk berlindung dari serigala besar yang jahat.",
    image: babi,
  },
  {
    id: 7,
    title: "Goldilocks and the Three Bears",
    author: "Robert Southey",
    year: 2026,
    description:
      "Seorang gadis berambut emas yang masuk ke rumah tiga beruang dan mencoba bubur, kursi, serta tempat tidur mereka — sampai pemiliknya pulang.",
    image: bear,
  },
  {
    id: 8,
    title: "Robin Hood",
    author: "Folklore Inggris",
    year: 2026,
    description:
      "Seorang pemanah pemberani di Hutan Sherwood yang merampok orang kaya untuk membantu rakyat miskin, bersama Merry Men-nya melawan Sheriff Nottingham.",
    image: robin,
  },
  {
    id: 9,
    title: "The Wizard of Oz",
    author: "L. Frank Baum",
    year: 2026,
    description:
      "Seorang gadis bernama Dorothy tersedot badai ke negeri ajaib Oz dan harus mencari penyihir agung untuk bisa pulang ke Kansas, ditemani Scarecrow, Tin Man, dan Cowardly Lion.",
    image: wizard,
  },
];

export default Books;