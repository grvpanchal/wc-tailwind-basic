import { LitElement, html } from 'lit-element';
import StyleShelter from 'style-shelter';
import './app-shell.css';

class AppShell extends LitElement {
    connectedCallback() {
        StyleShelter.adopt(['/style.css', '/app-shell.css'], this.shadowRoot);
        super.connectedCallback();
    }

    render() {
        return html`
            <div class="mt-5 p-6 border-red max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
                </div>
                <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-gray-500">You have a new message!</p>
                </div>
            </div>
        `;
    }
}

window.customElements.define('app-shell', AppShell);