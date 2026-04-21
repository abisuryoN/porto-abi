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
      title: 'Backend Developer',
      viewProjects: 'Lihat Project',
      aboutMe: 'Tentang Saya',
      bio: 'Saya adalah Backend Developer yang fokus pada pengembangan web. Saya memiliki passion besar dalam membangun arsitektur sistem yang scalable, aman, dan efisien untuk berbagai pengujian aplikasi.',
      followMe: 'Ikuti Saya'
    },
    about: {
      education: 'Pendidikan',
      skills: 'Kemampuan',
      uni: 'Universitas Indraprasta PGRI',
      now: 'Sekarang',
      study: 'Fakultas / Program Studi (Sesuaikan). IPK Saat ini:',
      highschool: 'SMAN 1 Tajurhalang',
      science: 'Jurusan Ilmu Pengetahuan Alam (IPA)',
      summary: 'Terus belajar dan mengembangkan diri terhadap teknologi terbaru, termasuk pembuatan API, arsitektur database, dan implementasi frontend modern.'
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
          title: 'Company Profile Koperasi RAS',
          shortDesc: 'Website profil perusahaan untuk Koperasi Raya Abadi Saudara untuk meningkatkan visibilitas digital.',
          fullDesc: 'Platform company profile yang dirancang untuk memperkenalkan profil Koperasi Raya Abadi Saudara kepada publik secara profesional. Situs ini mencakup informasi tentang layanan, visi misi, sejarah perusahaan, serta galeri kegiatan.'
        },
        {
          title: 'Sistem Keuangan Koperasi RAS',
          shortDesc: 'Sistem manajemen keuangan untuk pencatatan simpan pinjam dan investasi koperasi.',
          fullDesc: 'Aplikasi manajemen keuangan terpadu yang menangani transaksi simpan pinjam dan investasi. Memiliki 3 tingkat akses: Superadmin (kontrol penuh), Staff (operasional), dan Investor (monitoring investasi).'
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
      quote: '"Terus berkembang sebagai Backend Developer dengan membangun sistem yang efisien dan terstructured serta mengikuti perkembangan teknologi modern."'
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
      title: 'Backend Developer',
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
      bio: 'I am a Backend Developer focused on web development. I have a great passion for building scalable, secure, and efficient system architectures for various application testing scenarios.',
      followMe: 'Follow Me'
    },
    about: {
      education: 'Education',
      skills: 'Skills',
      uni: 'Indraprasta PGRI University',
      now: 'Present',
      study: 'Faculty / Study Program (Adjust). Current GPA:',
      highschool: 'SMAN 1 Tajurhalang High School',
      science: 'Science Major (IPA)',
      summary: 'Continuously learning and developing towards the latest technologies, including API creation, database architecture, and modern frontend implementation.'
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
          title: 'Koperasi RAS Company Profile',
          shortDesc: 'Company profile website for Koperasi Raya Abadi Saudara to increase digital visibility.',
          fullDesc: 'A company profile platform designed to professionally introduce Koperasi Raya Abadi Saudara to the public. This site includes information about services, vision and mission, company history, and activity galleries.'
        },
        {
          title: 'Koperasi RAS Financial System',
          shortDesc: 'Financial management system for cooperative savings, loans, and investments.',
          fullDesc: 'An integrated financial management application handling savings, loans, and investment transactions. Features 3 access levels: Superadmin (full control), Staff (operational), and Investor (investment monitoring).'
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
      quote: '"Continuously growing as a Backend Developer by building efficient and structured systems while following modern technology developments."'
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
