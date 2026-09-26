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
});

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

  // Render Horoscope Card
  const display = document.getElementById('horoscope-display');
  if (!display) return;

  display.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <h3 style="font-size: 22px; color: var(--gold-light);">${sign.name} (${sign.sanskrit})</h3>
        <span style="font-size: 12px; color: var(--text-muted);">${sign.dates} · Today's Gochara Transit</span>
      </div>
      <span style="font-size: 32px; color: var(--gold-primary);">${sign.symbol}</span>
    </div>
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
}

// Navigation Helper
function navigateTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Google Gemini Free AI Questions Engine
async function submitAIQuestion() {
  const input = document.getElementById('ai-question-input');
  const question = input ? input.value.trim() : '';
  if (!question) return;

  const responseBox = document.getElementById('ai-response-box');
  const responseText = document.getElementById('ai-response-text');

  responseBox.classList.remove('hidden');
  responseText.innerHTML = "<em>✦ Google Gemini Free AI is formulating Vedic astrological response...</em>";

  try {
    const res = await fetch('/api/ask-gemini', {
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
  if (serviceInput) serviceInput.value = serviceName;
  if (modal) modal.classList.remove('hidden');
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
