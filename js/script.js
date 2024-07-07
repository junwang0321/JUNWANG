document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    const langToggle = document.getElementById('lang-toggle');
    const elements = document.querySelectorAll('[data-lang]');

    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            contact: 'Contact',
            gallery: 'Gallery',
            music: 'Music',
            welcome: 'Welcome to My World of Jazz and Art',
            description: 'Jazz Guitarist and Painter',
            quote: '"He possesses the intuitive insight and acute sensitivity requisite for a musician" - Ben Monder',
            about-me: 'About Me',
            about-text: 'Hi, I\'m Jun Wang, a jazz guitarist currently attending the Amsterdam Conservatory. I have studied under legendary guitarists like Ben Monder, Daan Kleijn, Barry Greene, and Tom Ollendorff. Besides music, I am also a passionate painter.',
            experience: 'Experience',
            experience-text: 'I am currently attending the Amsterdam Conservatory. I have undergone extensive self-study in music, which has greatly shaped my understanding and skills. I have performed at various music festivals and live houses, including JZ Club, Meeting Jazz Hangzhou, Your Club Beijing, Smoke Club, The Hug, Modernista, and the National Centre for the Performing Arts Taihu Music Festival.',
            influences: 'Musical Influences',
            influences-text: 'My musical journey began in high school when I started learning the trombone. During this time, I was heavily influenced by classical composers such as Debussy, Bach, and Mendelssohn. Additionally, I have a deep interest in R&B, jazz, and soul, which have significantly shaped my musical style.',
            paintings: 'My Paintings',
            my-music: 'My Music',
            youtube: 'Check out my music on YouTube:'
        },
        zh: {
            home: '首页',
            about: '关于',
            contact: '联系',
            gallery: '画廊',
            music: '音乐',
            welcome: '欢迎来到我的爵士和艺术世界',
            description: '爵士吉他手和画家',
            quote: '“他具备音乐家所需的直觉洞察力和敏锐的感知力” - 本·蒙德',
            about-me: '关于我',
            about-text: '大家好，我是Jun Wang，一名目前就读于阿姆斯特丹音乐学院的爵士吉他手。我曾师从传奇吉他手Ben Monder、Daan Kleijn、Barry Greene和Tom Ollendorff。除了音乐，我还是一名热情的画家。',
            experience: '经历',
            experience-text: '我目前就读于阿姆斯特丹音乐学院。我在音乐方面进行了广泛的自学，这极大地塑造了我的理解和技能。我曾在各种音乐节和现场演出场所演出，包括JZ俱乐部、Meeting Jazz杭州、北京江湖酒吧、烟雾俱乐部、The Hug、Modernista和国家大剧院台湖音乐节。',
            influences: '音乐影响',
            influences-text: '我的音乐之旅始于高中，当时我开始学习长号。在此期间，我深受德彪西、巴赫和门德尔松等古典作曲家的影响。此外，我对R&B、爵士和灵魂乐有着浓厚的兴趣，这些都对我的音乐风格产生了重大影响。',
            paintings: '我的画作',
            my-music: '我的音乐',
            youtube: '在YouTube上查看我的音乐：'
        }
    };

    langToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        document.documentElement.lang = newLang;
        langToggle.textContent = newLang === 'en' ? '中文' : 'English';

        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            element.textContent = translations[newLang][key];
        });
    });
});
