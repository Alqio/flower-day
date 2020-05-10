import React from 'react';
import logo from './flower1.png';
import flower2 from './kukka3.jpg';
import cs1 from './cs1.jpg';
import './App.css';
import './App.sass';


function App() {
    return (
        <div className="App">

            <img src={logo} className="App-logo" alt="logo"/>

            <section className="section is-medium">
                <div className="container app-info">
                    <h1 className="title">Kukanpäivän viesti</h1>
                    <p>Arvon opetusministeri Li Andersson,</p>

                    <p>Elämme poikkeuksellisia aikoja, mutta jotkin asiat maailmassa pysyvät ennallaan: kevät on jo
                        pitkällä ja kesä kohta kulman takana. Luonto on herännyt eloon ja valkovuokot kukkivat, onhan
                        nyt Floran päivä. On aika tuoda kotokulmiltamme Otaniemestä perinteinen Kukanpäivän viesti.
                    </p>

                    <p>Koronakevät on vaatinut kaikilta meiltä joustavuutta ja paineensietokykyä. Arkielämä on kokenut
                        sellaisia muutoksia, joita kukaan ei olisi vuoden alussa osannut odottaa. Opiskelu kaikilla
                        asteilla on myös siirtynyt etäympäristöön, ja niin korkeakouluopiskelijat kuin
                        peruskoululaisetkin ovat saaneet mukautua uusiin oppimisympäristöihin.
                    </p>

                    <p>
                        Opettajat ovat tehneet ensiarvoisen tärkeää työtä haastavissa olosuhteissa, jotta jokainen
                        koululainen pystyisi pandemiasta huolimatta jatkamaan kouluvuottaan mahdollisimman normaalisti.
                        He ansaitsevat siitä kiitoksen. Toimivan ja yhdenvertaisen koulutusjärjestelmän tärkeys on
                        korostunut kevään aikana, kun kouluun ei ole fyysisesti ollut mahdollista mennä.
                    </p>

                    <p>
                        Suomen ainoa keino pärjätä globaalissa maailmassa on osaava kansa. Koulutus on yksi loistava
                        keino tasata eriarvoisuutta ja antaa jokaiselle suomalaiselle eväät elämässä onnistumiseen
                        lähtökohdista riippumatta. Koulutuksen tärkeyden pitäisi näkyä riittävinä resursseina.
                    </p>

                    <p>
                        AYY lupaa tehdä voitavansa sen eteen, että korkeakouluun hakiessa portit olisivat auki
                        jokaiselle taustasta riippumatta. Tiedämme, että parhaiten eroja tasataan jo aiemmin
                        varhaiskasvatuksessa, peruskoulussa ja toisella asteella. Opettajien tekemä työ on paras tapa
                        antaa riittävät valmiudet ja yhdenvertaiset mahdollisuudet korkeakouluopintoihin hakeutumiseen,
                        ja siksi olemme kiitollisia siitä työstä, mitä oppilaitoksissa tehdään päivittäin.
                    </p>

                    <p>
                        Toivottavasti syksyllä pandemia on jo rauhoittunut ja uusi lukuvuosi päästään aloittamaan
                        normaaliin tapaan. Tiedämme kuitenkin, että pärjäämme tilanteesta riippumatta. Otaniemikin ottaa
                        ilolla vastaan uudet opiskelijat elokuun lopussa.
                    </p>
                    <br/>
                    <p>Teekkarikylässä</p>
                    <p>Kukanpäivänä 2020</p>
                </div>

            </section>

            <section className="section">
                <div className="container">
                    <figure className="image is-128x128">
                        <img src={flower2}/>
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
