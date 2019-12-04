import * as config from '../config/config';

export const createImageMarkup = async (imageSrc: string, imgAlt = 'image') => {
    const imageOutput = await config.get('pasteImageOutput');
    const isMarkdownPayload = (imageOutput === 'markdown');

    const imageMarkup = (isMarkdownPayload)
        ? `![${imgAlt}](${imageSrc})`
        : `<img src="${imageSrc}" alt="${imgAlt}" />`;

    return imageMarkup;
}
