import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    constructor(private translateSrv: TranslateService) {}

    transform(value: string) : string {
        let lang = this.translateSrv.language;
        return translations[value] ? translations[value][lang] : value;
    }
}

const translations = {
    "Example": { en: "Example", es: "Ejemplo" }
}
