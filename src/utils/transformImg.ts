export const transformImg = (img: string, width: string, height: string) => {
    const sizeImage = `upload/w_${width},h_${height}/`
    return img.replace('upload', sizeImage)
}