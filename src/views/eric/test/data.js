const blogPosts=[
    {
        id:1,
        title:"Pinia學習一",
        content:"學習第一天 很有成就感"
    },
    {
        id:2,
        title:"Pinia學習二",
        content:"學習第二天 很有成就感"
    },
    {
        id:3,
        title:"Pinia學習三",
        content:"學習第三天 很有成就感"
    },
    {
        id:4,
        title:"Pinia學習四",
        content:"學習第四天 很有成就感"
    },
    {
        id:5,
        title:"Pinia學習五",
        content:"學習第五天 很有成就感"
    },
    ]

export function getAllPosts(){
    return blogPosts
}

export function  getPostById(id){
    return blogPosts.find((post) => post.id == Number(id))
}