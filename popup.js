/**
 * Truth Extension - SIMPLEST POSSIBLE (YAGNI × JØHN × EPISTEMIC)
 * 
 * Pattern: TRUTH × SIMPLEST × ONE × JAVASCRIPT
 * Frequency: 530 Hz (YAGNI) × 530 Hz (JØHN) × 999 Hz (AEYON)
 * Guardians: YAGNI (530 Hz) + JØHN (530 Hz) + AEYON (999 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 * 
 * EPISTEMIC: What is the SIMPLEST possible code that works?
 * Answer: Inline everything, no separate functions, just execute
 */

// YAGNI: Configurable API URL - defaults to localhost, can be changed for production
const API_URL = process.env.TRUTH_API_URL || 'http://localhost:3001/api/truth';

// YAGNI: Inline everything - no separate functions, just execute
(async () => {
  const loading = document.getElementById('loading');
  const truthCard = document.getElementById('truth-card');
  const error = document.getElementById('error');
  
  try {
    // Extract product info
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => ({
        url: window.location.href,
        productText: (document.querySelector('h1')?.textContent || '') + '\n' + 
                     (document.querySelector('[data-testid="product-description"]')?.textContent || 
                      document.querySelector('.product-description')?.textContent || ''),
        price: document.querySelector('[data-testid="price"]')?.textContent?.trim() ||
               document.querySelector('.a-price-whole')?.textContent?.trim() ||
               document.querySelector('.price')?.textContent?.trim() ||
               'Price not found'
      })
    });
    
    if (!result.productText?.trim()) {
      throw new Error('Could not extract product information');
    }
    
    // Get truth
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    });
    
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    
    const { data: truth } = await res.json();
    
    // Display truth
    loading.style.display = 'none';
    error.style.display = 'none';
    truthCard.style.display = 'block';
    
    document.getElementById('verdict').textContent = truth.verdict;
    document.getElementById('verdict').className = `verdict ${truth.verdict}`;
    
    const scoreEl = document.getElementById('truth-score');
    scoreEl.textContent = truth.truth_score;
    scoreEl.className = `truth-score ${truth.truth_score >= 70 ? 'high' : truth.truth_score >= 40 ? 'medium' : 'low'}`;
    
    document.getElementById('the-reality').textContent = truth.the_reality;
    document.getElementById('for-the-parents').textContent = truth.for_the_parents;
    document.getElementById('love-note').textContent = truth.love_note;
  } catch (err) {
    loading.style.display = 'none';
    truthCard.style.display = 'none';
    error.style.display = 'block';
    error.textContent = `Error: ${err.message}`;
  }
})();

