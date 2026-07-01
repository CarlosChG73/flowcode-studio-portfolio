import sharp from 'sharp'

const imagesToOptimize = [
  {
    input: 'src/assets/images/hero-flowcode-studio.png',
    output: 'src/assets/images/hero-flowcode-studio.webp',
    width: 1600,
    quality: 82,
  },
  {
    input:
      'src/assets/images/projects/portfolio/portfolio-home-desktop.png',
    output:
      'src/assets/images/projects/portfolio/portfolio-home-desktop.webp',
    width: 1400,
    quality: 82,
  },
  {
    input:
      'src/assets/images/projects/portfolio/portfolio-responsive-mockup.png',
    output:
      'src/assets/images/projects/portfolio/portfolio-responsive-mockup.webp',
    width: 1400,
    quality: 82,
  },
  {
    input:
      'src/assets/images/projects/portfolio/portfolio-light-dark-mode.png',
    output:
      'src/assets/images/projects/portfolio/portfolio-light-dark-mode.webp',
    width: 1400,
    quality: 82,
  },
  {
    input:
      'src/assets/images/projects/portfolio/portfolio-contact-form.png',
    output:
      'src/assets/images/projects/portfolio/portfolio-contact-form.webp',
    width: 1400,
    quality: 82,
  },
  {
    input:
      'src/assets/images/projects/portfolio/portfolio-image-optimization.png',
    output:
      'src/assets/images/projects/portfolio/portfolio-image-optimization.webp',
    width: 1400,
    quality: 82,
  },
]

for (const image of imagesToOptimize) {
  await sharp(image.input)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
    })
    .toFile(image.output)

  console.log(`Imagen optimizada: ${image.output}`)
}

console.log('Optimización de imágenes finalizada correctamente.')