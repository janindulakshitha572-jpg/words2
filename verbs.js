const VERBS = [
  {
    "id": 101,
    "base": "learn",
    "vpt": "learnt / learned",
    "vpp": "learnt / learned",
    "sinhala": "ඉගෙන ගන්නවා"
  },
  {
    "id": 102,
    "base": "leave",
    "vpt": "left",
    "vpp": "left",
    "sinhala": "පිටත්ව යනවා / අතහරිනවා"
  },
  {
    "id": 103,
    "base": "lend",
    "vpt": "lent",
    "vpp": "lent",
    "sinhala": "ණයට දෙනවා"
  },
  {
    "id": 104,
    "base": "let",
    "vpt": "let",
    "vpp": "let",
    "sinhala": "ඉඩ දෙනවා"
  },
  {
    "id": 105,
    "base": "lie",
    "vpt": "lay",
    "vpp": "lain",
    "sinhala": "වැතිර සිටිනවා"
  },
  {
    "id": 106,
    "base": "light",
    "vpt": "lit / lighted",
    "vpp": "lit / lighted",
    "sinhala": "දල්වනවා / ආලෝක කරනවා"
  },
  {
    "id": 107,
    "base": "lose",
    "vpt": "lost",
    "vpp": "lost",
    "sinhala": "නැති කරගන්නවා"
  },
  {
    "id": 108,
    "base": "make",
    "vpt": "made",
    "vpp": "made",
    "sinhala": "හදනවා"
  },
  {
    "id": 109,
    "base": "mean",
    "vpt": "meant",
    "vpp": "meant",
    "sinhala": "අදහස් කරනවා"
  },
  {
    "id": 110,
    "base": "meet",
    "vpt": "met",
    "vpp": "met",
    "sinhala": "හමුවෙනවා"
  },
  {
    "id": 111,
    "base": "misgive",
    "vpt": "misgave",
    "vpp": "misgiven",
    "sinhala": "සැකයක් ඇති වෙනවා"
  },
  {
    "id": 112,
    "base": "mishear",
    "vpt": "misheard",
    "vpp": "misheard",
    "sinhala": "වැරදී ඇසෙනවා"
  },
  {
    "id": 113,
    "base": "mislay",
    "vpt": "mislaid",
    "vpp": "mislaid",
    "sinhala": "වැරදෙන තැන තබනවා"
  },
  {
    "id": 114,
    "base": "mislead",
    "vpt": "misled",
    "vpp": "misled",
    "sinhala": "නොමග යවනවා"
  },
  {
    "id": 115,
    "base": "misread",
    "vpt": "misread",
    "vpp": "misread",
    "sinhala": "වැරදි ලෙස කියවනවා"
  },
  {
    "id": 116,
    "base": "misspell",
    "vpt": "misspelt / misspelled",
    "vpp": "misspelt / misspelled",
    "sinhala": "අක්‍ෂර වින්‍යාසය වැරදීමට ලියනවා"
  },
  {
    "id": 117,
    "base": "mistake",
    "vpt": "mistook",
    "vpp": "mistaken",
    "sinhala": "වැරදි තේරුම් ගන්නවා"
  },
  {
    "id": 118,
    "base": "misunderstand",
    "vpt": "misunderstood",
    "vpp": "misunderstood",
    "sinhala": "වැරදි තේරුම් ගන්නවා"
  },
  {
    "id": 119,
    "base": "mow",
    "vpt": "mowed",
    "vpp": "mown / mowed",
    "sinhala": "තණකොළ කපනවා"
  },
  {
    "id": 120,
    "base": "offset",
    "vpt": "offset",
    "vpp": "offset",
    "sinhala": "සමබර කරනවා / පියවනවා"
  },
  {
    "id": 121,
    "base": "outbid",
    "vpt": "outbid",
    "vpp": "outbid / outbidden",
    "sinhala": "වැඩි ලංසුවක් තබනවා"
  },
  {
    "id": 122,
    "base": "outdo",
    "vpt": "outdid",
    "vpp": "outdone",
    "sinhala": "අභිබවා යනවා"
  },
  {
    "id": 123,
    "base": "outgrow",
    "vpt": "outgrew",
    "vpp": "outgrown",
    "sinhala": "වර්ධනය වී ඉක්මවා යනවා"
  },
  {
    "id": 124,
    "base": "outrun",
    "vpt": "outran",
    "vpp": "outrun",
    "sinhala": "වේගයෙන් ඉස්සර වෙනවා"
  },
  {
    "id": 125,
    "base": "outsell",
    "vpt": "outsold",
    "vpp": "outsold",
    "sinhala": "වැඩි ප්‍රමාණයක් අලෙවි කරනවා"
  },
  {
    "id": 126,
    "base": "overcome",
    "vpt": "overcame",
    "vpp": "overcome",
    "sinhala": "ජය ගන්නවා / මැඩපවත්වනවා"
  },
  {
    "id": 127,
    "base": "overdo",
    "vpt": "overdid",
    "vpp": "overdone",
    "sinhala": "අධික ලෙස කරනවා"
  },
  {
    "id": 128,
    "base": "overeat",
    "vpt": "overate",
    "vpp": "overeaten",
    "sinhala": "අධික ලෙස කනවා"
  },
  {
    "id": 129,
    "base": "overhear",
    "vpt": "overheard",
    "vpp": "overheard",
    "sinhala": "අහම්බයෙන් ඇසෙනවා"
  },
  {
    "id": 130,
    "base": "overlay",
    "vpt": "overlaid",
    "vpp": "overlaid",
    "sinhala": "මත අතුරනවා"
  },
  {
    "id": 131,
    "base": "overpay",
    "vpt": "overpaid",
    "vpp": "overpaid",
    "sinhala": "අධික මුදලක් ගෙවනවා"
  },
  {
    "id": 132,
    "base": "override",
    "vpt": "overrode",
    "vpp": "overridden",
    "sinhala": "බලපෑම් අහෝසි බලය භාවිතා කරනවා"
  },
  {
    "id": 133,
    "base": "overrun",
    "vpt": "overran",
    "vpp": "overrun",
    "sinhala": "ඉක්මවා පැතිරෙනවා"
  },
  {
    "id": 134,
    "base": "oversee",
    "vpt": "oversaw",
    "vpp": "overseen",
    "sinhala": "පරීක්‍ෂාකාරීව බලනවා"
  },
  {
    "id": 135,
    "base": "overshoot",
    "vpt": "overshot",
    "vpp": "overshot",
    "sinhala": "ඉලක්කය ඉක්මවා යනවා"
  },
  {
    "id": 136,
    "base": "oversleep",
    "vpt": "overslept",
    "vpp": "overslept",
    "sinhala": "වැඩි වේලාවක් නිදාගන්නවා"
  },
  {
    "id": 137,
    "base": "overtake",
    "vpt": "overtook",
    "vpp": "overtaken",
    "sinhala": "ඉස්සර කරනවා"
  },
  {
    "id": 138,
    "base": "overthrow",
    "vpt": "overthrew",
    "vpp": "overthrown",
    "sinhala": "පෙරළා දමනවා"
  },
  {
    "id": 139,
    "base": "partake",
    "vpt": "partook",
    "vpp": "partaken",
    "sinhala": "සහභාගී වෙනවා / අනුභව විඳිනවා"
  },
  {
    "id": 140,
    "base": "pay",
    "vpt": "paid",
    "vpp": "paid",
    "sinhala": "ගෙවනවා"
  },
  {
    "id": 141,
    "base": "plead",
    "vpt": "pleaded / pled",
    "vpp": "pleaded / pled",
    "sinhala": "අයැද සිටිනවා"
  },
  {
    "id": 142,
    "base": "prepay",
    "vpt": "prepaid",
    "vpp": "prepaid",
    "sinhala": "කලින් ගෙවනවා"
  },
  {
    "id": 143,
    "base": "prove",
    "vpt": "proved",
    "vpp": "proven / proved",
    "sinhala": "ඔප්පු කරනවා"
  },
  {
    "id": 144,
    "base": "put",
    "vpt": "put",
    "vpp": "put",
    "sinhala": "තබනවා"
  },
  {
    "id": 145,
    "base": "quit",
    "vpt": "quit / quitted",
    "vpp": "quit / quitted",
    "sinhala": "අතහරිනවා / නවත්වනවා"
  },
  {
    "id": 146,
    "base": "read",
    "vpt": "read",
    "vpp": "read",
    "sinhala": "කියවනවා"
  },
  {
    "id": 147,
    "base": "rebuild",
    "vpt": "rebuilt",
    "vpp": "rebuilt",
    "sinhala": "නැවත ගොඩනගනවා"
  },
  {
    "id": 148,
    "base": "redo",
    "vpt": "redid",
    "vpp": "redone",
    "sinhala": "නැවත කරනවා"
  },
  {
    "id": 149,
    "base": "repay",
    "vpt": "repaid",
    "vpp": "repaid",
    "sinhala": "නැවත ගෙවනවා"
  },
  {
    "id": 150,
    "base": "rerun",
    "vpt": "reran",
    "vpp": "rerun",
    "sinhala": "නැවත ධාවනය කරනවා"
  },
  {
    "id": 151,
    "base": "resell",
    "vpt": "resold",
    "vpp": "resold",
    "sinhala": "නැවත විකුණනවා"
  },
  {
    "id": 152,
    "base": "reset",
    "vpt": "reset",
    "vpp": "reset",
    "sinhala": "නැවත සකස් කරනවා"
  },
  {
    "id": 153,
    "base": "retake",
    "vpt": "retook",
    "vpp": "retaken",
    "sinhala": "නැවත ගන්නවා / නැවත විභාගයට පෙනී සිටිනවා"
  },
  {
    "id": 154,
    "base": "rewrite",
    "vpt": "rewrote",
    "vpp": "rewritten",
    "sinhala": "නැවත ලියනවා"
  },
  {
    "id": 155,
    "base": "rid",
    "vpt": "rid",
    "vpp": "rid",
    "sinhala": "ඉවත් කරනවා"
  },
  {
    "id": 156,
    "base": "ride",
    "vpt": "rode",
    "vpp": "ridden",
    "sinhala": "පදින්නවා"
  },
  {
    "id": 157,
    "base": "ring",
    "vpt": "rang",
    "vpp": "rung",
    "sinhala": "නාද කරනවා / නාද වෙනවා"
  },
  {
    "id": 158,
    "base": "rise",
    "vpt": "rose",
    "vpp": "risen",
    "sinhala": "ඉහළ යනවා / නැගී සිටිනවා"
  },
  {
    "id": 159,
    "base": "run",
    "vpt": "ran",
    "vpp": "run",
    "sinhala": "දුවනවා"
  },
  {
    "id": 160,
    "base": "say",
    "vpt": "said",
    "vpp": "said",
    "sinhala": "පවසනවා"
  },
  {
    "id": 161,
    "base": "see",
    "vpt": "saw",
    "vpp": "seen",
    "sinhala": "දකිනවා"
  },
  {
    "id": 162,
    "base": "seek",
    "vpt": "sought",
    "vpp": "sought",
    "sinhala": "සොයනවා"
  },
  {
    "id": 163,
    "base": "sell",
    "vpt": "sold",
    "vpp": "sold",
    "sinhala": "විකුණනවා"
  },
  {
    "id": 164,
    "base": "send",
    "vpt": "sent",
    "vpp": "sent",
    "sinhala": "යවනවා"
  },
  {
    "id": 165,
    "base": "set",
    "vpt": "set",
    "vpp": "set",
    "sinhala": "තබනවා / සකස් කරනවා"
  },
  {
    "id": 166,
    "base": "sew",
    "vpt": "sewed",
    "vpp": "sewn / sewed",
    "sinhala": "මහනවා"
  },
  {
    "id": 167,
    "base": "shake",
    "vpt": "shook",
    "vpp": "shaken",
    "sinhala": "සොලවනවා"
  },
  {
    "id": 168,
    "base": "shave",
    "vpt": "shaved",
    "vpp": "shaven / shaved",
    "sinhala": "රැවුල කපනවා"
  },
  {
    "id": 169,
    "base": "shear",
    "vpt": "sheared",
    "vpp": "shorn / sheared",
    "sinhala": "කපනවා / ලොම් කපනවා"
  },
  {
    "id": 170,
    "base": "shed",
    "vpt": "shed",
    "vpp": "shed",
    "sinhala": "හලනවා / වැගිරෙනවා"
  },
  {
    "id": 171,
    "base": "shine",
    "vpt": "shone / shined",
    "vpp": "shone / shined",
    "sinhala": "බැබළෙනවා"
  },
  {
    "id": 172,
    "base": "shoot",
    "vpt": "shot",
    "vpp": "shot",
    "sinhala": "වෙඩි තබනවා / විදිනවා"
  },
  {
    "id": 173,
    "base": "show",
    "vpt": "showed",
    "vpp": "shown / showed",
    "sinhala": "පෙන්වනවා"
  },
  {
    "id": 174,
    "base": "shrink",
    "vpt": "shrank / shrunk",
    "vpp": "shrunk",
    "sinhala": "හැකිලෙනවා"
  },
  {
    "id": 175,
    "base": "shut",
    "vpt": "shut",
    "vpp": "shut",
    "sinhala": "වහනවා"
  },
  {
    "id": 176,
    "base": "sing",
    "vpt": "sang",
    "vpp": "sung",
    "sinhala": "ගී ගයනවා"
  },
  {
    "id": 177,
    "base": "sink",
    "vpt": "sank / sunk",
    "vpp": "sunk",
    "sinhala": "ගිලෙනවා"
  },
  {
    "id": 178,
    "base": "sit",
    "vpt": "sat",
    "vpp": "sat",
    "sinhala": "වාඩි වෙනවා"
  },
  {
    "id": 179,
    "base": "slay",
    "vpt": "slew",
    "vpp": "slain",
    "sinhala": "මරා දමනවා"
  },
  {
    "id": 180,
    "base": "sleep",
    "vpt": "slept",
    "vpp": "slept",
    "sinhala": "නිදාගන්නවා"
  },
  {
    "id": 181,
    "base": "slide",
    "vpt": "slid",
    "vpp": "slid",
    "sinhala": "ලිස්සා යනවා"
  },
  {
    "id": 182,
    "base": "sling",
    "vpt": "slung",
    "vpp": "slung",
    "sinhala": "විසි කරනවා / එල්ලනවා"
  },
  {
    "id": 183,
    "base": "slink",
    "vpt": "slunk",
    "vpp": "slunk",
    "sinhala": "නොපෙනී ගමන් කරනවා"
  },
  {
    "id": 184,
    "base": "slit",
    "vpt": "slit",
    "vpp": "slit",
    "sinhala": "දිගට කපනවා"
  },
  {
    "id": 185,
    "base": "smell",
    "vpt": "smelt / smelled",
    "vpp": "smelt / smelled",
    "sinhala": "සුවඳ / ගඳ දැනෙනවා"
  },
  {
    "id": 186,
    "base": "sneak",
    "vpt": "sneaked / snuck",
    "vpp": "sneaked / snuck",
    "sinhala": "හොරෙන් ගමන් කරනවා"
  },
  {
    "id": 187,
    "base": "sow",
    "vpt": "sowed",
    "vpp": "sown / sowed",
    "sinhala": "බීජ වපුරනවා"
  },
  {
    "id": 188,
    "base": "speak",
    "vpt": "spoke",
    "vpp": "spoken",
    "sinhala": "කතා කරනවා"
  },
  {
    "id": 189,
    "base": "speed",
    "vpt": "sped / speeded",
    "vpp": "sped / speeded",
    "sinhala": "වේගවත් වෙනවා"
  },
  {
    "id": 190,
    "base": "spell",
    "vpt": "spelt / spelled",
    "vpp": "spelt / spelled",
    "sinhala": "අක්‍ෂර වින්‍යාසය කරනවා"
  },
  {
    "id": 191,
    "base": "spend",
    "vpt": "spent",
    "vpp": "spent",
    "sinhala": "වියදම් කරනවා / කාලය ගත කරනවා"
  },
  {
    "id": 192,
    "base": "spill",
    "vpt": "spilt / spilled",
    "vpp": "spilt / spilled",
    "sinhala": "අතහැරෙනවා"
  },
  {
    "id": 193,
    "base": "spin",
    "vpt": "spun",
    "vpp": "spun",
    "sinhala": "කරකවනවා"
  },
  {
    "id": 194,
    "base": "spit",
    "vpt": "spat / spit",
    "vpp": "spat / spit",
    "sinhala": "කෙළ ගසනවා"
  },
  {
    "id": 195,
    "base": "split",
    "vpt": "split",
    "vpp": "split",
    "sinhala": "බෙදනවා / පැළෙනවා"
  },
  {
    "id": 196,
    "base": "spoil",
    "vpt": "spoilt / spoiled",
    "vpp": "spoilt / spoiled",
    "sinhala": "නාස්ති කරනවා"
  },
  {
    "id": 197,
    "base": "spread",
    "vpt": "spread",
    "vpp": "spread",
    "sinhala": "පැතිරෙනවා"
  },
  {
    "id": 198,
    "base": "spring",
    "vpt": "sprang / sprung",
    "vpp": "sprung",
    "sinhala": "පැන නැගෙනවා"
  },
  {
    "id": 199,
    "base": "stand",
    "vpt": "stood",
    "vpp": "stood",
    "sinhala": "සිටගෙන සිටිනවා"
  },
  {
    "id": 200,
    "base": "steal",
    "vpt": "stole",
    "vpp": "stolen",
    "sinhala": "සොරාගන්නවා"
  }
];
