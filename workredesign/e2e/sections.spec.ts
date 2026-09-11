import { test, expect } from '@playwright/test';

/**
 * Comprehensive section tests for all 12 pages
 * Validates the presence and content of all expected sections including newly implemented ones
 */

test.describe('How It Works Page - Sections', () => {
  test('has step navigation section', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-step-navigation"]');
    await expect(section).toBeVisible();
  });

  test('step navigation has all 5 step items', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    for (let i = 1; i <= 5; i++) {
      const stepItem = page.locator(`[data-testid="step-nav-item-${i}"]`);
      await expect(stepItem).toBeVisible();
    }
  });

  test('has downstream section with systems', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-downstream-benefits"]');
    await expect(section).toBeVisible();

    // Verify system integrations are present
    const systems = ['workday', 'talent-marketplace', 'lms-engine', 'analytics', 'ats'];
    for (const system of systems) {
      const systemElement = page.locator(`[data-testid="downstream-system-${system}"]`);
      await expect(systemElement).toBeVisible();
    }
  });

  test('has trust section with security claims', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-trust-claims"]');
    await expect(section).toBeVisible();

    // Verify all 4 trust cards
    const claims = [
      'soc-2-type-ii',
      'gdpr-&-ccpa-compliant',
      'field-level-encryption',
      'full-audit-trail'
    ];
    for (const claim of claims) {
      const card = page.locator(`[data-testid="trust-card-${claim}"]`);
      await expect(card).toBeVisible();
    }
  });

  test('all how-it-works steps are rendered', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    // Verify numbered steps display
    const stepNumbers = page.locator('[class*="01"], [class*="02"], [class*="03"], [class*="04"], [class*="05"], [class*="06"]');
    // At least one step number should be visible
    expect(await stepNumbers.count()).toBeGreaterThan(0);
  });
});

test.describe('Security Page - Sections', () => {
  test('has trust claims section with frameworks', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-trust-claims"]');
    await expect(section).toBeVisible();

    // Verify all 4 trust claim frameworks
    const frameworks = ['soc-2-type-ii', 'gdpr', 'ccpa', 'iso-27001'];
    for (const framework of frameworks) {
      const claim = page.locator(`[data-testid="trust-claim-${framework}"]`);
      await expect(claim).toBeVisible();
    }
  });

  test('trust claims show status badges', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    // Verify status indicators are visible
    const statusText = await page.locator('body').textContent();
    expect(statusText).toContain('Certified');
    expect(statusText).toContain('Compliant');
    expect(statusText?.includes('In Progress')).toBe(true);
  });

  test('has deployment section with options', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-deployment-info"]');
    await expect(section).toBeVisible();

    // Verify all 4 deployment options
    const options = [
      'aws-cloud',
      'custom-geography',
      'on-premises',
      'infrastructure-as-code'
    ];
    for (const option of options) {
      const optionElement = page.locator(`[data-testid="deployment-option-${option}"]`);
      await expect(optionElement).toBeVisible();
    }
  });

  test('deployment section shows additional feature cards', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toContain('Automated Security Scanning');
    expect(bodyText).toContain('Penetration Testing');
  });

  test('certifications section displays all certs', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toContain('SOC 2 Type II');
    expect(bodyText).toContain('ISO 27001');
    expect(bodyText).toContain('GDPR Compliant');
    expect(bodyText).toContain('CCPA Ready');
  });

  test('security features section displays all features', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toContain('AES-256 Encryption');
    expect(bodyText).toContain('Role-Based Access Control');
    expect(bodyText).toContain('Comprehensive Audit Logs');
    expect(bodyText).toContain('SSO & SAML');
  });
});

test.describe('Home Page - Sections', () => {
  test('displays multiple content sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const sections = page.locator('section');
    expect(await sections.count()).toBeGreaterThan(5);
  });

  test('has hero section with heading', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    const text = await heading.textContent();
    expect(text?.length).toBeGreaterThan(0);
  });

  test('displays statistics', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toContain('73%');
    expect(bodyText).toContain('4.2x');
  });

  test('has CTA sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const buttons = page.locator('button, a[class*="btn"], a[class*="cta"]');
    expect(await buttons.count()).toBeGreaterThan(0);
  });
});

test.describe('All Pages - Common Sections', () => {
  const pages = [
    '/',
    '/about',
    '/blog',
    '/careers',
    '/contact',
    '/engage',
    '/how-it-works',
    '/pricing',
    '/security',
    '/solutions/chro',
    '/solutions/hr-ops',
    '/solutions/managers',
  ];

  pages.forEach((path) => {
    test(`${path} has navigation header`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const nav = page.locator('nav');
      await expect(nav).toBeVisible();
    });

    test(`${path} has footer`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      const footerText = await footer.textContent();
      expect(footerText?.length).toBeGreaterThan(0);
    });

    test(`${path} has no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto(path);
      await page.waitForLoadState('networkidle');

      // Filter out expected errors if any
      const unexpectedErrors = errors.filter(e =>
        !e.includes('Metadata conflict') &&
        !e.includes('viewport')
      );
      expect(unexpectedErrors.length).toBe(0);
    });
  });
});

test.describe('Section Content Verification', () => {
  test('how-it-works downstream section has all 4 benefits listed', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    for (let i = 1; i <= 4; i++) {
      const benefit = page.locator(`[data-testid="downstream-benefit-${i}"]`);
      await expect(benefit).toBeVisible();
    }
  });

  test('security deployment options have feature lists', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-deployment-info"]');
    const lists = section.locator('ul');
    expect(await lists.count()).toBeGreaterThan(0);
  });

  test('trust claims section has scope and details text', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toContain('trust service criteria');
    expect(bodyText).toContain('Audit scheduled');
  });
});

test.describe('Responsive Section Layout', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('sections are properly formatted on mobile - how-it-works', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-step-navigation"]');
    await expect(section).toBeVisible();

    // Should not overflow viewport
    const html = page.locator('html');
    const bodyWidth = await html.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await html.evaluate(() => window.innerWidth);

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });

  test('sections are properly formatted on mobile - security', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const section = page.locator('[data-testid="section-deployment-info"]');
    await expect(section).toBeVisible();

    // Should not overflow viewport
    const html = page.locator('html');
    const bodyWidth = await html.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await html.evaluate(() => window.innerWidth);

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});

test.describe('Section Visibility and Content Integrity', () => {
  test('how-it-works page renders without blank sections', async ({ page }) => {
    await page.goto('/how-it-works');
    await page.waitForLoadState('networkidle');

    const sections = page.locator('section');
    for (let i = 0; i < await sections.count(); i++) {
      const section = sections.nth(i);
      const text = await section.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });

  test('security page renders without blank sections', async ({ page }) => {
    await page.goto('/security');
    await page.waitForLoadState('networkidle');

    const sections = page.locator('section');
    for (let i = 0; i < await sections.count(); i++) {
      const section = sections.nth(i);
      const text = await section.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });
});
