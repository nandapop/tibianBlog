import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(private translateSrv: TranslateService) {}

    transform(value: string) : string {
        let lang = this.translateSrv.language;
        return translations[value] ? translations[value][lang] : value;
    }
}

const translations = {
    "Example": { en: "Example", es: "Ejemplo" },
    "Subscribe": { en: "Subscribe", es: "Suscribirse" },
    "subscription-desc": {en:"Enter your email address to receive new blog post notifications in your inbox.", es: "Ingresa tu email para recibir nuevos posts"},
    "ABOUT": { en: "ABOUT", es: "ACERCA DE"},
    "Read More": {en: "Read More", es: "Leer Más"}
}
