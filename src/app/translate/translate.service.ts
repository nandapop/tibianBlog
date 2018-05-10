import { Subject } from "rxjs";

export class TranslateService {
    // This service should hold the language selected by the user...
    // default to the navigator language and updated depending on the language
    // of the post ...
    private lang: string = "en";
    languageChanged = new Subject<string>();

    get language(): string {
        return this.lang;
    }
    set language(lang: string) {
        this.lang = lang;
        this.languageChanged.next(lang);
    }
}
