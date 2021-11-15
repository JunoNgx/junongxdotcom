<!-- {@debug isExpanded} -->

<script>
    import { URL } from './URL.js';
    import NAL from './NavbarAnchorLink.svelte'
    let isExpanded = false;
</script>

<nav class="navbar">
    <div class={"navbar__control"} class:navbar__control--expanded={isExpanded} on:click={() => {isExpanded = !isExpanded}}>
        <p class={"navbar__control__label"} class:navbar__control__label--expanded={isExpanded}>My contacts</p>
        <div class={"navbar__control__icon"} class:navbar__control__icon--expanded={isExpanded}/>
    </div>
    <div class="navbar__content" class:navbar__content--expanded={isExpanded}>
        <ul class="navbar__content__contacts">
            <li class="navbar__content__contacts__item"><NAL link={URL.twitter}>Twitter</NAL></li>
            <li class="navbar__content__contacts__item"><NAL link={URL.github}>GitHub</NAL></li>
            <li class="navbar__content__contacts__item"><NAL link={URL.itchio}>Itch.io</NAL></li>
            <li class="navbar__content__contacts__item"><NAL link={URL.flickr}>Flickr</NAL></li>
            <li class="navbar__content__contacts__item"><NAL link={URL.instagram}>Instagram</NAL></li>
            <li class="navbar__content__contacts__item"><NAL link={URL.email}>Email</NAL></li>
            <li class="navbar__content__contacts__item"><NAL link={URL.linkedin}>LinkedIn</NAL></li>
        </ul>
        <p class="navbar__content__contacts__close" on:click={()=>{isExpanded = false}}>
            ╳
        </p>
    </div>
</nav>

<style lang="scss">
    // Using BEM naming convention

    @use '../styles/vars.scss';

    .navbar {
        &__control{
            z-index: 1;
            position: fixed;
            right: 1rem;
            top: 1rem;
            cursor: pointer;
            background-color: vars.$hyperlink-col;
            height: vars.$navbar-height;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            &__label {
                margin-right: 0.8em;
                font-size: 1.2rem;
                color: vars.$bac-col;
    
                transition: font-size vars.$trans-time;
                &--expanded {
                    font-size: 2rem;
                }
            }
            &__icon {
                margin-right: 1rem;
                height: vars.$navbar-icon-size;
                width: vars.$navbar-icon-size;
                border-right: solid 5px vars.$bac-col;
                border-bottom: solid 5px vars.$bac-col;
                transform: rotate(45deg);
                transform-origin: 100% 100%;
    
                transition: transform vars.$trans-time, transform-origin vars.$trans-time;
                &--expanded {
                    transform-origin: 65% 65%;
                    transform: rotate(225deg);
                }
            }
        }
        &__content {
            position: fixed;
            right: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;
            margin-top: 30%;
            background-color: vars.$hyperlink-col;
            clip-path: circle(0px at 90% 5%);
    
            transition: clip-path vars.$trans-time;        
            &--expanded {
                clip-path: circle(150vh at 90% 5%);
            }
    
            &__contacts {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                &__item {
                    text-align: right;
                    border-bottom: 2px solid vars.$bac-col;
                    font-size: 2rem;
                    margin: 0.3rem 3rem;
                    list-style: none;
                }
                &__close {
                    color: vars.$bac-col;
                    font-size: 2rem;
                    cursor: pointer;
                    color: vars.$bac-col;
                    margin: 5% 3rem 5% 0;
                    border: none;
                }
            }
        }
        @media screen and (min-width: vars.$breakpoint) {
            margin-right: 1rem;
            &__control{
                display: none;
            }
            &__content {
                position: sticky;
                margin: 0 0 0 0;
                right: auto;
                top: 4.5rem;
                bottom: auto;
                height: auto;
                width: 240px;
                background-color: transparent;
                clip-path: none;
    
                &__contacts {
                    padding: 0;
                    border-right: 10px solid vars.$pri-col;
                    &__item {
                        margin-right: 1rem;    
                        border-bottom: none;
                    }
                    &__close {
                        display: none;
                    }
                }
            }
        }
    }
</style>