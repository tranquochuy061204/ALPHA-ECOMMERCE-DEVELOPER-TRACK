export const packages = [
  {
    id: 'package-1',
    title: '1 Bottle',
    sub_title: '1 bottle total',
    savings_text: 'Save $27.99',
    current_price: 31.96,
    original_price: 59.95,
    badge: null,
    is_selected: false,
    features: [{ type: 'shipping', text: 'Free USA Shipping' }],
  },
  {
    id: 'package-2',
    title: 'Buy 2 Get 1 Free',
    sub_title: '3 bottles total',
    savings_text: 'Save $115.93',
    current_price: 63.92,
    original_price: 179.85,
    badge: 'New Year Sale',
    is_selected: true,
    features: [
      { type: 'shipping', text: 'Free USA Shipping' },
      { type: 'ebook', text: 'Free Anti-Bloating Protocol E-book' },
    ],
  },
  {
    id: 'package-3',
    title: 'Buy 3 Get 2 Free',
    sub_title: '5 bottles total',
    savings_text: 'Save $203.87',
    current_price: 95.88,
    original_price: 299.75,
    badge: null,
    is_selected: false,
    features: [
      { type: 'shipping', text: 'Free USA Shipping' },
      { type: 'ebook', text: 'Free Anti-Bloating Protocol E-book' },
      { type: 'gift_card', text: '$20 Gift Card' },
    ],
  },
];

export const features = [
  {
    id: 1,
    image: './assets/hero_section/f1.png',
    text: 'Join over 93 Thousand who say - it WORKS!',
  },
  {
    id: 2,
    image: './assets/hero_section/f2.jxl',
    text: "Restores your body's natural 24-hour lymphatic cycle",
  },
  {
    id: 3,
    image: './assets/hero_section/f3.png',
    text: 'Helps reduce fluid retention and the appearance of puffiness and bloating',
  },
  {
    id: 4,
    image: './assets/hero_section/f4.png',
    text: 'Helps fall asleep faster, stay asleep longer and wake up energized',
  },
  {
    id: 5,
    image: './assets/hero_section/f5.png',
    text: 'Eliminates joint stiffness, pain, morning creakiness and feel more grounded',
  },
  {
    id: 6,
    image: './assets/hero_section/f6.png',
    text: 'Boosts energy, mental clarity and emotional balance',
  },
];

export const symptoms = [
  {
    id: 1,
    imgLink: './assets/section2/symptom1.webp',
    text: 'Your stomach is flat in the morning, but by evening you look six months pregnant.',
  },
  {
    id: 2,
    imgLink: './assets/section2/symptom2.jxl',
    text: 'Your ankles disappear into "kankles" by the end of the day.',
  },
  {
    id: 3,
    imgLink: './assets/section2/symptom3.webp',
    text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try",
  },
  {
    id: 4,
    imgLink: './assets/section2/symptom4.webp',
    text: "You feel foggy and exhausted even after a full night's sleep.",
  },
  {
    id: 5,
    imgLink: './assets/section2/symptom5.webp',
    text: 'You wake up stiff and achy, like your body aged overnight.',
  },
];

export const failReasons = [
  {
    id: 1,
    imgLink: 'https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360',
    title: 'You cut out gluten, dairy, sugar. You ate clean for months.',
    reason:
      "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
  },
  {
    id: 2,
    imgLink: 'https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359',
    title: 'You tried viral lymphatic drops from TikTok.',
    reason:
      'They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.',
  },
  {
    id: 3,
    imgLink: 'https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359',
    title: 'You got lymphatic massage or bought compression socks.',
    reason:
      "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
  },
];

export const ingredients = [
  {
    id: 1,
    imgLink: '//trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760939908',
    uses: 'Reactivate Lymphatic Pumps',
    name: 'Cleavers Extract',
    amount: '100mg',
    description:
      'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',
    study: 'Enhanced NK cell activity in immunosuppressed models',
  },
  {
    id: 2,
    imgLink: '//trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908',
    uses: 'Flush Excess Fluid',
    name: 'Dandelion Extract',
    amount: '250mg',
    description:
      'Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).',
    study: 'First human pilot study on diuretic effects',
  },
  {
    id: 3,
    imgLink: '//trysculptique.com/cdn/shop/files/image_2.png?v=1760939909',
    uses: 'Break Down Protein Clogs',
    name: 'Bromelain Powder',
    amount: '100mg',
    description:
      'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',
    study: 'As effective as prescription NSAIDs for inflammation',
  },
  {
    id: 4,
    imgLink: '//trysculptique.com/cdn/shop/files/image_3.png?v=1760939909',
    uses: 'Strengthen Vessel Walls',
    name: 'Rutin',
    amount: '100mg',
    description:
      "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.",
    study: 'Systematic review of 1,643 participants',
  },
  {
    id: 5,
    imgLink: '//trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909',
    uses: 'Reduce Inflammation',
    name: 'Burdock Root Powder',
    amount: '200mg',
    description:
      'Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.',
    study: '42-day trial in osteoarthritis patients',
  },
  {
    id: 6,
    imgLink: '//trysculptique.com/cdn/shop/files/image_4.png?v=1760939909',
    uses: 'Boost Immune Clearance',
    name: 'Echinacea Purpurea Extract',
    amount: '500mg',
    description:
      'Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.',
    study: 'Increased NK cell cytotoxic activity',
  },
  {
    id: 7,
    imgLink: '//trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909',
    uses: 'Support Metabolism',
    name: 'Kelp Extract',
    amount: '30mg',
    description:
      'Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.',
    study: 'Dose-dependent increase in TSH levels',
  },
  {
    id: 8,
    imgLink: '//trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910',
    uses: 'Antioxidant Protection',
    name: 'Lemon Powder',
    amount: '50mg',
    description:
      'Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.',
    study: 'Triple-masked trial in 90 participants',
  },
];

export const faqs = [
  {
    id: 1,
    title: 'How is this different from lymphatic drops I saw on TikTok?',
    content:
      'Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.\n\nSculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.',
  },
  {
    id: 2,
    title: "Why didn't my diet changes work?",
    content: `Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.`,
  },
  {
    id: 3,
    title: 'How long until I see results?',
    content: `Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.`,
  },
  {
    id: 4,
    title: 'Is this safe? Any side effects?',
    content: `Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.`,
  },
  {
    id: 5,
    title: 'Can I take this with other supplements?',
    content: `Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.`,
  },
  {
    id: 6,
    title: 'How do I use it?',
    content:
      'Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.',
  },
  {
    id: 7,
    title: "What if it doesn't work for me?",
    content: `You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.`,
  },
  {
    id: 8,
    title: 'Where is this manufactured?',
    content: `Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.`,
  },
  {
    id: 9,
    title: "Why isn't this in stores?",
    content: `Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.`,
  },
  {
    id: 10,
    title: 'Is this vegan/gluten-free?',
    content: `Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients.`,
  },
];
