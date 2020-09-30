<!-- {@debug isExpanded} -->

<script>
    import { URL } from './URL.js';
    let isExpanded = false;
</script>

<div class="navbar">
    <div class={"navbar__control"} class:navbar__control--expanded={isExpanded} on:click={() => {isExpanded = !isExpanded}}>
        <p class={"navbar__control__label"} class:navbar__control__label--expanded={isExpanded}>My contacts</p>
        <div class={"navbar__control__icon"} class:navbar__control__icon--expanded={isExpanded}/>
    </div>
    <div class="navbar__content" class:navbar__content--expanded={isExpanded}>
        <ul class="navbar__content__contacts">
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.twitter}>Twitter</a></li>
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.github}>GitHub</a></li>
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.itchio}>Itch.io</a></li>
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.flickr}>Flickr</a></li>
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.instagram}>Instagram</a></li>
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.email}>Email</a></li>
            <li class="navbar__content__contacts__item"><a rel="noopener" target="_blank" href={URL.linkedin}>LinkedIn</a></li>
        </ul>
        <p class="navbar__content__contacts__close" on:click={()=>{isExpanded = false}}>
            ╳
        </p>
    </div>
</div>

<style lang="scss">
    // Using BEM naming convention

    @import '../styles/global.scss';

    .navbar {
        &__control{
            z-index: 1;
            position: fixed;
            right: 1rem;
            top: 1rem;
            cursor: pointer;
            background-color: $hyperlink-col;
            height: $navbar-height;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            &__label {
                margin-right: 0.8em;
                font-size: 1.2rem;
                color: $bac-col;
    
                transition: font-size $trans-time;
                &--expanded {
                    font-size: 2rem;
                }
    
            }
            &__icon {
                margin-right: 1rem;
                height: $navbar-icon-size;
                width: $navbar-icon-size;
                border-right: solid 5px $bac-col;
                border-bottom: solid 5px $bac-col;
                transform: rotate(45deg);
                transform-origin: 100% 100%;
    
                transition: transform $trans-time, transform-origin $trans-time;
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
            background-color: $hyperlink-col;
            clip-path: circle(0px at 90% 5%);
    
            transition: clip-path $trans-time;        
            &--expanded {
                clip-path: circle(1000px at 90% 5%);
            }
    
            &__contacts {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                &__item {
                    text-align: right;
                    border-bottom: 2px solid $bac-col;
                    font-size: 2rem;
                    margin: 0.3rem 3rem;
                    list-style: none;
                    a {
                        color: $bac-col;
                        padding: 0;
                        text-decoration: none;
                        &:visited {
                            color: $bac-col;
                        }
                    }
                }
                &__close {
                    color: $bac-col;
                    font-size: 2rem;
                    cursor: pointer;
                    color: $bac-col;
                    margin: 5% 3rem 5% 0;
                    border: none;
                }
            }
        }
        @media screen and (min-width: $breakpoint) {
            &__control{
                display: none;
            }
    
            &__content {
                margin: 4rem auto 0 auto;
                right: auto;
                left: 60%;
                top: 0;
                bottom: auto;
                height: auto;
                width: 270px;
                background-color: transparent;
                clip-path: none;
    
                &__contacts {
                    border-right: 2px solid $pri-col;
                    &__item {
                        margin-right: 1rem;    
                        a {
                            color: $pri-col;
                            padding: 0;
                            transition: $trans-time ease;
                            &:visited {
                                color: $pri-col;
                            }
                            &:hover {
                                padding-left: 1rem;
                                padding-right: 5rem;
                                background-color: $pri-col;
                                color: $bac-col;
                            }
                        }
                    }
                    &__close {
                        display: none;
                    }
                }
            }
        }
    }
</style>