const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'assets', 'images', 'projects', 'contact-center', 'screens');
const outputDir = path.join(__dirname, 'src', 'assets', 'images', 'projects', 'contact-center', 'wireframes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Edge detection matrix
const edgeMatrix = [
  [-1, -1, -1],
  [-1,  8, -1],
  [-1, -1, -1]
];

async function processImages() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    console.log(`Processing ${file}...`);
    try {
      const image = await Jimp.read(inputPath);
      
      // Resize to speed up processing and simulate lower fidelity
      image.resize(1000, Jimp.AUTO)
           .greyscale()
           .convolute(edgeMatrix)
           .invert()
           .contrast(0.5); // Increase contrast to make lines darker
           
      await image.writeAsync(outputPath);
      console.log(`Saved ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
  console.log('Done!');
}

processImages();
