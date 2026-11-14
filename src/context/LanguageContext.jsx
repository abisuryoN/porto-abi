import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek'
    },
    hero: {
      hello: "Halo, Saya",
      title: 'Backend Developer & IT Educator',
      viewProjects: 'Lihat Project',
      aboutMe: 'Tentang Saya',
      bio: 'Saya adalah mahasiswa Teknik Informatika yang berfokus pada Backend Development dan pengembangan aplikasi web menggunakan PHP, Laravel, React JS, dan MySQL.',
      followMe: 'Ikuti Saya'
    },
    about: {
      education: 'Pendidikan',
      skills: 'Kemampuan',
      uni: 'Universitas Indraprasta PGRI',
      now: 'Sekarang',
      study: 'Teknik Informatika. IPK Saat ini:',
      highschool: 'SMAN 1 Tajurhalang',
      science: 'Jurusan Ilmu Pengetahuan Alam (IPA)',
      summary: 'Saya adalah mahasiswa Teknik Informatika yang berfokus pada Backend Development dan pengembangan aplikasi web menggunakan PHP, Laravel, React JS, dan MySQL.'
    },
    teaching: {
      title: 'Dokumentasi Kegiatan Mengajar',
      desc: 'Pengalaman saya mengajar Teknik Informatika di SMA Negeri 1 Tajurhalang.'
    },
    projects: {
      title: 'Portofolio Proyek',
      subtitle: 'Beberapa project backend dan aplikasi web yang pernah saya bangun.',
      viewDetail: 'Lihat Detail',
      close: 'Tutup',
      tech: 'Teknologi',
      descLabel: 'Deskripsi',
      items: [
        {
          title: 'Sistem Informasi Absensi TAAT',
          shortDesc: 'Aplikasi sistem informasi absensi sekolah untuk pengelolaan data kehadiran siswa secara digital.',
          fullDesc: 'Aplikasi sistem informasi absensi sekolah yang dikembangkan untuk membantu pengelolaan data kehadiran siswa dan aktivitas administrasi sekolah secara digital. Sistem ini menyediakan pengelolaan data siswa, guru, kelas, serta pencatatan dan pemantauan kehadiran.'
        },
        {
          title: 'FollowCheck – Instagram Follower Analyzer',
          shortDesc: 'Aplikasi web untuk menganalisis hubungan followers dan following Instagram.',
          fullDesc: 'Aplikasi web untuk menganalisis hubungan followers dan following Instagram berdasarkan data ekspor resmi Instagram. Membantu pengguna mengetahui akun yang tidak mengikuti kembali, akun yang saling mengikuti, serta melakukan analisis data followers dan following dengan lebih mudah.'
        },
        {
          title: 'Sistem Keuangan Koperasi RAS',
          shortDesc: 'Sistem manajemen keuangan untuk pencatatan simpan pinjam dan investasi koperasi.',
          fullDesc: 'Aplikasi manajemen keuangan terpadu yang menangani transaksi simpan pinjam dan investasi. Memiliki 3 tingkat akses: Superadmin (kontrol penuh), Staff (operasional), dan Investor (monitoring investasi).'
        },
        {
          title: 'Company Profile Koperasi RAS',
          shortDesc: 'Website profil perusahaan untuk Koperasi Raya Abadi Saudara untuk meningkatkan visibilitas digital.',
          fullDesc: 'Aplikasi company profile yang dirancang untuk memperkenalkan profil Koperasi Raya Abadi Saudara kepada publik secara profesional. Situs ini mencakup informasi tentang layanan, visi misi, sejarah perusahaan, serta galeri kegiatan.'
        },
        {
          title: 'DualCode - Layanan Jasa Joki',
          shortDesc: 'Platform penyedia layanan jasa joki tugas akademik secara profesional.',
          fullDesc: 'Website layanan profesional yang menawarkan jasa pengerjaan tugas (joki) dengan kualitas terjamin. Menggunakan Laravel sebagai backend dan React sebagai frontend, serta dilengkapi sistem autentikasi Google Login untuk keamanan dan kemudahan pengguna.'
        }
      ]
    },
    common: {
      chatWa: 'Chat di WhatsApp',
      rights: 'Hak cipta dilindungi.',
      quote: '"Terus berkembang sebagai Backend Developer & IT Educator dengan membangun sistem yang efisien dan terstructured serta mengikuti perkembangan teknologi modern."'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects'
    },
    hero: {
      hello: "Hello, I'm",
      title: 'Backend Developer & IT Educator',
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
      bio: 'I am an Informatics Engineering student focused on Backend Development and web application development using PHP, Laravel, React JS, and MySQL.',
      followMe: 'Follow Me'
    },
    about: {
      education: 'Education',
      skills: 'Skills',
      uni: 'Indraprasta PGRI University',
      now: 'Present',
      study: 'Informatics Engineering. Current GPA:',
      highschool: 'SMAN 1 Tajurhalang High School',
      science: 'Science Major (IPA)',
      summary: 'I am an Informatics Engineering student focused on Backend Development and web application development using PHP, Laravel, React JS, and MySQL.'
    },
    teaching: {
      title: 'Teaching Documentation',
      desc: 'My experience teaching Informatics at SMA Negeri 1 Tajurhalang.'
    },
    projects: {
      title: 'Project Portfolio',
      subtitle: 'Some backend projects and web applications I have built.',
      viewDetail: 'View Detail',
      close: 'Close',
      tech: 'Technologies',
      descLabel: 'Description',
      items: [
        {
          title: 'TAAT School Attendance Information System',
          shortDesc: 'School attendance information system application for digital student attendance management.',
          fullDesc: 'A school attendance information system application developed to help manage student attendance data and school administrative activities digitally. This system provides management of student, teacher, class data, and attendance monitoring.'
        },
        {
          title: 'FollowCheck – Instagram Follower Analyzer',
          shortDesc: 'Web application for analyzing Instagram followers and following relationships.',
          fullDesc: 'A web application for analyzing Instagram followers and following relationships based on official Instagram export data. It helps users discover accounts that do not follow back, mutual accounts, and makes follower/following data analysis easier.'
        },
        {
          title: 'Koperasi RAS Financial System',
          shortDesc: 'Financial management system for cooperative savings, loans, and investments.',
          fullDesc: 'An integrated financial management application handling savings, loans, and investment transactions. Features 3 access levels: Superadmin (full control), Staff (operational), and Investor (monitoring investments).'
        },
        {
          title: 'Koperasi RAS Company Profile',
          shortDesc: 'Company profile website for Koperasi Raya Abadi Saudara to increase digital visibility.',
          fullDesc: 'A company profile platform designed to professionally introduce Koperasi Raya Abadi Saudara to the public. This site includes information about services, vision and mission, company history, and activity galleries.'
        },
        {
          title: 'DualCode - Professional Services',
          shortDesc: 'Platform providing professional academic assistance services.',
          fullDesc: 'A professional service website offering academic task assistance (joki) with guaranteed quality. Built with a Laravel backend and React frontend, it features a seamless Google Login authentication system for security and ease of use.'
        }
      ]
    },
    common: {
      chatWa: 'Chat on WhatsApp',
      rights: 'All rights reserved.',
      quote: '"Continuously growing as a Backend Developer & IT Educator by building efficient and structured systems while following modern technology developments."'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
