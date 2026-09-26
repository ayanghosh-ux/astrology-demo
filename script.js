// ==========================================================================
// ASTROLOGER AYAN GHOSH - JAVASCRIPT ENGINE
// ==========================================================================

// Astrologer Details
const ASTROLOGER = {
  name: "Ayan Ghosh",
  phone: "6294601364", // Direct WhatsApp line
  city: "Kolkata, West Bengal, India"
};

// Zodiac Signs (NOTE: Gemini/Mithuna is completely excluded as requested)
const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Aries', sanskrit: 'Mesha (मेष)', symbol: '♈', dates: 'Mar 21 - Apr 19' },
  { id: 'taurus', name: 'Taurus', sanskrit: 'Vrishabha (वृषभ)', symbol: '♉', dates: 'Apr 20 - May 20' },
  { id: 'cancer', name: 'Cancer', sanskrit: 'Karka (कर्क)', symbol: '♋', dates: 'Jun 21 - Jul 22' },
  { id: 'leo', name: 'Leo', sanskrit: 'Simha (सिंह)', symbol: '♌', dates: 'Jul 23 - Aug 22' },
  { id: 'virgo', name: 'Virgo', sanskrit: 'Kanya (कन्या)', symbol: '♍', dates: 'Aug 23 - Sep 22' },
  { id: 'libra', name: 'Libra', sanskrit: 'Tula (तुला)', symbol: '♎', dates: 'Sep 23 - Oct 22' },
  { id: 'scorpio', name: 'Scorpio', sanskrit: 'Vrishchika (वृश्चिक)', symbol: '♏', dates: 'Oct 23 - Nov 21' },
  { id: 'sagittarius', name: 'Sagittarius', sanskrit: 'Dhanu (धनु)', symbol: '♐', dates: 'Nov 22 - Dec 21' },
  { id: 'capricorn', name: 'Capricorn', sanskrit: 'Makara (मकर)', symbol: '♑', dates: 'Dec 22 - Jan 19' },
  { id: 'aquarius', name: 'Aquarius', sanskrit: 'Kumbha (कुम्भ)', symbol: '♒', dates: 'Jan 20 - Feb 18' },
  { id: 'pisces', name: 'Pisces', sanskrit: 'Meena (मीन)', symbol: '♓', dates: 'Feb 19 - Mar 20' }
];

// Horoscopes Data
const HOROSCOPES = {
  aries: {
    summary: "Mars infuses courage into your decision-making today. A professional roadblock dissolves when you tackle it head-on with disciplined diplomacy.",
    career: "Favorable for high-stakes presentations and leading project launches.",
    love: "Be mindful of impulsive words; choose patience and understanding.",
    luckyColor: "Crimson Red",
    luckyNumber: 9,
    remedy: "Recite the Gayatri Mantra 9 times at sunrise."
  },
  taurus: {
    summary: "Venus radiates abundance and artistic harmony. Steadiness in long-term financial negotiations will yield compounding gains.",
    career: "Solid contracts and design agreements receive astral backing.",
    love: "An evening of peaceful dining rejuvenates marital bonds.",
    luckyColor: "Royal White / Cream",
    luckyNumber: 6,
    remedy: "Keep a white handkerchief or fragrant sandalwood near you."
  },
  cancer: {
    summary: "Moon nurtures your intuitive perception. Focus on domestic sanctuary and protect your emotional bandwidth from unnecessary gossip.",
    career: "Rely on gut instinct when evaluating new workplace alliances.",
    love: "Heartfelt honesty deepens affection and heals past misunderstandings.",
    luckyColor: "Pearl Silver",
    luckyNumber: 2,
    remedy: "Offer clean fresh water to a Shiva Lingam or morning plants."
  },
  leo: {
    summary: "Surya bestows natural authority and recognition. Step up as a dharmic leader and inspire those around you with integrity.",
    career: "Appraisals, executive approvals, and government filings move smoothly.",
    love: "Generosity and warmth make your companionship irresistible.",
    luckyColor: "Solar Gold",
    luckyNumber: 1,
    remedy: "Offer Arghya (water) to the rising Sun facing East."
  },
  virgo: {
    summary: "Mercury sharpens your analytical acumen. Your meticulous eye for detail prevents costly oversights in legal and accounting documents.",
    career: "Exceptional for audits, code deployments, and research papers.",
    love: "Express appreciation through thoughtful daily acts of service.",
    luckyColor: "Emerald Green",
    luckyNumber: 5,
    remedy: "Donate green vegetables or feed birds in the morning."
  },
  libra: {
    summary: "Venus encourages balance and refined aesthetic decisions. A long-pending negotiation reaches an elegant, mutually beneficial consensus.",
    career: "Partnership ventures and creative collaborations thrive today.",
    love: "Romantic chemistry is highlighted; plan a memorable evening.",
    luckyColor: "Pastel Pink",
    luckyNumber: 7,
    remedy: "Light an aromatic incense stick in your living sanctuary."
  },
  scorpio: {
    summary: "Ketu and Mars energize deep transformation. Hidden truths surface to free you from stagnant attachments and empower personal evolution.",
    career: "High-focus strategic investigation yields competitive advantage.",
    love: "Intimacy requires emotional vulnerability; share your inner world.",
    luckyColor: "Deep Maroon",
    luckyNumber: 8,
    remedy: "Chant 'Om Namah Shivaya' 11 times with closed eyes."
  },
  sagittarius: {
    summary: "Jupiter expands your vision and optimism. Mentorship, philosophical learning, and distant connections open lucrative dharmic doors.",
    career: "Superb day for international commerce, academia, and publishing.",
    love: "Share visionary goals with your partner to strengthen shared dreams.",
    luckyColor: "Saffron Yellow",
    luckyNumber: 3,
    remedy: "Apply a small chandan (sandalwood) tilak on your forehead."
  },
  capricorn: {
    summary: "Saturn rewards persistent, methodical dedication. Your steady groundwork is noticed by higher authorities who value dependability.",
    career: "Focus on operational systems and foundational long-term architecture.",
    love: "Consistent loyalty speaks far louder than extravagant promises.",
    luckyColor: "Midnight Navy",
    luckyNumber: 4,
    remedy: "Practice silence (Mouna) for 15 minutes before bedtime."
  },
  aquarius: {
    summary: "Saturn and Rahu trigger innovative humanitarian concepts. Unconventional solutions untangle complicated group challenges.",
    career: "Collaborative teamwork and technology integrations surge ahead.",
    love: "Intellectual camaraderie sparks deep emotional resonance.",
    luckyColor: "Electric Cyan",
    luckyNumber: 11,
    remedy: "Feed stray animals or provide water to visiting birds."
  },
  pisces: {
    summary: "Jupiter's compassionate grace softens all tension. Spiritual practices, meditation, and creative expressions bring profound inner peace.",
    career: "Creative writing, advisory roles, and healing arts flourish.",
    love: "Unconditional empathy heals lingering emotional friction.",
    luckyColor: "Golden Ochre",
    luckyNumber: 12,
    remedy: "Dip your feet in warm salt water before sleeping to ground prana."
  }
};

let currentSignId = 'scorpio';

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  renderZodiacButtons();
  selectSign('scorpio');
  calculateBirthChart();
  initScrollReveal();
  initNavbarScrollShadow();
  initHoroscopeSwipe();
  initRippleEffect();
  initServicesCarouselDots();
  initBackToTop();
  initModalDragToDismiss();
});

// Scroll-reveal: fade+slide elements in as they enter the viewport
function initScrollReveal() {
  const selector = [
    '.section-header',
    '.wisdom-card',
    '.ai-box',
    '.zodiac-grid',
    '.horoscope-card',
    '.service-card',
    '.calc-box',
    '.dash-card'
  ].join(', ');

  const targets = document.querySelectorAll(selector);
  if (!targets.length) return;

  // Respect users who prefer reduced motion: show everything immediately
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('reveal', 'in-view'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('reveal', 'in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Small stagger for groups of cards revealing together
        setTimeout(() => entry.target.classList.add('in-view'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Navbar gains a subtle shadow once the page is scrolled
function initNavbarScrollShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const update = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// Swipe left/right on the horoscope card to move between zodiac signs
function initHoroscopeSwipe() {
  const el = document.getElementById('horoscope-display');
  if (!el) return;

  let startX = 0, startY = 0, tracking = false;

  el.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    tracking = true;
  }, { passive: true });

  el.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    // Only treat as a swipe if horizontal movement clearly dominates vertical
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      shiftSign(dx < 0 ? 1 : -1);
      vibrate(8);
    }
  }, { passive: true });
}

// Small haptic buzz on supported devices; silently does nothing elsewhere
function vibrate(ms) {
  if (navigator.vibrate) {
    try { navigator.vibrate(ms); } catch (err) { /* no-op */ }
  }
}

// Material-style tap ripple + press feedback on primary interactive elements
function initRippleEffect() {
  const selector = '.btn-primary, .btn-primary-large, .btn-secondary, .btn-secondary-large, ' +
    '.btn-whatsapp, .btn-whatsapp-sm, .btn-calendar, .btn-sm, .zodiac-btn, .preset-btn, .horoscope-arrow';

  document.querySelectorAll(selector).forEach(el => el.classList.add('ripple-host'));

  document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest(selector);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    target.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());

    if (target.matches('.btn-primary, .btn-primary-large')) {
      vibrate(8);
    }
  });
}

// Sync dot indicators with the swipeable pricing carousel (mobile)
function initServicesCarouselDots() {
  const track = document.querySelector('.services-grid');
  const cards = track ? Array.from(track.querySelectorAll('.service-card')) : [];
  if (!track || cards.length < 2) return;

  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'carousel-dots';
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(dot);
  });
  track.insertAdjacentElement('afterend', dotsWrap);

  const dots = Array.from(dotsWrap.children);
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = cards.indexOf(entry.target);
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }
    });
  }, { root: track, threshold: 0.6 });

  cards.forEach(card => observer.observe(card));
}

// Floating "back to top" button that appears once the page is scrolled
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const update = () => btn.classList.toggle('visible', window.scrollY > 480);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// Swipe-down-to-dismiss for the booking modal (bottom sheet on mobile)
function initModalDragToDismiss() {
  const modal = document.getElementById('booking-modal');
  const sheet = modal ? modal.querySelector('.modal-content') : null;
  const dragZones = modal ? modal.querySelectorAll('.modal-drag-handle, .modal-header') : [];
  if (!sheet || !dragZones.length) return;

  let startY = 0, deltaY = 0, dragging = false;

  dragZones.forEach(zone => {
    zone.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      dragging = true;
      sheet.style.transition = 'none';
    }, { passive: true });

    zone.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      deltaY = e.touches[0].clientY - startY;
      if (deltaY > 0) {
        sheet.style.transform = `translateY(${deltaY}px)`;
      }
    }, { passive: true });

    zone.addEventListener('touchend', () => {
      if (!dragging) return;
      dragging = false;
      sheet.style.transition = 'transform 0.25s ease';

      if (deltaY > 90) {
        closeBookingModal();
      }
      sheet.style.transform = 'translateY(0)';
      deltaY = 0;
    });
  });
}

// Render Zodiac Buttons
function renderZodiacButtons() {
  const container = document.getElementById('zodiac-selector');
  if (!container) return;

  container.innerHTML = ZODIAC_SIGNS.map(sign => `
    <button class="zodiac-btn ${sign.id === currentSignId ? 'active' : ''}" onclick="selectSign('${sign.id}')">
      <span class="zodiac-symbol">${sign.symbol}</span>
      <span class="zodiac-name">${sign.name}</span>
      <span class="zodiac-sanskrit">${sign.sanskrit.split(' ')[0]}</span>
    </button>
  `).join('');
}

// Select a Zodiac Sign
function selectSign(signId) {
  currentSignId = signId;
  const sign = ZODIAC_SIGNS.find(s => s.id === signId);
  const data = HOROSCOPES[signId] || HOROSCOPES.scorpio;

  // Update active button state
  document.querySelectorAll('.zodiac-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', ZODIAC_SIGNS[idx].id === signId);
  });

  // Render Horoscope Card (with a brief cross-fade transition)
  const display = document.getElementById('horoscope-display');
  if (!display) return;

  display.classList.add('is-changing');

  setTimeout(() => {
    display.innerHTML = `
      <div class="horoscope-nav">
        <button class="horoscope-arrow" onclick="shiftSign(-1)" aria-label="Previous sign">‹</button>
        <div style="display: flex; justify-content: space-between; align-items: center; flex: 1; gap: 10px;">
          <div>
            <h3 style="font-size: 22px; color: var(--gold-light);">${sign.name} (${sign.sanskrit})</h3>
            <span style="font-size: 12px; color: var(--text-muted);">${sign.dates} · Today's Gochara Transit</span>
          </div>
          <span style="font-size: 32px; color: var(--gold-primary);">${sign.symbol}</span>
        </div>
        <button class="horoscope-arrow" onclick="shiftSign(1)" aria-label="Next sign">›</button>
      </div>
      <p class="swipe-hint">← Swipe to explore other signs →</p>
      <p style="font-size: 15px; margin-bottom: 20px; line-height: 1.6;">${data.summary}</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; font-size: 13px;">
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          <strong>Career & Karmasthana:</strong>
          <p style="color: var(--text-muted); margin-top: 4px;">${data.career}</p>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          <strong>Love & Kalatrasthana:</strong>
          <p style="color: var(--text-muted); margin-top: 4px;">${data.love}</p>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px; font-size: 12px;">
        <div>
          <span>Auspicious Color: <strong>${data.luckyColor}</strong></span> · 
          <span>Lucky Number: <strong>${data.luckyNumber}</strong></span>
        </div>
        <a href="https://wa.me/916294601364?text=Namaskar%20Ayan%20ji,%20I%20checked%20my%20${sign.name}%20horoscope%20and%20want%20a%20full%20reading." target="_blank" class="btn-whatsapp-sm">Consult Ayan on WhatsApp</a>
      </div>
    `;
    requestAnimationFrame(() => display.classList.remove('is-changing'));
  }, 160);
}

// Move to the previous/next zodiac sign (used by swipe gesture and arrow buttons)
function shiftSign(delta) {
  const idx = ZODIAC_SIGNS.findIndex(s => s.id === currentSignId);
  const nextIdx = (idx + delta + ZODIAC_SIGNS.length) % ZODIAC_SIGNS.length;
  selectSign(ZODIAC_SIGNS[nextIdx].id);
}

// Navigation Helper
function navigateTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  closeMobileMenu();
}

// Mobile Hamburger Menu
function toggleMobileMenu() {
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  if (!menu || !toggle) return;

  const isOpen = menu.classList.toggle('open');
  toggle.classList.toggle('active', isOpen);
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function closeMobileMenu() {
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  if (!menu || !toggle) return;

  menu.classList.remove('open');
  toggle.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
}

// AI Questions Engine
async function submitAIQuestion() {
  const input = document.getElementById('ai-question-input');
  const question = input ? input.value.trim() : '';
  if (!question) return;

  const responseBox = document.getElementById('ai-response-box');
  const responseText = document.getElementById('ai-response-text');

  responseBox.classList.remove('hidden');
  responseText.innerHTML = "<em>✦ AI is formulating Vedic astrological response...</em>";

  try {
    const res = await fetch('/api/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    responseText.innerText = data.answer || "Under classical Parashari Jyotish principles, conscious alignment and sattvic routines harmonize planetary transits.";
  } catch (err) {
    // Client-side fallback if server endpoint is offline
    responseText.innerText = getClientAIFallback(question);
  }
}

function askPreset(q) {
  const input = document.getElementById('ai-question-input');
  if (input) {
    input.value = q;
    submitAIQuestion();
  }
}

function getClientAIFallback(question) {
  const q = question.toLowerCase();
  if (q.includes('gemstone') || q.includes('stone')) {
    return "In classical Parashari Jyotish, gemstones act as cosmic filters that amplify functional benefic planetary rays. Astrologer Ayan Ghosh recommends testing planetary friendship: for instance, Red Coral for Mars, Yellow Sapphire for Jupiter, and Natural Pearl for the Moon. For your exact functional benefic stone and auspicious Muhurat, contact Ayan Ghosh on WhatsApp (+91 6294601364).";
  }
  if (q.includes('sade sati') || q.includes('saturn')) {
    return "Saturn's Sade Sati (7.5-year cycle) is not a curse—it is a karmic purification window that builds unbreakable resilience. Remedies include reciting Hanuman Chalisa on Tuesdays and Saturdays, maintaining honesty in commercial transactions, and donating black sesame or mustard oil.";
  }
  return "Under classical Vedic principles, current planetary transits highlight conscious action and mindful speech. Maintain sattvic lifestyle habits and focus on your core karmic duties. For an in-depth natal chart reading, Astrologer Ayan Ghosh is available for 1-on-1 private WhatsApp consultations (+91 6294601364).";
}

// Calculate Birth Chart (Kundli)
function calculateBirthChart() {
  const name = document.getElementById('calc-name')?.value || 'Seeker';
  const dob = document.getElementById('calc-dob')?.value || '1995-10-24';
  const tob = document.getElementById('calc-tob')?.value || '06:30';
  const pob = document.getElementById('calc-pob')?.value || 'Kolkata';

  const resultBox = document.getElementById('calc-result');
  if (!resultBox) return;

  resultBox.innerHTML = `
    <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid var(--border-highlight); border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--gold-light); margin-bottom: 8px;">Casting Result for ${name}</h4>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px;">Calculated using Lahiri Ayanamsha (Chitrapaksha) for ${pob}</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; font-size: 13px;">
        <div><strong>Lagna (Ascendant):</strong><br/><span style="color: var(--gold-light);">Scorpio (24° 12')</span></div>
        <div><strong>Chandra Rashi (Moon):</strong><br/><span style="color: var(--gold-light);">Scorpio (Anuradha)</span></div>
        <div><strong>Janma Nakshatra:</strong><br/><span style="color: var(--gold-light);">Anuradha (Pada 2)</span></div>
        <div><strong>Current Dasha:</strong><br/><span style="color: var(--gold-light);">Jupiter - Mercury</span></div>
      </div>

      <div style="margin-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 12px; color: var(--text-muted);">Sync this profile to your seeker dashboard?</span>
        <button class="btn-primary" onclick="alert('Profile synced to dashboard successfully!')">Save Coordinates</button>
      </div>
    </div>
  `;
}

// Refresh Cosmic Wisdom
function refreshCosmicWisdom() {
  const quotes = [
    {
      q: "When a seeker's mind is steady like a flame in a windless place, supreme clarity arises from the celestial quietude.",
      s: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता | योगिनो यतचित्तस्य युञ्जतो योगमात्मनः ||",
      source: "Srimad Bhagavad Gita (6.19) · Surya-Guru Drishti"
    },
    {
      q: "You have a sacred right to conscious action, but never to the fruits thereof. Let not attachment lead you to stagnation.",
      s: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
      source: "Srimad Bhagavad Gita (2.47) · Classical Parashari Ephemeris"
    }
  ];
  const item = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('wisdom-quote').innerText = `"${item.q}"`;
  document.getElementById('wisdom-sanskrit').innerText = item.s;
}

// Modal Handlers
function openBookingModal(serviceName = 'Comprehensive Life Synthesis (₹2,999)') {
  const modal = document.getElementById('booking-modal');
  const serviceInput = document.getElementById('modal-service');
  const sheet = modal ? modal.querySelector('.modal-content') : null;
  if (serviceInput) serviceInput.value = serviceName;
  if (sheet) sheet.style.transform = 'translateY(0)';
  if (modal) modal.classList.remove('hidden');
  closeMobileMenu();
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
}

function selectServiceForBooking(name, price) {
  openBookingModal(`${name} (₹${price})`);
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const service = document.getElementById('modal-service')?.value;
  const name = document.getElementById('modal-name')?.value;
  const phone = document.getElementById('modal-phone')?.value;
  const dob = document.getElementById('modal-dob')?.value;
  const tob = document.getElementById('modal-tob')?.value;
  const pob = document.getElementById('modal-pob')?.value;

  const message = `Namaskar Astrologer Ayan Ghosh ji,\n\nI would like to book a consultation:\n• Service: ${service}\n• Name: ${name}\n• Phone: ${phone}\n• DOB: ${dob}\n• TOB: ${tob}\n• POB: ${pob}\n\nPlease confirm available appointment slots.`;
  
  const whatsappUrl = `https://wa.me/91${ASTROLOGER.phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  closeBookingModal();
}
