import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }
    toHTML(){
        throw new Error('method toHTML must be realized');
    }
}
export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'h1',styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const styles = this.options.styles;
        return row(col(`<p>${this.value}</p>`), css(styles));
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {styles, alt= '', imageStyles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`, css(styles));
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        const styles = this.options.styles;
        const html = this.value.map(col).join('');
        return row(html, css(styles));
    }
}