const main = [
    {
        num: '01',
        title: 'Section1',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article1',
        img: 'https://images.unsplash.com/photo-1653559260394-ee10e61e0155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        reveal: 'reveal-RTL'
    },
    {
        num: '02',
        title: 'Section2',
        description: '목표를 낮추고 방황하지 않는다.',
        href: '#article2',
        img: 'https://images.unsplash.com/photo-1653559260394-ee10e61e0155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-TTB'
    },
    {
        num: '03',
        title: 'Section3',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article3',
        img: 'https://images.unsplash.com/photo-1653917199974-0bd994526ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-BTT'
    },
    {
        num: '04',
        title: 'Section4',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article4',
        img: 'https://images.unsplash.com/photo-1653856289655-fba958e7bdcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-RTL'
    },
    {
        num: '05',
        title: 'Section5',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article5',
        img: 'https://images.unsplash.com/photo-1653559260146-c5bb477ce9d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-two'
    },
    {
        num: '06',
        title: 'Section6',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article6',
        img: 'https://images.unsplash.com/photo-1653861281679-06846bf69b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-RTL reveal-two'
    },
    {
        num: '07',
        title: 'Section7',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article7',
        img: 'https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-TTB reveal-two'
    },
    {
        num: '08',
        title: 'Section8',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article8',
        img: 'https://images.unsplash.com/photo-1653637832845-8e258a71b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-BTT reveal-two'
    },
    {
        num: '09',
        title: 'Section9',
        description: '높은 목표를 세우고, 스스로 채찍질 한다.',
        href: '#article9',
        img: 'https://images.unsplash.com/photo-1474073705359-5da2a8270c64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        reveal: 'reveal-BTT reveal-two'
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