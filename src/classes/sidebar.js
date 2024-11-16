import {block, imageBlock, stringToArray} from "../utils";
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);

        this.update = updateCallback;

        this.init();
    }

    init(){
        this.$el.insertAdjacentHTML('afterbegin',  this.template);
        this.$el.addEventListener('submit', this.add.bind(this));
    }

    get template(){
        return [block('title'), block('text'), imageBlock('image'), block('columns')].join(' ');
    }

    add(event){
        event.preventDefault();

        const form = event.target;
        const type = form.name;

        let newBlock;

        if (type === 'title' || type === 'text' || type === 'columns') {
            const value = form.value.value;
            const styles = form.styles.value;

            if (type === 'title') {
                newBlock = new TitleBlock(value, { styles });
            } else if (type === 'text') {
                newBlock = new TextBlock(value, { styles });
            } else if (type === 'columns') {
                newBlock = new ColumnsBlock(stringToArray(value), { styles });
            }

        } else if (type === 'image'){
            const src = form.src.value;
            const styles = form.styles.value;
            const alt = form.alt.value;
            const imgStyles = form['imgStyles'].value;


            newBlock = new ImageBlock(src, {
                styles: styles,
                alt: alt,
                imageStyles: imgStyles
            });
        }
            if (newBlock) {
            this.update(newBlock);
            form.reset();
        }
    }

}

