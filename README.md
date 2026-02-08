# 💝 Valentine's Day Website

A romantic, interactive website where your special someone can tap a button to reveal heartfelt messages and photos.

## ✨ Features

- Beautiful romantic UI with heart animations
- Random message display - never shows the same message twice until all are seen
- Support for both text messages and images
- Fully mobile-optimized and touch-friendly
- Smooth animations and transitions
- Easy to customize and add new content

## 🚀 Getting Started

### Installation

1. Open your terminal in this folder
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## 📝 Adding Your Messages

### Adding Text Messages

Open `src/App.jsx` and find the `messages` array (around line 10). Add your messages like this:

```javascript
const messages = [
  {
    type: 'text',
    content: 'Your beautiful message here...'
  },
  {
    type: 'text',
    content: 'Another sweet message...'
  },
  // Add as many as you want!
];
```

### Adding Images

1. Create a `public/images` folder in your project
2. Add your photos to this folder (e.g., `photo1.jpg`, `photo2.png`)
3. Add image messages to the array:

```javascript
{
  type: 'image',
  src: '/images/photo1.jpg',
  caption: 'Remember this beautiful day? ❤️'
}
```

### Example with Mixed Content

```javascript
const messages = [
  {
    type: 'text',
    content: 'You make every day feel like Valentine\'s Day 💕'
  },
  {
    type: 'image',
    src: '/images/our-first-date.jpg',
    caption: 'Our first date - I knew you were special ❤️'
  },
  {
    type: 'text',
    content: 'Thank you for being my everything!'
  },
  {
    type: 'image',
    src: '/images/vacation.jpg',
    caption: 'Best vacation ever with my favorite person 🌴'
  }
];
```

## 🎨 Customization

### Change Colors

Edit `src/App.css` to customize the color scheme. The main colors are:
- Primary pink: `#e91e63`
- Secondary pink: `#d81b60`
- Light pink: `#ff6b9d`

### Change Button Text

In `src/App.jsx`, find this line:
```javascript
<span className="button-text">Show Me Love</span>
```

Change it to whatever you like!

### Change Title

Find this section in `src/App.jsx`:
```javascript
<h1 className="title">
  <span className="heart-icon">💝</span>
  For My Valentine
  <span className="heart-icon">💝</span>
</h1>
```

## 📱 Deploy to Vercel

### First Time Deployment

1. Make sure all your changes are saved
2. Run in terminal:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project? → No
   - Project name? → Press Enter (or give it a name)
   - Directory? → Press Enter
   - Override settings? → No

4. Your site will be deployed! You'll get a URL like `https://valentine-website-xxx.vercel.app`

### Update Your Deployed Site

Whenever you add new messages or make changes:

```bash
git add .
git commit -m "Added new messages"
git push
```

Vercel will automatically redeploy your changes!

Or manually redeploy:
```bash
vercel --prod
```

## 💡 Tips

- Keep messages heartfelt and personal
- Mix text and images for variety
- For images, use `.jpg` or `.png` format
- Optimize images (keep them under 2MB each)
- Test on your phone before sharing!

## 🎁 Sharing

Once deployed, simply share the Vercel URL with your Valentine! The site works perfectly on mobile phones.

---

Made with 💝 for someone special