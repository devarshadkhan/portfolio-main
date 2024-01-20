import { Suspense } from 'react';
import { Loading } from '../components';

import {
    HomePageLazy,
    AboutPageLazy,
    ContactPageLazy,
    AllCodingProjectsPageLazy,
    StudentsFrontendProjectsPageLazy,
} from '.';

import mihirImg from '../assets/images/others-portraits/mihir-min.webp';
import dishaImg from '../assets/images/others-portraits/disha-min.webp';
import yunusImg from '../assets/images/others-portraits/yunus-min.webp';
import darshilImg from '../assets/images/others-portraits/darshil-min.webp';
import mukeshImg from '../assets/images/others-portraits/mukesh-min.webp';
import rushikeshImg from '../assets/images/others-portraits/rushikesh-min.webp';

export const routes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <HomePageLazy />
            </Suspense>
        ),
    },
    {
        path: '/about-me',
        element: (
            <Suspense fallback={<Loading />}>
                <AboutPageLazy />
            </Suspense>
        ),
    },
    {
        path: '/contact',
        element: (
            <Suspense fallback={<Loading />}>
                <ContactPageLazy />
            </Suspense>
        ),
    },
    {
        path: '/all-coding-projects',
        element: (
            <Suspense fallback={<Loading />}>
                <AllCodingProjectsPageLazy />
            </Suspense>
        ),
    },
    {
        path: '/frontend-students-projects',
        element: (
            <Suspense fallback={<Loading />}>
                <StudentsFrontendProjectsPageLazy />
            </Suspense>
        ),
    },
];

export const navLinks = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about-me', name: 'About me' },
    { id: 3, link: '/contact', name: 'Contact' },
];

export const studentsArr = [
    {
        name: 'Mihir Patil',
        batch: 'Frontend batch',
        instaLink: 'https://instagram.com/mihirrr.p?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr',
        linkedInLink: 'https://www.linkedin.com/in/mihir-patil-ba7606203/',
        testimonial: `I've known Pravin since our school days, and it was a pleasant surprise to find that he was conducting programming courses. Pravin's teaching methods are great, very clear and concise. He helped me understand the concepts easily and is one of the best lecturers I've had.`,
        image: mihirImg,
    },
    {
        name: 'Disha Mhatre',
        batch: 'Core Java batch',
        instaLink: '#',
        linkedInLink: '#',
        testimonial: `I learned about Pravin's Core Java classes through one of his previous batch students and my classmate. Although I had some familiarity with programming before, I gained new knowledge about both general and technical aspects by joining his classes. It was a great 4-month experience overall.`,
        image: dishaImg,
    },
    {
        name: 'Yunus Shaikh',
        batch: 'Frontend batch',
        instaLink: 'https://www.instagram.com/i_am_md_yunus/?next=%2F',
        linkedInLink: 'https://www.linkedin.com/in/yunus-shaikh-07ba22204/',
        testimonial: `Apart from being a good friend, Pravin is a great teacher. Cuz of his course, I went from a beginner to a pro in JS. One of the great things about his teaching is that he's very student-centric and teaches things in a very simple manner so that everyone can understand. I can definitely say that he is very professional with his work 💯!`,
        image: yunusImg,
    },
    {
        name: 'Darshil Gajul',
        batch: 'Frontend batch',
        instaLink: 'https://instagram.com/darshilll_.03?igshid=eG85azljbGE0YzRw&utm_source=qr',
        linkedInLink:
            'https://www.linkedin.com/in/darshil-gajul-a70a16215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        testimonial: `I'm so grateful for the guidance and support Pravin provided in teaching me web development. His patience, expertise, and willingness to share knowledge have been invaluable to me. He's a great friend as well as a mentor. I look forward to continuing to learn and grow in this field, thanks to his inspiration and teachings.`,
        image: darshilImg,
    },
    {
        name: 'Mukesh Billa',
        batch: 'Core Java batch',
        instaLink: '#',
        linkedInLink: '#',
        testimonial: `I wholeheartedly recommend Pravin Mudaliyar as a MERN Stack Developer and mentor. His expertise and guidance played a crucial role in my projects, and his willingness to encourage growth in others is praiseworthy. He is a valuable asset to any team.`,
        image: mukeshImg,
    },
    {
        name: 'Rushikesh Vadnal',
        batch: 'Core Java batch',
        instaLink: 'https://www.instagram.com/rushii.v/',
        linkedInLink: 'https://www.linkedin.com/in/rushikesh-vadnal-developer/',
        testimonial: `Pravin is the most dedicated and down-to-earth person I've ever seen. I've known him since childhood, and after all these years, I can confidently say that Pravin is not only a great human being and friend but also the best teacher I've had in my life. He effortlessly explains complex concepts with ease and patience. In short, Pravin is a great learner, developer, and teacher.`,
        image: rushikeshImg,
    },
];
