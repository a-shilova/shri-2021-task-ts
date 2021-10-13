import { backgroundColors, Effect, effects, Color, fontColors, Reset } from './model';

function addColor(text: string, color: Color, isBackground: boolean = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}

function getEffects(effectList: Array<Effect>): string {
    return effectList.map(effect => effects[effect]).join('');
}

export interface Theme {
    font?: Color;
    background?: Color;
    effects?: Array<Effect>;
}
export function color(text: string, options: Theme): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
