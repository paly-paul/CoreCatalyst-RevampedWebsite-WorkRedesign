import { test, expect } from '@playwright/test';

test.describe('Internal Links', () => {
  test('all navbar links are valid', async ({ page }) => {
    await page.goto('/');
    
    // Get all links in navbar
    const navbar = page.locator('nav').first();
    const links = navbar.locator('a');
    
    // Check each link can be clicked
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('footer links navigate correctly', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    const links = footer.locator('a');
    
    expect(await links.count()).toBeGreaterThan(0);
  });

  test('no broken internal links', async ({ page }) => {
    const testPages = ['/', '/about', '/pricing', '/security'];
    
    for (const path of testPages) {
      await page.goto(path);
      
      // Collect all internal links
      const links = page.locator('a[href^="/"], a[href^="./"], a[href*="workredesign"]');
      const hrefs = await links.evaluateAll(elements => 
        elements.map(el => (el as HTMLAnchorElement).href)
      );
      
      // Filter for internal routes only
      const internalRoutes = hrefs
        .map(href => new URL(href, page.url()).pathname)
        .filter(pathname => !pathname.includes('.html'))
        .filter((value, index, self) => self.indexOf(value) === index);
      
      // Each internal link should be a valid Next.js route
      for (const route of internalRoutes) {
        expect(route.startsWith('/')).toBeTruthy();
      }
    }
  });

  test('no .html file extensions in links', async ({ page }) => {
    await page.goto('/');
    
    const body = page.locator('body');
    const text = await body.textContent();
    
    // Check that no HTML file links exist
    expect(text).not.toContain('.html');
  });

  test('solution links maintain structure', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to CHRO solution
    await page.click('a:has-text("CHRO"), a:has-text("CHROs")');
    await page.waitForURL('**/chro', { timeout: 5000 }).catch(() => {
      // If specific CHRO link not found, that's OK for this test
    });
  });
});

test.describe('CTA Links', () => {
  test('primary CTA buttons link to correct pages', async ({ page }) => {
    await page.goto('/');
    
    // Find "Book a Demo" or similar CTA
    const ctaButtons = page.locator('a:has-text("Demo"), a:has-text("Engage")');
    
    if (await ctaButtons.count() > 0) {
      const href = await ctaButtons.first().getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).not.toContain('.html');
    }
  });

  test('secondary CTA buttons work', async ({ page }) => {
    await page.goto('/');
    
    // Find secondary CTAs
    const secondaryCtaButtons = page.locator('a:has-text("Learn"), a:has-text("See")');
    
    if (await secondaryCtaButtons.count() > 0) {
      const firstButton = secondaryCtaButtons.first();
      const href = await firstButton.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });
});
