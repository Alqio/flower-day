import React from 'react';
import logo from './flower1.png';
import flower2 from './kukka3.jpg';
import seppele from './seppele.jpg';
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
                        turvavälit muistaen), sillä
                        Kampusjaosto piilottaa Teekkarikylän ympäristöön aarteita, joita löytämällä voit voittaa
                        palkintoja. Samalla voit oppia lisää kylän historiasta. Päivän aikana on luvassa myös muita
                        haasteita ja tehtäviä, joiden avulla voit virittäytyä juhlatunnelmaan! </p>
                    <br/>
                    <p className="is-size-5">Perinteinen Kukanpäivän viesti on luettavissa alla!</p>
                    <br/>
                    <a className="is-size-5" href="https://www.facebook.com/events/906516156542402/">Facebook</a>
                </div>
            </section>

            <section className="section">
                <div className="container app-info">
                    <h1 className="title">Kukanpäivän viesti</h1>
                    <p className="is-size-5">Arvon opetusministeri Li Andersson,</p>

                    <p className="is-size-5">Elämme poikkeuksellisia aikoja, mutta jotkin asiat maailmassa pysyvät
                        ennallaan: kevät on jo
                        pitkällä ja kesä kohta kulman takana. Luonto on herännyt eloon ja valkovuokot kukkivat, onhan
                        nyt Floran päivä. On aika tuoda kotokulmiltamme Otaniemestä perinteinen Kukanpäivän viesti.
                    </p>
                    <br/>
                    <p className="is-size-5">Koronakevät on vaatinut kaikilta meiltä joustavuutta ja paineensietokykyä.
                        Arkielämä on kokenut
                        sellaisia muutoksia, joita kukaan ei olisi vuoden alussa osannut odottaa. Opiskelu kaikilla
                        asteilla on myös siirtynyt etäympäristöön, ja niin korkeakouluopiskelijat kuin
                        peruskoululaisetkin ovat saaneet mukautua uusiin oppimisympäristöihin.
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
                        Suomen ainoa keino pärjätä globaalissa maailmassa on osaava kansa. Koulutus on yksi loistava
                        keino tasata eriarvoisuutta ja antaa jokaiselle suomalaiselle eväät elämässä onnistumiseen
                        lähtökohdista riippumatta. Koulutuksen tärkeyden pitäisi näkyä riittävinä resursseina.
                    </p>
                    <br/>
                    <p className="is-size-5">
                        AYY lupaa tehdä voitavansa sen eteen, että korkeakouluun hakiessa portit olisivat auki
                        jokaiselle taustasta riippumatta. Tiedämme, että parhaiten eroja tasataan jo aiemmin
                        varhaiskasvatuksessa, peruskoulussa ja toisella asteella. Opettajien tekemä työ on paras tapa
                        antaa riittävät valmiudet ja yhdenvertaiset mahdollisuudet korkeakouluopintoihin hakeutumiseen,
                        ja siksi olemme kiitollisia siitä työstä, mitä oppilaitoksissa tehdään päivittäin.
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
                        kevään merkki. Muutettuaan
                        teekkarikylään opiskelijat eivät kuitenkaan halunneet luopua yhteyksistä kantakaupunkiin, vaan
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
                        tai maanpuolustukseen. Viestiä vastaanottamassa on ollut muun muassa tasavallan presidentti,
                        useita ministereitä, kansanedustajia sekä yhteiskunnan vaikuttajia, mutta myös espoolaisia
                        arkkitehteja sekä metron räjäytysinsinööri. Lisäksi viestillä kohennetaan teekkareiden
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
                    <figure className="image is-128x128 ">
                        <img className="is-rounded" src={flower2}/>
                    </figure>
                    <p>2018 nautittiin aurinkoisesta säästä</p>

                    <figure className="image is-128x128">
                        <img src={seppele}/>
                    </figure>
                    <p>2019 askarreltiin kukkaseppeleitä</p>

                    <figure className="image is-512x512 ">
                        <iframe src="https://elonet.finna.fi/7bccf94d-0b4a-45cf-87e7-1ccf27aba5d4">testi</iframe>
                    </figure>


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
