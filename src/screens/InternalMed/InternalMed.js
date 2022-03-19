import { useEffect } from 'react'
import classes from './InternalMed.module.css'
// import internalMed from '../../assets/imgs/internalMed.jpg'
import { GiRotaryPhone } from 'react-icons/gi'
import {Link} from 'react-router-dom'

const InternalMed = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='wrapper'>
      <h1 className='title'>Belgyógyászat</h1>
      <a className='telephone-link' href='tel:+40745329753'>
        <GiRotaryPhone className='icon' /> <span>0745 329 753</span>
      </a>
      <h4 className='doctor'><Link to='/orvosok/dr-rab-andrea'>Dr. Rab Andrea</Link></h4>

      <div className={classes['img-holder']}>
        {/*<img src={internalMed} alt='Dr. Rab Andrea' />*/}
      </div>
      <p>
        A belgyógyászat az orvostudomány egyik legszerteágazóbb szakterülete,
        amelyben a gyógyításon túl a megelőzés is egyre inkább előtérbe kerül. A
        belgyógyász elsősorban a belső szervek kóros elváltozásaival, a
        belgyógyászati betegségek kezelésével, diagnosztizálásával és
        megelőzésével foglalkozik.
      </p>

      <p className='question'>
        Milyen panaszokkal érdemes belgyógyászt felkeresni?
      </p>
      <p>
        A belgyógyászati szakrendeléseken az általános szűrések, kivizsgálások,
        akut és krónikus belgyógyászati panaszokkal egyaránt jelentkezhetnek. Az
        alábbi panaszok tartós fennállása esetén belgyógyász szakorvos
        felkeresése javasolt:
      </p>
      <ul>
        <li>hasi fájdalom, alhasi görcsök</li>
        <li>gyomorfájás, gyomorégés</li>
        <li>mellkasi fájdalom</li>
        <li>puffadás, állandó teltségérzet</li>
        <li>reflux</li>
        <li>bélgyulladás, bélfájdalom</li>
        <li>nehézlégzés</li>
        <li>felső- és alsó légúti panaszok</li>
        <li>fejfájás, szédülés</li>
        <li>hányásos, székrekedéses, hasmenéses panaszok</li>
        <li>étvágytalanság</li>
        <li>lázas állapotok</li>
      </ul>
      <p>
        A belgyógyász szakorvos a tünetek alapján, szükség esetén további
        szakorvosi vizsgálatokat rendelhet el a pontos diagnózis felállításának
        érdekében.
      </p>

      <h3 className='subtitle'>A belgyógyászati vizsgálat menete</h3>
      <p>
        A belgyógyászati vizsgálat a kórelőzmény felvételével kezdődik. A
        szakorvos kikérdezi a beteget a panasz jellegéről, hogy mióta áll fenn,
        van-e esetleg egyéb ismert betegsége, gyógyszerérzékenysége, allergiája,
        illetve előfordult-e szív- és érrendszeri, légzőszervi, vagy daganatos
        megbetegedés a családban.
      </p>
      <p>
        Ezt követően kerül sor a fizikális vizsgálatra, mely magában foglalja a
        vérnyomás, a pulzus, a testsúly, a testmagasság mérést és a testtömeg
        index meghatározását. A szakorvos először megtekinti a bőr, illetve a
        látható nyálkahártyák színét, ezután sztetoszkóp segítségével
        meghallgatja a szivet és a tüdőt, majd kézzel áttapintja a pajzsmirigyet
        és a nyirokcsomókat és ellenőrzi a hasi szervek (máj, lép) állapotát.
      </p>

      <p>
        A fizikális vizsgálatok eredménye alapján meghatározza a kivizsgálás
        további menetét, a szükséges vizsgálatokat a diagnózis felállításához.
        Elrendelhet labor vizsgálatot, ultrahang vizsgálatot, képalkotó
        diagnosztikai vizsgálatokat, EKG-t, illetve egyéb kapcsolódó szakorvosi
        vizsgálatokat is. Belgyógyászati szakrendelést szűrő jellegű
        állapotfelmérés céljából panaszmentesen is érdemes egy-két évente
        felkeresni.
      </p>
    </div>
  )
}

export default InternalMed
