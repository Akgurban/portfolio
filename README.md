# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📄 Sections: Hero, About, Skills, Projects, Contact
- 🧭 Smooth scrolling navigation
- ⚡ Optimized performance

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Radix UI primitives
- **Font**: Geist Sans & Geist Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Personalization

To make this portfolio your own, you need to update several files:

### 1. Update Layout Information
**File**: `app/layout.tsx`
- Update the title with your actual name
- Customize the description

### 2. Hero Section
**File**: `components/HeroSection.tsx`
- Replace `[Your Name]` with your actual name
- Update social media links (GitHub, LinkedIn, Email)
- Customize the hero description if needed

### 3. About Section
**File**: `components/AboutSection.tsx`
- Update the about text with your personal story
- Adjust the statistics (years experience, projects completed, etc.)
- Replace the placeholder photo section

### 4. Skills Section
**File**: `components/SkillsSection.tsx`
- Update skill categories and proficiency levels
- Add or remove technologies as needed
- Customize the skill bars

### 5. Projects Section
**File**: `components/ProjectsSection.tsx`
- Replace placeholder projects with your actual projects
- Update project descriptions, technologies used
- Add real GitHub and live demo URLs
- Replace placeholder screenshots with actual project images

### 6. Contact Section
**File**: `components/ContactSection.tsx`
- Update contact information
- Replace placeholder email and phone
- Update social media links
- Set up actual form submission (currently using placeholder)

### 7. Footer
**File**: `components/Footer.tsx`
- Update brand name
- Replace social media links
- Update contact information
- Add current year (done automatically)

## Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run code linting
- `npm run format` - Format code with Biome

## Customization

### Colors
The theme uses Tailwind CSS with a blue/indigo color scheme. You can customize colors by:
1. Updating Tailwind config if needed
2. Modifying the color classes in components

### Fonts
Using Geist font family from Next.js. You can change this in `app/layout.tsx`.

### Sections
All sections are modular components. You can:
- Add new sections by creating new components
- Remove sections by removing imports from `app/page.tsx`
- Reorder sections by rearranging the imports in `app/page.tsx`

## Accessibility

- Semantic HTML5 structure
- ARIA labels where necessary
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This portfolio comes with placeholder content. Remember to personalize all sections with your actual information, projects, and contact details before deploying.
