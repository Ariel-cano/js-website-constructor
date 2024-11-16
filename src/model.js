import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'



export const model = [
    new TitleBlock('Website builder in pure JavaScript',{
        tag: 'h2',
        styles:{
            'font-family': "'UnifrakturMaguntia', cursive",
            color: '#e0e0e0',
            'background': 'linear-gradient(145deg, #222222, #1a1a1a)',
            padding: '20px 40px',
            'text-align': 'center',
            'font-size': '4rem',
            'text-shadow': '6px 6px 10px rgba(0, 0, 0, 0.8), inset -4px -4px 8px rgba(255, 255, 255, 0.1)',
            'box-shadow': '6px 6px 10px rgba(0, 0, 0, 0.8), inset -4px -4px 8px rgba(255, 255, 255, 0.1)',
            border: '3px solid #555',
            'border-radius': '12px',
            'font-weight': '700',
            'letter-spacing': '3px',
            transition: 'transform 0.3s ease, color 0.3s ease'
        }}),
    new TextBlock( 'JavaScript Website constructor',{
        styles: {
            'font-family': "'UnifrakturMaguntia', cursive",
            color: '#d0d0d0',
            'font-size': '1.8rem',
            'line-height': '1.6',
            padding: '10px 20px',
            'background-color':'rgba(0, 0, 0, 0.3)',
            'border-left': '3px solid #555',
            'text-shadow': '1px 1px 3px rgba(0, 0, 0, 0.7)',
            'margin-bottom': '16px',
            'border-radius': '5px'
        }}),
    new ImageBlock(image, {
        styles: {
            'display': 'flex',
            'justify-content': 'center'
        },
        alt: 'picture',
        imageStyles:{
            width: '500px',
            height: 'auto',
            border: '3px solid #444',
            'border-radius': '8px',
            'box-shadow': '6px 6px 15px rgba(0, 0, 0, 0.8), inset -2px -2px 8px rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}),
    new ColumnsBlock( ['the application is in pure js, without using libraries', 'I learned how the principles of SOLID and OOP work in JavaScript', 'the application is in pure js', 'I learned how the principles of SOLID and OOP work in JavaScript'], {
        styles: {
            'font-family': "'UnifrakturMaguntia', cursive",
            color: '#d0d0d0',
            'background-color': 'rgba(0, 0, 0, 0.4)',
            padding: '20px',
            margin: '10px',
            'border-radius': '8px',
            'box-shadow': '4px 4px 10px rgba(0, 0, 0, 0.7)',
            'border-left': '4px solid #555',
            transition: 'transform 0.2s ease, background-color 0.3s ease'
        }})
]