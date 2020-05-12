import React from 'react';
import logo from './flower1.png';

import seppele from './seppele.jpg';
import kanootti from './kanootti.jpg';
import koivisto from './koivisto.png';
import ossi from './ossi.png';
import viesti from './TKY280_viesti.jpg'
import tky from './TKY_kukanpaiva_1981.jpg'

import './App.css';
import './App.sass';


const App = () => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>

            <section className="section ">
                <div className="container">
                    <h1 className="title">Kukanpäivä 2020</h1>
                    <p className="is-size-5">Tänä vuonna nautimme juhlahumusta kevätsäässä ulkoillen (tietysti
                        turvavälit muistaen), sillä Kampusjaosto kutsuu kaikki mukaan Otaketun aarrejahtiin
                        Teekkarikylän ympäristössä - osallistumalla voit voittaa palkintoja, ja samalla voit oppia lisää
                        kylän historiasta. </p>
                    <br/>
                    <p className="is-size-5">Perinteinen Kukanpäivän viesti on luettavissa alla.</p>
                    <br/>
                    <a className="is-size-5" href="https://www.facebook.com/events/906516156542402/">Facebook</a>
                </div>
            </section>

            <section className="section">
                <div className="container app-info">
                    <h1 className="title">Kukanpäivän viesti</h1>
                    <p className="is-size-5">{/*Arvon opetusministeri Li Andersson,*/}</p>

                    <p className="is-size-5">Elämme poikkeuksellisia aikoja, mutta jotkin asiat maailmassa pysyvät
                        ennallaan: kevät on jo pitkällä ja kesä kohta kulman takana. Luonto on herännyt eloon ja
                        valkovuokot kukkivat, onhan nyt Flooran päivä. On aika tuoda kotokulmiltamme Otaniemestä
                        perinteinen Kukanpäivän viesti.
                    </p>
                    <br/>
                    <p className="is-size-5">Coronavåren har krävt flexibilitet och stresstålighet från oss alla.
                        Vardagen har genomgått förändringar som ingen i början av året kunde ha förväntat sig. Studier
                        på alla nivåer har också skiftat till en distansmiljö, och både universitetsstudenter och
                        grundskoleelever har anpassa sig till nya inlärningsmiljöer.
                    </p>
                    <br/>
                    <p className="is-size-5">
                        Opettajat ovat tehneet ensiarvoisen tärkeää työtä haastavissa olosuhteissa, jotta jokainen
                        koululainen pystyisi pandemiasta huolimatta jatkamaan kouluvuottaan mahdollisimman normaalisti.
                        He ansaitsevat siitä kiitoksen. Toimivan ja yhdenvertaisen koulutusjärjestelmän tärkeys on
                        korostunut kevään aikana, kun kouluun ei ole fyysisesti ollut mahdollista mennä.
                    </p>
                    <br/>
                    <p className="is-size-5">
                        The only way for Finland to thrive in a global world is to have competent citizens. Free
                        education is an excellent way to improve equality and provide an opportunity for one to succeed
                        in life regardless of their starting point. The importance of education should manifest as
                        sufficient resources.
                    </p>
                    <br/>
                    <p className="is-size-5">
                        Aalto-yliopiston ylioppilaskunta AYY lupaa tehdä voitavansa sen eteen, että korkeakouluun
                        hakiessa portit olisivat auki jokaiselle taustasta riippumatta. Tiedämme, että parhaiten eroja
                        tasataan jo aiemmin varhaiskasvatuksessa, peruskoulussa ja toisella asteella. Opettajien tekemä
                        työ on tehokkain tapa antaa riittävät valmiudet ja yhdenvertaiset mahdollisuudet
                        korkeakouluopintoihin hakeutumiseen, ja siksi olemme kiitollisia siitä työstä, mitä
                        oppilaitoksissa tehdään päivittäin.
                    </p>
                    <br/>
                    <p className="is-size-5">
                        Toivottavasti syksyllä pandemia on jo rauhoittunut ja uusi lukuvuosi päästään aloittamaan
                        normaaliin tapaan. Tiedämme kuitenkin, että pärjäämme tilanteesta riippumatta. Otaniemikin ottaa
                        ilolla vastaan uudet opiskelijat elokuun lopussa.
                    </p>
                    <br/>
                    <p className="is-size-5">Teekkarikylässä</p>
                    <p className="is-size-5">Kukanpäivänä 2020</p>
                </div>

            </section>

            <section className="section">
                <div className="container">
                    <h1 className="title">Kukanpäivän perinteitä</h1>

                    <p className="is-size-5">Aalto-yliopiston piirissä Kukanpäivänä juhlitaan Teekkarikylän
                        syntymäpäivää ja juhlaa on
                        vietetty
                        Teekkarikylän perustamisesta asti. Viime vuosina Kukanpäivää on juhlittu rennossa
                        festarimuodossa Smökissä.</p>
                    <br/>

                    <p className="is-size-5">Kukanpäivän viesti on Aalto-yliopiston ylioppilaskunnassa perinteinen
                        kevään merkki.</p>
                    <p className="is-size-5">
                        Muutettuaan teekkarikylään 1950-luvulla, opiskelijat eivät halunneet luopua yhteyksistä
                        kantakaupunkiin, vaan
                        suhteita pyrittiin pitämään yllä esimerkiksi luovuttamalla keväinen tervehdys, <b>Kukanpäivän
                        viesti</b>, jollekin merkkihenkilölle tai päättäjälle. Ensimmäisen kukanpäivän viestin
                        vastaanotti 13.5.1956 satamakaupunkimme Helsingin silloinen ylipormestari Eero Rydman. Viestiä
                        vastaanottamassa on ollut muun muassa tasavallan presidentti, useita
                        ministereitä, kansanedustajia sekä yhteiskunnan vaikuttajia, mutta myös espoolaisia arkkitehteja
                        sekä metron räjäytysinsinööri.</p>
                    <br/>
                    <p className="is-size-5">Nykyään viestin tarkoituksena on kohdistaa päättäjien huomio opiskelijoiden
                        mielestä tärkeisiin
                        yhteiskunnallisiin aiheisiin, kuten koulutukseen, asumiseen, joukkoliikenteeseen, tutkimukseen,
                        tai maanpuolustukseen. Lisäksi viestillä kohennetaan opiskelijoiden
                        julkisuuskuvaa vappuriehan jälkeen.</p>
                    <br/>
                    <p className="is-size-5">Viesti kuljetettiin alunperin Otaniemestä meloen Hietalahden torille
                        rannassa odottavalle
                        vastaanottajalle. Myöhemmin viesti on toimitettu erinäisiin paikkoihin viestin vastaanottajasta
                        riippuen. Matka taitettiin kanadalaisilta lahjaksi saadulla kanootilla, joka on myöhemmin
                        korvattu uudemmalla kanootilla, joka löytyy Smökin akvaariosta. Viestiä lähdettiin kuljettamaan
                        viimeistään klo 07:00, jotta tuuli ei yltynyt liikaa.</p>
                    <br/>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h1 className="title">Kuvia vanhoista kukanpäivistä</h1>

                    <figure className="image is-128x128">
                        <img src={seppele}/>
                    </figure>
                    <p>2019 askarreltiin kukkaseppeleitä</p>

                    <figure className="image is-128x128 ">
                        <img className="is-rounded" src={kanootti}/>
                    </figure>
                    <p>Kukanpäivän viesti rantautuu kanootilla Otarantaan vuonna 2016 (kuva: OUBS)</p>

                    <figure className="image is-128x128 ">
                        <img className="is-rounded" src={koivisto}/>
                    </figure>
                    <p>Kukanpäivän viesti luovutetaan Rouva Tellervo Koivistolle Esplanadin lavalla vuonna 1982. (kuva: Montaasi)</p>

                    <figure className="image is-128x128 ">
                        <img className="is-rounded" src={tky}/>
                    </figure>
                    <p>Ulapalta otettu kuva vuodelta 1981 on Seurasaarenselältä. Taustalla näkyy Lauttasaaren vesitorni
                        (oikealla, purettu 2015) sekä Salmisaaren voimala- ja tehdasalue (vasemmalla). Keskellä näkyy
                        Lapinlahden silta eli Länsiväylä. (kuva: TKY:n kuva-arkisto, AYY:n arkisto)</p>

                    <figure className="image is-128x128 ">
                        <img className="is-rounded" src={ossi}/>
                    </figure>
                    <p>Ossi Törrönen suorittaa lähtölaskennan Teekkarikylän 25-vuotisjuhlien pamaukselle yhdessä kylässä
                        syntyneen teekkarin kanssa Kukanpäivänä 1978. (kuva: Montaasi)</p>

                    <figure className="image is-128x128 ">
                        <img className="is-rounded" src={viesti}/>
                    </figure>
                    <p>Kukanpäivän viestiä kuljettamassa. Kuva lienee Lyypekinlaiturilta Eeteläsatamasta vanhan
                        kauppahallin takaa. Tällöin taustalla näkyvät puut ovat Tähtitorninmäen puiston reunalla.
                        Kuvassa näkyvän miehen olan takana näkyvä kupoli on persoonallisesti suunnitellussa Eteläranta
                        6:ssa sijaitsevassa rakennuksessa. Kuva arviolta 1950- tai 1960-luvulta. (kuva: TKY:n
                        kuva-arkisto, AYY:n arkisto)</p>

                    <figure className="image is-512x512 ">
                        <a href="https://elonet.finna.fi/Record/kavi.elonet_elokuva_102579">
                            <img className="is-rounded"
                                 src="https://elonet.finna.fi/Cover/Show?id=kavi.elonet_elokuva_102579&index=0&size=large"/>
                        </a>
                    </figure>
                    <a href="https://elonet.finna.fi/Record/kavi.elonet_elokuva_102579">Otaniemi - tuleva tekniikan
                        kaupunki</a>
                    <p>Videodokumentti jossa materiaalia kukanpäivältä 1950, jolloin aloitettiin Teekkarikylän rakentaminen</p>


                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p className="footer-text">
                            Campus Section 2020
                        </p>
                    </div>
                </div>
            </footer>

        </div>

    );
}

export default App;
