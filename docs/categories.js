// NOTES:
// "000000" to be removed after BLACKBG is tidied up

const CATEGORIES = [
  {
    "category": "000000",
    "tokenIds": [ 236, 313, 586, 1844, 2820, 2892, 3002, 3303, 3316, 3536, 3895, 5521, 5616, 5661, 5789, 6343, 6396, 6917, 7050, 7235, 7283, 7558, 7638, 9384, 9686, 9814, 10229 ]
  },
  {
    "category": "BANDANA",
    "tokenIds": [ 34, 81, 200, 263, 264, 268, 271, 299, 307, 350, 380, 392, 464, 477, 520, 620, 685, 694, 699, 706, 730, 731, 762, 777, 785, 800, 821, 868, 895, 898, 916, 942, 977, 1006, 1040, 1046, 1098, 1130, 1170, 1226, 1263, 1297, 1341, 1351, 1369, 1376, 1417, 1427, 1429, 1445, 1447, 1449, 1486, 1514, 1533, 1545, 1596, 1598, 1609, 1775, 1823, 1874, 1967, 2018, 2082, 2097, 2152, 2182, 2324, 2330, 2374, 2379, 2385, 2391, 2412, 2420, 2444, 2447, 2450, 2453, 2454, 2513, 2540, 2562, 2602, 2637, 2764, 2790, 2798, 2889, 2927, 2934, 3027, 3032, 3061, 3170, 3227, 3247, 3266, 3309, 3372, 3416, 3419, 3458, 3459, 3471, 3494, 3511, 3523, 3539, 3576, 3578, 3579, 3613, 3636, 3674, 3688, 3713, 3762, 3848, 3859, 3865, 3867, 3880, 3901, 3912, 3918, 3927, 5455, 5466, 5479, 5533, 5544, 5558, 5570, 5579, 5587, 5677, 5722, 5765, 5779, 5812, 5826, 5917, 5940, 5949, 5976, 6030, 6046, 6078, 6089, 6120, 6132, 6167, 6168, 6298, 6310, 6396, 6402, 6454, 6458, 6509, 6555, 6572, 6607, 6628, 6698, 6702, 6729, 6755, 6839, 6842, 6893, 6923, 6957, 7011, 7014, 7039, 7071, 7134, 7139, 7317, 7333, 7352, 7390, 7430, 7476, 7491, 7530, 7565, 7679, 7689, 7698, 7721, 7744, 7747, 7756, 7796, 7871, 7877, 7945, 7995, 8009, 8034, 8042, 8066, 8088, 8103, 8166, 8171, 8195, 8201, 8310, 8327, 8402, 8408, 8419, 8426, 8433, 8457, 8470, 8513 ]
  },
  {
    "category": "BLACKBG",
    "tokenIds": [ 236, 313, 586, 599, 791, 949, 1268, 1387, 1416, 1445, 1517, 1610, 1648, 1844, 1863, 2068, 2094, 2153, 2273, 2385, 2754, 2820, 2892, 3002, 3303, 3316, 3536, 3895, 5412, 5521, 5616, 5661, 5789, 6343, 6396, 6917, 7050, 7235, 7283, 7558, 7638, 8838, 9384, 9686, 9814, 10229 ]
  },
  {
    "category": "HOODIE",
    "tokenIds": [ 9, 366, 590, 816, 847, 1057, 1097, 1278, 1313, 1620, 1714, 2415, 2521, 2890, 2964, 3212, 4075, 4140, 4211, 4284, 4500, 4738, 5432, 5785, 6203, 6408, 6719, 7091, 7096, 7458, 7567, 7825, 7957, 8024, 8187, 8428, 8550, 8667, 8718, 8860, 8915, 9321, 9379, 9786, 10267, 10991 ]
  },
  {
    "category": "HOODIEPARTIAL",
    "tokenIds": [ 594, 722, 780, 1511, 1693, 2110, 2662, 2914, 2968, 3716, 4752, 5158, 5542, 5639, 5720, 7426, 7465, 7725, 7968, 8671, 9189, 9387 ]
  },
  {
    "category": "PILOTHELMET",
    "tokenIds": [ 382, 1627, 1832, 2041, 2095, 2156, 2397, 2642, 2649, 3035, 3133, 3310, 3356, 3943, 4009, 4229, 4263, 4373, 4575, 4607, 4618, 4850, 5173, 5343, 5375, 5419, 5702, 5892, 5973, 6090, 6115, 6855, 6883, 7045, 7171, 7181, 7295, 7337, 7432, 7944, 8615, 8952, 9040, 9487, 9992, 10110, 10131 ]
  },
  {
    "category": "PILOTHELMETPARTIAL",
    "tokenIds": [ 2099, 5696, 8237, 8743, 10038, 10298 ]
  },
  {
    "category": "STICK",
    "tokenIds": [ 1142, 1631, 3549, 4035, 4363, 7181 ]
  },
  {
    "category": "TASSLEHAT",
    "tokenIds": [ 5, 155, 269, 390, 595, 757, 971, 1003, 1252, 1362, 1577, 1595, 1863, 2498, 2592, 2939, 3599, 3616, 3638, 3681, 4153, 4191, 4495, 4590, 4600, 4712, 4726, 5065, 5184, 5255, 5267, 5504, 5546, 5852, 6144, 6181, 6183, 6193, 6195, 6585, 6868, 6955, 7063, 7223, 7226, 7291, 7562, 7569, 8173, 8496, 8523, 8553, 8821, 8997, 9036, 9271, 9290, 9473, 9510, 9648, 9669, 10001, 10221, 10314, 10432, 10636, 10669, 10700, 11175 ]
  },
  {
    "category": "TASSLEHATPARTIAL",
    "tokenIds": [ 276, 346, 722, 1261, 2474, 2711, 2791, 3821, 4752, 5186, 5896, 5977, 6007, 6514, 6757, 6841, 6990, 7465, 8135, 9198 ]
  },
  {
    "category": "TRUNK",
    "tokenIds": [ 80, 238, 521, 533, 667, 687, 713, 1029, 1229, 1257, 1369, 1422, 1535, 1773, 1908, 2712, 2728, 2944, 3144, 3223, 3495, 3532, 3538, 3543, 4053, 4086, 4194, 4252, 4324, 4513, 4621, 4689, 4797, 4817, 5106, 5147, 5511, 5798, 5805, 5834, 5844, 5901, 6199, 6244, 6542, 6715, 6771, 6789, 6918, 6973, 7452, 7580, 7837, 8204, 8213, 8245, 8654, 8797, 9178, 9313, 9745, 9867, 10549 ]
  },
  {
    "category": "TRUNKLESS", "tokenIds": [ 2551 ]
  }
];
