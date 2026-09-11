import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000";

test.describe("Home Page - All Sections", () => {
  test("renders all required sections", async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Hero
    await expect(
      page.getByTestId("hero-headline").or(page.getByRole("heading", { level: 1, name: /Know what your people/ }))
    ).toBeVisible();

    // Logo Bar
    await expect(page.getByTestId("logo-bar")).toBeVisible();

    // Problem Section
    await expect(page.getByTestId("problem-headline")).toBeVisible();

    // Steps Section
    await expect(page.getByTestId("steps-headline")).toBeVisible();

    // Features Section
    await expect(page.getByTestId("section-features")).toBeVisible();
    const featureCards = page.locator('[data-testid^="feature-card-"]');
    expect(await featureCards.count()).toBeGreaterThanOrEqual(4);

    // Trust Section
    await expect(page.getByTestId("section-trust")).toBeVisible();
    const trustCards = page.locator('[data-testid^="trust-card-"]');
    expect(await trustCards.count()).toBe(6);

    // Stats Section
    await expect(page.getByTestId("section-stats")).toBeVisible();
    const statItems = page.locator('[data-testid^="stat-item-"]');
    expect(await statItems.count()).toBe(4);

    // Personas Section
    await expect(page.getByTestId("section-personas")).toBeVisible();
    await expect(page.getByTestId("persona-tab-chro")).toBeVisible();
    await expect(page.getByTestId("persona-tab-managers")).toBeVisible();
    await expect(page.getByTestId("persona-tab-hrops")).toBeVisible();

    // Role Families
    await expect(page.getByTestId("section-role-families")).toBeVisible();

    // Comparison Section
    await expect(page.getByTestId("section-comparison")).toBeVisible();
    const comparisonCards = page.locator('[data-testid^="comparison-card-"]');
    expect(await comparisonCards.count()).toBe(3);

    // Testimonial Section
    await expect(page.getByTestId("section-testimonial")).toBeVisible();

    // CTA Banner
    await expect(page.getByRole("link", { name: /Book a Discovery Call/ })).toBeVisible();
  });

  test("persona tabs switch content", async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Start with CHRO
    await expect(page.getByTestId("persona-panel-chro")).toBeVisible();

    // Click Managers tab
    await page.getByTestId("persona-tab-managers").click();
    await expect(page.getByTestId("persona-panel-managers")).toBeVisible();

    // Click HR Ops tab
    await page.getByTestId("persona-tab-hrops").click();
    await expect(page.getByTestId("persona-panel-hrops")).toBeVisible();
  });
});

test.describe("CHRO Solutions Page - All Sections", () => {
  test("renders all required sections", async ({ page }) => {
    await page.goto(`${BASE}/solutions/chro`);

    // Hero
    await expect(page.getByRole("heading", { name: /Board-Ready Workforce Intelligence/ })).toBeVisible();

    // Anxiety Cards
    await expect(page.getByTestId("section-anxiety-cards")).toBeVisible();
    const anxietyCards = page.locator('[data-testid^="anxiety-card-"]');
    expect(await anxietyCards.count()).toBe(6);

    // Outcomes Section
    await expect(page.getByTestId("section-outcomes")).toBeVisible();
    const outcomeCards = page.locator('[data-testid^="outcome-card-"]');
    expect(await outcomeCards.count()).toBe(4);

    // CTA Banner
    await expect(page.getByRole("link", { name: /Book a CHRO Briefing/ })).toBeVisible();
  });

  test("anxiety cards have question and answer", async ({ page }) => {
    await page.goto(`${BASE}/solutions/chro`);

    const firstCard = page.getByTestId("anxiety-card-0");
    await expect(firstCard).toContainText(/How exposed is our workforce/);
    await expect(firstCard).toContainText(/automation charter/);
  });
});

test.describe("HR Ops Solutions Page - All Sections", () => {
  test("renders all required sections", async ({ page }) => {
    await page.goto(`${BASE}/solutions/hr-ops`);

    // Hero
    await expect(page.getByRole("heading", { name: /One Governed Pipeline/ })).toBeVisible();

    // Problem Cards
    await expect(page.getByTestId("section-problems")).toBeVisible();
    const problemCards = page.locator('[data-testid^="problem-card-"]');
    expect(await problemCards.count()).toBe(3);

    // Outcomes Section
    await expect(page.getByTestId("section-outcomes")).toBeVisible();
    const outcomeCards = page.locator('[data-testid^="outcome-card-"]');
    expect(await outcomeCards.count()).toBe(3);

    // CTA Banner
    await expect(page.getByRole("link", { name: /Start a Pilot/ })).toBeVisible();
  });
});

test.describe("Managers Solutions Page - All Sections", () => {
  test("renders all required sections", async ({ page }) => {
    await page.goto(`${BASE}/solutions/managers`);

    // Hero
    await expect(page.getByRole("heading", { name: /Make Your Team's Skills/ })).toBeVisible();

    // Problem Cards
    await expect(page.getByTestId("section-problems")).toBeVisible();
    const problemCards = page.locator('[data-testid^="problem-card-"]');
    expect(await problemCards.count()).toBe(3);

    // Outcomes Section
    await expect(page.getByTestId("section-outcomes")).toBeVisible();
    const outcomeCards = page.locator('[data-testid^="outcome-card-"]');
    expect(await outcomeCards.count()).toBe(3);

    // CTA Banner
    await expect(page.getByRole("link", { name: /See Your Team's Skills/ })).toBeVisible();
  });
});

test.describe("Mobile Responsiveness - All Pages", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("home renders without horizontal scroll", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
  });

  test("solutions/chro renders without horizontal scroll", async ({ page }) => {
    await page.goto(`${BASE}/solutions/chro`);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });

  test("solutions/hr-ops renders without horizontal scroll", async ({ page }) => {
    await page.goto(`${BASE}/solutions/hr-ops`);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });

  test("solutions/managers renders without horizontal scroll", async ({ page }) => {
    await page.goto(`${BASE}/solutions/managers`);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});

test.describe("Navigation and Links", () => {
  test("navbar links work on home", async ({ page }) => {
    await page.goto(`${BASE}/`);

    await page.getByRole("link", { name: /About/ }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test("CTA links navigate correctly", async ({ page }) => {
    await page.goto(`${BASE}/`);

    await page.getByRole("link", { name: /Book a Discovery Call/ }).click();
    await expect(page).toHaveURL(/\/engage/);
  });

  test("solutions links work", async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Navigate to solutions from home
    await page.getByRole("link", { name: /solutions/i }).first().click();
    // Should navigate to one of the solutions pages
    const url = page.url();
    expect(url).toMatch(/solutions\/(chro|hr-ops|managers)/i);
  });
});
