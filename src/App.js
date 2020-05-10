import React from 'react';
import logo from './kjlogo.png';
import flower2 from './kukka3.jpg';
import cs1 from './cs1.jpg';
import './App.css';
import './App.sass';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Flower Day 13.5.</h1>
            </header>
            <div className="App-info">
                <img src={logo} className="App-logo" alt="logo"/>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare id quam sed posuere.
                    Vestibulum posuere dignissim nisl, non egestas augue finibus ut. Pellentesque ut sagittis nisi.
                    Integer malesuada blandit ligula, sit amet pretium neque sollicitudin nec. Praesent pulvinar
                    odio nec tristique egestas. Nulla facilisi. Ut non aliquam sapien, id rutrum quam. In interdum
                    cursus erat. Cras in eros urna. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer ultrices quam vel laoreet ultricies. Donec
                    consectetur tristique eros. Suspendisse in posuere nibh. Nulla pretium urna nec massa porta
                    mollis. Phasellus id orci ullamcorper, scelerisque elit et, porttitor eros. </p>
                <img className="flower2" src={flower2}/>
                <p> Maecenas ultrices semper cursus. Vivamus nec lacus luctus, ullamcorper eros maximus, ullamcorper
                    dui. Maecenas consequat eros a molestie convallis. In hac habitasse platea dictumst. Morbi
                    tempor, nunc ut ullamcorper dignissim, tortor tortor maximus libero, ut dapibus tortor diam
                    pretium ligula. Sed pretium justo ut lectus rhoncus varius. Nunc dictum leo purus, in euismod
                    dui ullamcorper eu. Suspendisse mattis felis et sollicitudin gravida. Etiam nulla tortor,
                    faucibus sit amet massa sed, euismod imperdiet leo. Nunc egestas leo massa, sit amet ullamcorper
                    nulla iaculis at. </p>
                <p> Pellentesque sit amet enim sed arcu hendrerit placerat. Nunc condimentum condimentum libero, vitae
                    aliquet augue blandit nec. Morbi eleifend, urna id sollicitudin viverra, nisl odio pellentesque
                    felis, non tristique ligula tellus at felis. Proin facilisis neque mi, vel placerat nisl dictum in.
                    Mauris cursus a purus sit amet malesuada. Cras lectus sem, dictum at quam ac, pulvinar convallis
                    est. Nam volutpat ex sed maximus laoreet. Maecenas aliquam erat nec finibus tristique. Cras cursus,
                    libero id mollis semper, erat eros ultricies nunc, ac scelerisque velit elit at odio. Quisque vel
                    sem eros. Mauris ornare gravida laoreet. Curabitur id elit porttitor, sollicitudin velit eget,
                    commodo orci. Suspendisse semper, sapien finibus pellentesque aliquam, magna urna eleifend tellus,
                    eu sagittis sem dolor vel lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. </p>

                <img className="cs1" src={cs1}/>
                <p> Suspendisse potenti. Vestibulum in ullamcorper sapien. Donec pulvinar mi non lacinia finibus. Nullam
                    tincidunt, ante quis pharetra dignissim, magna nulla viverra sem, eget dapibus neque mi quis felis.
                    In nec commodo orci, eget commodo ante. Quisque nec libero urna. Nulla euismod placerat tellus, at
                    tincidunt felis porta sit amet. Vivamus hendrerit, quam sit amet pulvinar sagittis, sem velit
                    gravida odio, a eleifend orci velit at nibh. Quisque non mi lacus. Mauris pretium erat et nulla
                    imperdiet, et cursus justo aliquet. Integer ultricies ipsum vitae neque interdum vulputate non non
                    massa. Phasellus et tellus tortor. Nulla in tortor velit. </p>

                


            </div>

        </div>

    );
}

export default App;
