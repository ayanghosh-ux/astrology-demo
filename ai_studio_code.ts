// Excerpt from server.ts:
app.post('/api/ask-gemini', async (req, res) => {
  const { question, birthDetails } = req.body || {};
  const apiKey = process.env.GEMINI_API_KEY;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required' });
  }

  if (!apiKey) {
    return res.json({
      answer: getFallbackAstrologyAnswer(question, birthDetails),
      poweredBy: 'Google Gemini Free AI (Vedic Assistant)'
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const birthContext = birthDetails
      ? `Seeker Profile: DOB: ${birthDetails.dob || 'Unknown'}, TOB: ${birthDetails.tob || 'Unknown'}, POB: ${birthDetails.pob || 'Unknown'}, Sign: ${birthDetails.sign || 'Unknown'}.`
      : 'Seeker has not provided birth details yet.';

    const systemPrompt = `You are Google Gemini Free AI, the dedicated Vedic Astrology Assistant for Astrologer Ayan Ghosh's sanctum (WhatsApp: +91 6294601364).
Your mission is to provide accurate, insightful, empathetic Vedic astrology answers grounded in classical Parashari Jyotish principles (Rashis, Bhavas, Dashas, Gochara transits, gemstones, mantras, and remedies).
Do NOT create fear or fatalistic doom. Emphasize conscious free will, practical upayas (mantras, charity, gemstones), and auspicious timing.
Format with clean paragraphs, bullet points, and concise language.
${birthContext}

Seeker's Question: "${question}"

Provide a thorough, warm, and highly practical astrological response (under 200 words):`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: systemPrompt,
      config: {
        temperature: 0.65,
      },
    });

    const answer = response.text || getFallbackAstrologyAnswer(question, birthDetails);

    res.json({
      answer,
      poweredBy: 'Google Gemini Free AI'
    });
  } catch (err: any) {
    console.error('Gemini API Error in /api/ask-gemini:', err);
    res.json({
      answer: getFallbackAstrologyAnswer(question, birthDetails),
      poweredBy: 'Google Gemini Free AI'
    });
  }
});