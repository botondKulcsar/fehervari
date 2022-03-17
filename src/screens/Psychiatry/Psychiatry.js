import React from 'react'
import classes from './Psychiatry.module.css'
import psychiatrist from '../../assets/imgs/psychiatrist.jpeg'

const Psychiatry = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='wrapper'>
      <h2 className='title'>Pszichiátria</h2>
      <a className='telephone-link' href='tel:+40743992618'>
        Tel: 0743 992 618
      </a>
      <h4 className='doctor'>Dr. Frink-Dienes Eszter</h4>

      <div className={classes['img-holder']}>
        <img src={psychiatrist} alt='Dr. Frink-Dienes Eszter' />
      </div>
      <p>
        A pszichiátria, vagy elmegyógyászat, a lelki betegségek
        diagnosztizálásával és kezelésével foglalkozó orvosi szakterület.
        Pszichiáter foglalkozik továbbá a szenvedélybetegekkel illetve a
        szellemileg hanyatló idősekkel is. A pszichiáter orvosi végzettséggel
        rendelkezik, több év rezidensséget követően gyakorolhatja szakterületét.
        Pszichiáter állítja fel a páciensnél a mentális kórképet és határozza
        meg a szükséges kezelést, melyhez felírhat gyógyszert is.
      </p>

      <p className='question'>Milyen panaszokkal forduljunk pszichiáterhez?</p>
      <p>
        Az alábbi tünetek tapasztalása esetén javasolt pszichiátriai
        szakrendelés felkeresése:
      </p>
      <ul>
        <li>
          szorongásos zavarok (például fóbiák, pánikbetegség, kényszeres
          viselkedés)
        </li>
        <li>
          hangulati zavarok (tartós rossz hangulat, irritáltság, türelmetlenség,
          feszültség, szorongás, fáradtság, energiátlanság érzése, örömképesség
          elvesztése, korábbi érdeklődés beszűkülése, nehezített alvás,
          alvásigény megnövekedése, étvágyváltozás, koncentrációs zavarok,
          öngyilkossági gondolatok, halálvágy)
        </li>
        <li>szenvedélybetegség</li>
        <li>evés és testképzavar</li>
        <li>a valóságtól elrugaszkodott tévképzetek</li>
        <li>valótlan érzetek (képek, hangok, szagok, színek)</li>
        <li>összefüggéstelen beszéd</li>
      </ul>

      <h3 className='subtitle'>A pszichiátriai vizsgálat menete</h3>
      <p>
        A pszichiátriai szakrendelés keretében első alkalommal 1 órás kötetlen,
        személyes hangvételű beszélgetésen vesz részt a páciens a szakorvossal,
        melynek célja a mentális állapot felmérése. A beszélgetés során a
        pszichiáter kérdéseket tesz fel a tapasztalt tünetekkel kapcsolatban,
        majd az egyén gondolkodásbeli, érzelmi és viselkedésbeli
        jellegzetességei alapján állítja fel a diagnózist. Ehhez különböző
        pszichológiai, illetve pszichiátriai teszteket alkalmaz, melyek
        célirányos kérdéseket tartalmaznak, segítve az esetleges mentális
        betegségek meghatározását és azok súlyosságát. Szükség esetén a szervi
        okok feltárásához további társterületeket is bevonhat (neurológia,
        belgyógyászat) a folyamatba, illetve képalkotó vizsgálatokat is
        elrendelhet.
      </p>
      <p>
        Az első konzultációt követően a szakorvos a diagnosztizált betegségnek
        megfelelő terápiát javasol, aminek eredményességét bizonyos időközönként
        kontroll vizsgálat keretében ellenőrzi.
      </p>

      <h3 className='subtitle'>
        Milyen kezelési lehetősége érhetők el a Fehérvári medcenter
        pszichiátriai szakrendelésén?
      </h3>

      <p>
        A diagnózis felállítását követően a pszichiáter az adott betegségnek
        megfelelő terápiát javasolja, mely segít enyhíteni a tüneteket, illetve
        tünetmentessé tenni azt. Szakrendelésünkön járóbeteg ellátás keretében
        gyógyszeres kezelésre és annak nyomon követésére van lehetőség.
      </p>

      <p>
        A pszichiáter a páciens lelki állapotának javulása érdekében
        javasolhatja pszichológus szakember bevonását is a kezelésbe, egyéni
        vagy csoportos pszichoterápia céljából.
      </p>
    </div>
  )
}

export default Psychiatry
