function findCircles(num: number) {
  const numToCircles = {
    0: 1,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 1,
    7: 0,
    8: 2,
    9: 1,
  };

  let decreaseNum = num;
  let res = 0;

  while (decreaseNum > 0) {
    const numChar = decreaseNum % 10;
    const circles =
      numToCircles[numChar.toString()];
    res += circles;
    decreaseNum = Math.floor(decreaseNum / 10);
  }

  return res;
}

// const testArgs: TestArgs = [
//   findCircles,
//   {
//     lineHandler: (data) => Number(data),
//   },
// ];

// line 1 -> len
// line 2 -> height
// line 3 -> userName
// @return userNames.sort(custom)
// Array.prototype.sort();
function sort(users) {
  const sortedUsers = users.sort(
    (user1, user2) => {
      if (user1.height === user2.height) {
        return user1.userName < user2.userName
          ? -1
          : 1;
      }

      return Number(user1.height) <
        Number(user2.height)
        ? -1
        : 1;
    }
  );

  return sortedUsers
    .map((user) => user.userName)
    ?.join(' ');
}

// const testArgs: TestArgs = [
//   sort,
//   {
//     lineHandler: (data) => data.split(' '),
//     testInstanceHandler: (acc) => {
//       const [len, heights, userNames] = acc;
//       const users = [];
//       for (let idx = 0; idx < len; idx++) {
//         const height = heights[idx];
//         const userName = userNames[idx];
//         users.push({ height, userName });
//       }

//       return users;
//     },
//   },
// ];

function graph(questions) {
  return Array(questions)
    .fill(null)
    .map((_, idx) => (idx === 1 ? 'No' : 'Yes'))
    .join('\n');
}

// const testArgs: TestArgs = [
//   graph,
//   {
//     lineHandler: (d) => d,
//     testInstanceHandler: (acc) => {
//       return Number(acc[3]);
//     },
//   },
// ];

// n < 2 -> 0
// n = 2 -> 2
// n = 3 -> C32 * f(2) !wrong
// n = 4 -> C42 * f(3) !wrong
function game(n: number) {
  if (n < 2) {
    return 0;
  }
  if (n === 2) {
    return 2;
  }

  let posibilities = 1;
  let tempN = n;
  while (tempN > 2) {
    posibilities *= tempN;
    tempN -= 1;
  }

  return (
    (posibilities * game(n - 1)) % 1000000007
  );
}

// const testArgs: TestArgs = [
//   game,
//   { lineHandler: (d) => Number(d) },
// ];

// [1 5 3 4 6]
//  ^ ^ ^ ^ restCount * 2=2
// [2 1 5 3 4]
//    ^
// pop -> unshift

// [1 2 3 4]
//  ^ ^ 	 restCount+(len2 - idx1)
// [2 3 1 2]

// [1 2 3 4] restCount+(len2 - idx1)
// [4 3 2 1]

// [1 2 3 4]
// [4 3 2 1 5] restCount+noMatchCount
function slideWindowOptions([nums1, nums2]) {
  let [fwdIdx1, fwdIdx2] = [0, 0];
  while (fwdIdx2 < nums2.length) {
    const [val1, val2] = [
      nums1[fwdIdx1],
      nums2[fwdIdx2],
    ];
    if (val1 === val2) {
      fwdIdx1++;
    }

    fwdIdx2++;
  }

  // not left sub of nums1
  // or
  // not right-most sub of nums2
  if (
    fwdIdx1 >= nums1.length ||
    fwdIdx2 !== nums2.length
  ) {
    fwdIdx1 = 0;
  }

  return (
    nums1.length -
    fwdIdx1 +
    (nums2.length - fwdIdx1)
  );
}
// const testArgs: TestArgs = [
//   slideWindowOptions,
//   {
//     lineHandler: (data) => data.split(' '),
//     testInstanceHandler: (acc) => {
//       return [
//         acc[1].map((e) => Number(e)),
//         acc[3].map((e) => Number(e)),
//       ];
//     },
//   },
// ];

function moveBot(moves: [string]) {
  let [x, y] = [0, 0];
  const moveToHandler = {
    U: () => y++,
    D: () => {
      y--;
    },
    L: () => {
      x--;
    },
    R: () => x++,
  };

  for (const move of moves) {
    moveToHandler[move]();
  }

  return `(${x},${y})`;
}

// [ 1, 2, 3, 4, 5 ], 2
function countPermutations(
  instances: Array<[[number], number]>
) {
  // Impl C(n, k) -> select k from n
  const C = (n, k) => {
    if (n < k || k < 0) {
      return 0;
    }
    if (n === k || k === 0) {
      return 1;
    }
    if (k === 1 && n - k === 1) {
      return n;
    }

    let temp = 1;
    const gap =
      Math.floor((n + 1) / 2) <= k ? k : n - k;
    while (n > gap) {
      temp *= n;
      n--;
    }
    return temp;
  };

  const count = (nums: [number], k: number) => {
    let [oddCount, evenCount] = [0, 0];

    for (const num of nums) {
      if (num % 2 === 0) {
        evenCount++;
        continue;
      }
      oddCount++;
    }

    const res =
      C(evenCount, k) +
      C(oddCount, 2) * C(evenCount, k - 2);
    const mod = Math.pow(10, 9) + 7;

    return res % mod;
  };

  return instances
    .map(([nums, k]) => count(nums, k))
    .join('\n');
}

// const testArgs: TestArgs = [
//   countPermutations,
//   {
//     lineHandler: (nums) =>
//       nums.split(' ').map((char) => Number(char)),
//     testInstanceHandler: (input) => {
//       const instancesLength = Number(
//         input?.[0][0]
//       );

//       let instances = [];
//       for (
//         let i = 1;
//         i < instancesLength * 2;
//         i += 2
//       ) {
//         let [lenAndK, nums] = [
//           input[i],
//           input[i + 1],
//         ];

//         instances.push([nums, lenAndK[1]]);
//       }

//       return instances;
//     },
//   },
// ];
