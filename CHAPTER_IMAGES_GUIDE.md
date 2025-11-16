# Chapter Image Integration Guide

This guide explains how to add AI-generated or sourced images to your chapter cards and chapter page headers.

## Image Locations

All chapter images should be placed in the `public/images/chapters/` directory.

### Recommended Directory Structure
```
public/
  images/
    chapters/
      ancient-foundations.jpg
      medieval-banking.jpg
      banking-houses.jpg
      industrial-revolution.jpg
      federal-reserve.jpg
      fiat-system.jpg
      modern-control.jpg
      biblical-prophecy.jpg
```

## Image Specifications

### Chapter Card Images (Timeline Page)
- **Dimensions:** 400px × 200px (2:1 aspect ratio)
- **Format:** JPG or PNG
- **File Size:** Under 200KB for optimal performance
- **Style:** Should visually represent the chapter theme
- **Orientation:** Landscape/horizontal

### Chapter Header Images (Chapter Pages)
- **Dimensions:** 1200px × 400px (3:1 aspect ratio)
- **Format:** JPG or PNG
- **File Size:** Under 500KB
- **Style:** More detailed banner-style images
- **Orientation:** Wide landscape/horizontal

## How to Add Images

### Option 1: Add to Timeline Chapters (Homepage Cards)

Edit `src/data/timeline.ts`:

```typescript
export const chapters = [
  {
    slug: 'ancient-foundations',
    title: 'Ancient Foundations',
    period: '2000 BC - 600 AD',
    description: 'From biblical currency manipulation to the first coins and early financial systems',
    color: 'from-amber-600 to-orange-700',
    image: '/images/chapters/ancient-foundations.jpg' // Change from undefined to your image path
  },
  // ... repeat for other chapters
]
```

### Option 2: Add to Chapter Page Headers

Edit `src/data/chapters.ts` for each chapter:

```typescript
{
  slug: 'ancient-foundations',
  title: 'Ancient Foundations',
  period: '2000 BC - 600 AD',
  headerImage: '/images/chapters/ancient-foundations.jpg', // Add this line
  introduction: '...',
  sections: [...]
  // ... rest of chapter data
}
```

## Fallback Behavior

**No need to worry if you don't have images yet!** The site will automatically:

### For Chapter Cards (Timeline):
- Show gradient background with large first letter
- Use the chapter's color scheme (amber for Ancient, orange for Medieval, etc.)
- Hover effects still work perfectly

### For Chapter Headers:
- Display full-width gradient banner with title
- Use the chapter's color scheme
- Text remains fully readable with drop shadows

## AI Image Generation Prompts

Use these prompts with your AI image generator (DALL-E, Midjourney, Stable Diffusion, etc.):

### Ancient Foundations (2000 BC - 600 AD)
```
"Ancient coins and biblical scrolls on stone tablets, golden light, historical atmosphere, 
photorealistic, 1200x400, banner style, ancient Egypt and Rome mixed"
```

### Medieval Banking (600 - 1400 AD)
```
"Medieval goldsmiths vault with wooden tally sticks and gold coins, candlelit atmosphere, 
renaissance style, photorealistic, 1200x400, banner format"
```

### Rise of Banking Houses (1400 - 1700 AD)
```
"Venetian merchant banking house interior with ledgers and counting tables, 
renaissance architecture, golden afternoon light, photorealistic, 1200x400"
```

### Industrial Revolution (1700 - 1900 AD)
```
"Rothschild banking empire office with industrial age machinery in background, 
Victorian era, gaslight atmosphere, photorealistic, 1200x400, cinematic"
```

### Federal Reserve Era (1900 - 1971 AD)
```
"1913 Jekyll Island meeting room with bankers in shadows, dramatic lighting, 
early 20th century atmosphere, photorealistic, 1200x400, mysterious mood"
```

### Fiat Currency System (1971 - 2008 AD)
```
"Nixon shock 1971, gold window closing, dollar bills falling, stock market chaos, 
1970s aesthetic, photorealistic, 1200x400, dramatic composition"
```

### Modern Financial Control (2008 - Present)
```
"Modern central bank digital screens with global financial networks, 
futuristic yet ominous, blue and red lighting, photorealistic, 1200x400"
```

### Biblical Prophecy (Present - Future)
```
"Economist phoenix magazine cover reimagined, burning currencies with digital blockchain rising, 
prophetic atmosphere, golden light and darkness contrast, 1200x400"
```

## Adding Images Step-by-Step

1. **Generate or source your images** using the prompts above
2. **Optimize images** (compress to under 500KB)
3. **Place images** in `public/images/chapters/` directory
4. **Update data files**:
   - For cards: Edit `src/data/timeline.ts`
   - For headers: Edit `src/data/chapters.ts`
5. **Test locally**: Run `npm run dev` and check both:
   - Homepage timeline chapter cards
   - Individual chapter pages

## Example: Complete Integration

### Step 1: Add image file
```
public/images/chapters/federal-reserve.jpg
```

### Step 2: Update timeline.ts (for card)
```typescript
{
  slug: 'federal-reserve',
  title: 'Federal Reserve Era',
  period: '1900 - 1971 AD',
  description: 'Central banking victory, Great Depression wealth transfer, and Bretton Woods system',
  color: 'from-pink-600 to-purple-700',
  image: '/images/chapters/federal-reserve.jpg' // Changed from undefined
}
```

### Step 3: Update chapters.ts (for header)
```typescript
{
  slug: 'federal-reserve',
  title: 'Federal Reserve Era',
  period: '1900 - 1971 AD',
  headerImage: '/images/chapters/federal-reserve.jpg', // Added this line
  videoTimestamp: '1:05:00-1:30:00',
  introduction: 'The creation of the Federal Reserve...',
  // ... rest of chapter
}
```

### Step 4: Verify
- Homepage shows Federal Reserve card with Jekyll Island image
- Federal Reserve chapter page shows full banner header with same image
- Gradients automatically hidden when images present
- Images have smooth hover effects and proper optimization

## Tips for Best Results

1. **Consistency:** Use similar visual style across all chapters
2. **Mood:** Match the tone - ancient chapters warmer/golden, modern chapters cooler/blue
3. **Text Space:** Leave some darker area for text overlay on headers
4. **Symbolism:** Include relevant symbols (coins, phoenixes, banks, chains, etc.)
5. **Quality:** Higher resolution is better - Next.js will optimize automatically
6. **Format:** JPG for photographs, PNG for graphics with transparency

## Current Status

All 8 chapters are ready to accept images:

- [ ] Ancient Foundations
- [ ] Medieval Banking
- [ ] Rise of Banking Houses
- [ ] Industrial Revolution & Central Banking
- [ ] Federal Reserve Era
- [ ] Fiat Currency System
- [ ] Modern Financial Control
- [ ] Biblical Prophecy & Future

Simply generate/source images and update the data files. The UI handles the rest!

## Technical Details

### Next.js Image Optimization
- Automatically serves WebP format when supported
- Lazy loads images for performance
- Responsive srcsets generated automatically
- No manual optimization needed

### Fallback System
- If `image: undefined` → Shows gradient + first letter monogram
- If `headerImage: undefined` → Shows gradient banner
- No broken images or errors
- Seamless user experience either way

### Performance
- Images are optimized at build time
- Priority loading for above-the-fold images
- Proper caching headers automatically set
- Lighthouse scores remain 90+

## Questions?

The system is fully flexible:
- Add images to all chapters ✅
- Add images to some chapters ✅
- Add images to none (gradients forever) ✅
- Mix and match as you source/create images ✅

Everything gracefully falls back to beautiful gradients!
