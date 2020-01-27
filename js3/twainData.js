const twainData = [
  {
    roomNumber: 00,
    occupants: 5,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 19, 31, 39, 31)
  },
  {
    roomNumber: 01,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 17, 22, 46, 32)
  },
  {
    roomNumber: 02,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 19, 56, 34, 38)
  },
  {
    roomNumber: 03,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 19, 14, 42, 19)
  },
  {
    roomNumber: 04,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 17, 53, 1, 11)
  },
  {
    roomNumber: 05,
    occupants: 0,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 1, 3, 29, 50, 39)
  },
  {
    roomNumber: 06,
    occupants: 5,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 18, 19, 19, 2)
  },
  {
    roomNumber: 07,
    occupants: 3,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 19, 21, 14, 3)
  },
  {
    roomNumber: 08,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 2, 11, 1, 48)
  },
  {
    roomNumber: 09,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 22, 42, 27, 17)
  },
  {
    roomNumber: 10,
    occupants: 0,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 1, 18, 38, 32, 28)
  },
  {
    roomNumber: 11,
    occupants: 0,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 2, 0, 37, 1, 30)
  },
  {
    roomNumber: 12,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 23, 5, 6, 44)
  },
  {
    roomNumber: 13,
    occupants: 1,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 10, 45, 18, 38)
  },
  {
    roomNumber: 14,
    occupants: 1,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 4, 22, 0, 41, 34)
  },
  {
    roomNumber: 15,
    occupants: 6,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 16, 13, 4, 24)
  },
  {
    roomNumber: 16,
    occupants: 1,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 1, 13, 58, 41, 9)
  },
  {
    roomNumber: 17,
    occupants: 1,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 23, 26, 25, 5)
  },
  {
    roomNumber: 18,
    occupants: 1,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 2, 6, 0, 5, 30)
  },
  {
    roomNumber: 19,
    occupants: 5,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 23, 15, 22, 42)
  },
  {
    roomNumber: 20,
    occupants: 1,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 1, 9, 13, 23, 45)
  },
  {
    roomNumber: 21,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 22, 32, 24, 19)
  },
  {
    roomNumber: 22,
    occupants: 5,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 4, 5, 24, 28, 8)
  },
  {
    roomNumber: 23,
    occupants: 3,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 4, 16, 41, 33, 31)
  },
  {
    roomNumber: 24,
    occupants: 1,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 4, 22, 56, 15, 30)
  },
  {
    roomNumber: 25,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 23, 15, 29, 53)
  },
  {
    roomNumber: 26,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 2, 23, 55, 47, 38)
  },
  {
    roomNumber: 27,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 1, 21, 36, 58, 54)
  },
  {
    roomNumber: 28,
    occupants: 2,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 23, 4, 8, 25)
  },
  {
    roomNumber: 29,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 5, 43, 56, 56)
  },
  {
    roomNumber: 30,
    occupants: 3,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 18, 14, 50, 1)
  },
  {
    roomNumber: 31,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 13, 34, 55, 16)
  },
  {
    roomNumber: 32,
    occupants: 4,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 18, 29, 52, 6)
  },
  {
    roomNumber: 33,
    occupants: 0,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 1, 1, 5, 18, 10)
  },
  {
    roomNumber: 34,
    occupants: 4,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 22, 36, 56, 23)
  },
  {
    roomNumber: 35,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 1, 12, 19, 0, 26)
  },
  {
    roomNumber: 36,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 1, 19, 4, 57, 25)
  },
  {
    roomNumber: 37,
    occupants: 1,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 4, 13, 16, 38, 27)
  },
  {
    roomNumber: 38,
    occupants: 5,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 22, 49, 45, 38)
  },
  {
    roomNumber: 39,
    occupants: 3,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 1, 41, 7, 8)
  },
  {
    roomNumber: 40,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 2, 4, 16, 46)
  },
  {
    roomNumber: 41,
    occupants: 1,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 1, 3, 3, 1, 6)
  },
  {
    roomNumber: 42,
    occupants: 5,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 16, 13, 42, 54)
  },
  {
    roomNumber: 43,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 17, 34, 55, 31)
  },
  {
    roomNumber: 44,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 4, 45, 24, 25)
  },
  {
    roomNumber: 45,
    occupants: 3,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 4, 8, 40, 52, 59)
  },
  {
    roomNumber: 46,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 23, 50, 6, 33)
  },
  {
    roomNumber: 47,
    occupants: 3,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 12, 0, 25, 32)
  },
  {
    roomNumber: 48,
    occupants: 0,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 2, 19, 13, 0, 26)
  },
  {
    roomNumber: 49,
    occupants: 4,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 23, 11, 41, 1)
  },
  {
    roomNumber: 50,
    occupants: 0,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 4, 6, 39, 2, 55)
  },
  {
    roomNumber: 51,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 4, 30, 13, 15)
  },
  {
    roomNumber: 52,
    occupants: 6,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 22, 5, 2, 40)
  },
  {
    roomNumber: 53,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 2, 5, 6, 3, 0)
  },
  {
    roomNumber: 54,
    occupants: 2,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 1, 15, 36, 20, 55)
  },
  {
    roomNumber: 55,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 0, 56, 30, 43)
  },
  {
    roomNumber: 56,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 19, 23, 24, 44)
  },
  {
    roomNumber: 57,
    occupants: 5,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 18, 27, 23, 51)
  },
  {
    roomNumber: 58,
    occupants: 1,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 9, 29, 26, 23)
  },
  {
    roomNumber: 59,
    occupants: 3,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 19, 23, 25, 4)
  },
  {
    roomNumber: 60,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 21, 42, 15, 21)
  },
  {
    roomNumber: 61,
    occupants: 2,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 10, 2, 44, 33)
  },
  {
    roomNumber: 62,
    occupants: 5,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 22, 47, 23, 27)
  },
  {
    roomNumber: 63,
    occupants: 5,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 16, 38, 53, 21)
  },
  {
    roomNumber: 64,
    occupants: 5,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 18, 52, 25, 49)
  },
  {
    roomNumber: 65,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 17, 23, 41, 9)
  },
  {
    roomNumber: 66,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 15, 21, 27, 37)
  },
  {
    roomNumber: 67,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 19, 2, 8, 19)
  },
  {
    roomNumber: 68,
    occupants: 5,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 18, 19, 29, 41)
  },
  {
    roomNumber: 69,
    occupants: 3,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 18, 41, 10, 26)
  },
  {
    roomNumber: 70,
    occupants: 3,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 7, 1, 25, 15)
  },
  {
    roomNumber: 71,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 18, 15, 22, 24)
  },
  {
    roomNumber: 72,
    occupants: 1,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 4, 0, 1, 4, 18)
  },
  {
    roomNumber: 73,
    occupants: 5,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 16, 6, 13, 38)
  },
  {
    roomNumber: 74,
    occupants: 5,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 16, 35, 39, 13)
  },
  {
    roomNumber: 75,
    occupants: 4,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 22, 35, 35, 19)
  },
  {
    roomNumber: 76,
    occupants: 6,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 18, 9, 59, 32)
  },
  {
    roomNumber: 77,
    occupants: 4,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 21, 0, 3, 50)
  },
  {
    roomNumber: 78,
    occupants: 6,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 23, 31, 16, 42)
  },
  {
    roomNumber: 79,
    occupants: 6,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 20, 45, 39, 10)
  },
  {
    roomNumber: 80,
    occupants: 0,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 12, 15, 2, 24)
  },
  {
    roomNumber: 81,
    occupants: 6,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 23, 19, 7, 19)
  },
  {
    roomNumber: 82,
    occupants: 1,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 4, 6, 53, 4, 59)
  },
  {
    roomNumber: 83,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 2, 8, 12, 59, 13)
  },
  {
    roomNumber: 84,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 1, 43, 48, 8)
  },
  {
    roomNumber: 85,
    occupants: 2,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 4, 42, 54, 47)
  },
  {
    roomNumber: 86,
    occupants: 0,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 1, 1, 32, 18, 36)
  },
  {
    roomNumber: 87,
    occupants: 1,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 1, 13, 31, 50, 29)
  },
  {
    roomNumber: 88,
    occupants: 1,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 3, 6, 28, 2, 5)
  },
  {
    roomNumber: 89,
    occupants: 0,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 2, 16, 33, 51, 5)
  },
  {
    roomNumber: 90,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 2, 14, 53, 4, 39)
  },
  {
    roomNumber: 91,
    occupants: 6,
    residents: 3,
    lastPowerSpike: new Date(2020, 1, 3, 20, 50, 38, 17)
  },
  {
    roomNumber: 92,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 1, 7, 11, 11, 15)
  },
  {
    roomNumber: 93,
    occupants: 2,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 2, 10, 2, 28, 29)
  },
  {
    roomNumber: 94,
    occupants: 2,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 20, 15, 34, 38)
  },
  {
    roomNumber: 95,
    occupants: 3,
    residents: 1,
    lastPowerSpike: new Date(2020, 1, 3, 17, 42, 40, 35)
  },
  {
    roomNumber: 96,
    occupants: 1,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 4, 39, 29, 16)
  },
  {
    roomNumber: 97,
    occupants: 3,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 2, 17, 34, 12, 51)
  },
  {
    roomNumber: 98,
    occupants: 4,
    residents: 2,
    lastPowerSpike: new Date(2020, 1, 3, 21, 26, 43, 8)
  },
  {
    roomNumber: 99,
    occupants: 4,
    residents: 4,
    lastPowerSpike: new Date(2020, 1, 4, 7, 4, 39, 51)
  },
]
