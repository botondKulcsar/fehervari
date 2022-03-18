import drfehervarilajos from '../assets/imgs/dr-fehervari-lajos.jpeg'
import drfinkdieneseszter from '../assets/imgs/dr-frink-dienes-eszter.jpeg'
import drfehervarilazarmonika from '../assets/imgs/dr-fehervari-lazar-monika.jpeg'

const physicians = [
  {
    name: 'dr-fehervari-lajos',
    displayName: 'Dr. Fehérvári Lajos',
    fields: ['Belgyógyászat', 'Kardiológia'],
    education: [
      'Marosvásárhelyi Orvosi és Gyógyszerészeti Egyetem (2007)',
      'Belgyógyászat szakvizsga (2015)',
      'Kardiológia szakvizsga (2018)',
      'PhD fokozat (2021)'
    ],

    services: [
      'Kardiológiai konzultáció',
      'EKG (Elektrokardiográfia)',
      'Echocardiográfia (szív ultrahang)',
      'ABPM (24 órás vérnyomásmérés',
      'Holter (24 órás EKG vizsgálat)'
    ],
    img: drfehervarilajos
  },
  {
    name: 'dr-frink-dienes-eszter',
    displayName: 'Dr. Frink-Dienes Eszter',
    fields: [
      'Hangulatzavarok',
      'Szorongásos kórképek',
      'Szkizofrénia és szkizofénia szerű kórképek',
      'Testi betegséghez kapcsolodó kórképek'
    ],
    education: [
      'Marosvásárhelyi Orvosi és Gyógyszerészeti Egyetem (2014)',
      'Pszihiátia szakvizsga (2022)',
      'Rendszerszemléletű pár- és családterapeuta (folyamatban)',
      'Családorvos rezidens (folyamatban)'
    ],
    services: ['Pszihiátriai kozultáció'],
    img: drfinkdieneseszter
  },
  {
    name: 'dr-fehervari-lazar-monika',
    displayName: 'Dr. Fehérvári Lázár Mónika',
    fields: ['Családorvos főorvos'],
    education: [
      'Marosvásárhelyi Orvosi és Gyógyszerészeti Egyetem (2008)',
      'Családorvos szakvizsga (2011)',
      'Családorvos főorvosi szakvizsga (2015)'
    ],
    services: [],
    img: drfehervarilazarmonika
  },
  {
    name: 'dr-rab-andrea',
    displayName: 'Dr. Rab Andrea',
    fields: ['Belgyógyászat'],
    education: [
      'Marosvásárhelyi Orvosi és Gyógyszerészeti Egyetem (2014)',
      'Belgyógyászat szakvizsga (2019)',
      'Kardiológus rezidens (folyamatban)'
    ],
    services: [
      'Belgyógyászati konzultáció',
      'Hasi ultrahangvizsgálat',
      'Artériás és vénás Dopple-ultrahangvizsgálat'
    ],
    img: ''
  }
]

export default physicians
