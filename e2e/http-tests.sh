#!/bin/bash

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="http://localhost:3000"
PASSED=0
FAILED=0

test_page() {
    local path=$1
    local expected_content=$2
    
    echo -n "Testing $path... "
    
    response=$(curl -s "$BASE_URL$path")
    http_code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$path")
    
    if [ "$http_code" = "200" ]; then
        if echo "$response" | grep -q "$expected_content"; then
            echo -e "${GREEN}✓ PASS${NC} (200 OK, content verified)"
            ((PASSED++))
        else
            echo -e "${RED}✗ FAIL${NC} (200 OK but content missing: '$expected_content')"
            ((FAILED++))
        fi
    else
        echo -e "${RED}✗ FAIL${NC} (HTTP $http_code)"
        ((FAILED++))
    fi
}

test_no_html_links() {
    echo -n "Testing for .html file links... "
    
    response=$(curl -s "$BASE_URL/")
    
    if echo "$response" | grep -q "\.html"; then
        echo -e "${RED}✗ FAIL${NC} (Found .html file links)"
        ((FAILED++))
    else
        echo -e "${GREEN}✓ PASS${NC} (No .html links found)"
        ((PASSED++))
    fi
}

test_heading_tags() {
    echo -n "Testing for proper heading tags... "
    
    response=$(curl -s "$BASE_URL/")
    
    if echo "$response" | grep -q "<h1" && echo "$response" | grep -q "<h2"; then
        echo -e "${GREEN}✓ PASS${NC} (Heading tags present)"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAIL${NC} (Missing heading tags)"
        ((FAILED++))
    fi
}

test_responsive_design() {
    echo -n "Testing responsive design meta tag... "
    
    response=$(curl -s "$BASE_URL/")
    
    if echo "$response" | grep -q 'viewport'; then
        echo -e "${GREEN}✓ PASS${NC} (Viewport meta tag present)"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAIL${NC} (Missing viewport meta tag)"
        ((FAILED++))
    fi
}

test_navbar_footer() {
    echo -n "Testing navbar and footer presence... "
    
    response=$(curl -s "$BASE_URL/")
    
    if echo "$response" | grep -q "<nav" && echo "$response" | grep -q "<footer"; then
        echo -e "${GREEN}✓ PASS${NC} (Navbar and footer present)"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAIL${NC} (Navbar or footer missing)"
        ((FAILED++))
    fi
}

test_cta_buttons() {
    echo -n "Testing CTA buttons... "
    
    response=$(curl -s "$BASE_URL/")
    
    if echo "$response" | grep -qE "href=.*engage|Book.*Demo|Demo"; then
        echo -e "${GREEN}✓ PASS${NC} (CTA buttons present)"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAIL${NC} (CTA buttons missing)"
        ((FAILED++))
    fi
}

# Run tests
echo -e "${YELLOW}=== WorkRedesign Website HTTP Tests ===${NC}\n"
echo -e "${YELLOW}Page Load Tests:${NC}"

# Test all pages
test_page "/" "Know what your people"
test_page "/about" "We exist to make skills"
test_page "/blog" "Insights"
test_page "/careers" "Build the Future"
test_page "/contact" "Get in Touch"
test_page "/engage" "How We Work"
test_page "/how-it-works" "From Raw HRIS"
test_page "/pricing" "Straightforward Pricing"
test_page "/security" "Built for the Enterprise"
test_page "/solutions/chro" "Board-Ready"
test_page "/solutions/hr-ops" "One Governed"
test_page "/solutions/managers" "Make Your Team"

echo ""
echo -e "${YELLOW}Content Tests:${NC}"

test_no_html_links
test_heading_tags
test_responsive_design
test_navbar_footer
test_cta_buttons

# Summary
echo ""
echo -e "${YELLOW}=== Test Results ===${NC}"
echo -e "Passed: ${GREEN}${PASSED}${NC}"
echo -e "Failed: ${RED}${FAILED}${NC}"
echo -e "Total: $((PASSED + FAILED))"

if [ $FAILED -eq 0 ]; then
    echo -e "\n${GREEN}All tests passed!${NC}"
    exit 0
else
    echo -e "\n${RED}Some tests failed.${NC}"
    exit 1
fi
