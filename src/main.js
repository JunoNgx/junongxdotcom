import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		URL: {
            twitter: "https://twitter.com/JunoNgx",
            itchio: "https://JunoNgx.itch.io/",
            github: "https://github.com/JunoNgx",
            email: "mailto:juno.ngx@gmail.com",
            instagram: "https://instagram.com/scientistxprincess/",
            flickr: "https://flickr.com/people/JunoNgx/",
            linkedin: "https://www.linkedin.com/in/JunoNgx/",
            ebonymemo: "http://ebonymemo.com/"
        }
	}
});

export default app;