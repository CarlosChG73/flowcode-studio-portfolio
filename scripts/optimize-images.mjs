import sharp from 'sharp'

await sharp('src/assets/images/hero-flowcode-studio.png')
  .resize({
    width: 1600,
    withoutEnlargement: true,
  })
  .webp({
    quality: 82,
  })
  .toFile('src/assets/images/hero-flowcode-studio.webp')

console.log('Imagen optimizada correctamente.')