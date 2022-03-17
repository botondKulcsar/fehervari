import React from 'react'
import classes from './Physician.module.css'
import { useParams } from 'react-router-dom'

const physicians = [
  {
    name: 'dr-fehervari-lajos',
    displayName: 'Dr. Fehérvári Lajos ',
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
    ]
  },
  {
    name: 'dr-frink-dienes-eszter',
    displayName: 'Dr. Frink Dienes Eszter',
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
    services: ['Pszihiátriai kozultáció']
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
    services: ['']
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
    ]
  }
]

const Physician = () => {
  const { name } = useParams()
  console.log(name)

  const physician = physicians.find(ph => ph.name === name)
  console.log(physician)
  return (
    <div>
      <h1 className={classes.name}>{physician.displayName}</h1>
      <h3>Szakterületek</h3>
      <ul>
        {physician.fields.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <h3>Végzettségek</h3>
      <ul>
        {physician.education.map(ed => (
          <li key={ed}>{ed}</li>
        ))}
      </ul>
      <h3>Szolgáltatások</h3>
      <ul>
        {physician.services.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default Physician
