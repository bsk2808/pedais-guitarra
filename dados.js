let dados = [
  {
    titulo: "DS-1",
    descricao: "O BOSS DS-1 é um pedal de distorção que se tornou um verdadeiro ícone no mundo da guitarra. A sonoridade característica do DS-1, com um ganho agressivo e um timbre encorpado, o tornou um elemento fundamental em inúmeros álbuns e shows ao longo das décadas.",
    artistas: "Kurt Cobain (Nirvana), Joe Satriani",
    indicacao: "Adeptos de um som clássico e agressivo: O DS-1 oferece um som distorcido clássico, com um ataque definido e um sustain prolongado, que se tornou uma referência para muitos guitarristas.",
    link: "https://www.boss.info/br/products/ds-1/",
    tags: "distorção overdrive grunge rock heavy agressivo clássico boss",
    imagem: "https://static.roland.com/products/ds-1/images/ds-1_01_gal.jpg"
  },
  {
    titulo: "BD-2",
    descricao: "O BOSS BD-2 Blues Driver é um pedal de overdrive clássico que oferece um timbre quente e versátil, inspirado nos amplificadores de válvulas. Perfeito para blues, rock e outros estilos que exigem um som encorpado e com personalidade.",
    artistas: "John Mayer, Billie Joe Armstrong(Green Day)",
    indicacao: "Músicos que buscam um som vintage: O BD-2 oferece um som que lembra os amplificadores valvulados vintage, com um timbre rico e harmonioso.",
    link: "https://www.boss.info/br/products/bd-2/",
    tags: "overdrive blues suave rock pop bluesy clássico boss",
    imagem: "https://static.roland.com/assets/images/products/gallery/bd-2_top_gal.jpg"
  },
  {
    titulo: "Big Muff",
    descricao: "O Big Muff Pi da Electro-Harmonix é um dos pedais de distorção mais icônicos e versáteis já criados. Conhecido por seu som distorcido e sustain infinito, o Big Muff é um elemento fundamental para quem busca um som pesado e com muita personalidade.",
    artistas: "Jimi Hendrix, David Gilmour (Pink Floyd), Carlos Santana",
    indicacao: "Guitarristas que buscam um som distorcido e encorpado: O Big Muff é perfeito para quem busca um som de guitarra com muita distorção, sustain e um caráter agressivo.",
    link: "https://www.ehx.com/products/big-muff-pi/",
    tags: "distorção fuzz pesado psicodélico metal rock heavy",
    imagem: "https://b2155914.smushcdn.com/2155914/wp-content/uploads/2020/10/usbm-1-300x300.jpg?lossy=1&strip=1&webp=1"
  },
  {
    titulo: "Tubescreamer TS9",
    descricao: "O Ibanez Tubescreamer TS9 é um dos pedais de overdrive mais populares do mundo. Seu som quente e encorpado o torna ideal para solos quentes e um crunch suave.",
    artistas: "Stevie Ray Vaughan, Slash(Guns N' Roses)",
    indicacao: "Guitarristas de blues e rock clássico: O TS9 é conhecido por seu som quente e encorpado, que se encaixa perfeitamente em estilos como blues, rock clássico e rock and roll.",
    link: "https://www.ibanez.com/jp/products/detail/ts9_99.html",
    tags: "overdrive tube screamer quente encorpado solo crunch vintage ibanez ts9 blues rock",
    imagem: "https://www.ibanez.com/common/product_artist_file/file/p_region_TS9_en_1.png"
  },
  {
    titulo: "Cry Baby",
    descricao: "O Cry Baby é um dos pedais de efeito mais icônicos e reconhecíveis na história da guitarra. Seja na versão original da Vox ou nas diversas variações produzidas pela Dunlop, o Cry Baby se tornou um padrão para o som wah-wah, presente em inúmeros hits e estilos musicais.",
    artistas: "Jimi Hendrix, Slash (Guns N' Roses)",
    indicacao: "O pedal Cry Baby é indicado para qualquer guitarrista que busca um som expressivo e versátil. É uma ferramenta essencial para quem deseja adicionar um toque de personalidade e dinâmica ao seu som.",
    link: "https://www.jimdunlop.com/products/electronics/cry-baby/",
    tags: "wah-wah expressivo cry baby vox wah blues rock funk",
    imagem: "https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/1280x1280/products/583/6157/11095000001.MAIN__82256.1663874792.jpg?c=2"
  },
  {
    titulo: "DD-500",
    descricao: "O Boss DD-500 é um dos pedais de delay mais versáteis e poderosos do mercado, oferecendo uma gama impressionante de opções para guitarristas e músicos que buscam criar paisagens sonoras ricas e complexas.",
    artistas: "John Petrucci (Dream Theater), Matt Bellamy (Muse)",
    indicacao: "Guitarristas que buscam um pedal de delay versátil: Se você precisa de um único pedal para cobrir todas as suas necessidades de delay, o DD-500 é a escolha perfeita.",
    link: "https://www.boss.info/br/products/dd-500/",
    tempo: "delay eco slapback reverb modulação boss dd500",
    imagem: "https://static.roland.com/assets/images/products/gallery/dd_500_top_gal.jpg"
  },
  {
    titulo: "Electro-Harmonix Small Clone Chorus",
    descricao: "O Small Clone é um pedal de chorus analógico da Electro-Harmonix, conhecido por seu som rico e espesso. Perfeito para criar texturas sonoras amplas e vibrantes.",
    artistas: "David Gilmour (Pink Floyd), John Frusciante (Red Hot Chili Peppers)",
    indicacao: "Guitarristas que buscam um som clássico e analógico: O Small Clone oferece um som de chorus autêntico e quente, com um timbre analógico que agrada aos ouvidos de muitos guitarristas.",
    link: "https://www.ehx.com/products/small-clone/",
    tags: "chorus analógico rico espesso",
    imagem: "https://b2155914.smushcdn.com/2155914/wp-content/uploads/2020/10/clone-1-300x300.jpg?lossy=1&strip=1&webp=1"
  },
  {
    titulo: "MXR Phase 90",
    descricao: "O MXR Phase 90 é um pedal de phaser clássico e icônico, conhecido por seu som psicodélico e vintage, ideal para rock, pop e funk.",
    artistas: "Jimi Hendrix, Pink Floyd",
    indicacao: "Guitarristas que buscam um som psicodélico e vintage: O Phase 90 é ideal para quem busca um efeito de fase clássico.",
    link: "https://www.jimdunlop.com/mxr-phase-90/",
    tags: "phaser psicodélico vintage rock pop funk",
    imagem: "https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/1280x1280/products/589/6193/11101000001.MAIN__38391.1663874793.jpg?c=2"
  },
  {
    titulo: "TC Electronic Flashback Delay",
    descricao: "O TC Electronic Flashback Delay é um pedal de delay digital versátil e poderoso, com uma ampla gama de sons, desde delays curtos e claros até delays longos e espessos, ideal para diversos estilos musicais.",
    artistas: "Utilizado por muitos guitarristas profissionais.",
    indicacao: "Guitarristas que buscam um pedal de delay versátil: O Flashback Delay é ideal para quem busca uma ampla gama de sons de delay.",
    link: "https://www.tcelectronic.com/product.html?modelCode=0709-AFC",
    tags: "delay digital versátil multi-efeitos",
    imagem: "https://mediadl.musictribe.com/media/PLM/data/images/products/P0C80/2000Wx2000H/FLASHBACK-DELAY_P0C80_Top_XL.png"
  },
  {
    titulo: "Boss RV-6 Reverb",
    descricao: "O Boss RV-6 Reverb é um pedal de reverb digital compacto e versátil, com uma ampla gama de sons de reverb, desde room e hall até plate e spring, ideal para diversos estilos musicais.",
    artistas: "Utilizado por muitos guitarristas profissionais.",
    indicacao: "Guitarristas que buscam um pedal de reverb versátil: O RV-6 é ideal para quem busca uma ampla gama de sons de reverb.",
    link: "https://www.boss.info/br/products/rv-6/",
    tags: "reverb digital versátil multi-efeitos",
    imagem: "https://static.roland.com/products/rv-6/image/rv-6_gal_01.jpg"
  },
  {
    titulo: "ProCo Rat Distortion",
    descricao: "O ProCo Rat Distortion é um pedal de distorção clássico e agressivo, conhecido por seu som denso e saturado, ideal para rock, punk e heavy metal.",
    artistas: "Kurt Cobain (Nirvana), Sonic Youth",
    indicacao: "Guitarristas que buscam um som distorcido e agressivo com um midrange poderoso.",
    link: "https://www.ratdistortion.com/product/108/rat-2-foot-pedal",
    tags: "distorção rock punk heavy metal midrange",
    imagem: "https://media.guitarcenter.com/is/image/MMGS7/151501000000000-00-600x600.jpg"
  },
  {
    titulo: "Boss OD-1 Overdrive",
    descricao: "O Boss OD-1 Overdrive é um pedal de overdrive clássico e versátil, oferecendo um som quente e encorpado, ideal para blues, rock clássico e rock and roll.",
    artistas: "Muitos guitarristas utilizam o OD-1 em suas configurações.",
    indicacao: "Guitarristas que buscam um som overdrive clássico e versátil.",
    link: "https://www.boss.info/br/products/od-1x/",
    tags: "overdrive blues rock clássico warm vintage",
    imagem: "https://static.roland.com/products/od-1x/image/od-1x_gal_01.jpg"
  },
  {
    titulo: "DigiTech Whammy DT",
    descricao: "O DigiTech Whammy DT é um pedal de pitch shifter e whammy bar digital, oferecendo uma ampla gama de efeitos de pitch shifting, incluindo harmonias e sons de guitarra barítono.",
    artistas: "TesseracT, Animals as Leaders",
    indicacao: "Guitarristas que buscam efeitos de pitch shifting e whammy bar.",
    link: "https://www.digitech.com/products/whammy-dt/",
    tags: "pitch shifter whammy bar harmonias",
    imagem: "https://eadn-wc05-7545739.nxedge.io/wp-content/uploads/2022/08/DigiTech_Whammy_DT_guitar_pedal_Top_1200x1200.jpg"
  },
  {
    titulo: "MXR Flanger",
    descricao: "O MXR Flanger é um pedal de flanger clássico, oferecendo um som psicodélico e vintage, ideal para rock, pop e funk.",
    artistas: "Jimi Hendrix, Pink Floyd",
    indicacao: "Guitarristas que buscam um som flanger clássico e psicodélico.",
    link: "https://www.jimdunlop.com/mxr-flanger/",
    tags: "flanger psicodélico vintage rock pop funk",
    imagem: "https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/1280x1280/products/601/6263/11117000101.MAIN__57059.1663874794.jpg?c=2"
  }
];