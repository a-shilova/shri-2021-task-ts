import { color, Theme } from './colors';
import { markdown, TextStyle } from './md';

export function style(text: string, options: Theme | TextStyle): string {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
