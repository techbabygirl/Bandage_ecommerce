import React from 'react'
import { assets } from '../../assets/asset'
import '../../styles/FeaturedPosts.css';

const posts = [
    {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": {
            "likes": 192,
            "dislikes": 25
        },
        "views": 305,
        "userId": 121
    },
    {
        "id": 2,
        "title": "He was an expert but not in a discipline",
        "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        "tags": [
            "french",
            "fiction",
            "english"
        ],
        "reactions": {
            "likes": 859,
            "dislikes": 32
        },
        "views": 4884,
        "userId": 91
    },
    {
        "id": 3,
        "title": "Dave watched as the forest burned up on the hill.",
        "body": "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
        "tags": [
            "magical",
            "history",
            "french"
        ],
        "reactions": {
            "likes": 1448,
            "dislikes": 39
        },
        "views": 4152,
        "userId": 16
    }
]

const FeaturedPosts = () => {
    return (
        <>
            <div className="featuredPosts">
                {/* CONTAINER */}
                <div className="container">
                    {/* texts */}
                    <div className="texts">
                        <h4>Practice Advice</h4>
                        <h3>Featured Posts</h3>
                    </div>
                    {/* end of texts */}

                    {/* POSTS */}
                    <div className="posts">
                        {
                            posts?.map((post, index) => {
                                const { title, id, body, tags, views } = post
                                return (
                                    <div className="post" key={id}>
                                        <div className="post-img">
                                            <img src={index == 1 ? assets.post1 : index == 2 ? assets.post2 : assets.post3} alt={title} />
                                            <span>New</span>
                                        </div>

                                        {/* POST INFO */}
                                        <div className="post-info">
                                            <div className="tags">
                                                <span>{tags[0]}</span>
                                                <span>{tags[1]}</span>
                                                <span>{tags[2]}</span>
                                            </div>
                                            <h4>{title}</h4>
                                            <p className='body'>We focus on ergonomics and meeting
                                                you where you work. It's only a
                                                keystroke away.</p>
                                            <p className='views'>
                                                <img src={assets.views} alt={title} />
                                                <span>{views} views</span>
                                            </p>

                                            <h4 className='learnMore'><span>Learn more</span> <img src={assets.next} alt="" /></h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* END OF POSTS */}
                </div>
                {/* END OF CONTAINER */}
            </div>
        </>
    )
}

export default FeaturedPosts