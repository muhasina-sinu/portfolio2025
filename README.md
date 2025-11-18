# Muhasina Mujeeb - Website/Web App Developer & Technical Writer Portfolio

A modern, responsive portfolio website showcasing web app development and technical writing expertise.

## 🚀 Features

- **Clean, Modern Design**: Minimalistic layout with developer-focused aesthetics
- **Dark Mode Toggle**: Seamless switching between light and dark themes
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Fade-in effects and hover interactions
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript

## 🎨 Design System

### Colors
- Background: `#F8FAFC` (Light) / `#0F172A` (Dark)
- Primary Text: `#1E293B` (Light) / `#F1F5F9` (Dark)
- Accent: `#3B82F6` (Light) / `#60A5FA` (Dark)
- Secondary: `#10B981` (Light) / `#34D399` (Dark)

### Fonts
- Headings: Poppins (Google Fonts)
- Body: Inter (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image assets
│       ├── profile-placeholder.jpg
│       └── about-placeholder.jpg
├── about.html              # Additional pages (if needed)
├── projects.html
└── services.html
```

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser
- Code editor (VS Code recommended)
- Local server (optional, for testing)

### Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in your browser
3. **For local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```
4. **Navigate** to `http://localhost:8000`

### Customization

#### Setting up Email Contact Form (Formspree)
The contact form uses Formspree for email functionality. The form is now properly configured with:

```html
<form action="https://formspree.io/f/xvgdlnrg" method="POST">
```

**What was the bug?**
- The form was missing the `action` and `method` attributes
- Custom JavaScript was preventing Formspree from handling the submission
- Formspree requires the form to submit directly to their endpoint

**To verify it's working:**
1. Submit the contact form with test data
2. Check your email `sinujalal@gmail.com` for the message
3. Formspree should send an email immediately

**Formspree Features:**
- ✅ **Automatic handling**: No custom JavaScript needed
- ✅ **Spam protection**: Built-in filtering
- ✅ **Success confirmation**: Shows thank you message after submission
- ✅ **Free tier**: 50 emails/month

**If still not receiving emails:**
- Check your Formspree dashboard for form submissions
- Verify the form ID `xvgdlnrg` is correct
- Ensure your Formspree account is verified

#### Updating Content
Edit the following sections in `index.html`:
- **Hero Section**: Update name, titles, and tagline
- **About Section**: Personalize the description
- **Skills Section**: Modify or add skills
- **Projects Section**: Replace with your actual projects
- **Contact Section**: Update email and social links

#### Styling Changes
Modify `assets/css/style.css` for:
- Color scheme adjustments
- Layout modifications
- Animation tweaks

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect** your GitHub repository to Vercel
2. **Deploy** automatically on every push
3. **Custom domain** support included

### Netlify
1. **Drag & drop** the project folder
2. **Deploy** instantly
3. **Form handling** available for contact forms

### GitHub Pages
1. **Enable** GitHub Pages in repository settings
2. **Select** main branch as source
3. **Access** at `https://yourusername.github.io/repository-name`

### Manual Deployment
Upload all files to your web hosting provider.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Development Notes

### Performance Optimizations
- CSS custom properties for theme switching
- Minimal JavaScript for interactivity
- Optimized font loading
- Responsive images

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

### SEO Features
- Meta tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 📞 Contact

For questions or customization requests:
- Email: sinujalal@gmail.com
- Mobile: +91 9946967067
- LinkedIn: https://www.linkedin.com/in/muhasina-jalal

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Muhasina Mujeeb - Website/Web App Developer & Technical Writer