export function row(content, styles = ''){

    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content){
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}){
    if ( typeof styles === 'string' ) return styles;
    const toString = key => `${key}:${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type){
    return `<form name="${type}" class="sidebar-form">
                <h5 class="title-sidebar">${type}</h5>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="value" placeholder="value">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="styles" placeholder="styles">
                </div>
                <div class="button-container">
                    <button type="submit" class="btn btn-primary btn-sm">add</button>
                </div>
            </form>`
}

export function imageBlock(type){
    return `<form name="${type}" class="sidebar-form">
                <h5 class="title-sidebar">${type}</h5>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="src" placeholder="src">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="styles" placeholder="styles for container">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="alt" placeholder="alt">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="imgStyles" placeholder="imgStyles">
                </div>
                <div class="button-container">
                    <button type="submit" class="btn btn-primary btn-sm">add</button>
                </div>
            </form>`
}

export function stringToArray(string = ''){
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ','){
            return string.split(',');
        } else if (string[i] === ';'){
            return string.split(';');
        }
    }
    return [string]

}
console.log(stringToArray('rar,tat,yuy'));