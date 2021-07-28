<script>
    import Navbar from './components/Navbar.svelte';
    import CA from './components/CustomAnchor.svelte';
    import FadeInComp from './components/FadeInComponent.svelte';
    import { URL, URL_EM } from './components/URL.js';
</script>

<main>
	<div class="page">
        <Navbar/>
        <div class="page--content">

            <!-- Decorator -->
            <!-- Only displayed as visual fillers in the mobile layout -->
            <section class="decorator">
                <div class="decorator__child"/>
                <div class="decorator__child"/>
                <div class="decorator__child"/>
                <div class="decorator__child"/>
            </section>

            <!-- Banner -->
            <FadeInComp isOnceOnly={true}>
                <section class="section section--banner">
                    <h1 class="section__brand">Hi, I'm Juno Nguyen.</h1>
                    <p>(he/him)</p>
                    <p>I am a software developer based in Singapore, best known as the creator of the website <CA link={URL.ebonymemo}>Ebony Memo</CA> and the independent videogame developer <CA link={URL.itchio}>manafarm</CA>.</p>
                    
                    <p>I am a generalist, having worked on videogames, full-stack web applications, command line tools, and still exploring. Most of my works are free, open source, and can be found on <CA link={URL.github}>my GitHub</CA>. Major projects are listed below.</p>
                </section>
            </FadeInComp>

            <!-- EbonyMemo -->
            <FadeInComp isOnceOnly={true} intersectingThreshold={0.4}>
                <section class="section section--ebonymemo">
                    <h2 class="section__header">Ebony Memo</h2>
                    <p><CA link={URL_EM.frontend_deployment}>Ebony Memo</CA> is an arthouse videogame curator website for mobile devices. This is a custom content management system built with MERN stack, consisting of three parts:</p>
                    <p><strong>Backend</strong> (NodeJS/Express, <CA link={URL_EM.backend_source}>source</CA>, <CA link={URL_EM.backend_deployment}>deployment</CA>): A serverless RESTful API handling CRUD operations and authorisations for data modification. The database is stored on MongoDB Atlas.</p>
                    <p><strong>Content management application</strong> (ReactJS, <CA link={URL_EM.cma_source}>source</CA>, <CA link={URL_EM.cma_deployment}>deployment</CA>): A simple web application used by contributors to create and edit content. While most of the content is not locked behind credentials and authorisations, data-modifying actions are. Due to its purpose, it is not optimized for mobile or SEO.</p>
                    <p><strong>Frontend</strong> (NextJS, <CA link={URL_EM.frontend_source}>source</CA>, <CA link={URL_EM.frontend_deployment}>deployment</CA>): The only publicised user-facing portion of the system. The vast majority of the content is server-side rendered and heavily optimized for SEO.</p>
                </section>
            </FadeInComp>

            <!-- LatestGame -->
            <FadeInComp isOnceOnly={true} intersectingThreshold={0.4}>
                <section class="section section--wonyun">
                    <h2 class="section__header">Wonyun Trench Run</h2>
                    <img class="section__img section__img--pixel" src="/images/wonyun_5.gif" alt="Wonyun Trench Run screenshot"/>
                    <p>My latest major videogame release, launched in June 2020, is my first dive into videogame software architecture. Implementing the <strong>entity-component-system</strong> pattern, the game is extremely scalable and flexible, and adding new features is a breeze. The minimalistic nature and limitations of <strong>Pico8</strong> (which uses a highly limited subset of Lua) made it an interesting challenge, both technically and artistically.</p>
                    <p><CA link="https://github.com/JunoNgx/p8wonyun">View the source</CA>/<CA link="https://junongx.itch.io/wonyun-trench-run">Play the game</CA>.</p>
                </section>
            </FadeInComp>

            <!-- CrispGameLib -->
            <FadeInComp isOnceOnly={true} intersectingThreshold={0.2}>
                <section class="section section--crisp-game-lib">
                    <h2 class="section__header">CrispGameLib Collection</h2>
                    <img class="section__img section__img--pixel" src="images/CrispGameLib_Blitzed.gif" alt="Juno Nguyen's game Blitzed"/>
                    <p>I have been a long time admirer of <CA link="https://twitter.com/abagames">Kenta Cho</CA>, and using his tools to make games was one of  my ever-procrastinated projects. <CA link="https://github.com/abagames/crisp-game-lib">CrispGameLib</CA>, one of his many quirky and idiosyncratic libraries, is his most accessible and best documented work yet.</p>
                    <p>Easily one of my best development experiences ever, with CrispGameLib, I have been making web games at a rapid pace and building up a collection. I have also been actively contributing to the library and written a long and detailed <CA link="https://github.com/JunoNgx/crisp-game-lib-tutorial">tutorial</CA>.</p>
                    <p><CA link="https://github.com/JunoNgx/crips-game-lib-collection">GitHub repository</CA>/<CA link="https://junongx.itch.io/crisp-webgame-collection">Itch.io page</CA>.</p>
                </section>
            </FadeInComp>

            <!-- Gamedev -->
            <FadeInComp isOnceOnly={true} intersectingThreshold={0.4}>
                <section class="section section--gamedev">
                    <h2 class="section__header">manafarm</h2>
                    <img class="section__img" src="/images/manafarm_black_512.png" alt="manafarm logo"/>
                    <p>Growing up with a Nintendo Famicom, I have always been a videogame enthusiast, and videogame is my medium of choice for creative expression.</p>
                    <p>I have been a hobbyist videogame developer since 2013, under the moniker <em>Aureoline Tetrahedron</em>, making a wide range of videogames in different frameworks and engines (in chronological order: <CA link="https://www.construct.net/">Construct</CA>, <CA link="http://phaser.io/">Phaser</CA>, <CA link="https://love2d.org/">love2d</CA>, <CA link="https://haxeflixel.com/">HaxeFlixel</CA>, <CA link="https://luxeengine.com/">Luxe</CA>, <CA link="https://unity.com/">Unity</CA> and <CA link="https://www.lexaloffle.com/pico-8.php">Pico8</CA>) on different platforms. The <em>manafarm</em> rebranding was made in 2019, after several years of hiatus.</p>
        
                    <p>My major releases can be found on my <CA link={URL.itchio}>Itch.io page</CA>.</p>
                </section>
            </FadeInComp>

            <!-- Other projects -->
            <FadeInComp isOnceOnly={true} intersectingThreshold={0.05}>
                <section class="section section--misc">
                    <h2 class="section__header">Other projects</h2>
                    <p>These are other small and miscellaneous projects that do not warrant their own sections, but are listed here nevertheless for completeness.</p>

                    <!-- Working memory test -->
                    <h3 class="section__subheader">Working Memory Test</h3>
                    <img class="section__img" src="/images/WorkingMemoryTestTrailer.gif" alt="demonstration of the application Working Memory Test"/>
                    <p class="section__subsubtitle">[ReactJS, October 2020]</p>
                    <p>During my study at Murdoch University, my team was tasked with a research project related to human working memory. At the height of the pandemic, performing an in-person experiment was out of the question and the work was naturally brought to the web. As the only person with software developement experience in the team, I created the bulk of the application with <strong>ReactJS</strong> and <strong>SASS</strong> over a weekend (minor refactor and bugfixes were done in the following week) as the primary research instrument. The work was well-received by the project supervisor as well as participants.</p>
                    <p><CA link="https://github.com/JunoNgx/working-memory-test">GitHub repository</CA>/<CA link="https://workingmemorytest.netlify.app/">Deployment</CA></p>

                    <hr>

                    <!-- Pura -->
                    <h3 class="section__subheader">Pura</h3>
                    <img class="section__img" src="/images/PuraTrailer.gif" alt="demonstration of the Flutter application Pura"/>
                    <p class="section__subsubtitle">[Flutter, April 2020]</p>
                    <p>As one of my earliest dabbles into mobile app development, <strong>Pura</strong> was created with both technical curiosity and personal needs in mind (the existing apps were riddled with ads). The development process provided insights into both the anatomy of an app, as well as the inner working of Google's <strong>Flutter</strong>, a promising up-and-coming multi-platform framework.</p>
                    <p><CA link="https://github.com/JunoNgx/flutter-pura">GitHub repository</CA>/<CA link="https://play.google.com/store/apps/details?id=com.junongx.wallpaper">Google Play Store listing</CA></p>

                    <hr>

                    <!-- Lutro Mega Input Library -->
                    <h3 class="section__subheader">Lutro Mega Input Library</h3>
                    <p class="section__subsubtitle">[Lua, December 2020]</p>
                    <p>Working with <CA link="https://piepacker.com/">Piepacker</CA> on game development provided me with an opportunity to dive deep into some interesting aspects of retro gaming. One of the tools we used were <CA link="https://github.com/piepacker/lutro">Lutro</CA>, a port of love2d API to <CA link="https://www.libretro.com/">libretro</CA>. The input API proved unrobust and lacking in some scenario, and it was natural that a new input library was created to cover its shortcomings. The library was published, maintained, documented separately on my own account (published under MIT license), with generic usage and long-term high reusability for multiple games in mind.</p>
                    <p><CA link="https://github.com/JunoNgx/LutroMegaInput">GitHub repository</CA></p>

                    <hr>

                    <!-- moon2p8-py -->
                    <h3 class="section__subheader">Moon2P8</h3>
                    <p class="section__subsubtitle">[Python, June 2020]</p>
                    <p>After shipping <strong>Wonyun Trench Run</strong>, I started experimenting with other possible development workflows for pico-8. One of the obvious choices was <CA link="https://moonscript.org/">moonscript</CA>, which compiled to lua. <strong>Moon2P8</strong> was written in Python as a command-line tool to simplify and automate the compiling and injecting process, while retaining other pico-8 cartridge data, to improve the workflow of pico-8 developers who would like to use moonscript as the language of choice.</p>
                    <p><CA link="https://github.com/JunoNgx/moon2p8-py">GitHub repository</CA></p>

                </section>
            </FadeInComp>

            <!-- Others -->
            <FadeInComp isOnceOnly={true} intersectingThreshold={0.05}>
                <section class="section section--others">
                    <h2 class="section__header">Other works</h2>
                    <p>While not programming or playing videogames, you will find me brushing my cat, enjoying arthouse cinema flicks, taking photographs, composing new Lego models on Stud.io, watching professional StarCraft, dissecting film screenplays, covering Damien Rice's songs on my guitar, or soldering a new mechanical keyboard build.</p>
                    <h3 class="section__subheader">Photography</h3>
                    <img class="section__img" src="/images/pavilion.jpg" alt="Singapore Bayfront Pavillion"/>
                    <p>A rare creative hobby in which I enjoy the process more than more outcome. I shoot exclusively with vintage manual focus lenses and Fujifilm mechanical-inspired bodies (and occasionally dabble into film photography). I think sceneries and stills in portrait mode are highly underrated.</p>
                    <p><CA link={URL.flickr}>My Flickr page</CA> is a relatively incomplete compilation of my works (as a result of my old habit of not sharing), but is undergoing frequent updates.</p>
                    <h3 class="section__subheader">Lego StarCraft</h3>
                    <img class="section__img" src="/images/taccom.jpg" alt="StarCraft Goliath microscale"/>
                    <p>Having been a lifelong admirer of StarCraft from a game designer's perspective, I have been in and out of the game in peculiar ways. Not until my mid-20s had I realised the creative potential and elegance in tiny Lego models of 30 pieces. My tiny curiosity crept into a relatively big project (and still ongoing) that you can find on <CA link="https://www.flickr.com/photos/junongx/albums/72157715396303363">my Flickr</CA>.</p>
                    <p></p>
                    <h3 class="section__subheader">Mechanical keyboards</h3>
                    <img class="section__img" src="/images/keebs_in_film.jpg" alt="Ortholinear 40% mechanical keyboards shot with film photography"/>
                    <p>Started off as a utilitarian need to improve my sitting posture; this, turned out to me, was an art form of itself. Among keycaps profiles, strange layouts, switch lubrication, the dangerous rabbit hole of artisans, and how an electric circuit works, mechanical keyboards offer a fascinating and endless world of self-expression.</p>
                    <p><CA link="https://github.com/qmk/qmk_firmware/tree/master/layouts/community/ortho_4x12/junonum">My personalised keymap, "junonum"</CA>, having undergone years of updates and optimisation, has been contributed to QMK Firmware as a universal 4x12 ortholinear keymap.</p>
                </section>
            </FadeInComp>

            <!-- CallToAction -->
            <section class="section section--contact-me">
                <div class="section--contact-me__content">
                    <p>Would you like to say hello?</p>
                </div>
            </section>

            <!-- Footer -->
            <footer class="footer">
                <p>made with <CA link="https://svelte.dev/">Svelte</CA> and <CA link="https://sass-lang.com/">SASS</CA></p>
                <p>uncopyrighted and <CA link="https://github.com/JunoNgx/junongxdotcom">open source</CA></p>
            </footer>
        </div>
    </div>
</main>

<style lang="scss">
    @import './styles/global.scss';

    :global(body) {
        color: $pri-col;
        background-color: $bac-col;
        font-family: Jost, serif;
        max-width: 768px;
        margin: auto;
        margin-top: 2rem;
        @media screen and (min-width: $breakpoint) {
            margin-top: 4rem;
        }
    }

    .page {
        &--content {
            max-width: 550px;
        }
    }

    .decorator {
        width: 72px;
        margin: 1rem 0 3rem 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2px;

        &__child {
            margin: 0;
            width: 32px;
            height: 32px;
            border: 2px solid $pri-col;
        }
        @media screen and (min-width: $breakpoint) {
            display: none;
        }
    }

    .section {
        margin: 1rem 1rem 5rem 1rem;
        padding: 1rem;
        p {
            hyphens: auto;
            line-height: 1.5;
            font-size: $font-size;
            margin: 1rem 0 0 0;
        }

        &__brand {
            font-size: 2rem;
            margin: 0;
        }
        &__header {
            font-size: 2rem;
            margin: 0 0 1rem 0;
        }
        &__subheader {
            font-size: 1.5rem;
            margin-top: 2em;
        }
        &__img {
            display: block;
            width: 100%;
            margin: auto;
            &--pixel {
                image-rendering: pixelated;
            }
        }
        &__subsubtitle {
            font-style: italic;
        }

        &--banner {
            // border-bottom: solid 2px $pri-col;
            padding-bottom: 2rem;
        }
        &--contact-me {
            border: none;
            margin: auto;
            text-align: center;
            max-width: 360px;
            padding: 0;
            p {
                margin: 0;
            }
            &__content {
                @include std-border;
                margin: 1rem;
                padding: 1rem 1.5rem;
                &:after {
                    content: "My contacts are above on top ↑";
                    font-size: $font-size;
                }
            }
        }

        @media screen and (min-width: $breakpoint) {
            @include std-border;
            margin: 1rem 1rem 5rem 1rem;
            padding: 2rem;

            &__brand {
                font-size: 2.5rem;
                margin: 0;
            }
            &--contact-me {
                &__content {
                    &:after {
                        content: "My contacts are on the right →";
                    }
                }
            }

            &--banner {
                @include col-sha-trans($pri-col);
            }
            &--ebonymemo {
                @include col-sha-trans($pri-col);
            }
            &--wonyun {
                @include col-sha-trans($pri-col);
            }
            &--crisp-game-lib {
                @include col-sha-trans($pri-col);
            }
            &--gamedev {
                @include col-sha-trans($pri-col);
            }
            &--misc {
                @include col-sha-trans($pri-col);
            }
            &--others {
                @include col-sha-trans($pri-col);
            }

            &--contact-me {
                border: none;
                margin: auto;
            }

        }
    }

    .footer {
        font-size: $font-size;
        margin: 5rem auto 1rem auto;
        text-align: center;
        p {
            margin: 0;
        }
    }
</style>