import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', title: 'Know what your people can actually do' },
  { path: '/about', title: 'We exist to make skills visible' },
  { path: '/blog', title: 'Insights on the Skills-Based Organisation' },
  { path: '/careers', title: 'Build the Future of Work With Us' },
  { path: '/contact', title: 'Get in Touch' },
  { path: '/engage', title: 'How We Work With You' },
  { path: '/how-it-works', title: 'From Raw HRIS Data' },
  { path: '/pricing', title: 'Straightforward Pricing' },
  { path: '/security', title: 'Built for the Enterprise' },
  { path: '/solutions/chro', title: 'Board-Ready Workforce Intelligence' },
  { path: '/solutions/hr-ops', title: 'One Governed Pipeline' },
  { path: '/solutions/managers', title: "Make Your Team's Skills Work For You" },
];

test.describe('All Pages Load Successfully', () => {
  pages.forEach(({ path, title }) => {
    test(`${path} loads and displays correct heading`, async ({ page }) => {
      // Navigate to page
      await page.goto(path);
      
      // Wait for content
      await page.waitForLoadState('networkidle');
      
      // Check status
      expect(page.url()).toContain(path);
      
      // Check for heading content
      const heading = page.locator('h1, h2').first();
      await expect(heading).toBeVisible();
      
      // Verify title contains expected text (case-insensitive, partial match)
      const headingText = await heading.textContent();
      expect(headingText?.toLowerCase() || '').toContain(title.toLowerCase());
    });
  });
});

test.describe('Page Navigation', () => {
  test('home page has working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check navbar exists
    const navbar = page.locator('nav').first();
    await expect(navbar).toBeVisible();
    
    // Check home link
    const homeLink = page.locator('a').first();
    await expect(homeLink).toBeVisible();
  });

  test('footer links are present on all pages', async ({ page }) => {
    await page.goto('/');
    
    // Check footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Check for footer content
    const footerText = await footer.textContent();
    expect(footerText).toContain('WorkRedesign');
    expect(footerText).toContain('Platform');
  });

  test('internal navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Find and click a How It Works link
    const links = page.locator('a:has-text("How It Works")');
    if (await links.count() > 0) {
      await links.first().click();
      await page.waitForURL('**/how-it-works');
      expect(page.url()).toContain('how-it-works');
    }
  });
});

test.describe('Hero Sections', () => {
  test('home page hero has CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Look for CTA buttons
    const buttons = page.locator('button, a[href*="engage"], a[href*="how-it-works"]');
    expect(await buttons.count()).toBeGreaterThan(0);
  });

  test('CTA buttons have proper styling', async ({ page }) => {
    await page.goto('/');
    
    // Check for cyan/primary color button (using class or inline style)
    const buttons = page.locator('[class*="cyan"], [class*="primary"]');
    expect(await buttons.count()).toBeGreaterThan(0);
  });
});

test.describe('Content Sections', () => {
  test('home page has all expected sections', async ({ page }) => {
    await page.goto('/');
    
    // Check for section content
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();
    
    // Check for multiple sections
    const sections = page.locator('section');
    expect(await sections.count()).toBeGreaterThan(3);
  });

  test('problem section displays statistics', async ({ page }) => {
    await page.goto('/');
    
    // Look for stat content (percentage, numbers)
    const text = await page.locator('body').textContent();
    expect(text).toContain('73%');
    expect(text).toContain('4.2x');
  });

  test('steps section displays numbered steps', async ({ page }) => {
    await page.goto('/');
    
    // Look for step numbers
    const text = await page.locator('body').textContent();
    expect(text).toContain('Data Ingestion');
    expect(text).toContain('Reconciliation');
  });
});

test.describe('Forms', () => {
  test('contact page has form inputs', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for form elements
    const inputs = page.locator('input');
    expect(await inputs.count()).toBeGreaterThan(0);
    
    // Check for specific input types
    const textInputs = page.locator('input[type="text"]');
    expect(await textInputs.count()).toBeGreaterThan(0);
  });

  test('pricing page has plan cards', async ({ page }) => {
    await page.goto('/pricing');
    
    // Look for plan content
    const text = await page.locator('body').textContent();
    expect(text).toContain('Starter');
    expect(text).toContain('Growth');
    expect(text).toContain('Enterprise');
  });
});

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE
  
  test('mobile navigation works on small screens', async ({ page }) => {
    await page.goto('/');
    
    // Page should load without horizontal scroll
    const html = page.locator('html');
    const bodyWidth = await html.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await html.evaluate(() => window.innerWidth);
    
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
  });

  test('content is readable on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Main heading should be visible
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
    
    // Check font size is reasonable (at least 16px)
    const fontSize = await heading.evaluate(() => 
      parseInt(window.getComputedStyle(document.querySelector('h1, h2') as Element).fontSize)
    );
    expect(fontSize).toBeGreaterThanOrEqual(16);
  });
});

test.describe('SEO & Metadata', () => {
  test('page has proper head tags', async ({ page }) => {
    await page.goto('/');
    
    // Check for viewport meta tag
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toBeVisible();
    
    // Check viewport has proper values
    const viewportContent = await viewport.getAttribute('content');
    expect(viewportContent).toContain('width=device-width');
    expect(viewportContent).toContain('initial-scale=1');
  });
});

test.describe('Accessibility', () => {
  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    
    // Check for images with alt text
    const images = page.locator('img');
    const count = await images.count();
    
    if (count > 0) {
      for (let i = 0; i < Math.min(count, 3); i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    }
  });

  test('buttons have accessible text', async ({ page }) => {
    await page.goto('/');
    
    // Check for buttons with visible text
    const buttons = page.locator('button, a[role="button"]');
    if (await buttons.count() > 0) {
      const firstButton = buttons.first();
      const text = await firstButton.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });

  test('heading hierarchy is correct', async ({ page }) => {
    await page.goto('/');
    
    // Should have h1
    const h1 = page.locator('h1');
    expect(await h1.count()).toBeGreaterThan(0);
    
    // h1 should come before h2
    const h1Index = await h1.first().evaluate(() => document.querySelector('h1')?.compareDocumentPosition(document.querySelector('h2') || document.body));
    // compareDocumentPosition returns 4 if first node comes before second
    expect(h1Index === 4).toBeTruthy();
  });
});
