// Simple script to create OG image
// You can use this with puppeteer or just screenshot the HTML file

const fs = require('fs');
const path = require('path');

// Instructions for creating the OG image:
console.log(`
🎨 OLIGO Open Graph Image Creator

To create your OG image:

Method 1 - Screenshot (Easiest):
1. Open og-image-template.html in your browser
2. Set browser window to 1200x630 pixels
3. Take a screenshot
4. Save as 'oligo-og-image.png' in the public folder

Method 2 - Using Mac Screenshot:
1. Open og-image-template.html in browser
2. Press Cmd+Shift+4 (Mac) or use Snipping Tool (Windows)
3. Screenshot the content area
4. Save as public/oligo-og-image.png

Method 3 - Online Tool:
1. Copy the HTML content from og-image-template.html
2. Use https://htmlcsstoimage.com/
3. Set dimensions: 1200x630
4. Generate and download PNG

The image will be optimized for:
✅ Facebook/LinkedIn: 1200x630 px
✅ Twitter: Large image card
✅ Professional black background
✅ Clean typography matching your brand
✅ Perfect for social media sharing
`);

// Create a simple SVG version as backup
const svgContent = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <defs>
    <radialGradient id="bg1" cx="30%" cy="20%" r="30%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.05);stop-opacity:1" />
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
    </radialGradient>
    <radialGradient id="bg2" cx="70%" cy="80%" r="40%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.03);stop-opacity:1" />
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg1)"/>
  <rect width="1200" height="630" fill="url(#bg2)"/>
  <text x="600" y="300" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="900" 
        fill="white" text-anchor="middle" letter-spacing="-2px">OLIGO</text>
  <text x="600" y="400" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="300" 
        fill="rgba(255,255,255,0.9)" text-anchor="middle" letter-spacing="2px">Coming Soon</text>
</svg>
`;

fs.writeFileSync('public/oligo-og-image.svg', svgContent.trim());
console.log('✅ Created backup SVG at public/oligo-og-image.svg');
