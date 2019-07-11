const courses = [
  {
    id: 0,
    name: 'The Complete Web Developer in 2019: Zero to Mastery',
    udemy_url:
      'https://www.udemy.com/the-complete-web-developer-zero-to-mastery/',
    thumbnail: 'https://i.udemycdn.com/course/480x270/1430746_2f43_2.jpg',
  },
  {
    id: 1,
    name: 'The Complete Junior to Senior Web Developer Roadmap (2019)',
    udemy_url:
      'https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/',
    thumbnail: 'https://i.udemycdn.com/course/480x270/1650610_2673_5.jpg',
  },
  {
    id: 2,
    name: 'Master the Coding Interview: Data Structures + Algorithms',
    udemy_url:
      'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
    thumbnail: 'https://i.udemycdn.com/course/480x270/1917546_682b_2.jpg',
  },
  {
    id: 3,
    name: 'Advanced JavaScript Concepts',
    udemy_url: 'https://www.udemy.com/advanced-javascript-concepts/',
    thumbnail: 'https://i.udemycdn.com/course/480x270/1501104_967d_11.jpg',
  },
  {
    id: 4,
    name: 'Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)',
    udemy_url:
      'https://www.udemy.com/complete-react-developer-zero-to-mastery/',
    thumbnail: 'https://i.udemycdn.com/course/480x270/2365628_0b60.jpg',
  },
];

/**
 *      README
 *      ++++++
 *
 * id: a unique number to identify questions
 * ques: the question to be asked
 * truth: holds the id of the question if user answers `yes` to the question
 * false: holds the id of the question if user answers `no` to the question
 * course: holds the `course` information object
 */

const questions = [
  {
    id: 0,
    ques: 'Are you new to programming?',
    truth: 1,
    false: 1,
  },
  {
    id: 1,
    ques: 'Are you new to Web Development?',
    truth: 2,
    false: 3,
  },
  {
    id: 2,
    ques: 'Do you want to learn web development (fullstack) and get hired?',
    truth: null,
    false: 8,
    course: [courses[0]],
  },
  {
    id: 3,
    ques:
      'Are you looking to get a job ASAP / Become a senior developer / Learn modern/trendy skills that are in demand?',
    truth: 4,
    false: 5,
  },
  {
    id: 4,
    ques: 'Do you want to focus on fullstack?',
    truth: null,
    false: 6,
    course: [courses[1]],
  },
  {
    id: 5,
    ques:
      'Did you miss out on a computer science degree? Do you want to work for Google, Microsoft, Netflix, Facebook? Do you have a tough time getting interviews and job offers?',
    truth: null,
    false: 7,
    course: [courses[2]],
  },
  {
    id: 6,
    ques: 'Do you want to be in the top 10% of React Developers?',
    truth: null,
    false: 5,
    course: [courses[4]],
  },
  {
    id: 7,
    ques: 'Do you want to be in the top 10% of JavaScript Developers?',
    truth: null,
    false: null,
    course: [courses[3]],
  },
  {
    id: 8,
    ques: 'Do you want to improve as a programmer?',
    truth: null,
    false: null,
    course: [courses[2], courses[3]],
  },
];

/**
 *      README
 *      ++++++
 *
 * id: a unique number to identify course
 * udemy_url: link to buy the course
 * name: name of the course
 */

export { questions, courses };
