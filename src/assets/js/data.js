const main = [
    {
        num: '01',
        title: 'Section1',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '02',
        title: 'Section2',
        description: '목표를 낮추고 방황하지 않는다.'
    },
    {
        num: '03',
        title: 'Section3',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '04',
        title: 'Section4',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '05',
        title: 'Section5',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '06',
        title: 'Section6',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '07',
        title: 'Section7',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '08',
        title: 'Section8',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
    {
        num: '09',
        title: 'Section9',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.'
    },
]

const main2 = [
    {
        num: 1,
        title: '제목'
    }
]

// 하나만 보낼 때
export default main

// 하나만 내보낸걸 받을 때
// import main from '경로'

// 여러 변수를 내보낼 때
export { main, main2 }

// 여러개 내보낼걸 받을 때
// import { main, main2 } from '경로'