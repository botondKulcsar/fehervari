import React from 'react'
import './Cardiology.css'
import cardiologist from '../../assets/imgs/cardiologist.jpg'

const Cardiology = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='wrapper'>
      <h2 className='title'>Kardiológia</h2>
      <a className='telephone-link' href='tel:+40745372390'>
        Tel: 0745 372 390
      </a>
      <h4 className='doctor'>Dr. Fehérvári Lajos</h4>

      <div className='img-holder'>
        <img src={cardiologist} alt='Dr. Fehérvári Lajos' />
      </div>
      <p>
        A kardiológia a belgyógyászat azon szakága, mely a szív – és érrendszeri
        betegségekkel foglalkozik. A terület specialistái a kardiológusok.
        Tekintve, hogy a szív és érrendszeri megbetegedések a leggyakoribb
        halálozási okok közé sorolhatók, 45 év felett már preventív célból,
        panasz esetén azonban sürgősen javasolt kardiológushoz fordulni.A
        kardiológus feladatai közé tartozik a ritmuszavarok, az érelmeszesedés
        okozta koszorúér-betegségek, a szívbillentyű zavarok, valamint a
        szívelégtelenség diagnosztizálása és kezelése, és a vérzsír eltérések
        korrigálása.
      </p>

      <p className='question'>
        Milyen tünetek esetén ajánlott felkeresni kardiológia szakrendelést?
      </p>
      <p>
        A kardiológia szakrendelést az alábbi tünetek észlelése esetén javasolt
        mielőbb felkeresni:
      </p>
      <ul>
        <li>A szokásosnál erősebb szívdobogás</li>
        <li>Nehézlégzés</li>
        <li>Lábdagadás</li>
        <li>Mellkasi fájdalom, szívtáji nyomás</li>
        <li>Bizonytalan eredetű mellkasi panaszok</li>
        <li>Magas vagy alacsony vérnyomás</li>
      </ul>

      <h3 className='subtitle'>Kardiológiai betegségek</h3>
      <p>
        A kardiológia az alábbi betegségek diagnosztizálásával és kezelésével
        foglalkozik:
      </p>
      <ul>
        <li>magas vérnyomás</li>
        <li>koszorúér betegségek</li>
        <li>
          szívritmus zavarok (arrhythmia): pitvarfibrilláció, tachycardia,
          bradycardia
        </li>
        <li>szívelégtelenség</li>
        <li>
          szerzett vagy vele született billentyűhibák, billentyű elégtelenség
          (insuffitientia), aorta szűkület (stenosis), mitrális billentyű
          beboltosulása (mitralis prolapsus)
        </li>
        <li>veleszületett szívbetegségek</li>
        <li>
          szív gyulladásos betegségei – szívizom, szívburok, szívbelhártya
          gyulladás
        </li>
      </ul>

      <h3 className='subtitle'>A kardiológiai vizsgálat menete</h3>
      <p>
        A kardiológiai vizsgálat a panaszok és a korábbi betegségek
        figyelembevételével az anamnézis felállításával kezdődik. Ezt követi a
        beteg pulzusának, valamint vérnyomásának mérése. A kardiológus végül
        sztetoszkóppal hallgatja meg a szív működése közben keletkező
        szívhangokat. Az elsődleges fizikális vizsgálatok eredménye alapján
        további, specifikus diagnosztikai vizsgálatokat rendelhet el a pontos
        diagnózis felállításához.
      </p>

      <h3 className='subtitle'>Kardiológiai diagnosztikai vizsgálatok</h3>

      <h4>EKG (Elektrokardiográfia)</h4>
      <p>
        Minden kardiológia szakrendelés alapvető és elmaradhatatlan vizsgálata
        az EKG vizsgálat. Az EKG a szívműködést (szívverést) kísérő elektromos
        tevékenységről, változásokról ad képet. Az EKG-görbét papíron vagy
        monitoron jeleníti meg a készülék. A vizsgálat fájdalommentes és
        mellékhatások nélküli.
      </p>

      <h4>Echocardiográfia (szív ultrahang)</h4>
      <p>
        Az echocardiográfia a nem invazív kardiológiai diagnosztika egyik
        legfontosabb módszere. Ez a képalkotó eljárás az ultrahang alkalmazásán
        alapul, ennek segítségével állít elő mozgóképet a dobogó szívről. Az
        echocardiográfia a szív és a nagy erek anatómiájának felderítése mellett
        alkalmas a bal kamra működésének megítélésére is. Segítségével nem csak
        a bal kamra működése vizsgálható meg, hanem a szívburokban lévő
        folyadék, a szívben lévő tumorok, thrombusok vagy egyéb elváltozások is
        kimutathatók.
      </p>

      <h4>ABPM (24 órás vérnyomásmérés)</h4>
      <p>
        A 24 órás vérnyomásmérés (ABPM) során a páciens kap egy készüléket, ami
        egy teljes napon át, bizonyos időközönként automatikusan méri és rögzíti
        a vér erek falára gyakorolt nyomását. A mérések alatt a páciens a napi
        megszokott tevékenységeit folytathatja. Az orvos kérheti, hogy az ABPM
        vizsgálat ideje alatt vezessen eseménynaplót, amibe azt kell beírnia,
        hogy a vizsgálat 24 órája alatt mikor érte nagyobb stressz, mikor volt
        bármilyen panasza, mikor végzett megterhelő fizikai munkát.
      </p>

      <h4>Holter (24 órás EKG vizsgálat)</h4>
      <p>
        A Holter készülék egy kisrádióhoz hasonló doboz, mely a szívből érkező
        elektromos jeleket rögzíti. A beteg mellkasára a megfelelő helyekre
        egyszer használatos öntapadós elektródát rögzítenek, amihez a vezetékek
        kapcsolódnak. Férfiaknál, ha szükséges a pontos mérés érdekében a
        tappancsok helyén a szőrt leborotválják. A készüléket egy nyakba vagy
        derékövre akasztható hordozható tokban kell viselni és 24 órán keresztül
        nem szabad levenni, valamint víz sem érheti.
      </p>
    </div>
  )
}

export default Cardiology
