/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
 
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('mapping').del();
  await knex('mapping').insert(
  [
	{
		"id": 1,
		"type_id": 1,
		"ingredient_id": 1
	},
	{
		"id": 2,
		"type_id": 1,
		"ingredient_id": 2
	},
	{
		"id": 3,
		"type_id": 1,
		"ingredient_id": 3
	},
	{
		"id": 4,
		"type_id": 1,
		"ingredient_id": 4
	},
	{
		"id": 5,
		"type_id": 1,
		"ingredient_id": 5
	},
	{
		"id": 6,
		"type_id": 1,
		"ingredient_id": 6
	},
	{
		"id": 7,
		"type_id": 1,
		"ingredient_id": 7
	},
	{
		"id": 8,
		"type_id": 1,
		"ingredient_id": 8
	},
	{
		"id": 9,
		"type_id": 1,
		"ingredient_id": 9
	},
	{
		"id": 10,
		"type_id": 1,
		"ingredient_id": 10
	},
	{
		"id": 11,
		"type_id": 1,
		"ingredient_id": 11
	},
	{
		"id": 12,
		"type_id": 1,
		"ingredient_id": 12
	},
	{
		"id": 13,
		"type_id": 1,
		"ingredient_id": 13
	},
	{
		"id": 14,
		"type_id": 1,
		"ingredient_id": 14
	},
	{
		"id": 15,
		"type_id": 1,
		"ingredient_id": 15
	},
	{
		"id": 16,
		"type_id": 1,
		"ingredient_id": 16
	},
	{
		"id": 17,
		"type_id": 1,
		"ingredient_id": 17
	},
	{
		"id": 18,
		"type_id": 1,
		"ingredient_id": 18
	},
	{
		"id": 19,
		"type_id": 1,
		"ingredient_id": 19
	},
	{
		"id": 20,
		"type_id": 1,
		"ingredient_id": 20
	},
	{
		"id": 21,
		"type_id": 1,
		"ingredient_id": 21
	},
	{
		"id": 22,
		"type_id": 1,
		"ingredient_id": 22
	},
	{
		"id": 23,
		"type_id": 2,
		"ingredient_id": 23
	},
	{
		"id": 24,
		"type_id": 2,
		"ingredient_id": 24
	},
	{
		"id": 25,
		"type_id": 2,
		"ingredient_id": 25
	},
	{
		"id": 26,
		"type_id": 2,
		"ingredient_id": 26
	},
	{
		"id": 27,
		"type_id": 2,
		"ingredient_id": 27
	},
	{
		"id": 28,
		"type_id": 2,
		"ingredient_id": 28
	},
	{
		"id": 29,
		"type_id": 2,
		"ingredient_id": 29
	},
	{
		"id": 30,
		"type_id": 2,
		"ingredient_id": 30
	},
	{
		"id": 31,
		"type_id": 2,
		"ingredient_id": 31
	},
	{
		"id": 32,
		"type_id": 2,
		"ingredient_id": 32
	},
	{
		"id": 33,
		"type_id": 2,
		"ingredient_id": 33
	},
	{
		"id": 34,
		"type_id": 2,
		"ingredient_id": 34
	},
	{
		"id": 35,
		"type_id": 2,
		"ingredient_id": 35
	},
	{
		"id": 36,
		"type_id": 2,
		"ingredient_id": 36
	},
	{
		"id": 37,
		"type_id": 2,
		"ingredient_id": 37
	},
	{
		"id": 38,
		"type_id": 2,
		"ingredient_id": 38
	},
	{
		"id": 39,
		"type_id": 2,
		"ingredient_id": 39
	},
	{
		"id": 40,
		"type_id": 2,
		"ingredient_id": 40
	},
	{
		"id": 41,
		"type_id": 2,
		"ingredient_id": 41
	},
	{
		"id": 42,
		"type_id": 2,
		"ingredient_id": 42
	},
	{
		"id": 43,
		"type_id": 2,
		"ingredient_id": 43
	},
	{
		"id": 44,
		"type_id": 2,
		"ingredient_id": 44
	},
	{
		"id": 45,
		"type_id": 2,
		"ingredient_id": 45
	},
	{
		"id": 46,
		"type_id": 2,
		"ingredient_id": 46
	},
	{
		"id": 47,
		"type_id": 3,
		"ingredient_id": 47
	},
	{
		"id": 48,
		"type_id": 3,
		"ingredient_id": 48
	},
	{
		"id": 49,
		"type_id": 3,
		"ingredient_id": 49
	},
	{
		"id": 50,
		"type_id": 3,
		"ingredient_id": 50
	},
	{
		"id": 51,
		"type_id": 3,
		"ingredient_id": 51
	},
	{
		"id": 52,
		"type_id": 3,
		"ingredient_id": 52
	},
	{
		"id": 53,
		"type_id": 3,
		"ingredient_id": 53
	},
	{
		"id": 54,
		"type_id": 3,
		"ingredient_id": 54
	},
	{
		"id": 55,
		"type_id": 3,
		"ingredient_id": 55
	},
	{
		"id": 56,
		"type_id": 3,
		"ingredient_id": 56
	},
	{
		"id": 57,
		"type_id": 3,
		"ingredient_id": 57
	},
	{
		"id": 58,
		"type_id": 3,
		"ingredient_id": 58
	},
	{
		"id": 59,
		"type_id": 3,
		"ingredient_id": 59
	},
	{
		"id": 60,
		"type_id": 3,
		"ingredient_id": 60
	},
	{
		"id": 61,
		"type_id": 3,
		"ingredient_id": 61
	},
	{
		"id": 62,
		"type_id": 3,
		"ingredient_id": 62
	},
	{
		"id": 63,
		"type_id": 3,
		"ingredient_id": 63
	},
	{
		"id": 64,
		"type_id": 3,
		"ingredient_id": 64
	},
	{
		"id": 65,
		"type_id": 3,
		"ingredient_id": 65
	},
	{
		"id": 66,
		"type_id": 3,
		"ingredient_id": 66
	},
	{
		"id": 67,
		"type_id": 3,
		"ingredient_id": 67
	},
	{
		"id": 68,
		"type_id": 3,
		"ingredient_id": 68
	},
	{
		"id": 69,
		"type_id": 4,
		"ingredient_id": 69
	},
	{
		"id": 70,
		"type_id": 4,
		"ingredient_id": 70
	},
	{
		"id": 71,
		"type_id": 4,
		"ingredient_id": 71
	},
	{
		"id": 72,
		"type_id": 4,
		"ingredient_id": 72
	},
	{
		"id": 73,
		"type_id": 5,
		"ingredient_id": 73
	},
	{
		"id": 74,
		"type_id": 5,
		"ingredient_id": 74
	},
	{
		"id": 75,
		"type_id": 5,
		"ingredient_id": 75
	},
	{
		"id": 76,
		"type_id": 5,
		"ingredient_id": 76
	},
	{
		"id": 77,
		"type_id": 5,
		"ingredient_id": 77
	},
	{
		"id": 78,
		"type_id": 5,
		"ingredient_id": 78
	},
	{
		"id": 79,
		"type_id": 5,
		"ingredient_id": 79
	},
	{
		"id": 80,
		"type_id": 5,
		"ingredient_id": 80
	},
	{
		"id": 81,
		"type_id": 5,
		"ingredient_id": 81
	},
	{
		"id": 82,
		"type_id": 5,
		"ingredient_id": 82
	},
	{
		"id": 83,
		"type_id": 5,
		"ingredient_id": 83
	},
	{
		"id": 84,
		"type_id": 5,
		"ingredient_id": 84
	},
	{
		"id": 85,
		"type_id": 5,
		"ingredient_id": 85
	},
	{
		"id": 86,
		"type_id": 5,
		"ingredient_id": 86
	},
	{
		"id": 87,
		"type_id": 5,
		"ingredient_id": 87
	},
	{
		"id": 88,
		"type_id": 5,
		"ingredient_id": 88
	},
	{
		"id": 89,
		"type_id": 6,
		"ingredient_id": 89
	},
	{
		"id": 90,
		"type_id": 6,
		"ingredient_id": 90
	},
	{
		"id": 91,
		"type_id": 6,
		"ingredient_id": 91
	},
	{
		"id": 92,
		"type_id": 6,
		"ingredient_id": 92
	},
	{
		"id": 93,
		"type_id": 6,
		"ingredient_id": 93
	},
	{
		"id": 94,
		"type_id": 6,
		"ingredient_id": 94
	},
	{
		"id": 95,
		"type_id": 6,
		"ingredient_id": 95
	},
	{
		"id": 96,
		"type_id": 6,
		"ingredient_id": 96
	},
	{
		"id": 97,
		"type_id": 6,
		"ingredient_id": 97
	},
	{
		"id": 98,
		"type_id": 6,
		"ingredient_id": 98
	},
	{
		"id": 99,
		"type_id": 6,
		"ingredient_id": 99
	},
	{
		"id": 100,
		"type_id": 6,
		"ingredient_id": 100
	},
	{
		"id": 101,
		"type_id": 6,
		"ingredient_id": 101
	},
	{
		"id": 102,
		"type_id": 6,
		"ingredient_id": 102
	},
	{
		"id": 103,
		"type_id": 6,
		"ingredient_id": 103
	},
	{
		"id": 104,
		"type_id": 6,
		"ingredient_id": 104
	},
	{
		"id": 105,
		"type_id": 6,
		"ingredient_id": 105
	},
	{
		"id": 106,
		"type_id": 6,
		"ingredient_id": 106
	},
	{
		"id": 107,
		"type_id": 6,
		"ingredient_id": 107
	},
	{
		"id": 108,
		"type_id": 6,
		"ingredient_id": 108
	},
	{
		"id": 109,
		"type_id": 6,
		"ingredient_id": 109
	},
	{
		"id": 110,
		"type_id": 6,
		"ingredient_id": 110
	},
	{
		"id": 111,
		"type_id": 6,
		"ingredient_id": 111
	},
	{
		"id": 112,
		"type_id": 7,
		"ingredient_id": 112
	},
	{
		"id": 113,
		"type_id": 7,
		"ingredient_id": 113
	},
	{
		"id": 114,
		"type_id": 7,
		"ingredient_id": 114
	},
	{
		"id": 115,
		"type_id": 7,
		"ingredient_id": 115
	},
	{
		"id": 116,
		"type_id": 7,
		"ingredient_id": 116
	},
	{
		"id": 117,
		"type_id": 7,
		"ingredient_id": 117
	},
	{
		"id": 118,
		"type_id": 7,
		"ingredient_id": 118
	},
	{
		"id": 119,
		"type_id": 7,
		"ingredient_id": 119
	},
	{
		"id": 120,
		"type_id": 7,
		"ingredient_id": 120
	},
	{
		"id": 121,
		"type_id": 7,
		"ingredient_id": 121
	},
	{
		"id": 122,
		"type_id": 7,
		"ingredient_id": 122
	},
	{
		"id": 123,
		"type_id": 7,
		"ingredient_id": 123
	},
	{
		"id": 124,
		"type_id": 7,
		"ingredient_id": 124
	},
	{
		"id": 125,
		"type_id": 8,
		"ingredient_id": 125
	},
	{
		"id": 126,
		"type_id": 8,
		"ingredient_id": 126
	},
	{
		"id": 127,
		"type_id": 8,
		"ingredient_id": 127
	},
	{
		"id": 128,
		"type_id": 8,
		"ingredient_id": 128
	},
	{
		"id": 129,
		"type_id": 8,
		"ingredient_id": 129
	},
	{
		"id": 130,
		"type_id": 8,
		"ingredient_id": 130
	},
	{
		"id": 131,
		"type_id": 8,
		"ingredient_id": 131
	},
	{
		"id": 132,
		"type_id": 8,
		"ingredient_id": 132
	},
	{
		"id": 133,
		"type_id": 8,
		"ingredient_id": 133
	},
	{
		"id": 134,
		"type_id": 9,
		"ingredient_id": 134
	},
	{
		"id": 135,
		"type_id": 9,
		"ingredient_id": 135
	},
	{
		"id": 136,
		"type_id": 9,
		"ingredient_id": 136
	},
	{
		"id": 137,
		"type_id": 9,
		"ingredient_id": 137
	},
	{
		"id": 138,
		"type_id": 9,
		"ingredient_id": 138
	},
	{
		"id": 139,
		"type_id": 9,
		"ingredient_id": 139
	},
	{
		"id": 140,
		"type_id": 9,
		"ingredient_id": 140
	},
	{
		"id": 141,
		"type_id": 9,
		"ingredient_id": 141
	},
	{
		"id": 142,
		"type_id": 9,
		"ingredient_id": 142
	},
	{
		"id": 143,
		"type_id": 9,
		"ingredient_id": 143
	},
	{
		"id": 144,
		"type_id": 9,
		"ingredient_id": 144
	},
	{
		"id": 145,
		"type_id": 9,
		"ingredient_id": 145
	},
	{
		"id": 146,
		"type_id": 9,
		"ingredient_id": 146
	},
	{
		"id": 147,
		"type_id": 9,
		"ingredient_id": 147
	},
	{
		"id": 148,
		"type_id": 10,
		"ingredient_id": 1
	},
	{
		"id": 149,
		"type_id": 10,
		"ingredient_id": 2
	},
	{
		"id": 150,
		"type_id": 10,
		"ingredient_id": 3
	},
	{
		"id": 151,
		"type_id": 10,
		"ingredient_id": 4
	},
	{
		"id": 152,
		"type_id": 10,
		"ingredient_id": 5
	},
	{
		"id": 153,
		"type_id": 10,
		"ingredient_id": 6
	},
	{
		"id": 154,
		"type_id": 10,
		"ingredient_id": 7
	},
	{
		"id": 155,
		"type_id": 10,
		"ingredient_id": 8
	},
	{
		"id": 156,
		"type_id": 10,
		"ingredient_id": 9
	},
	{
		"id": 157,
		"type_id": 10,
		"ingredient_id": 10
	},
	{
		"id": 158,
		"type_id": 10,
		"ingredient_id": 11
	},
	{
		"id": 159,
		"type_id": 10,
		"ingredient_id": 12
	},
	{
		"id": 160,
		"type_id": 10,
		"ingredient_id": 13
	},
	{
		"id": 161,
		"type_id": 10,
		"ingredient_id": 14
	},
	{
		"id": 162,
		"type_id": 10,
		"ingredient_id": 15
	},
	{
		"id": 163,
		"type_id": 10,
		"ingredient_id": 16
	},
	{
		"id": 164,
		"type_id": 10,
		"ingredient_id": 17
	},
	{
		"id": 165,
		"type_id": 10,
		"ingredient_id": 18
	},
	{
		"id": 166,
		"type_id": 10,
		"ingredient_id": 19
	},
	{
		"id": 167,
		"type_id": 10,
		"ingredient_id": 20
	},
	{
		"id": 168,
		"type_id": 10,
		"ingredient_id": 21
	},
	{
		"id": 169,
		"type_id": 10,
		"ingredient_id": 22
	},
	{
		"id": 170,
		"type_id": 10,
		"ingredient_id": 23
	},
	{
		"id": 171,
		"type_id": 10,
		"ingredient_id": 24
	},
	{
		"id": 172,
		"type_id": 10,
		"ingredient_id": 25
	},
	{
		"id": 173,
		"type_id": 10,
		"ingredient_id": 26
	},
	{
		"id": 174,
		"type_id": 10,
		"ingredient_id": 27
	},
	{
		"id": 175,
		"type_id": 10,
		"ingredient_id": 28
	},
	{
		"id": 176,
		"type_id": 10,
		"ingredient_id": 29
	},
	{
		"id": 177,
		"type_id": 10,
		"ingredient_id": 30
	},
	{
		"id": 178,
		"type_id": 10,
		"ingredient_id": 31
	},
	{
		"id": 179,
		"type_id": 10,
		"ingredient_id": 32
	},
	{
		"id": 180,
		"type_id": 10,
		"ingredient_id": 33
	},
	{
		"id": 181,
		"type_id": 10,
		"ingredient_id": 34
	},
	{
		"id": 182,
		"type_id": 10,
		"ingredient_id": 35
	},
	{
		"id": 183,
		"type_id": 10,
		"ingredient_id": 36
	},
	{
		"id": 184,
		"type_id": 10,
		"ingredient_id": 37
	},
	{
		"id": 185,
		"type_id": 10,
		"ingredient_id": 38
	},
	{
		"id": 186,
		"type_id": 10,
		"ingredient_id": 39
	},
	{
		"id": 187,
		"type_id": 10,
		"ingredient_id": 40
	},
	{
		"id": 188,
		"type_id": 10,
		"ingredient_id": 41
	},
	{
		"id": 189,
		"type_id": 10,
		"ingredient_id": 42
	},
	{
		"id": 190,
		"type_id": 10,
		"ingredient_id": 43
	},
	{
		"id": 191,
		"type_id": 10,
		"ingredient_id": 44
	},
	{
		"id": 192,
		"type_id": 10,
		"ingredient_id": 45
	},
	{
		"id": 193,
		"type_id": 10,
		"ingredient_id": 46
	},
	{
		"id": 194,
		"type_id": 10,
		"ingredient_id": 73
	},
	{
		"id": 195,
		"type_id": 10,
		"ingredient_id": 74
	},
	{
		"id": 196,
		"type_id": 10,
		"ingredient_id": 75
	},
	{
		"id": 197,
		"type_id": 10,
		"ingredient_id": 76
	},
	{
		"id": 198,
		"type_id": 10,
		"ingredient_id": 77
	},
	{
		"id": 199,
		"type_id": 10,
		"ingredient_id": 78
	},
	{
		"id": 200,
		"type_id": 10,
		"ingredient_id": 79
	},
	{
		"id": 201,
		"type_id": 10,
		"ingredient_id": 80
	},
	{
		"id": 202,
		"type_id": 10,
		"ingredient_id": 81
	},
	{
		"id": 203,
		"type_id": 10,
		"ingredient_id": 82
	},
	{
		"id": 204,
		"type_id": 10,
		"ingredient_id": 83
	},
	{
		"id": 205,
		"type_id": 10,
		"ingredient_id": 84
	},
	{
		"id": 206,
		"type_id": 10,
		"ingredient_id": 85
	},
	{
		"id": 207,
		"type_id": 10,
		"ingredient_id": 86
	},
	{
		"id": 208,
		"type_id": 10,
		"ingredient_id": 87
	},
	{
		"id": 209,
		"type_id": 10,
		"ingredient_id": 88
	},
	{
		"id": 210,
		"type_id": 10,
		"ingredient_id": 112
	},
	{
		"id": 211,
		"type_id": 10,
		"ingredient_id": 113
	},
	{
		"id": 212,
		"type_id": 10,
		"ingredient_id": 114
	},
	{
		"id": 213,
		"type_id": 10,
		"ingredient_id": 115
	},
	{
		"id": 214,
		"type_id": 10,
		"ingredient_id": 116
	},
	{
		"id": 215,
		"type_id": 10,
		"ingredient_id": 117
	},
	{
		"id": 216,
		"type_id": 10,
		"ingredient_id": 118
	},
	{
		"id": 217,
		"type_id": 10,
		"ingredient_id": 119
	},
	{
		"id": 218,
		"type_id": 10,
		"ingredient_id": 120
	},
	{
		"id": 219,
		"type_id": 10,
		"ingredient_id": 121
	},
	{
		"id": 220,
		"type_id": 10,
		"ingredient_id": 122
	},
	{
		"id": 221,
		"type_id": 10,
		"ingredient_id": 123
	},
	{
		"id": 222,
		"type_id": 10,
		"ingredient_id": 124
	},
	{
		"id": 223,
		"type_id": 10,
		"ingredient_id": 134
	},
	{
		"id": 224,
		"type_id": 10,
		"ingredient_id": 135
	},
	{
		"id": 225,
		"type_id": 10,
		"ingredient_id": 136
	},
	{
		"id": 226,
		"type_id": 10,
		"ingredient_id": 137
	},
	{
		"id": 227,
		"type_id": 10,
		"ingredient_id": 138
	},
	{
		"id": 228,
		"type_id": 10,
		"ingredient_id": 143
	},
	{
		"id": 229,
		"type_id": 10,
		"ingredient_id": 144
	},
	{
		"id": 230,
		"type_id": 10,
		"ingredient_id": 145
	},
	{
		"id": 231,
		"type_id": 10,
		"ingredient_id": 146
	},
	{
		"id": 232,
		"type_id": 10,
		"ingredient_id": 147
	},
	{
		"id": 233,
		"type_id": 10,
		"ingredient_id": 148
	},
	{
		"id": 234,
		"type_id": 11,
		"ingredient_id": 1
	},
	{
		"id": 235,
		"type_id": 11,
		"ingredient_id": 2
	},
	{
		"id": 236,
		"type_id": 11,
		"ingredient_id": 3
	},
	{
		"id": 237,
		"type_id": 11,
		"ingredient_id": 4
	},
	{
		"id": 238,
		"type_id": 11,
		"ingredient_id": 5
	},
	{
		"id": 239,
		"type_id": 11,
		"ingredient_id": 6
	},
	{
		"id": 240,
		"type_id": 11,
		"ingredient_id": 7
	},
	{
		"id": 241,
		"type_id": 11,
		"ingredient_id": 8
	},
	{
		"id": 242,
		"type_id": 11,
		"ingredient_id": 9
	},
	{
		"id": 243,
		"type_id": 11,
		"ingredient_id": 10
	},
	{
		"id": 244,
		"type_id": 11,
		"ingredient_id": 11
	},
	{
		"id": 245,
		"type_id": 11,
		"ingredient_id": 12
	},
	{
		"id": 246,
		"type_id": 11,
		"ingredient_id": 13
	},
	{
		"id": 247,
		"type_id": 11,
		"ingredient_id": 14
	},
	{
		"id": 248,
		"type_id": 11,
		"ingredient_id": 15
	},
	{
		"id": 249,
		"type_id": 11,
		"ingredient_id": 16
	},
	{
		"id": 250,
		"type_id": 11,
		"ingredient_id": 17
	},
	{
		"id": 251,
		"type_id": 11,
		"ingredient_id": 18
	},
	{
		"id": 252,
		"type_id": 11,
		"ingredient_id": 19
	},
	{
		"id": 253,
		"type_id": 11,
		"ingredient_id": 20
	},
	{
		"id": 254,
		"type_id": 11,
		"ingredient_id": 21
	},
	{
		"id": 255,
		"type_id": 11,
		"ingredient_id": 22
	},
	{
		"id": 256,
		"type_id": 11,
		"ingredient_id": 73
	},
	{
		"id": 257,
		"type_id": 11,
		"ingredient_id": 74
	},
	{
		"id": 258,
		"type_id": 11,
		"ingredient_id": 75
	},
	{
		"id": 259,
		"type_id": 11,
		"ingredient_id": 76
	},
	{
		"id": 260,
		"type_id": 11,
		"ingredient_id": 77
	},
	{
		"id": 261,
		"type_id": 11,
		"ingredient_id": 78
	},
	{
		"id": 262,
		"type_id": 11,
		"ingredient_id": 79
	},
	{
		"id": 263,
		"type_id": 11,
		"ingredient_id": 80
	},
	{
		"id": 264,
		"type_id": 11,
		"ingredient_id": 81
	},
	{
		"id": 265,
		"type_id": 11,
		"ingredient_id": 82
	},
	{
		"id": 266,
		"type_id": 11,
		"ingredient_id": 83
	},
	{
		"id": 267,
		"type_id": 11,
		"ingredient_id": 84
	},
	{
		"id": 268,
		"type_id": 11,
		"ingredient_id": 85
	},
	{
		"id": 269,
		"type_id": 11,
		"ingredient_id": 86
	},
	{
		"id": 270,
		"type_id": 11,
		"ingredient_id": 87
	},
	{
		"id": 271,
		"type_id": 11,
		"ingredient_id": 88
	},
	{
		"id": 272,
		"type_id": 11,
		"ingredient_id": 134
	},
	{
		"id": 273,
		"type_id": 11,
		"ingredient_id": 135
	},
	{
		"id": 274,
		"type_id": 11,
		"ingredient_id": 136
	},
	{
		"id": 275,
		"type_id": 11,
		"ingredient_id": 137
	},
	{
		"id": 276,
		"type_id": 11,
		"ingredient_id": 138
	},
	{
		"id": 277,
		"type_id": 11,
		"ingredient_id": 143
	},
	{
		"id": 278,
		"type_id": 11,
		"ingredient_id": 144
	},
	{
		"id": 279,
		"type_id": 11,
		"ingredient_id": 145
	},
	{
		"id": 280,
		"type_id": 11,
		"ingredient_id": 146
	},
	{
		"id": 281,
		"type_id": 11,
		"ingredient_id": 147
	},
	{
		"id": 282,
		"type_id": 12,
		"ingredient_id": 134
	},
	{
		"id": 283,
		"type_id": 12,
		"ingredient_id": 135
	},
	{
		"id": 284,
		"type_id": 12,
		"ingredient_id": 136
	},
	{
		"id": 285,
		"type_id": 12,
		"ingredient_id": 137
	},
	{
		"id": 286,
		"type_id": 12,
		"ingredient_id": 138
	},
	{
		"id": 287,
		"type_id": 12,
		"ingredient_id": 143
	},
	{
		"id": 288,
		"type_id": 12,
		"ingredient_id": 144
	},
	{
		"id": 289,
		"type_id": 12,
		"ingredient_id": 145
	},
	{
		"id": 290,
		"type_id": 12,
		"ingredient_id": 146
	},
	{
		"id": 291,
		"type_id": 12,
		"ingredient_id": 147
	},
	{
		"id": 292,
		"type_id": 12,
		"ingredient_id": 73
	},
	{
		"id": 293,
		"type_id": 12,
		"ingredient_id": 74
	},
	{
		"id": 294,
		"type_id": 12,
		"ingredient_id": 75
	},
	{
		"id": 295,
		"type_id": 12,
		"ingredient_id": 76
	},
	{
		"id": 296,
		"type_id": 12,
		"ingredient_id": 77
	},
	{
		"id": 297,
		"type_id": 12,
		"ingredient_id": 78
	},
	{
		"id": 298,
		"type_id": 12,
		"ingredient_id": 79
	},
	{
		"id": 299,
		"type_id": 12,
		"ingredient_id": 80
	},
	{
		"id": 300,
		"type_id": 12,
		"ingredient_id": 81
	},
	{
		"id": 301,
		"type_id": 12,
		"ingredient_id": 82
	},
	{
		"id": 302,
		"type_id": 12,
		"ingredient_id": 83
	},
	{
		"id": 303,
		"type_id": 12,
		"ingredient_id": 84
	},
	{
		"id": 304,
		"type_id": 12,
		"ingredient_id": 85
	},
	{
		"id": 305,
		"type_id": 12,
		"ingredient_id": 86
	},
	{
		"id": 306,
		"type_id": 12,
		"ingredient_id": 87
	},
	{
		"id": 307,
		"type_id": 12,
		"ingredient_id": 88
	}
])}