import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('home page loads in reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('all pages respond within timeout', async ({ page }) => {
    const pages = [
      '/',
      '/about',
      '/pricing',
      '/security',
      '/solutions/chro',
    ];
    
    for (const pagePath of pages) {
      const startTime = Date.now();
      await page.goto(pagePath);
      const loadTime = Date.now() - startTime;
      
      expect(loadTime).toBeLessThan(3000);
    }
  });

  test('images are loaded', async ({ page }) => {
    await page.goto('/');
    
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    const images = page.locator('img');
    
    // Check if images are visible
    if (await images.count() > 0) {
      for (let i = 0; i < Math.min(await images.count(), 2); i++) {
        const isVisible = await images.nth(i).isVisible();
        expect(isVisible).toBeTruthy();
      }
    }
  });

  test('no console errors on page load', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Should have no errors (excluding expected third-party errors)
    const relevantErrors = errors.filter(
      e => !e.includes('third-party') && 
           !e.includes('analytics') &&
           !e.includes('external')
    );
    
    expect(relevantErrors.length).toBe(0);
  });
});

test.describe('Asset Loading', () => {
  test('fonts are loaded correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check for font imports in CSS
    const html = page.locator('html');
    const style = await html.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? window.getComputedStyle(h1).fontFamily : '';
    });
    
    expect(style).toBeTruthy();
  });

  test('stylesheets are applied', async ({ page }) => {
    await page.goto('/');
    
    // Check if elements have computed styles
    const heading = page.locator('h1, h2').first();
    const color = await heading.evaluate(() => {
      const el = document.querySelector('h1, h2');
      return el ? window.getComputedStyle(el).color : '';
    });
    
    expect(color).toBeTruthy();
    expect(color).not.toBe('rgba(0, 0, 0, 0)'); // Shouldn't be transparent
  });
});
